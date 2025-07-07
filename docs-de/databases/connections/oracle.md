---
Titel: Oracle
redirect_from:
- /docs/latest/administration-guide/databases/oracle
---


# Oracle


Um eine Datenbankverbindung hinzuzufügen, klicken Sie auf das **Zahnradsymbol** oben rechts, und navigieren Sie zu **Verwaltungseinstellungen** > **Datenbanken** > **Datenbank hinzufügen**.


## Unterstützte Versionen


Metabase unterstützt die älteste unterstützte Version bis zur letzten stabilen Version. Siehe [Oracle's Release Schedule of Current Database Releases](https://support.oracle.com/knowledge/Oracle%20Database%20Products/742060_1.html).


## Verbindungsdetails bearbeiten


Sie können diese Einstellungen jederzeit ändern. Denken Sie nur daran, Ihre Änderungen zu speichern.


### Anzeigename


Der Anzeigename für die Datenbank in der Metabase-Schnittstelle.


### Host


Die IP-Adresse Ihrer Datenbank oder ihr Domänenname (z. B. esc.mydatabase.com).


### Anschluss


Der Datenbank-Port. Z.B. 1521.


### Oracle System ID (SID)


Normalerweise etwas wie ORCL oder XE. Optional bei Verwendung des Dienstnamens.


### Oracle Dienstname


Optionaler TNS-Alias.


### Benutzername


Der Datenbank-Benutzername für das Konto, das Sie für die Verbindung zu Ihrer Datenbank verwenden möchten. Sie können mehrere Verbindungen zu derselben Datenbank einrichten, indem Sie verschiedene Benutzerkonten mit unterschiedlichen [Privilegien] verwenden(../users-roles-privileges.md).


### Passwort


Das Passwort für den Benutzernamen, den Sie für die Verbindung zur Datenbank verwenden.


### Verwenden Sie eine sichere Verbindung (SSL)


Sie können sowohl die Client- als auch die Server-Authentifizierung verwenden (bekannt als gegenseitige Authentifizierung).


### Verbindung mit der Oracle Cloud Autonomous Database


Wenn Sie Ihre Datenbank so konfiguriert haben, dass sie gegenseitiges TLS (mTLS) erfordert, benötigen Sie eine [Brieftasche](https://docs.oracle.com/en/cloud/paas/autonomous-database/serverless/adbsb/connect-download-wallet.html#GUID-DED75E69-C303-409D-9128-5E10ADD47A35). So laden Sie Ihre Brieftasche herunter:


1. Gehen Sie zu Ihrer autonomen Oracle-Datenbank.
2. Gehen Sie zu den Details der Datenbank.
3. Klicken Sie auf **DB-Verbindung**.
4. Laden Sie die Brieftasche herunter.
5. Erstellen Sie ein Passwort für die Schlüsseldatei.
6. Kopieren Sie die Datei "keystore.jks" dorthin, wo Sie Ihre Metabase-Konfigurationsdaten speichern.
7. Verwenden Sie ` JAVA_OPTS`, um der Metabase den Speicherort und das Passwort des Keystores mitzuteilen (weitere Informationen zu Keystores finden Sie im nächsten Abschnitt).
8. Geben Sie in der Metabase auf der Seite für die Datenverbindung Ihren "host", "port" und "service_name" ein. Sie finden diese Werte in der Datei "tsnnames.ora".


#### Client-Authentifizierung mit einem Keystore
