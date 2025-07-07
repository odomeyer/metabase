---
Titel: Gebäude Metabase
---


# Metabase erstellen


In diesem Dokument wird gezeigt, wie Sie Metabase auf Ihrem eigenen Computer erstellen und ausführen können, um damit herumzuspielen oder Funktionen in der Entwicklung zu testen. Sie können auch Entwicklungszweige von Metabase [unter Verwendung eines vorgefertigten Docker-Images](dev-branch-docker.md) ausführen.


## Installieren Sie die Voraussetzungen


Wenn Sie macOS verwenden, sollten Sie zuerst die Xcode Command Line Tools installieren, indem Sie diese ausführen:


```
xcode-select --install
```


Um einen Build des Metabase-Codes zu erstellen, müssen Sie Folgendes installieren.


1. [Clojure (https://clojure.org)](https://clojure.org/guides/getting_started) - installieren Sie die neueste Version, indem Sie der Anleitung folgen, die von Ihrem Betriebssystem abhängt


2. [Java Development Kit JDK (https://adoptopenjdk.net/releases.html)](https://adoptopenjdk.net/releases.html) - Sie müssen JDK 21 installieren ([weitere Informationen zu Java-Versionen](../installation-and-operation/running-the-metabase-jar-file.md))


3. [Node.js (http://nodejs.org/)](http://nodejs.org/) - letzte LTS-Version


4. [Yarn package manager for Node.js](https://yarnpkg.com/) - neueste Version 1.x - Sie können es in jedem Betriebssystem installieren, indem Sie es ausführen:


```
npm install --global yarn
```


Auf einem aktuellen, stabilen Ubuntu/Debian können alle oben genannten Werkzeuge, mit Ausnahme von Clojure, mit Hilfe von ```` installiert werden:


```
sudo apt install openjdk-21-jdk nodejs && sudo npm install --global yarn
```


Wenn Sie mehrere JDK-Versionen auf Ihrem Rechner installiert haben, stellen Sie sicher, dass Sie Ihr JDK wechseln, bevor Sie mit ```` bauen:


```
sudo update-alternatives --config java
```


Wählen Sie dann im Menü Java 21 aus.


### Auf M1 Apple Computern laufen


Wenn Sie auf neueren Apple M1 Computern entwickeln, beachten Sie bitte, dass die aktuelle NodeJS LTS native Unterstützung für die Arm-Architektur bietet. Stellen Sie jedoch sicher, dass Sie Rosetta 2 installiert haben, bevor Sie versuchen, das Frontend zu bauen:


```
/usr/sbin/softwareupdate --install-rosetta (root-Rechte nicht erforderlich)
```


oder


```
/usr/sbin/softwareupdate --install-rosetta --agree-to-license (root-Rechte erforderlich)
```


### Wenn Sie Windows verwenden, benutzen Sie WSL


Wenn Sie unter Windows entwickeln, sollten Sie Ubuntu unter Windows Subsystem für Linux (WSL) ausführen und die Anweisungen für Ubuntu/Linux befolgen.


### Entwickeln mit VS Code in einem entfernten Container


Alternativ, ohne die oben genannten Abhängigkeiten explizit installieren zu müssen, folgen Sie dem Leitfaden [zur Verwendung von Visual Studio Code](visual-studio-code.md) und seiner Remote-Container-Unterstützung.


## Klonen des Metabase-Repositories


Sobald Sie alle Build-Tools installiert haben, müssen Sie das [Metabase-Repository](https://github.com/metabase/metabase) von GitHub klonen.
