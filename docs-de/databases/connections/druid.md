---
Titel: Druide
---


# Druid


> Bevorzugen Sie die Druid JDBC-Verbindung.


Um eine Datenbankverbindung hinzuzufügen, klicken Sie auf das**Zahnradsymbol** oben rechts und navigieren Sie zu**Admin-Einstellungen** >**Datenbanken** >**Datenbank hinzufügen**.


## Verbindungsdetails bearbeiten


Füllen Sie die Felder für diese Datenbank aus, und klicken Sie unten auf **Änderungen speichern**. Sie können diese Einstellungen jederzeit bearbeiten. Denken Sie nur daran, Ihre Änderungen zu speichern.


### Anzeigename


Der Anzeigename für die Datenbank in der Metabase-Schnittstelle.


### Host


Die IP-Adresse Ihrer Datenbank oder ihr Domänenname (z. B. esc.mydatabase.com).


### Broker-Knoten-Port


Der Datenbank-Port (z.B. 8082).


### Verwenden Sie einen SSH-Tunnel


Siehe unsere [Anleitung zum SSH-Tunneling](../ssh-tunnel.md).


### Entfaltung von JSON-Spalten zulassen


> Nur verfügbar für die Druid JDBC-Verbindung.


Dies ermöglicht die Entfaltung von JSON-Spalten in ihre Komponentenfelder.


Siehe [JSON Entfaltung](../../data-modeling/json-unfolding.md).


### Authentifizierung


> Nur für die Druid-JDBC-Verbindung verfügbar.


Schalten Sie diese Option ein, um die grundlegende Authentifizierung mit einem Benutzernamen und einem Passwort zu aktivieren.


### Re-run queries for simple explorations


Schalten Sie diese Option**AUS**, wenn Sie auf**Ausführen** (die Abspielschaltfläche) klicken möchten, bevor Sie eine [Zusammenfassen](../../questions/query-builder/summarizing-and-grouping.md) oder eine Filterauswahl treffen.


Standardmäßig führt Metabase eine Abfrage aus, sobald Sie eine Gruppierungsoption aus dem Menü**Zusammenfassen** oder eine Filterbedingung aus dem [Drill-through-Menü](https://www.metabase.com/learn/metabase-basics/querying-and-dashboards/questions/drill-through) auswählen. Wenn Ihre Datenbank langsam ist, sollten Sie die erneute Ausführung deaktivieren, um das Laden von Daten bei jedem Klick zu vermeiden.


### Wählen Sie, wann Synchronisationen und Scans stattfinden.


Siehe [syncs and scans](../sync-scan.md#choose-when-syncs-and-scans-happen).


### Regelmäßiges Refingerprinting von Tabellen


> Regelmäßiges Refingerprinting erhöht die Last auf Ihrer Datenbank.


Schalten Sie diese Option **EIN**, um jedes Mal, wenn Metabase einen [sync] ausführt(../sync-scan.md#how-database-syncs-work), eine Stichprobe von Werten zu scannen.
