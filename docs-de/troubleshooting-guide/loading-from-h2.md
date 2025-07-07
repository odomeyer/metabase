---
Titel: Verwendung oder Migration von einer H2-Anwendungsdatenbank
---


# Verwendung oder Migration von einer H2-Anwendungsdatenbank


Sie haben Metabase installiert, aber:


- Sie versuchen, die Anwendungsdatenbank von H2 auf eine andere Datenbank zu migrieren, und dabei ist etwas schiefgegangen,
- Sie versuchen eher ein Downgrade als ein Upgrade,
- Metabase protokolliert eine "liquibase" -Fehlermeldung, wenn Sie versuchen, es auszuführen,
- Metabase protokolliert eine andere Fehlermeldung, in der "H2" oder "h2" erwähnt wird, während sie ausgeführt wird, oder
- Sie arbeiten mit Windows 10 und erhalten eine Warnung bezüglich der Dateiberechtigungen.


## Verwenden Sie derzeit H2 als Anwendungsdatenbank?


**Ursache:** Metabase speichert Informationen über Benutzer, Fragen usw. in einer eigenen Datenbank, der "Anwendungsdatenbank" oder kurz "App-Datenbank". Standardmäßig verwendet Metabase H2 für die Anwendungsdatenbank, aber wir empfehlen dies nicht für die Produktion - da es sich um eine On-Disk-Datenbank handelt, ist sie empfindlich gegenüber Dateisystemfehlern, z. B. wenn ein Laufwerk beschädigt ist oder eine Datei nicht ordnungsgemäß gespült wurde.


**Folgende Schritte sind zu unternehmen:**


1. Um zu überprüfen, was Sie als Anwendungsdatenbank verwenden, gehen Sie zu **Admin Panel**, öffnen Sie die Registerkarte **Troubleshooting**, scrollen Sie nach unten zu "Diagnostic Info" und suchen Sie in dem angezeigten JSON nach dem Schlüssel "application-database".
2. Siehe [Migration von H2](../installation-and-operation/migrating-from-h2.md) für Anweisungen zur Migration zu einer robusteren Anwendungsdatenbank.


## Versuchen Sie, die Anwendungsdatenbank von H2 auf etwas anderes zu migrieren?


**Ursache:** Sie versuchen, die Anwendungsdatenbank von H2 zu einer Produktionsdatenbank wie PostgreSQL oder MySQL/MariaDB zumigrieren(../installation-and-operation/migrating-from-h2.md), indem Sie den Befehl "load-from-h2" verwenden, aber dies ist fehlgeschlagen, weil der Dateiname der Datenbank nicht korrekt ist:


```
Der Befehl ist mit einer Ausnahme fehlgeschlagen: Nicht unterstützte Datenbank-Dateiversion oder ungültiger Datei-Header in der Datei <YUR FILENAME>
```

**Zu unternehmende Schritte:**


1. Erstellen Sie eine Kopie der exportierten H2-Datenbank (siehe [Sichern der Metabase-Anwendungsdaten][backup]). Fahren Sie nicht fort, bevor Sie dies getan haben, falls etwas schief geht.


2. Vergewissern Sie sich, dass die exportierte H2-Datenbankdatei "metabase.db.mv.db" heißt.


3. H2 fügt dem Datenbankpfad, den Sie in der Befehlszeile angeben, automatisch die Erweiterung ".mv.db" hinzu. Stellen Sie also sicher, dass der Pfad zur DB-Datei, den Sie dem Befehl übergeben ,nicht die Erweiterung ".mv.db" enthält. Wenn Sie zum Beispiel eine Anwendungsdatenbank exportiert haben und die Daten aus dieser H2-Datenbank in eine PostgreSQL-Datenbank laden wollen, indem Sie ` load-from-h2` verwenden, wird Ihr Befehl etwa so aussehen:


```
export MB_DB_TYPE=postgres
export MB_DB_DBNAME=Datenbank
exportieren MB_DB_PORT=5432
exportieren MB_DB_USER=<Benutzername>
export MB_DB_PASS=<Kennwort>
export MB_DB_HOST=localhost
java --add-opens java.base/java.nio=ALL-UNNAMED -jar metabase.jar load-from-h2 /path/to/metabase.db # .mv.db nicht einbeziehen
```


Wenn Sie eine [Pro- oder Enterprise-Version von Metabase][enterprise] verwenden, können Sie mit [serialization][serialization-docs] einen Snapshot Ihrer Anwendungsdatenbank erstellen. Die Serialisierung ist nützlich, wenn Sie in einer neuen Metabase-Instanz [Fragen und Dashboards][serialization-learn]vorladen möchten.


## Versuchen Sie ein Downgrade?


**Ursache:** Metabase unterstützt kein Downgrade (d. h. die Rückkehr zu einer früheren Version der Anwendung).


**Zu ergreifende Schritte:**


1. Schalten Sie die Metabase aus.
2. Stellen Sie die Sicherungskopie der App-Datenbank wieder her, die Sie vor dem Upgrade oder Downgrade erstellt haben.
3. Stellen Sie die JAR-Datei oder den Container der älteren Version wieder her, zu der Sie zurückkehren möchten.
4. Starten Sie die Metabase neu.


## Ist die Anwendungsdatenbank gesperrt?


**Ursache:** Manchmal kann Metabase nicht gestartet werden, weil eine App-Datenbanksperre bei einem früheren Lauf nicht ordnungsgemäß aufgehoben wurde. Die Fehlermeldung sieht in etwa so aus:


```
liquibase.exception.DatabaseException: liquibase.exception.LockException: Konnte keine Änderungsprotokollsperre erhalten.
```


**Zu unternehmende Schritte:**


1. Öffnen Sie eine Shell auf dem Server, auf dem Metabase installiert ist, und heben Sie die Sperren manuell auf, indem Sie Folgendes ausführen:


```
java --add-opens java.base/java.nio=ALL-UNNAMED -jar metabase.jar migrate release-locks
```


2. Starten Sie nach Abschluss dieses Befehls Ihre Metabase-Instanz normal neu(_ohne_ das Flag "migrate release-locks" ).

## Ist die Datenbank der Anwendung beschädigt?


**Ursache:** H2 ist weniger zuverlässig als produktionsreife Datenbankmanagementsysteme, und manchmal wird die Datenbank selbst beschädigt. Dies kann zum Verlust von Daten in der App-Datenbank führen, kann aber _nicht_ Daten in den Datenbanken beschädigen, mit denen Metabase verbunden ist.


**Zu ergreifende Maßnahmen:** Die Fehlermeldungen können variieren, je nachdem, wie die App-Datenbank beschädigt wurde, aber in den meisten Fällen wird in der Protokollmeldung ` h2` erwähnt. Ein typischer Befehl und eine typische Meldung sind:


```
myUser@myIp:~$ java --add-opens java.base/java.nio=ALL-UNNAMED -cp metabase.jar org.h2.tools.RunScript -script whatever.sql -url jdbc:h2:~/metabase.db
Ausnahme im Thread "main" org.h2.jdbc.JdbcSQLException: Row not found when trying to delete from index """"".I37: ( /* key:7864 */ X'5256470012572027c82fc5d2bfb855264ab45f8fec4cf48b0620ccad281d2fe4', 165)" [90112-194]
at org.h2.message.DbException.getJdbcSQLException(DbException.java:345)
[etc]
```


**Wie man das Problem behebt:** Nicht alle H2-Fehler sind wiederherstellbar (deshalb sollten Sie, wenn Sie H2 verwenden, _bitte_ eine Backup-Strategie für die Anwendungsdatenbankdatei haben).


Wenn Sie eine aktuelle Version von H2 verwenden, ist die Anwendungsdatenbank in `metabase.db.mv.db` gespeichert. - Öffnen Sie eine Shell auf dem Server, auf dem die Metabase-Instanz ausgeführt wird, und versuchen Sie, die beschädigte H2-Datei wiederherzustellen, indem Sie die folgenden vier Befehle ausführen:


```
java -cp metabase.jar org.h2.tools.Recover


mv metabase.db.mv.db metabase-old.db.mv.db


berühren Sie metabase.db.mv.db


java --add-opens java.base/java.nio=ALL-UNNAMED -cp target/uberjar/metabase.jar org.h2.tools.RunScript -script metabase.db.h2.sql -url jdbc:h2:`pwd`/metabase.db
```


## Führen Sie Metabase mit H2 unter Windows 10 aus?


**Ursache:** In einigen Situationen unter Windows 10 benötigt das Metabase-JAR Berechtigungen zum Erstellen lokaler Dateien für die Anwendungsdatenbank. Wenn Sie das JAR ausführen, wird eine Fehlermeldung wie diese angezeigt:


```
Ausnahme im Thread "main" java.lang.AssertionError: Assert fehlgeschlagen: Verbindung zur Metabase DB nicht möglich.
```


**Zu unternehmende Schritte:**


1. Klicken Sie mit der rechten Maustaste auf die Metabase JAR-Datei(_nicht_ die App-Datenbankdatei).
2. Wählen Sie "Eigenschaften".
3. Wählen Sie "Entsperren".
   
## Braucht die Anwendungsdatenbank zu lange zum Laden?


**Ursache:** Sie verwenden H2 als Anwendungsdatenbank, und die Anwendungsdatenbank ist so groß, dass sie nicht in weniger als 5 Sekunden geladen werden kann (das ist der Standard-Timeout-Wert). In der Konsole wird die Meldung "Timeout" angezeigt, wenn Sie versuchen, die Metabase zu starten.


**Folgende Schritte sind zu unternehmen:**


1. Verwenden Sie eine produktionsreife Datenbank wie PostgreSQL für die Anwendungsdatenbank (bevorzugt).
2. Gehen Sie zum **Admin Panel** und erhöhen Sie die Timeout-Einstellung für die App-Datenbank.
3. Verschieben Sie die Metabase auf einen schnelleren Server (insbesondere auf einen Server mit schnelleren Festplatten).

[backup]: ../installation-and-operation/backing-up-metabase-application-data.md
[enterprise]: https://www.metabase.com/pricing
[serialization-docs]: ../installation-and-operation/serialization.md
[serialization-learn]: https://www.metabase.com/learn/metabase-basics/administration/administration-and-operation/serialization
