---
Titel: ClickHouse
Beschreibung: Erfahren Sie, wie Sie Metabase mit Ihrer ClickHouse-Datenbank verbinden, einschließlich Verbindungseinstellungen, Datenbankauswahl und SSL-Konfiguration.
---


# ClickHouse


Um eine Datenbankverbindung hinzuzufügen, klicken Sie auf das **Zahnradsymbol** oben rechts, und navigieren Sie zu **Verwaltungseinstellungen** > **Datenbanken** > **Datenbank hinzufügen**.


Sie können diese Einstellungen jederzeit bearbeiten. Denken Sie nur daran, Ihre Änderungen zu speichern.


## Verbindung und Synchronisierung


Nachdem Sie eine Verbindung zu einer Datenbank hergestellt haben, sehen Sie den Abschnitt "Verbindung und Synchronisierung", der den aktuellen Verbindungsstatus und Optionen zur Verwaltung Ihrer Datenbankverbindung anzeigt.


Hier können Sie [das Datenbankschema synchronisieren und Feldwerte neu scannen](../sync-scan.md) und Verbindungsdetails bearbeiten.


## Verbindungsdetails bearbeiten


Um auf Ihre Datenbankverbindungseinstellungen zuzugreifen oder sie zu ändern, klicken Sie auf die Schaltfläche **Verbindungsdetails bearbeiten**.


### Anzeigename


Der Anzeigename für die Datenbank in der Metabase-Schnittstelle.


### Host


Die IP-Adresse Ihrer Datenbank (z. B. `98.137.149.56`) oder ihr Domänenname (z. B. `name.datenbank.com`).


### Anschluss


Der Datenbank-Port (z.B. `8123`).


### Benutzername


Der Datenbank-Benutzername für das Konto, das Sie für die Verbindung zu Ihrer Datenbank verwenden möchten. Sie können mehrere Verbindungen zu derselben Datenbank einrichten, indem Sie verschiedene Benutzerkonten mit unterschiedlichen [Privilegien] verwenden(../users-roles-privileges.md).


### Passwort


Das Passwort für den Benutzernamen, den Sie für die Verbindung zur Datenbank verwenden.


### Datenbanken


Geben Sie alle Datenbanken an, die Sie in Metabase abfragen möchten. Trennen Sie die Datenbanken mit einem Leerzeichen, z.B. `db1 db2 db3`.


### Scan all databases


Scannen Sie alle Tabellen aller verfügbaren ClickHouse-Datenbanken mit Ausnahme der Systemdatenbanken.


### Verwenden Sie eine sichere Verbindung (SSL)


Siehe [SSL-Zertifikate](../ssl-certificates.md).


### Verwenden Sie einen SSH-Tunnel


Wenn eine direkte Verbindung zu Ihrer Datenbank nicht möglich ist, können Sie einen SSH-Tunnel verwenden. Siehe [SSH-Tunneling](../ssh-tunnel.md).


### Systemweite Proxy-Einstellungen deaktivieren


Die systemweiten Proxy-Einstellungen sind standardmäßig deaktiviert. Sie können sie mit diesem Schalter deaktivieren.


### ClickHouse-Einstellungen (Komma-getrennt)


Hier können Sie eine Zeichenkette hinzufügen, um zusätzliche ClickHouse-Einstellungen anzugeben. Trennen Sie die Einstellungen mit einem Komma, etwa so:


```
allow_experimental_analyzer=1,max_result_rows=100
```


### Maximal offene HTTP-Verbindungen im JDBC-Treiber (Standard: 100)


Sie können die Anzahl der HTTP-Verbindungen im JDBC-Treiber begrenzen, der für die Verbindung zwischen Metabase und ClickHouse verwendet wird.---
Titel: ClickHouse
Beschreibung: Erfahren Sie, wie Sie Metabase mit Ihrer ClickHouse-Datenbank verbinden, einschließlich Verbindungseinstellungen, Datenbankauswahl und SSL-Konfiguration.
---

# ClickHouse

Um eine Datenbankverbindung hinzuzufügen, klicken Sie auf das **Zahnradsymbol** oben rechts, und navigieren Sie zu **Verwaltungseinstellungen** > **Datenbanken** > **Datenbank hinzufügen**.

Sie können diese Einstellungen jederzeit bearbeiten. Denken Sie nur daran, Ihre Änderungen zu speichern.

## Verbindung und Synchronisierung

Nachdem Sie eine Verbindung zu einer Datenbank hergestellt haben, sehen Sie den Abschnitt "Verbindung und Synchronisierung", der den aktuellen Verbindungsstatus und Optionen zur Verwaltung Ihrer Datenbankverbindung anzeigt.

Hier können Sie [das Datenbankschema synchronisieren und Feldwerte neu scannen](../sync-scan.md) und Verbindungsdetails bearbeiten.

## Verbindungsdetails bearbeiten

Um auf Ihre Datenbankverbindungseinstellungen zuzugreifen oder sie zu ändern, klicken Sie auf die Schaltfläche **Verbindungsdetails bearbeiten**.

### Anzeigename

Der Anzeigename für die Datenbank in der Metabase-Schnittstelle.

### Host

Die IP-Adresse Ihrer Datenbank (z. B. `98.137.149.56`) oder ihr Domänenname (z. B. `name.datenbank.com`).

### Anschluss

Der Datenbank-Port (z.B. `8123`).

### Benutzername

Der Datenbank-Benutzername für das Konto, das Sie für die Verbindung zu Ihrer Datenbank verwenden möchten. Sie können mehrere Verbindungen zu derselben Datenbank einrichten, indem Sie verschiedene Benutzerkonten mit unterschiedlichen [Privilegien] verwenden(../users-roles-privileges.md).

### Passwort

Das Passwort für den Benutzernamen, den Sie für die Verbindung zur Datenbank verwenden.

### Datenbanken

Geben Sie alle Datenbanken an, die Sie in Metabase abfragen möchten. Trennen Sie die Datenbanken mit einem Leerzeichen, z.B. `db1 db2 db3`.

### Scan all databases

Scannen Sie alle Tabellen aller verfügbaren ClickHouse-Datenbanken mit Ausnahme der Systemdatenbanken.

### Verwenden Sie eine sichere Verbindung (SSL)

Siehe [SSL-Zertifikate](../ssl-certificates.md).

### Verwenden Sie einen SSH-Tunnel

Wenn eine direkte Verbindung zu Ihrer Datenbank nicht möglich ist, können Sie einen SSH-Tunnel verwenden. Siehe [SSH-Tunneling](../ssh-tunnel.md).

### Systemweite Proxy-Einstellungen deaktivieren

Die systemweiten Proxy-Einstellungen sind standardmäßig deaktiviert. Sie können sie mit diesem Schalter deaktivieren.

### ClickHouse-Einstellungen (Komma-getrennt)

Hier können Sie eine Zeichenkette hinzufügen, um zusätzliche ClickHouse-Einstellungen anzugeben. Trennen Sie die Einstellungen mit einem Komma, etwa so:

```
allow_experimental_analyzer=1,max_result_rows=100
```

### Maximal offene HTTP-Verbindungen im JDBC-Treiber (Standard: 100)

Sie können die Anzahl der HTTP-Verbindungen im JDBC-Treiber begrenzen, der für die Verbindung zwischen Metabase und ClickHouse verwendet wird.

