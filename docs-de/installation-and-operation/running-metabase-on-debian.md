---
Titel: Metabase auf Debian als Dienst mit nginx betreiben
redirect_from:
- /docs/latest/operations-guide/running-metabase-on-debian
---


# Ausführen von Metabase auf Debian als Dienst mit nginx


Für diejenigen, die Docker nicht in ihrer Infrastruktur verwenden (können), besteht immer noch die Notwendigkeit, Metabase einfach einzurichten und in der Produktion einzusetzen. Auf Debian-basierten Systemen bedeutet dies, dass Metabase als Dienst registriert wird, der gestartet/gestoppt/deinstalliert werden kann.


**Hinweis:** Dies ist nur ein _Grundrezept_ für den Anfang. Jeder kann von hier aus das tun, was er auf seinem System tun muss, und sollte die besten Praktiken für das Einrichten und Sichern des restlichen Servers befolgen.


## Annahmen


Die Hauptannahme in diesem Handbuch:


- Sie werden Metabase unter Verwendung der Datei "metabase.jar" ausführen.
- Sie haben bereits "nginx" und "postgres" (oder eine andere unterstützte Datenbank) auf Ihrem Server installiert.
- Sie werden Umgebungsvariablen verwenden, um Ihre Metabase-Instanz zu konfigurieren
- Sie haben ` sudo`-Zugriff auf Ihrem Server


## Erstellen Sie einen unprivilegierten Benutzer für die Ausführung von Metabase und geben Sie ihm Zugriff auf die Anwendung und die Protokolle.


Aus Sicherheitsgründen wollen wir Metabase als unprivilegierten Benutzer laufen lassen. Wir werden den Benutzer einfach ` metabase` nennen. Außerdem erstellen wir die Dateien, die wir später für die Protokollierung und Konfiguration der Metabase benötigen, und wenden die richtigen Sicherheitseinstellungen für unseren unprivilegierten Benutzer an.


```
sudo groupadd -r metabase
sudo useradd -r -s /bin/false -g metabase metabase
sudo chown -R metabase:metabase </ihr/Pfad/zu/metabase/Verzeichnis>
sudo touch /var/log/metabase.log
sudo chown syslog:adm /var/log/metabase.log
sudo touch /etc/default/metabase
sudo chmod 640 /etc/default/metabase
```


## Erstellen eines Metabase-Dienstes


Jeder Dienst braucht ein Skript, das`systemd` mitteilt, wie er verwaltet werden soll und welche Fähigkeiten er unterstützt. Dienste werden normalerweise unter `/etc/systemd/system/<Servicename>` registriert. Ein Metabase-Dienst sollte also unter `/etc/systemd/system/metabase.service` zu finden sein.


### Die Metabase-Dienstdatei


Erstellen Sie die `/etc/systemd/system/metabase.service` Dienstdatei und öffnen Sie sie in Ihrem Editor:


```
sudo touch /etc/systemd/system/metabase.service
sudo <Dein-Editor> /etc/systemd/system/metabase.service
```


Ersetzen Sie in `/etc/systemd/system/metabase.service` die konfigurierbaren Elemente (sie sehen aus wie `<some-var-name>`) durch für Ihr System sinnvolle Werte. Das Metabase-Skript unten hat zusätzliche Kommentare, damit Sie wissen, wofür alles da ist.
