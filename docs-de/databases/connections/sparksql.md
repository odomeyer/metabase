---
Titel: SparkSQL
---


* SparkSQL


Um eine Datenbankverbindung hinzuzufügen, klicken Sie auf das **Zahnradsymbol** oben rechts, und navigieren Sie zu **Admin-Einstellungen** > **Datenbanken** > **Datenbank hinzufügen**.


## Einstellungen


Sie können diese Einstellungen jederzeit ändern. Denken Sie nur daran, Ihre Änderungen zu speichern.


### Anzeigename


Der Anzeigename für die Datenbank in der Metabase-Schnittstelle.


### Host


Die IP-Adresse Ihrer Datenbank oder ihr Domänenname (z. B. esc.mydatabase.com).


### Anschluss


Der Datenbank-Port. Z.B., 10000


### Benutzername


Der Datenbank-Benutzername für das Konto, das Sie für die Verbindung zu Ihrer Datenbank verwenden möchten. Sie können mehrere Verbindungen zu derselben Datenbank einrichten, indem Sie verschiedene Benutzerkonten mit unterschiedlichen [Privilegien] verwenden(../users-roles-privileges.md).


### Passwort


Das Passwort für den Benutzernamen, den Sie für die Verbindung zur Datenbank verwenden.


### Verwenden Sie einen SSH-Tunnel


Siehe unsere [Anleitung zum SSH-Tunneling](../ssh-tunnel.md).


### Zusätzliche JDBC-Verbindungsstring-Optionen


Sie können Optionen an die Verbindungszeichenfolge anhängen, die Metabase für die Verbindung mit Ihrer Datenbank verwendet.


### Abfragen für einfache Untersuchungen wiederholen


Schalten Sie diese Option**AUS**, wenn Sie auf**Ausführen** (die Abspielschaltfläche) klicken möchten, bevor Sie eine [Zusammenfassen](../../questions/query-builder/summarizing-and-grouping.md) oder eine Filterauswahl treffen.


Standardmäßig führt Metabase eine Abfrage aus, sobald Sie eine Gruppierungsoption aus dem Menü**Zusammenfassen** oder eine Filterbedingung aus dem [Drill-through-Menü](https://www.metabase.com/learn/metabase-basics/querying-and-dashboards/questions/drill-through) auswählen. Wenn Ihre Datenbank langsam ist, sollten Sie die erneute Ausführung deaktivieren, um das Laden von Daten bei jedem Klick zu vermeiden.


### Auswählen, wann Metabase synchronisiert und scannt


Aktivieren Sie diese Option**EIN**, um die Abfragen zu verwalten, die Metabase verwendet, um mit Ihrer Datenbank auf dem neuesten Stand zu bleiben. Weitere Informationen finden Sie unter [Synchronisieren und Scannen von Datenbanken](../sync-scan.md).


#### Datenbank-Synchronisierung


Wenn Sie **Auswählen, wann Synchronisierungen und Scans stattfinden** > **ON** gewählt haben, können Sie dies einstellen:


- Die Häufigkeit des [sync](../sync-scan.md#how-database-syncs-work): stündlich (Standard) oder täglich.
- Die Uhrzeit für die Synchronisierung, in der Zeitzone des Servers, auf dem Ihre Metabase-Anwendung läuft.


#### Scannen nach Filterwerten


Metabase kann die Werte in den einzelnen Feldern dieser Datenbank durchsuchen, um Checkbox-Filter in Dashboards und Fragen zu aktivieren. Dies kann ein etwas ressourcenintensiver Prozess sein, insbesondere wenn Sie eine sehr große Datenbank haben.


Wenn Sie **Auswählen, wann Synchronisierungen und Scans stattfinden** > **ON** gewählt haben, sehen Sie unter **Scannen nach Filterwerten** die folgenden Optionen:


- Mit**Regelmäßig, nach Zeitplan** können Sie [Scan-Abfragen](../sync-scan.md#how-database-scans-work) in einer Häufigkeit ausführen, die der Änderungsrate Ihrer Datenbank entspricht. Die Zeit wird in der Zeitzone des Servers eingestellt, auf dem Ihre Metabase-Anwendung läuft. Dies ist die beste Option für eine kleine Datenbank oder Tabellen mit eindeutigen Werten, die häufig aktualisiert werden.
