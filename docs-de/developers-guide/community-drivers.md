---
Titel: Gemeinschaftliche Fahrer
redirect_from:
- /docs/latest/entwickler-leitfaden-treiber
- /docs/latest/entwickler-leitfaden/partner-und-gemeinschafts-treiber
---


# Community-Treiber


> Community-Treiber werden von der [Metabase Cloud](https://www.metabase.com/cloud/) nicht unterstützt.


Zusätzlich zu unseren [Offiziell unterstützten Treibern](../databases/connecting.md#connecting-to-supported-databases) erstellen und pflegen viele Leute Treiber für Datenbankintegrationen.


## So verwenden Sie einen Community-Treiber


So verwenden Sie einen Community-Treiber auf einer selbst gehosteten Metabase:


1. Laden Sie die neueste JAR-Datei aus dem Repository des Treibers herunter (die JAR-Dateien finden Sie im Abschnitt "Releases" des Repositorys).
2. Kopieren Sie die JAR-Datei in das Plugins-Verzeichnis in Ihrem Metabase-Verzeichnis (das Verzeichnis, in dem Sie die Metabase-JAR-Datei ausführen).


Sie können den Ort des Plugins-Verzeichnisses ändern, indem Sie die Umgebungsvariable `MB_PLUGINS_DIR` setzen.


## Community-Treiber


> Die Installation dieser Treiber erfolgt auf eigene Gefahr. Die Plugins werden als Teil Ihrer Metabase ausgeführt und haben Zugriff auf alle Funktionen Ihrer Metabase. Und da wir sie nicht überprüfen können, stellen wir sie auch nicht auf der [Metabase Cloud](https://www.metabase.com/cloud/) zur Verfügung.


Jeder kann einen Community-Treiber erstellen. Dies sind die derzeit bekannten Drittanbieter-Datenbanktreiber für Metabase.


| Datenbank | GitHub Stars | Letztes Release (_falls vorhanden_) |
| ------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------- |
| [CSV](https://github.com/Markenson/csv-metabase-driver) | ![GitHub stars](https://img.shields.io/github/stars/Markenson/csv-metabase-driver) | ![GitHub (Pre-)Release Date](https://img.shields.io/github/release-date-pre/Markenson/csv-metabase-driver) |
| [Databend](https://github.com/databendcloud/metabase-databend-driver) | ![GitHub stars](https://img.shields.io/github/stars/databendcloud/metabase-databend-driver) | ![GitHub (Pre-)Release Date](https://img.shields.io/github/release-date-pre/databendcloud/metabase-databend-driver) |
| [DB2](https://github.com/damienchambe/metabase-db2-driver) | ![GitHub stars](https://img.shields.io/github/stars/damienchambe/metabase-db2-driver) | ![Github (Pre-)Release Date](https://img.shields.io/github/release-date-pre/damienchambe/metabase-db2-driver) |
| [Dremio](https://github.com/Baoqi/metabase-dremio-driver) | ![GitHub stars](https://img.shields.io/github/stars/Baoqi/metabase-dremio-driver) | ![GitHub (Pre-)Release Date](https://img.shields.io/github/release-date-pre/Baoqi/metabase-dremio-driver) |
| [DuckDB](https://github.com/MotherDuck-Open-Source/metabase_duckdb_driver) | ![GitHub stars](https://img.shields.io/github/stars/MotherDuck-Open-Source/metabase_duckdb_driver) | ![GitHub (Pre-)Release Date](https://img.shields.io/github/release-date-pre/MotherDuck-Open-Source/metabase_duckdb_driver) |
| [Firebolt](https://github.com/firebolt-db/metabase-firebolt-driver) | ![GitHub stars](https://img.shields.io/github/stars/firebolt-db/metabase-firebolt-driver) | ![GitHub (Pre-)Release Date](https://img.shields.io/github/release-date-pre/firebolt-db/metabase-firebolt-driver) |
| [Firebird](https://github.com/evosec/metabase-firebird-driver) | ![GitHub stars](https://img.shields.io/github/stars/evosec/metabase-firebird-driver) | ![GitHub (Pre-)Release Date](https://img.shields.io/github/release-date-pre/evosec/metabase-firebird-driver) |
| [GreptimeDB](https://github.com/greptimeteam/greptimedb-metabase-driver) | ![GitHub stars](https://img.shields.io/github/stars/greptimeteam/greptimedb-metabase-driver) | ![GitHub (Pre-)Release Date](https://img.shields.io/github/release-date-pre/greptimeteam/greptimedb-metabase-driver) |
| [Hydra](https://www.hydra.so/blog-posts/2022-09-28-metabase-and-hydra) | Hydra-Verbindungen verwenden den offiziellen [Postgres-Treiber](../databases/connections/postgresql.md). | Nicht anwendbar. |
| [Impala](https://github.com/brenoae/metabase-impala-driver) | ![GitHub stars](https://img.shields.io/github/stars/brenoae/metabase-impala-driver) | ![GitHub (Pre-)Release Date](https://img.shields.io/github/release-date-pre/brenoae/metabase-impala-driver) |
| [Materialize](https://github.com/MaterializeInc/metabase-materialize-driver) | ![GitHub stars](https://img.shields.io/github/stars/MaterializeInc/metabase-materialize-driver) | ![GitHub (Pre-)Release Date](https://img.shields.io/github/release-date-pre/MaterializeInc/metabase-materialize-driver) |
| [Neo4j](https://github.com/StronkMan/metabase-neo4j-driver) | ![GitHub stars](https://img.shields.io/github/stars/StronkMan/metabase-neo4j-driver) | ![GitHub (Pre-)Release Date](https://img.shields.io/github/release-date-pre/StronkMan/metabase-neo4j-driver) |
| [Netsuite SuiteAnalytics Connect](https://github.com/ericcj/metabase-netsuite-driver) | ![GitHub stars](https://img.shields.io/github/stars/ericcj/metabase-netsuite-driver) | ![GitHub (Pre-)Release Date](https://img.shields.io/github/release-date-pre/ericcj/metabase-netsuite-driver) |
| [Peaka](https://github.com/peakacom/metabase-driver) | ![GitHub stars](https://img.shields.io/github/stars/peakacom/metabase-driver) | ![GitHub (Pre-)Release Date](https://img.shields.io/github/release-date-pre/peakacom/metabase-driver) |
