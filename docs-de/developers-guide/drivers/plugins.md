---
Titel: Plugin-Manifeste
---


# Plugin-Manifeste


Metabase-Plugin-JARs enthalten ein _Plugin-Manifest_ - eine Datei der obersten Ebene mit dem Namen `metabase-plugin.yaml`. Beim Starten von Metabase werden alle JAR-Dateien im Plugin-Verzeichnis durchsucht und nach dem Manifest in jeder Datei gesucht. Dieses Manifest teilt Metabase mit, was das Plugin bereitstellt und wie es initialisiert werden soll.


## Beispielmanifest


````yaml
info:
Name: Metabase SQLite-Treiber
Version: 1.0.0-SNAPSHOT-3.25.2
Beschreibung: Ermöglicht Metabase die Verbindung zu SQLite-Datenbanken.
Kontakt-Infos:
Name: Tukan McBird
Anschrift: toucan.mcbird@example.com
treiber:
name: sqlite
Anzeigename: SQLite
Lazy-Load: wahr
übergeordnet: sql-jdbc
verbindungseigenschaften:
- name: db
display-name: Dateiname
Platzhalter: /home/camsaul/toucan_sightings.sqlite
erforderlich: true
init:
- Schritt: load-namespace
Namensraum: metabase.driver.sqlite
- Schritt: register-jdbc-treiber
Klasse: org.sqlite.JDBC
```


Der Abschnitt "driver" teilt der Metabase mit, dass das Plugin einen Treiber namens "sqlite" definiert, der "sql-jdbc" als Elternteil hat. Das Plugin-System der Metabase verwendet diese Angaben, um "driver/register!" aufzurufen. Das Plugin listet auch den Anzeigenamen und die Verbindungseigenschaften für den Treiber auf, die das Plugin-System der Metabase verwendet, um Implementierungen für ` driver/display-name` und ` driver/connection-properties` zu erstellen.


## Lazy loading


Der Treiber imobigen [Beispiel](#example-manifest) ist als`lazy-load: true` aufgeführt, was bedeutet, dass die oben erwähnte Methodenimplementierung zwar beim Starten von Metabase erstellt wird, Metabase den Treiber aber erst initialisiert, wenn jemand zum ersten Mal versucht, eine Verbindung zu einer Datenbank herzustellen, die diesen Treiber verwendet.


Sie_können (sollten aber nicht) einen Treiber auf `lazy-load: false` setzen, da dies dazu führt, dass Metabase länger zum Starten braucht und mehr Speicher verbraucht.


## Plugin-Initialisierung


Die Metabase initialisiert Plugins bei Bedarf automatisch. Die Initialisierung läuft in etwa so ab: Metabase fügt den Treiber zum Klassenpfad hinzu und führt dann jeden "init" -Abschnitt des Plugin-Manifests der Reihe nach aus. Imobigen [Beispielmanifest](#example-manifest) gibt es zwei Schritte, einen ` load-namespace` Schritt und einen ` register-jdbc-driver` Schritt:


``yaml
init:
- Schritt: load-namespace
Namensraum: metabase.driver.sqlite
- Schritt: register-jdbc-treiber
Klasse: org.sqlite.JDBC
```


## Laden von Namespaces


Sie müssen einen oder mehrere "load-namespace" -Schritte zu Ihrem Treibermanifest hinzufügen, um Metabase mitzuteilen, welche Namespaces Ihre Treibermethodenimplementierungen enthalten. Im obigen Beispiel ist der Namespace "metabase.driver.sqlite". load-namespace` ruft ` require` auf die [normale Clojure-Art](https://clojuredocs.org/clojure.core/require) auf, was bedeutet, dass es andere Namespaces, die im `:require`-Abschnitt seiner Namespace-Deklaration aufgeführt sind, nach Bedarf lädt. Wenn die Methodenimplementierungen Ihres Treibers über mehrere Namespaces verteilt sind, stellen Sie sicher, dass sie auch geladen werden -- Sie können dies entweder vom Haupt-Namespace erledigen lassen (z.B. indem Sie sie in die `:require` Form in der Namespace-Deklaration aufnehmen) oder indem Sie zusätzliche ` load-namespace` Schritte hinzufügen.
