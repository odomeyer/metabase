---
Titel: SQL-Server
---


# SQL Server


Um eine Datenbankverbindung hinzuzufügen, klicken Sie auf das **Zahnradsymbol** oben rechts, und navigieren Sie zu **Verwaltungseinstellungen** > **Datenbanken** > **Datenbank hinzufügen**.


## Unterstützte Versionen


Metabase unterstützt die älteste unterstützte Version von SQL Server bis zur letzten stabilen Version. Siehe [SQL Server end of support options](https://learn.microsoft.com/en-us/sql/sql-server/end-of-support/sql-server-end-of-support-overview).


## Einstellungen


Sie können diese Einstellungen jederzeit ändern. Denken Sie nur daran, Ihre Änderungen zu speichern.


### Anzeigename


Der Anzeigename für die Datenbank in der Metabase-Schnittstelle.


### Host


Die IP-Adresse Ihrer Datenbank oder ihr Domänenname (z. B. esc.mydatabase.com).


### Anschluss


Der Datenbank-Port. Z.B. 1433. Um dynamische Ports zu verwenden, lassen Sie dieses Feld leer.


### Datenbankname


Der Name der Datenbank, mit der Sie sich verbinden.


### Name der Datenbankinstanz


Wenn Sie mehrere Datenbanken auf demselben Rechner betreiben, können Sie hier den Namen der Instanz angeben.


### Benutzername


Der Datenbank-Benutzername für das Konto, das Sie für die Verbindung zu Ihrer Datenbank verwenden möchten. Sie können mehrere Verbindungen zu derselben Datenbank einrichten, indem Sie verschiedene Benutzerkonten mit unterschiedlichen [Privilegien] verwenden(../users-roles-privileges.md).


### Passwort


Das Passwort für den Benutzernamen, den Sie für die Verbindung zur Datenbank verwenden.


### Sichere Verbindung verwenden (SSL)


Metabase versucht automatisch, zuerst eine Verbindung zu Datenbanken mit SSL herzustellen, und dann ohne, wenn das nicht funktioniert. Wenn es möglich ist, eine Verbindung zu Ihrer Datenbank mit einer SSL-Verbindung herzustellen, macht Metabase dies zur Standardeinstellung für Ihre Datenbank. Wenn Sie es vorziehen, eine Verbindung ohne diese Sicherheitsebene herzustellen, können Sie diese Einstellung später jederzeit ändern, aber wir empfehlen dringend, SSL aktiviert zu lassen, um Ihre Daten zu schützen.


### Verwenden Sie einen SSH-Tunnel


Siehe unsere [Anleitung zum SSH-Tunneling](../ssh-tunnel.md).


### Zusätzliche JDBC-Verbindungsstring-Optionen


Sie können Optionen an die Verbindungszeichenfolge anhängen, die Metabase für die Verbindung mit Ihrer Datenbank verwendet.


### Abfragen für einfache Untersuchungen wiederholen


Schalten Sie diese Option**AUS**, wenn Sie auf**Ausführen** (die Abspielschaltfläche) klicken möchten, bevor Sie eine [Zusammenfassen](../../questions/query-builder/summarizing-and-grouping.md) oder eine Filterauswahl treffen.


Standardmäßig führt Metabase eine Abfrage aus, sobald Sie eine Gruppierungsoption aus dem Menü**Zusammenfassen** oder eine Filterbedingung aus dem [Drill-through-Menü](https://www.metabase.com/learn/metabase-basics/querying-and-dashboards/questions/drill-through) auswählen. Wenn Ihre Datenbank langsam ist, sollten Sie die erneute Ausführung deaktivieren, um das Laden von Daten bei jedem Klick zu vermeiden.
