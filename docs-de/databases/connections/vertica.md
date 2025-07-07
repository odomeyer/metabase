---
Titel: Arbeiten mit Vertica in Metabase
redirect_from:
- /docs/latest/administration-guide/databases/vertica
---


# Arbeiten mit Vertica in Metabase


Ab Version 0.20.0 bietet Metabase einen Treiber für die Verbindung zu Vertica-Datenbanken. Unter der Haube verwendet Metabase den JDBC-Treiber von Vertica;
Aufgrund von Lizenzbeschränkungen können wir ihn nicht als Teil von Metabase integrieren. Zum Glück können Sie es selbst herunterladen und der Metabase zur Verfügung stellen
in nur wenigen Minuten zur Verfügung stellen.


## Herunterladen des Vertica JDBC-Treibers JAR


Sie können den JDBC-Treiber von [Vertica's JDBC driver downloads page](https://my.vertica.com/download/vertica/client-drivers/) herunterladen.
Rufen Sie diese Seite auf, melden Sie sich bei Ihrem Konto an, akzeptieren Sie die Lizenzvereinbarung und laden Sie `vertica-jdbc-8.0.0-0.jar` (für Vertica DB Version 8.0)
oder die Treiberversion, die der von Ihnen verwendeten Vertica-Version am nächsten kommt.


Es ist sehr wichtig, dass Sie die richtige Version des JDBC-Treibers verwenden; Version
8.0 des Treibers wird nicht mit Vertica Version 7.2 funktionieren; Version 7.2 des Treibers wird nicht mit Vertica Version 7.1 funktionieren usw. Wenn Sie Zweifel haben,
konsultieren Sie die Dokumentation von Vertica, um die richtige Version des JDBC-Treibers für Ihre Vertica-Version zu finden.


## Hinzufügen des Vertica JDBC-Treibers JAR zum Metabase Plugins-Verzeichnis


Die Metabase stellt den Vertica-Treiber automatisch zur Verfügung, wenn sie beim Start das Vertica JDBC-Treiber-JAR im Metabase-Plugins-Verzeichnis findet.
Sie müssen lediglich das Verzeichnis erstellen, das soeben heruntergeladene JAR in dieses Verzeichnis verschieben und Metabase neu starten.


### Bei Ausführung aus einem JAR


Standardmäßig heißt das Plugins-Verzeichnis "plugins" und befindet sich im selben Verzeichnis wie das Metabase-JAR.


Wenn Sie Metabase beispielsweise in einem Verzeichnis namens `/app/` ausführen, sollten Sie das Vertica JDBC-Treiber-JAR nach `/app/plugins/` verschieben:


``txt
# Beispielhafte Verzeichnisstruktur für die Ausführung von Metabase mit Vertica-Unterstützung
/app/metabase.jar
/app/plugins/vertica-jdbc-8.0.0-0.jar
```


### Bei Ausführung über Docker


Der Prozess zum Hinzufügen von Plugins bei der Ausführung über Docker ist ähnlich, aber Sie müssen das Verzeichnis "plugins" einbinden. Weitere Einzelheiten finden Sie in der Anleitung [hier](../../installation-and-operation/running-metabase-on-docker.md#adding-external-dependencies-or-plugins).


## Modellfunktionen


Es gibt (noch) keine Modellfunktionen für Vertica.


## Gefahrenzone


Siehe [Gefahrenzone](../danger-zone.md).

