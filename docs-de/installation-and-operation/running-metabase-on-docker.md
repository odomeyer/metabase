---
Titel: Ausführen von Metabase auf Docker
redirect_from:
- /docs/latest/operations-guide/running-metabase-on-docker
---


# Ausführen von Metabase auf Docker


> Für eine schnelle, zuverlässige und sichere Bereitstellung ohne den Aufwand und die versteckten Kosten, die beim Selbsthosten anfallen, sollten Sie sich die [Metabase Cloud](https://www.metabase.com/cloud/) ansehen.


Metabase stellt über Dockerhub ein offizielles Docker-Image bereit, das für die Bereitstellung auf jedem System verwendet werden kann, auf dem Docker läuft.


Wenn Sie versuchen, Ihre Metabase-Version auf Docker zu aktualisieren, lesen Sie diese [Upgrade-Anleitung](upgrading-metabase.md).


## Open Source-Schnellstart


Verwenden Sie diesen Schnellstart, um die Open-Source-Version von Metabase lokal auszuführen. Anweisungen zum [Ausführen von Metabase in der Produktion](#production-installation) finden Sie weiter unten.


Angenommen, Sie haben [Docker](https://www.docker.com/) installiert und laufen, holen Sie sich das neueste Docker-Image:


```
docker pull metabase/metabase:latest
```


Starten Sie dann den Metabase-Container:


```
docker run -d -p 3000:3000 --name metabase metabase/metabase
```


Dadurch wird standardmäßig ein Metabase-Server an Port 3000 gestartet.


Optional: Um die Protokolle der Initialisierung Ihrer Open Source Metabase zu sehen, führen Sie aus:


```
docker logs -f metabase
```


Sobald der Startvorgang abgeschlossen ist, können Sie auf Ihre Open Source Metabase unter `http://localhost:3000` zugreifen.


Um Ihre Open Source Metabase auf einem anderen Port zu betreiben, sagen wir Port 12345:


```
docker run -d -p 12345:3000 --name metabase metabase/metabase
```


## Pro oder Enterprise Schnellstart


Verwenden Sie diesen Schnellstart, wenn Sie ein [Lizenz-Token](../installation-and-operation/activating-the-enterprise-edition.md) für eine [Pro- oder Enterprise-Version](https://www.metabase.com/pricing/) von Metabase besitzen und Metabase lokal ausführen möchten. Im Folgenden finden Sie Anweisungen zum [Ausführen von Metabase in der Produktion](#production-installation).


Angenommen, Sie haben [Docker](https://www.docker.com/) installiert und laufen, holen Sie sich das neueste Docker-Image:


```
docker pull metabase/metabase-enterprise:latest
```


Starten Sie dann den Metabase-Container:


```
docker run -d -p 3000:3000 --name metabase metabase/metabase-enterprise
```


Dadurch wird standardmäßig ein Metabase-Server an Port 3000 gestartet.


Optional: Um die Protokolle während der Initialisierung der Metabase anzuzeigen, führen Sie aus:


```
docker logs -f metabase
```


Sobald der Startvorgang abgeschlossen ist, können Sie auf Ihre Pro- oder Enterprise-Metabasis unter ` http://localhost:3000` zugreifen.


Um Ihre Pro- oder Enterprise-Metabasis an einem anderen Port auszuführen, z. B. an Port 12345:


```
docker run -d -p 12345:3000 --name metabase metabase/metabase-enterprise
```


## Produktionsinstallation


Metabase wird mit einer eingebetteten H2-Datenbank geliefert, die das Dateisystem zum Speichern der eigenen Anwendungsdaten verwendet. Das heißt, wenn Sie den Container entfernen, verlieren Sie Ihre Metabase-Anwendungsdaten (Ihre Fragen, Dashboards, Sammlungen usw.).---
Titel: Ausführen von Metabase auf Docker
redirect_from:
- /docs/latest/operations-guide/running-metabase-on-docker 
---

# Ausführen von Metabase auf Docker

> Für eine schnelle, zuverlässige und sichere Bereitstellung ohne den Aufwand und die versteckten Kosten, die beim Selbsthosten anfallen, sollten Sie sich die [Metabase Cloud](https://www.metabase.com/cloud/) ansehen.

Metabase stellt über Dockerhub ein offizielles Docker-Image bereit, das für die Bereitstellung auf jedem System verwendet werden kann, auf dem Docker läuft.

Wenn Sie versuchen, Ihre Metabase-Version auf Docker zu aktualisieren, lesen Sie diese [Upgrade-Anleitung](upgrading-metabase.md).

## Open Source-Schnellstart

Verwenden Sie diesen Schnellstart, um die Open-Source-Version von Metabase lokal auszuführen. Anweisungen zum [Ausführen von Metabase in der Produktion](#production-installation) finden Sie weiter unten.

Angenommen, Sie haben [Docker](https://www.docker.com/) installiert und laufen, holen Sie sich das neueste Docker-Image:

```
docker pull metabase/metabase:latest
```

Starten Sie dann den Metabase-Container:

```
docker run -d -p 3000:3000 --name metabase metabase/metabase
```

Dadurch wird standardmäßig ein Metabase-Server an Port 3000 gestartet.

Optional: Um die Protokolle der Initialisierung Ihrer Open Source Metabase zu sehen, führen Sie aus:

```
docker logs -f metabase
```

Sobald der Startvorgang abgeschlossen ist, können Sie auf Ihre Open Source Metabase unter `http://localhost:3000` zugreifen.

Um Ihre Open Source Metabase auf einem anderen Port zu betreiben, sagen wir Port 12345:

```
docker run -d -p 12345:3000 --name metabase metabase/metabase
```

## Pro oder Enterprise Schnellstart

Verwenden Sie diesen Schnellstart, wenn Sie ein [Lizenz-Token](../installation-and-operation/activating-the-enterprise-edition.md) für eine [Pro- oder Enterprise-Version](https://www.metabase.com/pricing/) von Metabase besitzen und Metabase lokal ausführen möchten. Im Folgenden finden Sie Anweisungen zum [Ausführen von Metabase in der Produktion](#production-installation).

Angenommen, Sie haben [Docker](https://www.docker.com/) installiert und laufen, holen Sie sich das neueste Docker-Image:

```
docker pull metabase/metabase-enterprise:latest
```

Starten Sie dann den Metabase-Container:

```
docker run -d -p 3000:3000 --name metabase metabase/metabase-enterprise
```

Dadurch wird standardmäßig ein Metabase-Server an Port 3000 gestartet.

Optional: Um die Protokolle während der Initialisierung der Metabase anzuzeigen, führen Sie aus:

```
docker logs -f metabase
```

Sobald der Startvorgang abgeschlossen ist, können Sie auf Ihre Pro- oder Enterprise-Metabasis unter ` http://localhost:3000` zugreifen.

Um Ihre Pro- oder Enterprise-Metabasis an einem anderen Port auszuführen, z. B. an Port 12345:

```
docker run -d -p 12345:3000 --name metabase metabase/metabase-enterprise
```

## Produktionsinstallation

Metabase wird mit einer eingebetteten H2-Datenbank geliefert, die das Dateisystem zum Speichern der eigenen Anwendungsdaten verwendet. Das heißt, wenn Sie den Container entfernen, verlieren Sie Ihre Metabase-Anwendungsdaten (Ihre Fragen, Dashboards, Sammlungen usw.).

