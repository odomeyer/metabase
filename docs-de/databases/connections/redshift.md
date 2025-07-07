---
Titel: Amazon Redshift
Beschreibung: Verbinden Sie Metabase mit Amazon Redshift Data Warehouses, um Abfragen auszuführen und Dashboards zu erstellen.
redirect_from:
- /docs/latest/administration-guide/databases/redshift
---


# Amazon Redshift


Um eine Datenbankverbindung hinzuzufügen, klicken Sie auf das**Zahnradsymbol** oben rechts und navigieren Sie zu**Admin-Einstellungen** >**Datenbanken** >**Datenbank hinzufügen**.


## Verbindung und Synchronisierung


Nachdem Sie eine Verbindung zu einer Datenbank hergestellt haben, sehen Sie den Abschnitt "Verbindung und Synchronisierung", der den aktuellen Verbindungsstatus und Optionen zur Verwaltung Ihrer Datenbankverbindung anzeigt.


Hier können Sie [das Datenbankschema synchronisieren und Feldwerte neu scannen](../sync-scan.md) und Verbindungsdetails bearbeiten.


## Verbindungsdetails bearbeiten


Um auf Ihre Datenbankverbindungseinstellungen zuzugreifen oder sie zu ändern, klicken Sie auf die Schaltfläche **Verbindungsdetails bearbeiten**.


### Anzeigename


Der Anzeigename für die Datenbank in der Metabase-Schnittstelle.


### Host


Die IP-Adresse Ihrer Datenbank oder ihr Domänenname (z. B. esc.mydatabase.com).


### Anschluss


Der Datenbank-Port. Z.B. 3306.


### Datenbankname


Der Name der Datenbank, mit der Sie sich verbinden möchten.


### Schemas


Hier können Sie angeben, welche Schemata Sie synchronisieren und scannen möchten. Die Optionen sind:


- Alle
- Nur diese...
- Alle außer...


Bei den Optionen**Nur diese** und**Alle außer** können Sie eine durch Kommata getrennte Liste von Werten eingeben, um der Metabase mitzuteilen, welche Schemata Sie einschließen (oder ausschließen) möchten. Ein Beispiel:


```
foo,bar,baz
```


Sie können den Platzhalter "*" verwenden, um mehrere Schemata abzugleichen.


Nehmen wir an, Sie haben drei Schemata: foo, bar und baz.


- Wenn Sie**Nur diese...** eingestellt haben und die Zeichenfolge "b*" eingeben, werden Sie mit bar und baz synchronisieren.
- Wenn Sie**Alle außer...** eingestellt haben und die Zeichenfolge`b*` eingeben, werden Sie nur mit foo synchronisieren.


Beachten Sie, dass nur der Platzhalter `*` unterstützt wird; Sie können keine anderen Sonderzeichen oder Regexe verwenden.


### Benutzername


> Damit Sync und Scan funktionieren, müssen Sie sicherstellen, dass dieses Datenbank-Benutzerkonto Zugriff auf das "information_schema" hat.


Der Datenbank-Benutzername für das Konto, das Sie für die Verbindung zu Ihrer Datenbank verwenden möchten. Sie können mehrere Verbindungen zu derselben Datenbank einrichten, indem Sie verschiedene Benutzerkonten mit unterschiedlichen [Privilegien] verwenden(../users-roles-privileges.md).


### Passwort


Das Passwort für den Benutzernamen, den Sie für die Verbindung zur Datenbank verwenden.


### Verwenden Sie einen SSH-Tunnel


Siehe unsere [Anleitung zum SSH-Tunneling](../ssh-tunnel.md).


### Zusätzliche JDBC-Verbindungsstring-Optionen---
Titel: Amazon Redshift
Beschreibung: Verbinden Sie Metabase mit Amazon Redshift Data Warehouses, um Abfragen auszuführen und Dashboards zu erstellen.
redirect_from:
- /docs/latest/administration-guide/databases/redshift 
---

# Amazon Redshift

Um eine Datenbankverbindung hinzuzufügen, klicken Sie auf das**Zahnradsymbol** oben rechts und navigieren Sie zu**Admin-Einstellungen** >**Datenbanken** >**Datenbank hinzufügen**.

## Verbindung und Synchronisierung

Nachdem Sie eine Verbindung zu einer Datenbank hergestellt haben, sehen Sie den Abschnitt "Verbindung und Synchronisierung", der den aktuellen Verbindungsstatus und Optionen zur Verwaltung Ihrer Datenbankverbindung anzeigt.

Hier können Sie [das Datenbankschema synchronisieren und Feldwerte neu scannen](../sync-scan.md) und Verbindungsdetails bearbeiten.

## Verbindungsdetails bearbeiten

Um auf Ihre Datenbankverbindungseinstellungen zuzugreifen oder sie zu ändern, klicken Sie auf die Schaltfläche **Verbindungsdetails bearbeiten**.

### Anzeigename

Der Anzeigename für die Datenbank in der Metabase-Schnittstelle.

### Host

Die IP-Adresse Ihrer Datenbank oder ihr Domänenname (z. B. esc.mydatabase.com).

### Anschluss

Der Datenbank-Port. Z.B. 3306.

### Datenbankname

Der Name der Datenbank, mit der Sie sich verbinden möchten.

### Schemas

Hier können Sie angeben, welche Schemata Sie synchronisieren und scannen möchten. Die Optionen sind:

-  Alle 
-  Nur diese...
-  Alle außer...

Bei den Optionen**Nur diese** und**Alle außer** können Sie eine durch Kommata getrennte Liste von Werten eingeben, um der Metabase mitzuteilen, welche Schemata Sie einschließen (oder ausschließen) möchten. Ein Beispiel:

```
foo,bar,baz
```

Sie können den Platzhalter "*" verwenden, um mehrere Schemata abzugleichen.

Nehmen wir an, Sie haben drei Schemata: foo, bar und baz.

-  Wenn Sie**Nur diese...** eingestellt haben und die Zeichenfolge "b*" eingeben, werden Sie mit bar und baz synchronisieren.
-  Wenn Sie**Alle außer...** eingestellt haben und die Zeichenfolge`b*` eingeben, werden Sie nur mit foo synchronisieren.

Beachten Sie, dass nur der Platzhalter `*` unterstützt wird; Sie können keine anderen Sonderzeichen oder Regexe verwenden.

### Benutzername

> Damit Sync und Scan funktionieren, müssen Sie sicherstellen, dass dieses Datenbank-Benutzerkonto Zugriff auf das "information_schema" hat.

Der Datenbank-Benutzername für das Konto, das Sie für die Verbindung zu Ihrer Datenbank verwenden möchten. Sie können mehrere Verbindungen zu derselben Datenbank einrichten, indem Sie verschiedene Benutzerkonten mit unterschiedlichen [Privilegien] verwenden(../users-roles-privileges.md).

### Passwort

Das Passwort für den Benutzernamen, den Sie für die Verbindung zur Datenbank verwenden.

### Verwenden Sie einen SSH-Tunnel

Siehe unsere [Anleitung zum SSH-Tunneling](../ssh-tunnel.md).

### Zusätzliche JDBC-Verbindungsstring-Optionen

