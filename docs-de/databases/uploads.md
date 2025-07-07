---
Titel: Einrichten von Daten-Uploads
---


# Einrichten von Daten-Uploads


Auf dieser Seite wird beschrieben, wie Administratoren Daten-Uploads einrichten können, damit andere Personen CSV-Dateien in Ihre Metabase hochladen können. Wie_man Daten hochlädt, sobald dies eingerichtet ist, finden Sie unter [Daten hochladen](../exploration-and-organization/uploads.md).


CSV-Daten in eine Metabase-Sammlung hochladen](../images/upload-to-collection.png)


Das Hochladen von CSV-Daten eignet sich am besten für die Ad-hoc-Analyse von Tabellenkalkulationsdaten. Wenn Sie viele Daten haben oder diese regelmäßig aktualisieren oder ergänzen müssen, empfehlen wir Ihnen, diese Daten direkt in eine Datenbank zu laden und dann Metabase mit dieser Datenbank zu verbinden.


## Upload-Einstellungen verwalten


Um die Upload-Einstellungen zu verwalten, können Admins die Tastenkombination cmd/ctrl + K drücken und nach "Einstellungen - Uploads" suchen, oder auf das **Zahnradsymbol oben rechts klicken und sich durch **Admin-Einstellungen** > **Einstellungen** > **Uploads** klicken.


## Datenbanken, die Uploads unterstützen


- [PostgreSQL](../databases/connections/postgresql.md)
- [MySQL](../Datenbanken/Verbindungen/mysql.md)
- [Redshift](../Datenbanken/Verbindungen/redshift.md)
- [ClickHouse](../databases/connections/clickhouse.md)


## Uploads einrichten


Es gibt ein paar Dinge, die Administratoren tun müssen, um CSV-Uploads zu unterstützen:


- [Verbinden Sie sich mit einer Datenbank unter Verwendung eines Datenbankbenutzerkontos mit Schreibzugriff](#connect-to-a-database-using-a-database-user-account-with-write-access). Auf diese Weise kann Metabase die hochgeladenen Daten irgendwo speichern.
- [Wählen Sie die Datenbank und das Schema aus, in denen Sie die hochgeladenen Daten speichern möchten](#select-the-database-and-schema-that-you-want-to-store-the-data-in).
- [(Optional) Geben Sie ein Präfix für die Metabase an, das den hochgeladenen Tabellen vorangestellt werden soll](#specify-a-prefix-for-metabase-to-prepend-to-the-uploaded-tables).
- [Personen zu einer Gruppe mit Ansichtsdaten hinzufügen und Abfragezugriff auf die Upload-Schema-Datenbank erstellen](#add-people-to-a-group-with-data-access-to-the-upload-schema).


## Verbinden mit einer Datenbank unter Verwendung eines Datenbank-Benutzerkontos mit Schreibzugriff


Um Daten in die Metabase hochzuladen, muss ein Administrator die Metabase mit einer Datenbank verbinden, die Uploads unterstützt, und zwar mit einem Datenbankbenutzerkonto, das Schreibrechte für diese Datenbank besitzt.


Sie können auch Daten in die Beispieldatenbank hochladen, die in der Metabase enthalten ist (eine H2-Datenbank). Wir empfehlen jedoch nicht, die Beispieldatenbank für Daten zu verwenden, die Sie aufbewahren möchten.


Weitere Informationen finden Sie unter:


- [Hinzufügen und Verwalten von Datenbanken](./connecting.md)
- [Datenbankbenutzer, -rollen und -privilegien](./users-roles-privileges.md#privileges-to-enable-uploads)


## Wählen Sie die Datenbank und das Schema aus, in dem Sie die Daten speichern möchten.


Wenn Metabase mit einer Datenbank über ein Datenbank-Benutzerkonto mit Schreibrechten verbunden ist, können Admins Uploads aktivieren, indem sie


- Klicken Sie auf das Symbol **Zahnrad** oben rechts auf der Startseite und navigieren Sie zu **Admin-Einstellungen** > **Einstellungen** > **Uploads**.
- Auswählen der Datenbank, die Metabase zum Speichern der Daten verwenden soll.


Wenn Personen eine CSV-Datei in eine Sammlung hochladen, wird Metabase:


- Eine Tabelle erstellen, um diese Daten in der Datenbank und dem Schema zu speichern, das der Administrator zum Speichern von Uploads ausgewählt hat.
- Erstellen Sie ein [Modell](../data-modeling/models.md), das die hochgeladene Tabelle umschließt, und speichern Sie dieses Modell in der Sammlung, in die die Person die CSV-Daten hochgeladen hat.


## Geben Sie ein Präfix für Metabase an, das den hochgeladenen Tabellen vorangestellt wird.


Admins können optional eine Textzeichenfolge angeben, die der Tabelle vorangestellt wird, die Metabase zum Speichern der hochgeladenen Daten erstellt.


## Personen zu einer Gruppe mit Datenzugriff auf das Upload-Schema hinzufügen


Um CSV-Dateien hochladen zu können, muss eine Person einer Gruppe angehören, die über den Zugriff **Daten anzeigen** mit der Berechtigung "Kann anzeigen" und **Abfragen erstellen** mit der Berechtigung Query builder oder höher auf das Schema verfügt, das Sie zum Speichern der hochgeladenen Daten ausgewählt haben. Siehe [groups](../people-and-groups/managing.md) und [data permissions](../permissions/data.md).
