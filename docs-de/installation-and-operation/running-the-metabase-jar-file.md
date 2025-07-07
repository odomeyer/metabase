---
Titel: Ausführen der Metabase JAR-Datei
redirect_from:
- /docs/latest/operations-guide/ausfuehrung-der-metabase-jar-datei
- /docs/installation-und-betrieb/java-versionen
---


# Ausführen der Metabase OSS JAR-Datei


> Wir empfehlen, Metabase auf der [Metabase Cloud](https://www.metabase.com/cloud/) auszuführen. Wenn Sie die Metabase selbst hosten möchten,können Sie sie als eigenständige JAR-Datei ausführen, aber [wir empfehlen, die Metabase in einem Docker-Container auszuführen](./running-metabase-on-docker.md).


Um die kostenlose Open-Source-Version von Metabase über eine JAR-Datei auszuführen, müssen Sie eine Java-Laufzeitumgebung (JRE) auf Ihrem System installiert haben.


Wenn Sie einen Token für die [Pro- oder Enterprise-Editionen](https://www.metabase.com/pricing/) von Metabase besitzen, lesen Sie bitte [Aktivieren der kommerziellen Metabase-Lizenz](../installation-and-operation/activating-the-enterprise-edition.md).


## Schnellstart


> Der Schnellstart ist für den lokalen Betrieb von Metabase gedacht. Eine Anleitung zum [Betrieb von Metabase in der Produktion](#production-installation) finden Sie weiter unten.


Wenn Sie Java installiert haben:


1. [Laden Sie die JAR-Datei für Metabase OSS herunter](https://metabase.com/start/oss/jar). Wenn Sie über einen [Pro](https://www.metabase.com/product/pro) oder [Enterprise](https://www.metabase.com/product/enterprise) Plan verfügen, laden Sie die [JAR für die Enterprise Edition](https://downloads.metabase.com/enterprise/latest/metabase.jar) herunter.
2. Erstellen Sie ein neues Verzeichnis und verschieben Sie die Metabase JAR in dieses Verzeichnis.
3. Wechseln Sie in Ihr neues Metabase-Verzeichnis und starten Sie das JAR.


```
java --add-opens java.base/java.nio=ALL-UNNAMED -jar metabase.jar
```


Die Metabase protokolliert ihren Fortschritt im Terminal, während sie startet. Warten Sie, bis Sie die Meldung "Metabase Initialization Complete" sehen und besuchen Sie `http://localhost:3000/setup`.


Wenn Sie eine Pro- oder Enterprise-Version verwenden, stellen Sie sicher, dass Sie [Ihre Lizenz aktivieren](../installation-and-operation/activating-the-enterprise-edition.md).


## Lokale Installation


Wenn Sie Metabase einfach nur ausprobieren, mit Metabase herumspielen oder Metabase auf Ihrem lokalen Rechner verwenden möchten, wird Metabase mit einer Standardanwendungsdatenbank ausgeliefert, die Sie verwenden können. **Diese Einrichtung ist nicht für den Produktionsbetrieb gedacht**. Wenn Sie Metabase in Ihrem Unternehmen wirklich einsetzen möchten, lesen Sie bitte [Produktionsinstallation](#production-installation).


Die folgenden Anweisungen entsprechen dem obigen Schnellstart, nur mit etwas mehr Kontext zu den einzelnen Schritten.


### 1. Java JRE installieren


Möglicherweise haben Sie Java bereits installiert. Um die Version zu ueberpruefen, oeffnen Sie ein Terminal und fuehren Sie aus:


```
java -version
```


Wenn Java nicht installiert ist, müssen Sie Java installieren, bevor Sie Metabase ausführen können. Wir empfehlen die Version 21 von JRE von [Eclipse Temurin](https://adoptium.net/) mit HotSpot JVM. Sie können Metabase überall dort ausführen, wo Java 21 läuft. Frühere Java-Versionen werden nicht unterstützt. Die jeweilige Prozessorarchitektur sollte keine Rolle spielen (obwohl wir Metabase nur für x86 und ARM testen).


### 2. Metabase herunterladen


Laden Sie die JAR-Datei herunter:


- [Metabase OSS](https://www.metabase.com/start/oss/jar)
- [Metabase Enterprise/Pro Edition](https://downloads.metabase.com/enterprise/latest/metabase.jar)


Wenn Sie die [Pro- oder Enterprise-Edition](https://www.metabase.com/pricing/) von Metabase installieren möchten, lesen Sie den Abschnitt [Aktivieren Ihrer kommerziellen Metabase-Lizenz](../installation-and-operation/activating-the-enterprise-edition.md).
