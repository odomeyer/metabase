---
Titel: MySQL
redirect_from:
- /docs/latest/administration-guide/databases/mysql
---


# MySQL


> Diese Seite behandelt die Anbindung an MySQL als _Data Warehouse_. Für die Verwendung von MySQL als_Anwendungsdatenbank der Metabase, siehe [Konfigurieren der Metabase-Anwendungsdatenbank](../../installation-and-operation/configuring-application-database.md).


Um eine Datenbankverbindung hinzuzufügen, klicken Sie auf das**Zahnradsymbol** oben rechts und navigieren Sie zu**Admin-Einstellungen** >**Datenbanken** >**Datenbank hinzufügen**.


## Unterstützte Versionen


Metabase unterstützt die älteste unterstützte Version bis zur letzten stabilen Version. Siehe [MySQL End-of-life dates](https://endoflife.software/applications/databases/mysql).


## Verbindungsdetails bearbeiten


Sie können diese Einstellungen jederzeit ändern. Denken Sie nur daran, Ihre Änderungen zu speichern.


### Anzeigename


Der Anzeigename für die Datenbank in der Metabase-Schnittstelle.


### Host


Die IP-Adresse Ihrer Datenbank oder ihr Domänenname (z. B. esc.mydatabase.com).


### Anschluss


Der Datenbank-Port. Z.B. 3306.


### Benutzername


Der Datenbank-Benutzername für das Konto, das Sie für die Verbindung zu Ihrer Datenbank verwenden möchten. Sie können mehrere Verbindungen zu derselben Datenbank einrichten, indem Sie verschiedene Benutzerkonten mit unterschiedlichen [Privilegien] verwenden(../users-roles-privileges.md).


### Passwort


Das Passwort für den Benutzernamen, den Sie für die Verbindung zur Datenbank verwenden.


### Verwenden Sie eine sichere Verbindung (SSL)


Sie können die SSL-Zertifizierungskette Ihres Servers einfügen.


### Verwenden Sie einen SSH-Tunnel


Siehe unsere [Anleitung zum SSH-Tunneling](../ssh-tunnel.md).


### JSON-Spalten auffalten


Für MySQL-Datenbanken kann Metabase JSON-Spalten in Komponentenfelder auffalten, um eine Tabelle zu erhalten, in der jeder JSON-Schlüssel zu einer Spalte wird. Die JSON-Entfaltung ist standardmäßig aktiviert, aber Sie können die JSON-Entfaltung deaktivieren, wenn die Leistung langsam ist.


Wenn Sie die JSON-Entfaltung einschalten, können Sie auch die Entfaltung für einzelne Spalten in [Tabellen-Metadaten](../../data-modeling/metadata-editing.md#unfold-json) umschalten.


### Zusätzliche JDBC-Verbindungsstring-Optionen


Sie können Optionen an die Verbindungszeichenfolge anhängen, die Metabase für die Verbindung mit Ihrer Datenbank verwendet.


### Abfragen für einfache Untersuchungen wiederholen


Schalten Sie diese Option**AUS**, wenn Sie auf**Ausführen** (die Abspielschaltfläche) klicken möchten, bevor Sie eine [Zusammenfassen](../../questions/query-builder/summarizing-and-grouping.md) oder eine Filterauswahl treffen.


Standardmäßig führt Metabase eine Abfrage aus, sobald Sie eine Gruppierungsoption aus dem Menü**Zusammenfassen** oder eine Filterbedingung aus dem [Drill-through-Menü](https://www.metabase.com/learn/metabase-basics/querying-and-dashboards/questions/drill-through) auswählen. Wenn Ihre Datenbank langsam ist, sollten Sie die erneute Ausführung deaktivieren, um das Laden von Daten bei jedem Klick zu vermeiden.


### Wählen Sie, wann Synchronisationen und Scans stattfinden.
