---
Titel: Grundlagen der Datenbanktreiber
---


# Grundlagen des Datenbanktreibers


Ein Metabase-Treiber:


- **Versorgt die Metabase mit grundlegenden Informationen über die Datenbank**, wie z.B. die Fähigkeiten der Datenbank, die Verbindungseigenschaften usw.
-Versorgt die Metabase mit Informationen über das Schema der Datenbank** - die Tabellen (oder ein Äquivalent), die Felder in diesen Tabellen, die Fremdschlüsselbeziehungen (bei Datenbanken, die Fremdschlüssel unterstützen).
- Diese Funktionalität wird von der Metabase _sync process_ verwendet und in der Anwendungsdatenbank gespeichert.
- Die gespeicherten Informationen werden im visuellen Query Builder und an anderen Stellen verwendet, um den Benutzern anzuzeigen, welche Tabellen/Spalten/etc. verfügbar sind
-Kompiliert unsere hauseigene Abfragesprache, [MBQL](https://github.com/metabase/metabase/wiki/Query-Language-'98), in native Abfragen.
- MBQL-Abfragen werden mit dem visuellen Abfragegenerator erstellt.
- Der Metabase **Query Processor\*** konvertiert MBQL-Abfragen in native Abfragen
- **Führt native Abfragen aus und gibt Ergebnisse zurück**.


## Schreiben Sie Ihren Treiber als Modul und verpacken Sie ihn als Plugin


Metabase-Treiber werden in Modulen organisiert und als Plugins verpackt. Module sind der Quellcode, Plugins sind die aus diesem Quellcode erstellten JAR-Dateien.


Ein Metabase-Plugin ist eine JAR-Datei, die die kompilierten Klassendateien und ein Metabase [plugin manifest](plugins.md) enthält, in dem Details über den Treiber aufgeführt sind. In den meisten Fällen werden Plugins "lazily loaded", d. h. die Metabase initialisiert die Treiber erst, wenn sie eine Verbindung zu einer Datenbank herstellt, die den Treiber verwendet.


Damit Metabase Ihren Treiber verwenden kann, müssen Sie lediglich das von Ihnen erstellte Treiber-JAR in das Verzeichnis `/plugin` legen, das sich in demselben Verzeichnis befindet, in dem Sie auch Ihre metabase.jar ausführen. Etwa so:


```
/Benutzer/cam/metabase/metabase.jar
/Benutzer/cam/metabase/plugins/mein-plugin.jar
```


Sie können das Plugin-Verzeichnis ändern, indem Sie die [Umgebungsvariable][env-var] `MB_PLUGINS_DIR` setzen.


## Beispiel Modulverzeichnis


Werfen wir einen Blick auf den [SQLite-Treiber](https://github.com/metabase/metabase/tree/master/modules/drivers/sqlite) auf höchster Ebene:


```
|-- deps.edn
|-- resources
| `-- metabase-plugin.yaml
|-- src
| `-- metabase
| `-- treiber
| `-- sqlite.clj
`-- test
`-- metabase
|-- treiber
| `-- sqlite_test.clj
`-- test
`-- data
`-- sqlite.clj
```


Es gibt drei Dateien, die hier zu nennen sind:


### `deps.edn`


Die Datei "deps.edn" spezifiziert die Abhängigkeiten des Treibers.


### `resources/metabase-plugin.yaml`
