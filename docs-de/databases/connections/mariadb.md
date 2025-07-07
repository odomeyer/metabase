---
Titel: MariaDB
---


# MariaDB


> Diese Seite behandelt die Verbindung mit MariaDB als _Data Warehouse_. Zur Verwendung von MariaDB als_Anwendungsdatenbank der Metabase siehe [Konfigurieren der Metabase-Anwendungsdatenbank](../../installation-and-operation/configuring-application-database.md).


Um eine Datenbankverbindung hinzuzufügen, klicken Sie auf das**Zahnradsymbol** oben rechts und navigieren Sie zu**Admin-Einstellungen** >**Datenbanken** >**Datenbank hinzufügen**.


MariaDB teilt sich einen Treiber mit MySQL, wählen Sie also den**MySQL**-Treiber.


## Unterstützte Versionen


Metabase unterstützt die älteste unterstützte Version von Maria DB bis zur letzten stabilen Version. Siehe [MariaDB Server-Versionen](https://mariadb.com/kb/en/mariadb-server-release-dates/).


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


### JSON-Spalten aufklappen


JSON-Folding wird für MariaDB-Datenbanken nicht unterstützt.


### Zusätzliche JDBC-Verbindungsstring-Optionen


Sie können Optionen an die Verbindungszeichenfolge anhängen, die Metabase für die Verbindung mit Ihrer Datenbank verwendet.


### Abfragen für einfache Untersuchungen wiederholen


Schalten Sie diese Option**AUS**, wenn Sie auf**Ausführen** (die Abspieltaste) klicken möchten, bevor Sie eine [zusammenfassen](../../questions/query-builder/summarizing-and-grouping.md)) oder [filtern](../../questions/query-builder/filters.md) Auswahl treffen.


Standardmäßig führt Metabase eine Abfrage aus, sobald Sie eine Gruppierungsoption aus dem Menü **Zusammenfassen** oder eine Filterbedingung aus demMenü [Drill-through](https://www.metabase.com/learn/metabase-basics/querying-and-dashboards/questions/drill-through) auswählen. Wenn Ihre Datenbank langsam ist, sollten Sie die erneute Ausführung deaktivieren, um das Laden von Daten bei jedem Klick zu vermeiden.


### Wählen Sie, wann Synchronisationen und Scans stattfinden.


Siehe [Synchronisationen und Scans](../sync-scan.md#choose-when-syncs-and-scans-happen).


#### Datenbank-Synchronisierung


Wenn Sie **Auswählen, wann Synchronisierungen und Scans stattfinden** > **ON** gewählt haben, können Sie dies einstellen:


- Die Häufigkeit des [sync](../sync-scan.md#how-database-syncs-work): stündlich (Standard) oder täglich.
- Die Uhrzeit für die Synchronisierung in der Zeitzone des Servers, auf dem Ihre Metabase-Anwendung ausgeführt wird.---
Titel: MariaDB
---

# MariaDB

>  Diese Seite behandelt die Verbindung mit MariaDB als _Data Warehouse_. Zur Verwendung von MariaDB als_Anwendungsdatenbank der Metabase siehe [Konfigurieren der Metabase-Anwendungsdatenbank](../../installation-and-operation/configuring-application-database.md).

Um eine Datenbankverbindung hinzuzufügen, klicken Sie auf das**Zahnradsymbol** oben rechts und navigieren Sie zu**Admin-Einstellungen** >**Datenbanken** >**Datenbank hinzufügen**.

MariaDB teilt sich einen Treiber mit MySQL, wählen Sie also den**MySQL**-Treiber.

## Unterstützte Versionen

Metabase unterstützt die älteste unterstützte Version von Maria DB bis zur letzten stabilen Version. Siehe [MariaDB Server-Versionen](https://mariadb.com/kb/en/mariadb-server-release-dates/).

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

### JSON-Spalten aufklappen

JSON-Folding wird für MariaDB-Datenbanken nicht unterstützt.

### Zusätzliche JDBC-Verbindungsstring-Optionen

Sie können Optionen an die Verbindungszeichenfolge anhängen, die Metabase für die Verbindung mit Ihrer Datenbank verwendet.

### Abfragen für einfache Untersuchungen wiederholen

Schalten Sie diese Option**AUS**, wenn Sie auf**Ausführen** (die Abspieltaste) klicken möchten, bevor Sie eine [zusammenfassen](../../questions/query-builder/summarizing-and-grouping.md)) oder [filtern](../../questions/query-builder/filters.md) Auswahl treffen.

Standardmäßig führt Metabase eine Abfrage aus, sobald Sie eine Gruppierungsoption aus dem Menü **Zusammenfassen** oder eine Filterbedingung aus demMenü [Drill-through](https://www.metabase.com/learn/metabase-basics/querying-and-dashboards/questions/drill-through) auswählen. Wenn Ihre Datenbank langsam ist, sollten Sie die erneute Ausführung deaktivieren, um das Laden von Daten bei jedem Klick zu vermeiden.

### Wählen Sie, wann Synchronisationen und Scans stattfinden.

Siehe [Synchronisationen und Scans](../sync-scan.md#choose-when-syncs-and-scans-happen).

#### Datenbank-Synchronisierung

Wenn Sie **Auswählen, wann Synchronisierungen und Scans stattfinden** > **ON** gewählt haben, können Sie dies einstellen:

-  Die Häufigkeit des [sync](../sync-scan.md#how-database-syncs-work): stündlich (Standard) oder täglich.
-  Die Uhrzeit für die Synchronisierung in der Zeitzone des Servers, auf dem Ihre Metabase-Anwendung ausgeführt wird.

