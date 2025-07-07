---
Titel: Sichern der Metabase
redirect_from:
- /docs/latest/operations-guide/backing-up-metabase-application-data
---


# Sichern der Metabase


Vermeiden Sie den Verlust Ihrer Anwendungsdaten (alle Fragen, Dashboards, Sammlungen usw.), indem Sie eine Sicherungskopie Ihrer Daten erstellen.


Metabase verwendet eine einzige SQL-Datenbank für alle Laufzeit-Anwendungsdaten. Sie brauchen also nur diese Datenbank zu sichern, und schon kann es losgehen. Mit dieser Sicherung können Sie Ihre Metabase-Installation wiederherstellen, falls etwas schief geht (z. B. bei einem Upgrade).


## Sichern der Standard-H2-Datenbank


Wenn Sie beim Start von Metabase keine Anwendungsdatenbank mit Hilfe von Umgebungsvariablen angegeben haben, hat Metabase eine eingebettete H2-Datenbank in ihrem Verzeichnis erstellt.


Wenn Sie jedoch Fragen und Dashboards haben, die Sie beibehalten möchten, sollten Sie vor dem Upgrade eine Migration zu einer [produktionsbereiten Datenbank](migrating-from-h2.md) in Betracht ziehen.


Wenn Sie Metabase nur für den persönlichen Gebrauch verwenden und Ihre Anwendungsdaten behalten möchten, müssen Sie Folgendes tun.


### Wenn Sie das Metabase-Docker-Image verwenden


Wenn Sie mit Docker arbeiten, sollten Sie bereits auf eine [produktionsreife Datenbank](migrating-from-h2.md) umgestellt haben.


Bevor Sie zu einer produktiven Anwendungsdatenbank migrieren, sollten Sie die H2 app db-Datei aus dem Docker-Container kopieren. Wenn der Container z.B. metabase heißt, führen Sie folgendes aus:


```
docker cp metabase:/metabase.db/metabase.db.mv.db ./
```


Mit dem obigen Befehl wird die Datenbankdatei in das Verzeichnis kopiert, in dem Sie den Befehl ausgeführt haben. Sie können auch eine Kopie dieser H2-Datei erstellen und diese für die Migration der Daten in eine produktionsfähige Datenbank verwenden. Siehe [Migrieren von H2](migrating-from-h2.md).


### Wenn Sie das Metabase JAR verwenden


1. Navigieren Sie zu Ihrem Metabase-Verzeichnis.
2. Wenn Ihre Metabase läuft, beenden Sie den Metabase-Prozess. Sie können entweder das Terminal schließen oder den Prozess mit CTRL-C beenden. Wenn Sie den Prozess als Dienst ausführen, beenden Sie den Dienst.
3. Kopieren Sie die Anwendungsdatenbankdatei (mit dem Namen `metabase.db.mv.db`) und bewahren Sie diese Kopie an einem sicheren Ort auf. Das war's.
4. Starten Sie die Metabase neu: `java --add-opens java.base/java.nio=ALL-UNNAMED -jar metabase.jar` oder starten Sie den Dienst erneut.


## Amazon RDS für die Anwendungsdatenbank


Amazon hat seine eigenen Best Practices für die Sicherung und Wiederherstellung von RDS-Datenbanken, so dass wir uns an diese halten. Wir empfehlen, dass Sie automatische RDS-Backups aktivieren.


Anweisungen dazu finden Sie im [Amazon RDS User Guide](http://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/USER_WorkingWithAutomatedBackups.html).


## Selbst gehostete PostgreSQL-Datenbank


Wenn Sie Ihre eigene PostgreSQL-Datenbank hosten, folgen Sie einfach den Anweisungen von PostgreSQL für [Backups Ihrer Datenbank](https://www.postgresql.org/docs/current/backup.html).


Solange Sie einen Dump der Metabase-Datenbank haben, sollten Sie damit arbeiten können.

