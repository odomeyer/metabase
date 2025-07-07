---
Titel: Warnungen
Zusammenfassung: Richten Sie Alerts ein, um per E-Mail, Slack oder Webhooks benachrichtigt zu werden, wenn Ihre Fragen interessante Ergebnisse liefern.
redirect_from:
  - /docs/latest/users-guide/15-alerts
  - /docs/latest/questions/sharing/alerts
---

# Alerts
3. Wählen Sie in den Visualisierungseinstellungen einen Zielwert aus
4. Speichern Sie Ihre Frage,
5. Erstellen Sie eine Benachrichtigung, indem Sie auf das Symbol "Teilen" oben rechts klicken.


Sie sehen dann die Optionen, wann Sie Benachrichtigungen über diesen Fortschrittsbalken erhalten möchten:


- Sie können festlegen, ob Sie benachrichtigt werden möchten, wenn der Fortschrittsbalken die Ziellinie erreicht oder unter das Ziel fällt,
- ob nur eine Warnung ausgegeben werden soll, wenn der Fortschrittsbalken das erste Mal die Ziellinie erreicht, oder jedes Mal
- Wie oft die Metabase überprüfen soll, ob das Ziel erreicht wurde.


## Bearbeiten und Löschen von Alarmen


Um Warnungen zu einer Frage zu bearbeiten oder zu löschen, klicken Sie auf das Freigabesymbol in der oberen rechten Ecke. Was Sie bearbeiten können, hängt davon ab, ob Sie ein Administrator sind.


Jeder:


- Jeder kann Benachrichtigungen bearbeiten, die er persönlich eingerichtet hat (nicht jedoch Benachrichtigungen, die von anderen Personen eingerichtet wurden).
- Jeder kann alle Benachrichtigungen, die er erhält, einsehen und abbestellen, indem er auf das **Zahnradsymbol** oben rechts klickt und zu **Kontoeinstellungen** > **Benachrichtigungen** navigiert.


Admins:


- Admins können jede Meldung bearbeiten und löschen. Dies kann nicht rückgängig gemacht werden, also seien Sie vorsichtig!
- Administratoren können für jede Benachrichtigung Empfänger hinzufügen oder entfernen, auch für solche, die sie nicht selbst erstellt haben.
- Admins können Alarme pro Person über dasMenü [Personen in den Admin-Einstellungen](../people-and-groups/managing.md#unsubscribe-from-all-subscriptions-and-alerts) verwalten.


## Vermeiden Sie es, den Namen des alarmierten Kanals in Slack zu ändern.


Sobald Sie eine Benachrichtigung für einen Slack-Channel eingerichtet haben, sollten Sie vermeiden, den Namen dieses Channels in Slack zu ändern. Wenn Sie den Channel in Slack umbenennen, aber möchten, dass Metabase weiterhin Benachrichtigungen an diesen umbenannten Channel sendet, müssen Sie die Benachrichtigung in Metabase aktualisieren, damit sie auf den neuen Channel-Namen verweist.


## Ablauf von Alarmen und Sonderfälle


Unter bestimmten Umständen werden Alarme automatisch geändert oder gelöscht:


- **Sie benennen den Ziel-Slack-Kanal um**. Nun, technisch gesehen wird die Meldung nicht gelöscht, aber Metabase hat keinen Ort mehr, an den die Meldungen gesendet werden können. Sie müssen den Zielkanal der Meldung in der Metabase auf den Namen des neuen Kanals aktualisieren.
-Wenn eine Torlinie aus der Frage entfernt wird, die eine "Torlinie"-Warnung auslöst**, ändert sich die Warnung in eine Warnung vom Typ "Ergebnisse".
-Wenn die Frage gelöscht wird**, löscht Metabase alle für diese Frage eingerichteten Warnmeldungen.


Warnungen funktionieren weiterhin _auch wenn die Person, die die Warnung eingerichtet hat, kein aktives Konto mehr hat_. Wenn zum Beispiel eine Benachrichtigung mit mehreren Empfängern (oder an einen Slack-Kanal) von einer Person eingerichtet wurde, deren Konto inzwischen deaktiviert wurde, funktioniert diese Benachrichtigung weiterhin (obwohl Metabase die Benachrichtigungen nicht mehr an das deaktivierte Konto sendet).


## Admins können alle Alerts sehen


{% include plans-blockquote.html feature="Nutzungsanalyse" %}


Admins können in der **Usage analytics**-Sammlung eine Liste aller Alarme und Dashboard-Abonnements anzeigen, die Personen in Ihrer Metabase eingerichtet haben. Siehe [Usage analytics](../usage-and-performance-tools/usage-analytics.md#alerts-model).


## Wie Berechtigungen mit Alerts funktionieren


Siehe [Benachrichtigungsberechtigungen](../permissions/notifications.md).


### Senden von Benachrichtigungen an private Slack-Kanäle


Siehe [Senden von Alarmen und Abonnements an private Slack-Kanäle](../configuring-metabase/slack.md#sending-alerts-and-subscriptions-to-private-slack-channels).


## Entfernen des Metabase-Brandings aus Alerts


Siehe [Metabase-Branding aus Exporten entfernen](./exporting-results.md#remove-metabase-branding-from-exports).


## Weitere Lektüre


- [Dashboard-Abonnements](../dashboards/subscriptions.md)
- [E-Mail einrichten](../configuring-metabase/email.md)
- [Slack einrichten](../configuring-metabase/slack.md)
- [Nutzungsanalyse](../benutzung-und-leistungs-tools/benutzung-analytics.md)# Alerts
3. Wählen Sie in den Visualisierungseinstellungen einen Zielwert aus
4. Speichern Sie Ihre Frage,
5. Erstellen Sie eine Benachrichtigung, indem Sie auf das Symbol "Teilen" oben rechts klicken.

Sie sehen dann die Optionen, wann Sie Benachrichtigungen über diesen Fortschrittsbalken erhalten möchten:

-  Sie können festlegen, ob Sie benachrichtigt werden möchten, wenn der Fortschrittsbalken die Ziellinie erreicht oder unter das Ziel fällt,
-  ob nur eine Warnung ausgegeben werden soll, wenn der Fortschrittsbalken das erste Mal die Ziellinie erreicht, oder jedes Mal
-  Wie oft die Metabase überprüfen soll, ob das Ziel erreicht wurde.

## Bearbeiten und Löschen von Alarmen

Um Warnungen zu einer Frage zu bearbeiten oder zu löschen, klicken Sie auf das Freigabesymbol in der oberen rechten Ecke. Was Sie bearbeiten können, hängt davon ab, ob Sie ein Administrator sind.

Jeder:

-  Jeder kann Benachrichtigungen bearbeiten, die er persönlich eingerichtet hat (nicht jedoch Benachrichtigungen, die von anderen Personen eingerichtet wurden).
-  Jeder kann alle Benachrichtigungen, die er erhält, einsehen und abbestellen, indem er auf das **Zahnradsymbol** oben rechts klickt und zu **Kontoeinstellungen** > **Benachrichtigungen** navigiert.

Admins:

-  Admins können jede Meldung bearbeiten und löschen. Dies kann nicht rückgängig gemacht werden, also seien Sie vorsichtig!
-  Administratoren können für jede Benachrichtigung Empfänger hinzufügen oder entfernen, auch für solche, die sie nicht selbst erstellt haben.
-  Admins können Alarme pro Person über dasMenü [Personen in den Admin-Einstellungen](../people-and-groups/managing.md#unsubscribe-from-all-subscriptions-and-alerts) verwalten.

## Vermeiden Sie es, den Namen des alarmierten Kanals in Slack zu ändern.

Sobald Sie eine Benachrichtigung für einen Slack-Channel eingerichtet haben, sollten Sie vermeiden, den Namen dieses Channels in Slack zu ändern. Wenn Sie den Channel in Slack umbenennen, aber möchten, dass Metabase weiterhin Benachrichtigungen an diesen umbenannten Channel sendet, müssen Sie die Benachrichtigung in Metabase aktualisieren, damit sie auf den neuen Channel-Namen verweist.

## Ablauf von Alarmen und Sonderfälle

Unter bestimmten Umständen werden Alarme automatisch geändert oder gelöscht:

- **Sie benennen den Ziel-Slack-Kanal um**. Nun, technisch gesehen wird die Meldung nicht gelöscht, aber Metabase hat keinen Ort mehr, an den die Meldungen gesendet werden können. Sie müssen den Zielkanal der Meldung in der Metabase auf den Namen des neuen Kanals aktualisieren.
-Wenn eine Torlinie aus der Frage entfernt wird, die eine "Torlinie"-Warnung auslöst**, ändert sich die Warnung in eine Warnung vom Typ "Ergebnisse".
-Wenn die Frage gelöscht wird**, löscht Metabase alle für diese Frage eingerichteten Warnmeldungen.

Warnungen funktionieren weiterhin _auch wenn die Person, die die Warnung eingerichtet hat, kein aktives Konto mehr hat_. Wenn zum Beispiel eine Benachrichtigung mit mehreren Empfängern (oder an einen Slack-Kanal) von einer Person eingerichtet wurde, deren Konto inzwischen deaktiviert wurde, funktioniert diese Benachrichtigung weiterhin (obwohl Metabase die Benachrichtigungen nicht mehr an das deaktivierte Konto sendet).

## Admins können alle Alerts sehen

{% include plans-blockquote.html feature="Nutzungsanalyse" %}

Admins können in der **Usage analytics**-Sammlung eine Liste aller Alarme und Dashboard-Abonnements anzeigen, die Personen in Ihrer Metabase eingerichtet haben. Siehe [Usage analytics](../usage-and-performance-tools/usage-analytics.md#alerts-model).

## Wie Berechtigungen mit Alerts funktionieren

Siehe [Benachrichtigungsberechtigungen](../permissions/notifications.md).

### Senden von Benachrichtigungen an private Slack-Kanäle

Siehe [Senden von Alarmen und Abonnements an private Slack-Kanäle](../configuring-metabase/slack.md#sending-alerts-and-subscriptions-to-private-slack-channels).

## Entfernen des Metabase-Brandings aus Alerts

Siehe [Metabase-Branding aus Exporten entfernen](./exporting-results.md#remove-metabase-branding-from-exports).

## Weitere Lektüre

- [Dashboard-Abonnements](../dashboards/subscriptions.md)
- [E-Mail einrichten](../configuring-metabase/email.md)
- [Slack einrichten](../configuring-metabase/slack.md)
- [Nutzungsanalyse](../benutzung-und-leistungs-tools/benutzung-analytics.md)
