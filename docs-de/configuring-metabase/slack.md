---
Titel: Slack einrichten
redirect_from:
- /docs/latest/administration-guide/09-setting-up-slack
---


# Slack einrichten


Wenn Sie Ihre [Dashboard-Abonnements](../dashboards/subscriptions.md) oder [Alerts](../questions/alerts.md) an Slack-Kanäle (oder Personen auf Slack) senden möchten, muss ein Administrator zunächst Ihre Metabase mit Slack integrieren.


## Slack-App erstellen


Damit Metabase in Ihren Slack-Channels posten kann, müssen Sie eine Slack-App erstellen und diese für Metabase verfügbar machen.


Gehen Sie auf einer beliebigen Metabase-Seite zu**Admin-Einstellungen** >**Einstellungen** >**Benachrichtigungskanäle** >**Slack**.


Klicken Sie auf**Slack-Apps öffnen**. Metabase öffnet eine neue Browser-Registerkarte und schickt Sie auf die Slack-Website, um die Slack-App zu erstellen.


Klicken Sie auf der Slack-Website auf **Create an App**.


### Wählen Sie einen Arbeitsbereich für die Entwicklung Ihrer App


Wählen Sie den Arbeitsbereich, in dem Sie Ihre Anwendung erstellen möchten.


### Das App-Manifest


Wenn Sie auf **Slack App öffnen** klicken, übergibt die Metabase das App-Manifest, das Slack zum Einrichten Ihrer App verwendet.


Möglicherweise erhalten Sie eine Warnung, die besagt:


**Diese App wurde aus einem Manifest eines Drittanbieters erstellt** Überprüfen Sie immer die URLs und Berechtigungen unten.


Diese Warnung wird erwartet (Metabase ist hier der Drittanbieter). Sie können auf **Configure** klicken, um das App-Manifest zu sehen, das Metabase in der URL mitgeschickt hat. Hier ist das Manifest im YAML-Format:


```yml
_metadata:
major_version: 1
minor_version: 1
display_information:
name: Metabase
Beschreibung: Bringen Sie die Leistung von Metabase in Ihre Slack #Channels!
background_color: "#509EE3"
Eigenschaften:
bot_user:
display_name: Metabase
oauth_config:
Geltungsbereiche:
bot:
- benutzer:lesen
- Kanäle:lesen
- Kanäle:verbinden
- dateien:schreiben
- chat:schreiben
- chat:write.customize
- chat:write.public
- gruppen:lesen
```


Das Manifest kümmert sich nur um einige Einstellungen für Ihre Anwendung und hilft, die Dinge zu beschleunigen.


Klicken Sie auf die Schaltfläche**Weiter**. Drücken Sie dann**Erstellen**, um Ihre Slack-App einzurichten.


## Installieren Sie Ihre App in Ihrem Arbeitsbereich


Klicken Sie auf der Slack-Website für Ihre neu erstellte App auf der Registerkarte**Einstellungen** >**Grundinformationen** unter**Installieren Sie Ihre App** auf**In den Arbeitsbereich installieren**. Klicken Sie auf dem nächsten Bildschirm auf**Zulassen**, um der Metabase Zugriff auf Ihren Slack-Arbeitsbereich zu gewähren.


## Das Bot-Benutzer-OAuth-Token


Klicken Sie auf der Slack-Webseite für Ihre Slack-App links im Abschnitt **Funktionen** in der Seitenleiste für Slack-Apps auf **OAuth und Berechtigungen** und kopieren Sie dann das **Bot User OAuth Token**. Kehren Sie zur Slack-Einstellungsseite in Ihrer Metabase zurück und fügen Sie dieses Token in das gleichnamige Metabase-Feld ein.


## Speichern Sie Ihre Änderungen in der Metabase


Klicken Sie in Metabase auf die Schaltfläche**Änderungen speichern**, und das war's! Metabase führt automatisch einen kurzen Test durch, um zu prüfen, ob das API-Token ordnungsgemäß funktioniert. Wenn etwas schief geht, erhalten Sie eine Fehlermeldung.
