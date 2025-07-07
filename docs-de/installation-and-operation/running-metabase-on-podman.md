---
Titel: Ausführen von Metabase auf Podman
redirect_from:
- /docs/latest/operations-guide/running-metabase-on-podman
---


# Metabase auf Podman ausführen


Unser offizielles Metabase-Docker-Image ist mit jedem System kompatibel, auf dem [Podman](https://podman.io) läuft.


## Open Source Schnellstart


Vorausgesetzt, Sie haben [Podman](https://podman.io) installiert und laufen, holen Sie sich das neueste Container-Image:


```
podman pull docker.io/metabase/metabase:latest
```


Starten Sie dann den Metabase-Container:


```
podman run -d -p 3000:3000 --name=metabase docker.io/metabase/metabase:latest
```


Dadurch wird standardmäßig ein Metabase-Server an Port 3000 gestartet.


Optional: Um die Protokolle während der Initialisierung Ihrer Open Source Metabase zu sehen, führen Sie aus:


```
podman logs -f metabase
```


Sobald der Startvorgang abgeschlossen ist, können Sie auf Ihre Open Source Metabase unter `http://localhost:3000` zugreifen.


Um Ihre Open Source Metabase auf einem anderen Port zu betreiben, z.B. Port 12345:


```
podman run -d -p 12345:3000 --name=metabase docker.io/metabase/metabase:latest
```


## Pro oder Enterprise Schnellstart


Verwenden Sie diesen Schnellstart, wenn Sie ein [Lizenz-Token](../installation-and-operation/activating-the-enterprise-edition.md) für eine [Pro- oder Enterprise-Version](https://www.metabase.com/pricing/) von Metabase besitzen und Metabase lokal ausführen möchten.


Vorausgesetzt, Sie haben [Podman](https://podman.io) installiert und laufen, holen Sie sich das neueste Container-Image:


```
podman pull docker.io/metabase/metabase-enterprise:latest
```


Starten Sie dann den Metabase-Container:


```
podman run -d -p 3000:3000 --name=metabase docker.io/metabase/metabase-enterprise:latest
```


Dadurch wird standardmäßig ein Metabase-Server an Port 3000 gestartet.


Optional: Um die Protokolle während der Initialisierung der Metabase anzuzeigen, führen Sie aus:


```
podman logs -f metabase
```


Sobald der Startvorgang abgeschlossen ist, können Sie auf Ihre Pro- oder Enterprise-Metabasis unter ` http://localhost:3000` zugreifen.


Um Ihre Pro- oder Enterprise-Metabasis an einem anderen Port auszuführen, z. B. an Port 12345:


```
podman run -d -p 12345:3000 --name=metabase docker.io/metabase/metabase-enterprise:latest
```


## Produktionsinstallation
