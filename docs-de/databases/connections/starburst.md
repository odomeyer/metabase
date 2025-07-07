---
Titel: Starburst
Beschreibung: Erfahren Sie, wie Sie Metabase mit Ihrer Starburst- oder Trino-Datenbank verbinden, einschließlich Verbindungseinstellungen, SSL-Konfiguration und Datenbank-Synchronisationsoptionen.
---


# Starburst


> Dieser Treiber funktioniert auch für Verbindungen zu einer Trino-Datenbank.


Um eine Datenbankverbindung hinzuzufügen, klicken Sie auf das **Zahnradsymbol** oben rechts und navigieren Sie zu **Verwaltungseinstellungen** > **Datenbanken** > **Datenbank hinzufügen**.


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


Der Datenbank-Port (z.B. `8080`).


### Katalog


Starburt-Kataloge enthalten Schemata und referenzieren Datenquellen über einen Konnektor.


### Schema (optional)


Fügen Sie nur Tabellen hinzu, die aus einem bestimmten Schema stammen.


### Benutzername


Der Datenbank-Benutzername für das Konto, das Sie für die Verbindung zu Ihrer Datenbank verwenden möchten. Sie können mehrere Verbindungen zu derselben Datenbank einrichten, indem Sie verschiedene Benutzerkonten mit unterschiedlichen [Privilegien] verwenden(../users-roles-privileges.md).


### Passwort


Das Passwort für den Benutzernamen, den Sie für die Verbindung zur Datenbank verwenden.


### Verwenden Sie eine sichere Verbindung (SSL)


Siehe [SSL-Zertifikate](../ssl-certificates.md).


### Rolle (optional)


Geben Sie eine Rolle an, um die Standardrolle des Datenbankbenutzers zu überschreiben.


### Optimieren Sie vorbereitete Anweisungen


Erfordert Starburst Galaxy, Starburst Enterprise (Version 420-e oder höher), oder Trino (Version 418 oder höher).


### Zusätzliche JDBC-Verbindungsstring-Optionen


Sie können Optionen an die JDBC-Verbindungszeichenfolge anhängen. Trennen Sie die Optionen mit `&`, etwa so:


```
connection_timeout=1000&socket_timeout=300000
```


### Abfragen für einfache Erkundungen wiederholen


Schalten Sie diese Option **AUS**, wenn Sie auf **Ausführen** (die Abspieltaste) klicken möchten, bevor Sie eine [Zusammenfassen](../../questions/query-builder/summarizing-and-grouping.md) oder eine Filterauswahl anwenden.---
Titel: Starburst
Beschreibung: Erfahren Sie, wie Sie Metabase mit Ihrer Starburst- oder Trino-Datenbank verbinden, einschließlich Verbindungseinstellungen, SSL-Konfiguration und Datenbank-Synchronisationsoptionen.
---

# Starburst

> Dieser Treiber funktioniert auch für Verbindungen zu einer Trino-Datenbank.

Um eine Datenbankverbindung hinzuzufügen, klicken Sie auf das **Zahnradsymbol** oben rechts und navigieren Sie zu **Verwaltungseinstellungen** > **Datenbanken** > **Datenbank hinzufügen**.

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

Der Datenbank-Port (z.B. `8080`).

### Katalog

Starburt-Kataloge enthalten Schemata und referenzieren Datenquellen über einen Konnektor.

### Schema (optional)

Fügen Sie nur Tabellen hinzu, die aus einem bestimmten Schema stammen.

### Benutzername

Der Datenbank-Benutzername für das Konto, das Sie für die Verbindung zu Ihrer Datenbank verwenden möchten. Sie können mehrere Verbindungen zu derselben Datenbank einrichten, indem Sie verschiedene Benutzerkonten mit unterschiedlichen [Privilegien] verwenden(../users-roles-privileges.md).

### Passwort

Das Passwort für den Benutzernamen, den Sie für die Verbindung zur Datenbank verwenden.

### Verwenden Sie eine sichere Verbindung (SSL)

Siehe [SSL-Zertifikate](../ssl-certificates.md).

### Rolle (optional)

Geben Sie eine Rolle an, um die Standardrolle des Datenbankbenutzers zu überschreiben.

### Optimieren Sie vorbereitete Anweisungen

Erfordert Starburst Galaxy, Starburst Enterprise (Version 420-e oder höher), oder Trino (Version 418 oder höher).

### Zusätzliche JDBC-Verbindungsstring-Optionen

Sie können Optionen an die JDBC-Verbindungszeichenfolge anhängen. Trennen Sie die Optionen mit `&`, etwa so:

```
connection_timeout=1000&socket_timeout=300000
```

### Abfragen für einfache Erkundungen wiederholen

Schalten Sie diese Option **AUS**, wenn Sie auf **Ausführen** (die Abspieltaste) klicken möchten, bevor Sie eine [Zusammenfassen](../../questions/query-builder/summarizing-and-grouping.md) oder eine Filterauswahl anwenden.

