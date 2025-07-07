---
Titel: Metabase CLI
---


# Metabase CLI


Metabase wird mit einigen praktischen CLI-Befehlen ausgeliefert. Um eine Liste der Befehle anzuzeigen, führen Sie das Metabase jar aus, gefolgt von "help".


```
java --add-opens java.base/java.nio=ALL-UNNAMED -jar metabase.jar help
```


Metabase gibt den Hilfetext für die verfügbaren Befehle aus.


## `api-documentation`


Erzeugt eine Markdown-Datei mit der Dokumentation für alle API-Endpunkte. Diese wird in eine Datei namens `docs/api.html` geschrieben.


## `driver-methods` | `driver-methods _docs`


Gibt eine Liste aller Multimethoden aus, die ein Treiber implementieren kann. Fügen Sie `_docs` hinzu, um deren Dokumentationen einzuschließen.


## `Konfigurationsvorlage`


Erzeugt eine Markdown-Datei mit Dokumentation und eine Beispielkonfigurationsdatei in YAML. Die YAML-Vorlage enthält die Einstellungen der Metabase und deren Standardwerte. Die Metabase speichert die Datei als `docs/configuring-metabase/config-template.md`.


## `drop-entity-ids`


Drop Entity IDs für Instanzen serialisierbarer Modelle. Nützlich für die Migration von v1 Serialisierung (x.46 und früher) zu v2 (x.47+).


## `dump path & options`


**Hinweis: Dieser Befehl ist veraltet. Verwenden Sie stattdessen`export`.**


Serialisiert die Metabase-Instanz in das Verzeichnis`Pfad`.


Optionen:


- `-u, --user EMAIL` - Exportiert Sammlungen, die dem angegebenen Benutzer gehören.
- `-s, --state (active|all)` - Wenn auf ` active` gesetzt, werden archivierte Entitäten nicht gedumpt. Das Standardverhalten ist`all`.
--include-entity-id` - Schließt die Eigenschaft entity_id in alle gedumpten Entitäten ein. Voreinstellung: false


## `dump-to-h2 h2-filename & opts`


Überträgt Daten aus einer bestehenden Datenbank in eine neu erstellte H2 DB mit dem angegebenen Dateinamen. Die H2 Zieldatei wird vor dem Dump gelöscht, es sei denn, das --keep-existing Flag wird angegeben.


Optionen:


- `-k, --keep-existing` - H2-Zieldatei nicht löschen, wenn sie existiert
- `-p,--dump-plaintext` - Dump-Inhalte nicht verschlüsseln


## `Umgebungsvariablen-Dokumentation`


Erzeugt eine Markdown-Datei mit der Dokumentation der Umgebungsvariablen, die für die Konfiguration der Metabase relevant sind. Der Befehl umfasst nur Umgebungsvariablen, die als defsettings registriert sind. Eine vollständige Liste der Umgebungsvariablen finden Sie unter https://www.metabase.com/docs/latest/configuring-metabase/environment-variables.


## `export path & options`
