---
Titel: Migration zu einer Produktionsanwendungsdatenbank
redirect_from:
- /docs/latest/operations-guide/migrating-from-h2
- /docs/aktuell/operations-guide/manuelle-migrationen-ausführen
---


# Migration zu einer produktiven Anwendungsdatenbank


Auf dieser Seite wird beschrieben, wie Sie eine Metabase, die die integrierte Anwendungsdatenbank H2 verwendet, in eine produktionsfähige PostgreSQL-Instanz konvertieren. Weitere Informationen darüber, warum Sie Postgres als Anwendungs-DB verwenden sollten, finden Sie unter [How to run Metabase in production](https://www.metabase.com/learn/metabase-basics/administration/administration-and-operation/metabase-in-production).


Wenn Sie lieber zu Metabase Cloud wechseln möchten, lesen Sie [Migrate to Metabase Cloud](../cloud/migrate/guide.md).


## Die Anwendungsdatenbank von Metabase


Der Hauptunterschied zwischen einer lokalen Installation und einer Produktionsinstallation von Metabase ist die Anwendungsdatenbank. In dieser Anwendungsdatenbank werden alle Ihre Metabase-Daten gespeichert: Ihre Fragen, Dashboards, Sammlungen usw.


Metabase wird mit einer eingebetteten H2-Anwendungsdatenbank geliefert, die Sie in der Produktion nicht verwenden sollten. Der Grund für die Auslieferung von Metabase mit der H2-Datenbank liegt darin, dass wir möchten, dass die Benutzer Metabase auf ihrem lokalen Rechner starten und mit dem Stellen von Fragen spielen können.


Wenn Sie Metabase in der Produktion einsetzen möchten, müssen Sie eine produktionsreife Anwendungsdatenbank verwenden, um Ihre Anwendungsdaten zu speichern. Sie können jederzeit von der Standard-H2-Anwendungsdatenbank zu einer anderen wechseln. Wenn Sie jedoch planen, Metabase in der Produktion einzusetzen, ist es besser, je früher Sie auf eine produktive Anwendungsdatenbank migrieren. Wenn Sie Metabase weiterhin mit der Standard-H2-Anwendungsdatenbank ausführen und diese nicht regelmäßig sichern, kann die Anwendungsdatenbank beschädigt werden, und Sie könnten alle Fragen, Dashboards, Sammlungen und andere Metabase-Daten verlieren.


Der Migrationsprozess ist ein einmaliger Vorgang. Sie können das Migrationsskript von jedem Computer aus ausführen, auf dem sich die H2-Anwendungsdatenbankdatei befindet.


### Vermeiden Sie es, gleichzeitig zu migrieren und zu aktualisieren.


Ein wichtiger Punkt ist, dass die Version der Metabase, die Sie während des Migrationsprozesses verwenden, dieselbe sein muss. Das heißt, die Metabase, mit der Sie den Migrationsbefehl ausführen, muss dieselbe sein, die zuletzt zum Erstellen oder Aktualisieren der H2-Datei verwendet wurde, also dieselbe Version, die Sie auch in der Produktion verwenden werden. Erst _nach_ Abschluss der Migration sollten Sie ein Upgrade in Betracht ziehen.


Sie können sich auch dafür entscheiden, Metabase auf einem [Metabase Cloud](https://www.metabase.com/pricing/) Plan zu betreiben, der all diese Dinge für Sie erledigt. Wenn Sie bereits eine Metabase haben, finden Sie hier eine Anleitung für die [Migration zu Metabase Cloud](../cloud/migrate/guide.md).


## Unterstützte Datenbanken für die Speicherung Ihrer Metabase-Anwendungsdaten


Wir empfehlen die Verwendung von PostgreSQL für Ihre Anwendungsdatenbank.


- [PostgreSQL](https://www.postgresql.org/). Mindestversion: `12`. Postgres ist unsere bevorzugte Wahl für die Anwendungsdatenbank der Metabase.
- [MySQL](https://www.mysql.com/). Mindestversion: `8.0.17`. Erforderliche Einstellungen (die Standardeinstellungen sind): `utf8mb4_unicode_ci` Sortierung, `utf8mb4` Zeichensatz und `innodb_large_prefix=ON`.
- [MariaDB](https://mariadb.org/). Mindestversion: `10.4.0`. Erforderliche Einstellungen (die Standardeinstellungen sind): `utf8mb4_unicode_ci` Kollation, `utf8mb4` Zeichensatz, und `innodb_large_prefix=ON`.


## JAR: So migrieren Sie von H2 zu Ihrer Produktionsanwendungsdatenbank


> Sie müssen während des gesamten Migrationsprozesses dieselbe Version von Metabase verwenden.


Metabase bietet einen benutzerdefinierten Migrationsbefehl für die Migration zu einer neuen Anwendungsdatenbank. Gehen Sie folgendermaßen vor:


- [1. bestätigen Sie, dass Sie eine Verbindung zur Datenbank Ihrer Zielanwendung herstellen können](#1-confirm-that-you-can-connect-to-your-target-application-database)
