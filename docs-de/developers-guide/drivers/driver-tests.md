---
Titel: Einreichen eines PR für einen neuen Fahrer
---


# Einreichen eines PR für einen neuen Treiber


Wenn Sie einen PR einreichen möchten, um ein Treiber-Plugin zum [Metabase Repo](https://github.com/metabase/metabase) hinzuzufügen (im Gegensatz zu einem separaten Repo), müssen Sie folgende Voraussetzungen erfüllen:


- Sie müssen in der Lage sein, Ihre Datenbank lokal mit Docker auszuführen.
- Stellen Sie sicher, dass Ihr Treiber die Kerntestsuite von Metabase besteht.


## Testen des Treibers


Um Ihren Treiber zu testen, müssen Sie Folgendes tun:


- Verschieben Sie Ihr Plugin in das Verzeichnis [`modules/drivers`](https://github.com/metabase/metabase/tree/master/modules/drivers) im Metabase-Repository.
- Fügen Sie _Testerweiterungen_ zu Ihrem Treiber hinzu.
- Bearbeiten Sie [`.github/workflows/drivers.yml` ](https://github.com/metabase/metabase/blob/master/.github/workflows/drivers.yml), um GitHub Actions mitzuteilen, wie ein Docker-Image für Ihre Datenbank eingerichtet wird und wie Tests darauf laufen.


## Hinzufügen von Testerweiterungen zu Ihrem Treiber


Testerweiterungen dienen dazu, neue Datenbanken zu erstellen und Daten für bestimmte _Datenbankdefinitionen_ zu laden. Metabase definiert eine große Anzahl von Tests, die automatisch gegen alle Treiber, einschließlich Ihres neuen Treibers, laufen.


Um die Testsuite mit Ihrem Treiber auszuführen, müssen Sie eine Reihe von Methodenimplementierungen für spezielle_Testerweiterungen_Multimethoden schreiben. Testerweiterungen dienen z. B. dazu, neue Datenbanken zu erstellen und Daten für_Datenbankdefinitionen_ zu laden.


Diese Testerweiterungen teilen Metabase mit, wie neue Datenbanken erstellt und mit Testdaten geladen werden sollen, und liefern Informationen darüber, was Metabase von der erstellten Datenbank erwarten kann. Testerweiterungen sind einfach zusätzliche Multimethoden, die nur von Tests verwendet werden. Wie die Multimethoden des Kerntreibers werden sie mit dem Treibernamen als Schlüsselwort ausgeführt, z.B. `:mysql`.


## Dateiorganisation


Testerweiterungen für einen Treiber befinden sich in der Regel in einem Namespace namens `metabase.test.data.<driver>`. Wenn Ihr Treiber für SQLite ist, sollten Ihre Dateien ungefähr so aussehen:


````clj
metabase/modules/drivers/sqlite/deps.edn ; <- deps gehören hierher
metabase/modules/drivers/sqlite/resources/metabase-plugin.yaml ; <- Plugin-Manifest
metabase/modules/drivers/sqilte/src/metabase/driver/sqlite.clj ; <- Haupttreiber-Namespace
```


Sie legen also ein neues Verzeichnis und eine neue Datei an, in denen Sie Ihre Texterweiterungsmethoden implementieren.


````clj
metabase/modules/drivers/sqlite/test/metabase/test/data/sqlite.clj ; <- test extensions
```


## Wo sind die Methoden der Testerweiterungen definiert?


Die Testerweiterungen der Metabase befinden sich im [`metabase.test.data.interface`](https://github.com/metabase/metabase/blob/master/test/metabase/test/data/interface.clj) Namespace. Wie die Kerntreibermethoden implementieren `:sql` und `:jdbc-sql` einige der Testerweiterungen selbst, definieren aber zusätzliche Methoden, die Sie implementieren müssen, um sie zu verwenden; siehe die [`metabase.test.data.sql`](https://github.com/metabase/metabase/blob/master/test/metabase/test/data/sql.clj)
und [`metabase.test.data.sql-jdbc`](https://github.com/metabase/metabase/blob/master/test/metabase/test/data/sql_jdbc.clj) Namespaces.


Sie müssen die folgenden Namespaces benötigen, die wie folgt verzweigt sind:


```clj
(require '[metabase.test.data.interface :as tx]) ; tx = Testerweiterungen
(require '[metabase.test.data.sql :as sql.tx]) ; sql Testerweiterungen
(require '[metabase.test.data.sql-jdbc :as sql-jdbc.tx])
```


## Registrierung der Testerweiterungen


Wie der Treiber selbst müssen Sie auch die Tatsache registrieren, dass Ihr Treiber über Testerweiterungen verfügt, damit Metabase nicht versuchen muss, sie ein zweites Mal zu laden. (Wenn sie noch nicht geladen sind, lädt Metabase sie bei Bedarf, indem sie nach einem Namespace mit dem Namen `metabase.test.data.<driver>` sucht, weshalb Sie diesem Namensmuster folgen müssen). Die Treiber `:sql` und `:sql-jdbc` haben ihre eigenen Sätze von Testerweiterungen, so dass Sie, je nachdem, welches Parent Sie für Ihren Treiber verwenden, Testerweiterungen mit registrieren:
