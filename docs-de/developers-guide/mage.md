# MAGE - Entwicklungsautomatisierung


Führen Sie `./bin/mage` aus, um Ihre Aufgaben aufzulisten. Alle unterstützen `-h`, um mehr zu erfahren und Beispiele zu zeigen.


Alle Aufgaben unterstützen die Option `-h` und geben Informationen über ihre Verwendung aus.


`` Shell
$ ./bin/mage
"""╗ """╗ """""╗ """"""╗ """""""╗
""""╗ """"║""╔══""╗""╔════╝ ""╔════╝
""╔""""╔""║"""""""║""║ """╗"""""╗
""║╚""╔╝""║""╔══""║""║ ""║""╔══╝
""║ ╚═╝ ""║""║ ""║╚""""""╔╝"""""""╗
╚═╝ ╚═╝╚═╝ ╚═╝ ╚═════╝ ╚══════╝
Die Metabase Automation Genius Engine


Die folgenden Aufgaben sind verfügbar:


cljfmt-staged Führt cljfmt auf gestuften Dateien aus
kondo Lässt Kondo gegen eine Datei, ein Verzeichnis oder alles, was wir normalerweise lint, laufen
...
start-db Startet eine Datenbank auf einem Standard-Port in Docker
jar-download Gibt eine Version an und lädt ein Metabasis-Jar herunter
$ ./bin/mage kondo -h
<druckt Hilfe zur einfachen Ausführung von kondo>
```


### mage Autocomplete


Führen Sie `./bin/mage setup-autocomplete` aus und folgen Sie den Anweisungen, um Autocomplete in Ihrem Terminal einzurichten.

