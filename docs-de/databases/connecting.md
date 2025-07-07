---
Titel: Hinzufügen und Verwalten von Datenbanken
redirect_from:
- /docs/latest/administration-guide/01-managing-databases
- /docs/latest/databases/connections/sql-server
- /docs/latest/administrationshandbuch/datenbanken/h2
- /docs/latest/databases/connections/h2
- /docs/aktuell/datenbanken/verbindungen
---


# Hinzufügen und Verwalten von Datenbanken


Verbinden Sie die Metabase mit Ihren Datenquellen.


## Hinzufügen einer Datenbankverbindung


Um eine Datenbankverbindung hinzuzufügen, klicken Sie auf das**Zahnradsymbol** oben rechts, und navigieren Sie zu**Admin-Einstellungen** >**Datenbanken** >**Datenbank hinzufügen**.


Füllen Sie die Felder für diese Datenbank aus, und klicken Sie unten auf**Änderungen speichern**.


Die Verbindungseinstellungen unterscheiden sich von Datenbank zu Datenbank. Um eine Liste der für Ihre Datenbank verfügbaren Verbindungseinstellungen zu erhalten, klicken Sie auf den unten stehenden Link zu Ihrer Datenbank.


## Verbindung zu unterstützten Datenbanken herstellen


Für die unten aufgeführten Datenbanken gibt es offizielle Treiber, die vom Metabase-Team gepflegt werden. Kunden mit [Pro und Enterprise](https://www.metabase.com/pricing/) erhalten offiziellen Support. Für jede Datenbank unterstützt Metabase die älteste unterstützte Version bis zur neuesten stabilen Version.


- [Athena](./connections/athena.md)
- [BigQuery](./connections/bigquery.md) (Google Cloud Platform)
- [ClickHouse](./connections/clickhouse.md)
- [Databricks](./connections/databricks.md)
- [Druid](./connections/druid.md)
- [MongoDB](./Verbindungen/mongodb.md)
- [MariaDB](./connections/mariadb.md)
- [MySQL](./Verbindungen/mysql.md)
- [Oracle](./connections/oracle.md)
- [PostgreSQL](./Verbindungen/postgresql.md)
- [Presto](./connections/presto.md)
- [Redshift (Amazon Web Services)](./connections/redshift.md)
- [Snowflake](./connections/snowflake.md)
- [SparkSQL](./connections/sparksql.md)
- [SQL Server](./Verbindungen/sql-server.md)
- [SQLite](./connections/sqlite.md)
- [Starburst](./connections/starburst.md)
- [Vertica](./connections/vertica.md)


Wenn Ihre Datenbank hier nicht aufgeführt ist, sehen Sie unter [Community-Treiber](../developers-guide/community-drivers.md) nach.


Seit der Version 46.6.4unterstützt Metabase [keine H2-Verbindungen mehr](https://www.metabase.com/blog/vulnerability-post-mortem). Metabase wird jedoch weiterhin mit einer H2-Datenbank ausgeliefert, um eine eingebettete Anwendungsdatenbank einzubinden und einige Beispieldaten bereitzustellen.


## Verbinden mit Datenbanken, die von einem Cloud-Anbieter bereitgestellt werden


Für anbieterspezifische Verbindungsdetails, wie z. B. die Verbindung zu einem PostgreSQL Data Warehouse auf RDS:


- [AWS's Relational Database Service (RDS)](./connections/aws-rds.md)


## Erteilen von Datenbankprivilegien


Damit Metabase eine Verbindung zu Ihrer Datenbank herstellen, eine Abfrage durchführen oder in Ihre Datenbank schreiben kann, müssen Sie Metabase ein Datenbankbenutzerkonto mit den richtigen Datenbankprivilegien zuweisen. Siehe [Datenbankrollen, Benutzer und Privilegien](./users-roles-privileges.md).


## Synchronisieren und Scannen von Datenbanken
