---
Titel: Webhooks
---


# Webhooks


Admins können Webhooks einrichten, so dass [Alerts](../questions/alerts.md) an eine bestimmte URL gesendet werden können. Das bedeutet, dass Sie eine Benachrichtigung einrichten können, um die Ergebnisse einer Frage an einen Endpunkt Ihrer Wahl zu senden: an Ihre App, einen Drittanbieterdienst oder wohin auch immer.


Im Moment sind Webhooks nur für [Alerts](../questions/alerts.md) verfügbar; Sie können keinen Webhook als Empfänger eines [Dashboard-Abonnements](../dashboards/subscriptions.md) auswählen.


## Erstellen eines Webhooks


Bevor Sie eine Benachrichtigung an einen Webhook senden können, muss ein Administrator einen Webhook als Ziel erstellen.


Admins können einen Webhook erstellen, indem sie auf das**Zahnradsymbol** >**Admin-Einstellungen** >**Benachrichtigungskanäle** klicken. Im Bereich**Webhooks für Benachrichtigungen** klicken Sie auf **+ Einen weiteren hinzufügen**. Metabase gibt Ihnen ein kurzes Formular zum Ausfüllen:


- **Webhook-URL**. Wohin die Metabase die Ergebnisse einer Meldung senden soll. Muss eine gültige URL sein.
-Geben Sie ihm einen Namen**. Sie müssen dem Webhook einen Namen geben, damit die Leute den richtigen Haken auswählen können, wenn sie einen Alarm zu einer Frage einrichten.
- **Beschreibung**. Sie sollten den Leuten wahrscheinlich sagen, wofür der Haken ist.
- **Authentifizierungsmethode**. Siehe unten.


## Webhook-Authentifizierungsmethode


Sie können eine Authentifizierungsmethode für den Webhook angeben.


- **Keine**: Alles ist möglich.
- **Grundlegend**: Legen Sie einen Benutzernamen und ein Passwort fest.
- **Träger**: Fügen Sie ein [geheimes Token](https://datatracker.ietf.org/doc/html/rfc6750) ein.
- **API-Schlüssel**: Sie können den API-Schlüssel in die Kopfzeile oder als Abfrageparameter einfügen. Beide Ansätze erfordern einen Schlüssel und einen Wert (den API-Schlüssel selbst).


## Webhook-Nutzdaten


Die Metabase sendet die Ergebnisse eines Alerts in JSON. Das JSON enthält einige Metadaten über die Frage, wie z. B. den Ersteller des Alarms und seine ID(null bei Testalarmen).


Die Metabase sendet die "angehängte" Visualisierung als base64-kodiertes PNG im Schlüssel "data" unter "visualization".


Das kodierte PNG-Diagramm(./images/payload-chart.png)


Und die Daten, wie sie in der Tabellenansicht zu sehen sind, die Metabase als "raw_data" sendet.
