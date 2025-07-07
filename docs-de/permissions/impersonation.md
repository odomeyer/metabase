---
Titel: Impersonation access
---


# Impersonation-Berechtigungen


{% include plans-blockquote.html feature="Impersonation access" %}


> Momentan ist Impersonation Access nur für MySQL, PostgreSQL, Redshift, Snowflake und SQL Server verfügbar. Wenn Sie die Datenbank _Verbindungen_ umschalten wollen, je nachdem, wer eingeloggt ist, lesen Sie [Database routing](./database-routing.md).


> Wenn Sie Views in PostgresSQL verwenden, funktionieren die Sicherheitsrichtlinien auf Zeilenebene für Views nur in Postgres-Versionen 15 und höher.


Diese Seite behandelt die [View data](./data.md#view-data-permissions) Berechtigungsebene namens Impersonation.


Der **Impersonation-Zugang** ermöglicht es Administratoren, die Berechtigungen für die Datenansicht an Rollen in Ihrer Datenbank "auszulagern". Administratoren können Benutzerattribute mit datenbankdefinierten Rollen und deren Berechtigungen verknüpfen. Wenn eine Person einer Gruppe angehört, deren Berechtigung zum Anzeigen von Daten auf "Impersonation" gesetzt ist, kann die Person Daten auf der Grundlage der Berechtigungen anzeigen und abfragen, die der durch ihr Benutzerattribut angegebenen Rolle gewährt werden.


## Einrichten der Verbindungs-Impersonation


> Damit die Impersonation für Redshift-Datenbanken funktioniert, muss das Benutzerkonto, das Metabase für die [Verbindung zu Ihrer Redshift-Datenbank](../databases/connections/redshift.md) verwendet, ein Superuser sein, da Metabase in der Lage sein muss, den Befehl [SET SESSION AUTHORIZATION](https://docs.aws.amazon.com/redshift/latest/dg/r_SET_SESSION_AUTHORIZATION) auszuführen, der nur von einem Datenbank-Superuser ausgeführt werden kann.


Damit der Impersonation-Zugriff funktioniert, müssen Sie zunächst in Ihrer Datenbank Rollen einrichten, die Metabase verkörpern soll, und dann Metabase so konfigurieren, dass diese Rollen verkörpert werden, wenn Personen Daten anzeigen oder abfragen.


### Richten Sie in Ihrer Datenbank Rollen ein.


1. Erstellen Sie eine neue Rolle (in Redshift wäre dies ein neuer Benutzer).
2. Gewähren Sie dieser Rolle Berechtigungen.


Wie genau Sie eine neue Rolle in Ihrer Datenbank erstellen und dieser Rolle Rechte erteilen, müssen Sie in der Dokumentation Ihrer Datenbank nachlesen. Wir haben auch einige Dokumente über [Benutzer, Rollen und Privilegien](../databases/users-roles-privileges.md), die Ihnen den Einstieg erleichtern können.


### Richten Sie in Ihrer Metabase die Impersonation ein und geben Sie ein Benutzerattribut


1. **Erstellen Sie eine [neue Gruppe](../people-and-groups/managing.md#groups)**, oder wählen Sie eine bestehende Gruppe aus.


2. **Weisen Sie den Personen in dieser Gruppeein [Benutzerattribut](../people-and-groups/managing.md#adding-a-user-attribute) zu.** Sie werden dieses Benutzerattribut verwenden, um die Personen in dieser Gruppe mit einer Rolle zu verbinden, die Sie in Ihrer Datenbank erstellt haben. Wenn Sie zum Beispiel eine Rolle mit dem Namen "sales" in Ihrer Datenbank erstellt haben, die Zugriff auf eine Untergruppe von Tabellen hat, die für das Verkaufsteam relevant sind, würden Sie ein Benutzerattribut mit dem Namen "db_role" (oder wie immer Sie das Attribut nennen wollen) hinzufügen und der "db_role" der Person den Wert "sales" zuweisen. Der Wert des Attributs(in diesem Fall"sales" ) sollte mit dem Namen der Rolle in Ihrer Datenbank übereinstimmen. Nur in einigen Datenbanken wird zwischen Groß- und Kleinschreibung unterschieden, daher sollten Sie darauf achten, dass der Wert des Attributs und die Rolle in der Datenbank genau übereinstimmen.


3. **Wenden Sie den Impersonationszugriff auf diese Gruppe an. Drücken Sie Cmd/Ctrl + K, um die Befehlspalette aufzurufen. Suchen Sie nach**Berechtigungen**. Oder gehen Sie zu**Admin-Einstellungen** >**Berechtigungen** >**Daten**.


4. Wählen Sie die Datenbank, für die Sie Berechtigungen festlegen möchten.


5. Suchen Sie die Gruppe, die Sie mit der von Ihnen erstellten Datenbankrolle verknüpfen möchten. Wählen Sie unter der Einstellung **Daten anzeigen** für diese Gruppe die Option **Impersonation**.


6. Wählen Sie aus der Dropdown-Liste das Benutzerattribut aus, das Sie hinzugefügt haben und das der Rolle entspricht, die die Gruppe bei der Abfrage der Datenbank verwenden soll.


7. Speichern Sie Ihre Änderungen.


## Personen in einer Gruppe mit Impersonationszugriff auf Daten haben nicht unbedingt die gleichen Rechte.


Die Metabase verwendet die Rolle, die Sie im Benutzerattribut für jede Person angeben. Wenn Sie z. B. das Attribut "db_role" für Impersonation auswählen, könnte die "db_role" einer Person "sales" sein, die einer anderen Person "engineering" oder ein anderer Wert, der einer gültigen Rolle in Ihrer Datenbank entspricht.


## Verwenden Sie Impersonation, um SQL-Zugriff auf Zeilenebene einzurichten.


Sie können Impersonation verwenden, um Personen Zugriff auf den Native/SQL-Editor zu gewähren und gleichzeitig ihren Zugriff auf Daten auf der Grundlage einer bestimmten Datenbankrolle einzuschränken. Und zwar nicht nur auf Tabellenebene, sondern auch auf Zeilenebene - oder wie immer Sie den Zugriff für diese Rolle in Ihrer Datenbank definieren. Sie können die Impersonation verwenden, um einen Daten-Sandbox-ähnlichen Zugriff auf Ihre Daten einzurichten und gleichzeitig den SQL-Editor zur Abfrage dieser Daten zu verwenden. Der Unterschied besteht darin, dass Sie _anstelle einer Daten-Sandbox in der Metabase diese Sicherheit auf Zeilenebene über die einer Rolle in Ihrer Datenbank gewährten Berechtigungen einrichten müssen._


Wenn Sie stattdessen einer Gruppe SQL-Zugriff auf einige, aber nicht alle Schemata oder Tabellen in dieser Datenbank gewähren möchten, können Sie eine zusätzliche Rolle in Ihrer Datenbank erstellen, die nur eine Teilmenge dieser Tabellen - oder sogar einen spezifischen Zugriff auf Zeilenebene - umfasst, und dann die Personifizierungsfunktion von Metabase verwenden, um ein Benutzerattribut mit dieser Rolle zu verknüpfen. Im Wesentlichen nimmt Metabase das Benutzerattribut und übergibt dieses Attribut als Zeichenkette an einen "SET ROLE"- oder "USE ROLE" -Befehl für die Datenbank, bevor Metabase die Abfrage ausführt.
