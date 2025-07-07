---
Titel: Beobachtbarkeit mit Prometheus
---


# Beobachtbarkeit mit Prometheus


Sie können Metriken im [Prometheus](https://prometheus.io/) Format aus Ihrer Metabase exportieren.


## Lokales Ausführen von Metabase und Prometheus


Um Ihnen eine Vorstellung davon zu geben, wie Metabase und Prometheus in Ihrer Produktionsumgebung funktionieren würden, gehen wir nun durch, wie Sie Metabase und Prometheus lokal einrichten.


## Starten Sie Metabase mit `MB_PROMETHEUS_SERVER_PORT`


Laden Sie das neueste [Metabase JAR](https://www.metabase.com/start/oss/) herunter und starten Sie Metabase mit einer Umgebungsvariablen, um den Prometheus-Server-Port anzugeben:


```sh
MB_PROMETHEUS_SERVER_PORT=9191 java --add-opens java.base/java.nio=ALL-UNNAMED -jar metabase.jar
```


Der `MB_PROMETHEUS_SERVER_PORT=9191` gibt an, welchen Port(`9191`) die Metabase verwendet, um Daten an Prometheus zu senden. Zur Verdeutlichung der Ports, um die es hier geht:


- Port`3000` ist der Port, den Metabase verwendet, um die Metabase-App zu bedienen. Sie können mit ` MB_JETTY_PORT` einen anderen Port festlegen (z.B. ` MB_JETTY_PORT=3001`).
- Port ` 9191` (oder der Port, den Sie mit der Umgebungsvariablen ` MB_PROMETHEUS_SERVER_PORT` angegeben haben) ist der Port, den Prometheus verwendet, um Metriken aus der Metabase abzurufen.
- Port ` 9090` ist der Port, den Prometheus verwendet, um die Prometheus-Anwendung zu bedienen.


Wenn Sie Metabase starten, können Sie den Metabase-Protokollen entnehmen, dass Metabase den `prometheus metrics collector` und den `prometheus metrics web-server` startet.


sh
(gekürzte Protokolle)
2022-09-01 17:47:38,808 INFO metabase.util :: Datenbank-Setup dauerte 3.4 s
2022-09-01 17:47:38,826 INFO metabase.core :: Einrichten von prometheus-Metriken
2022-09-01 17:47:38,827 INFO metabase.prometheus :: Starten des Metrik-Kollektors prometheus
2022-09-01 17:47:38,839 INFO metabase.prometheus :: Starten des prometheus Metrics Web-Servers auf Port 9.191
(gekürzte Protokolle)
```


Sie können Ihre lokal laufende Metabase unter `http://localhost:3000` einsehen.


## Prometheus herunterladen und konfigurieren


[Download Prometheus](https://prometheus.io/download), und entpacken Sie die Dateien.


Wechseln Sie in das Prometheus-Verzeichnis und fügen Sie die folgende YAML-Datei hinzu, um Ihren Prometheus zu konfigurieren:


## Beispiel für eine Prometheus-Konfigurationsdatei


````yaml
global:
scrape_interval: 15s # Standardmäßig werden die Ziele alle 15 Sekunden gescannt.


# Fügen Sie diese Bezeichnungen allen Zeitreihen oder Alarmen bei der Kommunikation mit
