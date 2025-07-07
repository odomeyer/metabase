---
Titel: Datenberechtigungen
redirect_from:
- /docs/latest/administration-guide/data-permissions
---


# Datenberechtigungen


Diese Seite behandelt Berechtigungen für Datenbanken und Tabellen. Wenn Sie das noch nicht getan haben, sollten Sie sich unsere [Übersicht über Berechtigungen][permissions-overview] ansehen.


## Festlegen von Berechtigungen für eine Datenbank, ein Schema oder eine Tabelle


So legen Sie Datenberechtigungen für eine Datenbank, ein Schema oder eine Tabelle für eine Gruppe fest:


1. Drücken Sie Cmd/Strg + K. Suchen Sie nach**Berechtigungen** und klicken Sie auf das Ergebnis der Berechtigungseinstellungen. Die Metabase wird standardmäßig auf die Registerkarte**Daten** gesetzt.


Oder


1. Klicken Sie auf das Symbol **Zahnrad** in der oberen rechten Ecke.


2. Wählen Sie **Admin-Einstellungen**.


3. Klicken Sie auf die Registerkarte**Berechtigungen**, die standardmäßig auf die Registerkarte**Daten** verweist.


Sie können die Berechtigungen entweder nach Gruppe oder nach Datenbank anzeigen.


## Datenberechtigungstypen


Sie können die folgenden Arten von Berechtigungen für eine Datenbank, ein Schema oder eine Tabelle festlegen:


- [Daten ansehen](#view-data-permissions)
- [Abfragen erstellen](#create-queries-permissions)
- [Ergebnisse herunterladen](#download-results-permissions)
- [Tabellen-Metadaten verwalten](#manage-table-metadata-permissions)
- [Datenbank verwalten](#manage-database-permissions)


Wenn Sie die Zieldatenbank ändern müssen, je nachdem, wer angemeldet ist, sehen Sie sich [Database routing](./database-routing.md) an. Datenbank-Routing ist besonders nützlich, wenn jeder Ihrer Kunden seine eigene Datenbank hat.


## Bevor Sie spezifische Berechtigungen anwenden, sperren Sie die Gruppe "Alle Benutzer".


Bevor Sie spezifische Berechtigungen anwenden, sollten Sie sicherstellen, dass niemand Daten sehen kann. Da jeder automatisch in der Gruppe "Alle Benutzer" ist, müssen Sie diese Gruppe für den Zugriff auf Daten sperren.


In den **Admin-Einstellungen** > **Berechtigungen** > **Daten** sperren Sie den Zugriff der Gruppe "Alle Benutzer" auf die Datenbank.


Von dort aus können Sie verschiedenen Gruppen selektiv Berechtigungen erteilen.


## Berechtigungen für die Datenansicht


{% include plans-blockquote.html feature="View data permissions" %}


Die Berechtigung **Daten anzeigen** bestimmt, welche Daten Personen bei der Anzeige von Fragen, Dashboards, Modellen und Metriken sehen können. Die Berechtigung zum Anzeigen von Daten bestimmt auch, ob eine Gruppe die Modelle und Metriken in der Seitenleiste anzeigen kann. Zum [Durchsuchen von Datenbanken](../exploration-and-organization/exploration.md#browse-your-databases) benötigt eine Gruppe auch [Create queries](#create-queries-permissions) Berechtigungen für die entsprechenden Daten.


Zu den Berechtigungsstufen gehören:


- [Kann anzeigen](#can-view-data-permission)
- [Granular](#granular-view-data-permission)
- [Sandboxed](#sandboxed-view-data-permission)
- [Impersonated](#impersonated-view-data-permission)
- [Gesperrt](#blocked-view-data-permission)


Die Einstellungen für die Datenanzeigeberechtigung gelten für verschiedene Ebenen in Ihrer Datenbank:


| Datenansichtserlaubnis | Datenbank | Schema | Tabelle |
| -------------------- | -------- | ------ | ----- |
