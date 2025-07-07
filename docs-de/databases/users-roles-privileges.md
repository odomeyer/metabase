---
Titel: Datenbankbenutzer, Rollen und Berechtigungen
---


# Datenbankbenutzer, Rollen und Rechte


Es wird empfohlen, einen "metabase" -Datenbankbenutzer mit den folgenden Datenbankrollen anzulegen:


- [` analytics` für Lesezugriff](#minimum-database-privileges) auf alle Schemata oder Tabellen, die für die Analyse verwendet werden.
- Optional [` metabase_actions` für Schreibzugriff](#privileges-to-enable-actions) auf Tabellen, die für Metabase-Aktionen verwendet werden.
- Optional [`metabase_model_persistence` für den Schreibzugriff](#privileges-to-enable-model-persistence) auf das Schema, das für die Metabase-Modellpersistenz verwendet wird.


Die Bündelung von Privilegien in Rollen, die auf Anwendungsfällen basieren, macht es einfacher, Privilegien in der Zukunft zu verwalten (insbesondere in [Multi-Tenant-Situationen](#multi-tenant-permissions)). Zum Beispiel könnten Sie:


- Verwenden Sie die gleiche "analytics" -Rolle für andere BI-Tools in Ihrem [data stack](https://www.metabase.com/learn/grow-your-data-skills/data-fundamentals/data-landscape), die nur Lesezugriff auf die Analysetabellen in Ihrer Datenbank benötigen.
- Entziehen Sie den Schreibzugriff für `metabase_model_persistence`, ohne den Schreibzugriff für `metabase_actions` zu beeinträchtigen.


## Minimale Datenbankprivilegien


Um Ihre Tabellen in der Metabase anzeigen und abfragen zu können, müssen Sie dem Datenbankbenutzer der Metabase:


-CONNECT" auf Ihre Datenbank zugreifen.
-SELECT" -Rechte für alle Schemata oder Tabellen, die Sie in der Metabase verwenden wollen.


Um diese Privilegien zu organisieren (und die Wartung später zu erleichtern):


- Erstellen Sie eine Datenbankrolle namens "analytics".
- Erstellen Sie einen Datenbankbenutzer namens "metabase".
- Fügen Sie "metabase" zur Rolle "analytics" hinzu.
- Fügen Sie der Rolle "analytics" Berechtigungen hinzu.


Wenn Sie zum Beispiel eine Postgres-Datenbank verwenden, melden Sie sich als Administrator an und führen die SQL-Anweisungen aus:


```sql
-- Erstellen Sie eine Rolle namens "analytics".
CREATE ROLE analytics WITH LOGIN;


-- Fügen Sie der Rolle das Privileg CONNECT hinzu.
GRANT CONNECT ON DATABASE "your_database" TO analytics;


-- Erstellen Sie einen Datenbankbenutzer namens "metabase".
CREATE USER metabase WITH PASSWORD "your_password";


-- Geben Sie dem metabase-Benutzer die Rolle.
GRANT analytics TO metabase;


-- Fügen Sie der Rolle Abfrageberechtigungen hinzu (Optionen 1-4):


-- Option 1: Entfernen Sie den Kommentar in der Zeile unten, um Benutzern mit der Rolle analytics die Abfrage ALLER DATEN zu ermöglichen (In Postgres 14 oder höher. Siehe [Predefined Roles](https://www.postgresql.org/docs/current/predefined-roles.html#PREDEFINED-ROLES)).
-- GRANT pg_read_all_data TO analytics;


-- Option 2: Entfernen Sie den Kommentar in der folgenden Zeile, damit Benutzer mit der Rolle analytics alle Daten in der DATENBANK abfragen können.
-- GRANT USAGE ON DATABASE "your_schema" TO analytics;
-- GRANT SELECT ON DATABASE "Ihr_Schema" TO analytics; -- GRANT SELECT ON DATABASE "Ihr_Schema" TO analytics;


-- Option 3: Entfernen Sie den Kommentar in der folgenden Zeile, damit Benutzer mit der Rolle analytics alles in einem bestimmten SCHEMA abfragen können.
-- GRANT USAGE ON SCHEMA "Ihr_Schema" TO analytics;
-- GRANT SELECT ON ALL TABLES IN SCHEMA "your_schema" TO analytics;


-- Option 4: Entfernen Sie den Kommentar in der folgenden Zeile, damit Benutzer mit der Rolle analytics alles in einer bestimmten TABELLE abfragen können.
-- GRANT USAGE ON SCHEMA "dein_schema" TO analytics;
-- GRANT SELECT ON "ihre_tabelle" IN SCHEMA "ihr_schema" TO analytics;
```


Je nachdem, wie Sie Metabase verwenden, können Sie auch zusätzliche Rechte gewähren:
