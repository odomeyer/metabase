---
Titel: PostgreSQL
redirect_from:
- /docs/latest/administration-guide/databases/postgresql
---


# PostgreSQL


> Diese Seite behandelt die Verbindung zu PostgreSQL als _Data Warehouse_. Zur Verwendung von PostgreSQL als_Anwendungsdatenbank der Metabase siehe [Konfigurieren der Metabase-Anwendungsdatenbank](../../installation-and-operation/configuring-application-database.md).


Um eine Datenbankverbindung hinzuzufügen, klicken Sie auf das **Zahnradsymbol** oben rechts, und navigieren Sie zu **Verwaltungseinstellungen** > **Datenbanken** > **Datenbank hinzufügen**.


Füllen Sie die Felder für diese Datenbank aus, und klicken Sie unten auf**Änderungen speichern**.


## Unterstützte Versionen


Metabase unterstützt die älteste unterstützte Version von PostgreSQL bis zur letzten stabilen Version. Siehe [PostgreSQL-Versionen](https://www.postgresql.org/support/versioning/).


## Verbindung zur Supabase herstellen


Um eine Verbindung zu einer Supabase-Datenbank herzustellen, wählen Sie PostgreSQL. Weitere Details finden Sie in den [Supabase docs](https://supabase.com/docs/guides/database/metabase).


## Verbindung und Synchronisierung


Nachdem Sie eine Verbindung zu einer Datenbank hergestellt haben, sehen Sie den Abschnitt "Verbindung und Synchronisierung", der den aktuellen Verbindungsstatus und Optionen zur Verwaltung Ihrer Datenbankverbindung anzeigt.


Hier können Sie [das Datenbankschema synchronisieren und Feldwerte neu scannen](../sync-scan.md) und Verbindungsdetails bearbeiten.


## Verbindungsdetails bearbeiten


Sie können diese Einstellungen jederzeit ändern. Denken Sie nur daran, Ihre Änderungen zu speichern.


### Anzeigename


Der Anzeigename für die Datenbank in der Metabase-Schnittstelle.


### Host


Die IP-Adresse Ihrer Datenbank oder ihr Domänenname (z. B. esc.mydatabase.com).


### Anschluss


Der Datenbank-Port. Z.B. 5432.


### Datenbankname


Der Name der Datenbank, mit der Sie sich verbinden.


### Benutzername


Der Datenbank-Benutzername für das Konto, das Sie für die Verbindung zu Ihrer Datenbank verwenden möchten. Sie können mehrere Verbindungen zu derselben Datenbank einrichten, indem Sie verschiedene Benutzerkonten mit unterschiedlichen [Privilegien] verwenden(../users-roles-privileges.md).


### Passwort


Das Passwort für den Benutzernamen, den Sie für die Verbindung zur Datenbank verwenden.


### Verwenden Sie einen Authentifizierungsanbieter


{% include plans-blockquote.html feature="Authentifizierung mit einem Anbieter" %}


Anstelle eines Passworts können Sie sich auch mit einem unterstützten Anbieter authentifizieren.


Nur für selbst gehostete Pro- und Enterprise-Tarife.


#### Azure Managed Identity


Um Azure Managed Identity zu nutzen, müssen Sie Ihre [Client-ID](https://learn.microsoft.com/en-us/previous-versions/azure/postgresql/single-server/how-to-connect-with-managed-identity#retrieving-the-access-token-from-azure-instance-metadata-service) eingeben.


#### Oauth


Um Oauth als Anbieter zu verwenden, müssen Sie Ihre:---
Titel: PostgreSQL
redirect_from:
- /docs/latest/administration-guide/databases/postgresql 
---

# PostgreSQL

>  Diese Seite behandelt die Verbindung zu PostgreSQL als _Data Warehouse_. Zur Verwendung von PostgreSQL als_Anwendungsdatenbank der Metabase siehe [Konfigurieren der Metabase-Anwendungsdatenbank](../../installation-and-operation/configuring-application-database.md).

Um eine Datenbankverbindung hinzuzufügen, klicken Sie auf das **Zahnradsymbol** oben rechts, und navigieren Sie zu **Verwaltungseinstellungen** > **Datenbanken** > **Datenbank hinzufügen**.

Füllen Sie die Felder für diese Datenbank aus, und klicken Sie unten auf**Änderungen speichern**.

## Unterstützte Versionen

Metabase unterstützt die älteste unterstützte Version von PostgreSQL bis zur letzten stabilen Version. Siehe [PostgreSQL-Versionen](https://www.postgresql.org/support/versioning/).

## Verbindung zur Supabase herstellen

Um eine Verbindung zu einer Supabase-Datenbank herzustellen, wählen Sie PostgreSQL. Weitere Details finden Sie in den [Supabase docs](https://supabase.com/docs/guides/database/metabase).

## Verbindung und Synchronisierung

Nachdem Sie eine Verbindung zu einer Datenbank hergestellt haben, sehen Sie den Abschnitt "Verbindung und Synchronisierung", der den aktuellen Verbindungsstatus und Optionen zur Verwaltung Ihrer Datenbankverbindung anzeigt.

Hier können Sie [das Datenbankschema synchronisieren und Feldwerte neu scannen](../sync-scan.md) und Verbindungsdetails bearbeiten.

## Verbindungsdetails bearbeiten

Sie können diese Einstellungen jederzeit ändern. Denken Sie nur daran, Ihre Änderungen zu speichern.

### Anzeigename

Der Anzeigename für die Datenbank in der Metabase-Schnittstelle.

### Host

Die IP-Adresse Ihrer Datenbank oder ihr Domänenname (z. B. esc.mydatabase.com).

### Anschluss

Der Datenbank-Port. Z.B. 5432.

### Datenbankname

Der Name der Datenbank, mit der Sie sich verbinden.

### Benutzername

Der Datenbank-Benutzername für das Konto, das Sie für die Verbindung zu Ihrer Datenbank verwenden möchten. Sie können mehrere Verbindungen zu derselben Datenbank einrichten, indem Sie verschiedene Benutzerkonten mit unterschiedlichen [Privilegien] verwenden(../users-roles-privileges.md).

### Passwort

Das Passwort für den Benutzernamen, den Sie für die Verbindung zur Datenbank verwenden.

### Verwenden Sie einen Authentifizierungsanbieter

{% include plans-blockquote.html feature="Authentifizierung mit einem Anbieter" %}

Anstelle eines Passworts können Sie sich auch mit einem unterstützten Anbieter authentifizieren.

Nur für selbst gehostete Pro- und Enterprise-Tarife.

#### Azure Managed Identity

Um Azure Managed Identity zu nutzen, müssen Sie Ihre [Client-ID](https://learn.microsoft.com/en-us/previous-versions/azure/postgresql/single-server/how-to-connect-with-managed-identity#retrieving-the-access-token-from-azure-instance-metadata-service) eingeben.

#### Oauth

Um Oauth als Anbieter zu verwenden, müssen Sie Ihre:

