---
Titel: Wie man einen Entwicklungszweig von Metabase mit Docker betreibt
---


# So führen Sie einen Entwicklungszweig von Metabase mit Docker aus


Wenn Sie einen Zweig von Metabase ausführen möchten, der sich derzeit in der Entwicklung befindet, ist es am einfachsten, ein vorgefertigtes Docker-Image zu verwenden. Sie könnenMetabase auch [selbst kompilieren](build.md).


Wenn Sie die neueste offizielle Open-Source-Version von Metabase herunterladen und ausführen möchten, lesen Sie den [operations guide](../installation-and-operation/installing-metabase.md).


## Installieren von Docker


Das Einzige, was Sie für die ersten Schritte benötigen, ist Docker selbst.


- [Docker Desktop installieren](https://www.docker.com/products/docker-desktop)


ODER


- Wenn Sie Dinge über Homebrew installieren möchten:


````bash
brew install --cask docker
```


Sobald Docker installiert ist, können Sie loslegen.


## Führen Sie einen Entwicklungszweig aus, um Funktionen zu testen oder zu überprüfen.


[Hier(https://hub.docker.com/r/metabase/metabase-dev/tags) finden Sie eine Liste von Entwicklungszweigen, die Sie über Docker ausführen können.


1. Öffnen Sie die Terminal-App Ihrer Wahl.


2. Kopieren Sie diesen Befehl und fügen Sie ihn ein, wobei Sie "<Zweigname>" durch den Namen des Zweigs ersetzen, den Sie testen möchten:


``bash
docker run --platform linux/amd64 -d -p 3000:3000 --name metabase-dev metabase/metabase-dev:<branch-name>
```


3. Navigieren Sie in Ihrem Browser zu `http://localhost:3000`, wo Sie Metabase sehen sollten. Je nach Ihrem Computer kann es ein oder zwei Minuten dauern, bis das Programm startet.


**Hinweis**: Die Metabase wird immer mit einer neuen Datenbank gestartet.


## Die letzten Änderungen ziehen und ausführen


Ausführen:


```
docker pull metabase/metabase-enterprise-head:latest
```


Dann:


```
docker run --platform linux/amd64 -d -p 3000:3000 --name metabase metabase/metabase-enterprise-head:latest
```


Das "latest"-Tag wird nicht automatisch auf Ihrem lokalen Rechner aktualisiert, so dass die obigen Befehle sicherstellen, dass Sie die neuesten Änderungen übernehmen.

