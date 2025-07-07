---
Titel: Berechtigungen für Benachrichtigungen
Zusammenfassung: Erfahren Sie, wer Benachrichtigungen und Dashboard-Abonnements erstellen und bearbeiten kann und welche Daten die Empfänger in ihren Benachrichtigungen sehen können.
---


# Berechtigungen für Benachrichtigungen


Zu den Benachrichtigungen in der Metabase gehören [Alerts](../questions/alerts.md) und [Dashboard-Abonnements](../dashboards/subscriptions.md#setting-up-a-dashboard-subscription).


## Wer kann Dashboard-Abonnements und Alerts bearbeiten?


Was Sie mit Alarmen und Dashboard-Abonnements tun können, hängt davon ab, ob Sie zur Gruppe der Administratoren oder zu einer Sandbox-Gruppe gehören.


- [Gruppe Alle Benutzer](#all-users-group-notification-permissions)
- [Sandbox-Gruppe](#sandboxed-accounts-notification-permissions)
- [Gruppe Administratoren](#administrators-group-notification-permissions)


### Benachrichtigungsberechtigungen für die Gruppe Alle Benutzer


Jeder ist in der Gruppe "Alle Benutzer". Das bedeutet, dass jeder kann:


- [Warnungen](../questions/alerts.md) und [Dashboard-Abonnements](../dashboards/subscriptions.md#setting-up-a-dashboard-subscription) erstellen.
- Fügen Sie neue Empfänger zu Dashboard-Abonnements und -Warnungen hinzu, die Sie erstellt haben.
- Abmeldung von jeder Benachrichtigung oder jedem Abonnement in ihren [Kontoeinstellungen](../people-and-groups/account-settings.md).


Wenn ein Ersteller von Benachrichtigungen neue Empfänger zu einer Benachrichtigung oder einem Abonnement hinzufügt, zeigt die Metabase den Empfängern die Daten unter Verwendung der** [Datenberechtigungen](../permissions/data.md) und [Sammlungsberechtigungen](../permissions/collections.md)des Erstellers an.


### Berechtigungen für die Benachrichtigung von Sandbox-Konten


Wie alle in der Gruppe Alle Benutzer, aber mit einem Sonderfall: **Personen in Sandbox-Gruppen sehen nur sich selbst in der Liste der Empfänger**, wenn sie eine Benachrichtigung oder ein Abonnement erstellen.


### Benachrichtigungsberechtigungen der Administratorengruppe


Die Mitglieder der Administratorengruppe können:


- Alle Abonnements und Benachrichtigungen anzeigen.
- Hinzufügen oder Entfernen von Empfängern aus einem bestehenden Abonnement oder Alarm. Administratoren können auf sichere Weise Empfänger hinzufügen und entfernen, ohne die Berechtigungen der Benachrichtigung oder des Abonnements zu ändern. Wenn ein Administrator zum Beispiel Anya zu einem von Beau erstellten Abonnement hinzufügt, erhält Anya E-Mails mit denselben Daten, die Beau sehen kann (nicht die, die der Administrator sehen kann).
- Löschen von Abonnements oder Benachrichtigungen.


## Was die Empfänger von Benachrichtigungen sehen können


Empfänger von Benachrichtigungen** können sehen, was derErsteller der Benachrichtigung** sehen kann. Zum Beispiel, wenn:


- Beau erstellt ein Abonnement für ein Dashboard, das in seiner [persönlichen Sammlung](../exploration-and-organization/collections.md#your-personal-collection) gespeichert ist.
- Beau fügt Anya zu dem Dashboard-Abonnement hinzu.
- Anya sieht die Ergebnisse des Dashboards in ihrer E-Mail, auch wenn sie keine Berechtigung hat, das Dashboard in Beaus persönlicher Sammlung zu sehen.


## Mehr Kontrolle über E-Mail-Optionen


Bei den Tarifen [Enterprise](https://www.metabase.com/product/enterprise) und [Pro](https://www.metabase.com/product/pro) können Admins:


- E-Mail-Empfänger auf [zugelassene Domains für Benachrichtigungen] beschränken(../configuring-metabase/email.md#approved-domains-for-notifications).
- [Begrenzen Sie die von der Metabase vorgeschlagenen Empfänger](../configuring-metabase/email.md#suggest-recipients-on-dashboard-subscriptions-and-alerts), wenn ein Abonnement oder eine Benachrichtigung eingerichtet wird.


## Weitere Lektüre


- [Dashboard-Abonnements](../dashboards/subscriptions.md)
- [Warnmeldungen](../questions/alerts.md)

