---
Titel: Konfigurieren der Metabase-Anwendungsdatenbank
redirect_from:
- /docs/latest/operations-guide/configuring-application-database
---


# Konfigurieren der Metabase-Anwendungsdatenbank


In der Anwendungsdatenbank speichert die Metabase Informationen über Benutzerkonten, Fragen, Dashboards und alle anderen Daten, die für die Ausführung der Metabase-Anwendung benötigt werden. Diese Anwendungsdatenbank unterscheidet sich von der Datenbank, in der Sie Ihre Daten speichern, die auch als Data Warehouse bezeichnet wird. Informationen zur Verbindung mit Ihrem Data Warehouse finden Sie unter [Verbindung mit einer unterstützten Datenbank](../databases/connecting.md).


Für die Produktion empfehlen wir die Verwendung von PostgreSQL als Metabase-Anwendungsdatenbank.


- [PostgreSQL](#postgresql) (empfohlen für die Produktion)
- [MySQL oder MariaDB](#mysql-or-mariadb) (funktioniert auch in der Produktion)
- [H2](#h2-application-database) (Standard für lokale Demos - in der Produktion VERMEIDEN)


Metabase liest die Informationen zur Verbindungskonfiguration, wenn die Anwendung startet. Sie können die Anwendungsdatenbank nicht ändern, während die Anwendung läuft.


## PostgreSQL


Wir empfehlen Ihnen die Verwendung von [PostgreSQL](https://www.postgresql.org/) für Ihre Metabase-Anwendungsdatenbank. Metabase unterstützt die älteste unterstützte Version von PostgreSQL bis zur letzten stabilen Version. Siehe [PostgreSQL-Versionen](https://www.postgresql.org/support/versioning/).


Sie können [Umgebungsvariablen](../configuring-metabase/environment-variables.md) verwenden, um eine Postgres-Datenbank als Anwendungsdatenbank von Metabase festzulegen. Die folgenden Befehle weisen Metabase zum Beispiel an, eine Postgres-Datenbank als Anwendungsdatenbank zu verwenden:


```sh
export MB_DB_TYPE=postgres
export MB_DB_DBNAME=Datenbank
exportieren MB_DB_PORT=5432
exportieren MB_DB_USER=<Benutzername>
export MB_DB_PASS=<Kennwort>
export MB_DB_HOST=localhost
java --add-opens java.base/java.nio=ALL-UNNAMED -jar metabase.jar
```


Metabase wird keine Postgres-Datenbank für Sie erstellen. Beispielbefehl zum Erstellen der Datenbank:


````sh
createdb --encoding=UTF8 -e metabase
```


Wenn Sie zusätzliche Parameter haben, unterstützt Metabase auch die Bereitstellung eines vollständigen JDBC-Verbindungsstrings:


```sh
export MB_DB_CONNECTION_URI="jdbc:postgresql://localhost:5432/metabase?user=<username>&password=<password>"
java --add-opens java.base/java.nio=ALL-UNNAMED -jar metabase.jar
```


Wenn Sie die Verbindungs-URI, den Benutzer und das Passwort getrennt vom JDBC-Verbindungsstring übergeben wollen (nützlich, wenn das Passwort Sonderzeichen enthält), können Sie die `MB_DB_CONNECTION_URI` [Umgebungsvariable](../configuring-metabase/environment-variables.md) in Kombination mit den Variablen `MB_DB_USER` und `MB_DB_PASS` verwenden:


``sh
export MB_DB_CONNECTION_URI="jdbc:postgresql://localhost:5432/metabase"
export MB_DB_USER=<Benutzername>
export MB_DB_PASS=<Kennwort>
java --add-opens java.base/java.nio=ALL-UNNAMED -jar metabase.jar
```


## MySQL oder MariaDB


Wir empfehlen [PostgreSQL](#postgresql), aber Sie können auch [MySQL](https://www.mysql.com/) oder [MariaDB](https://www.mariadb.org/) verwenden.


Die empfohlene Mindestversion ist MySQL 8.0.17 oder MariaDB 10.2.2. Der Zeichensatz "utf8mb4" ist erforderlich.
