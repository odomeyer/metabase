---
Titel: Ich kann meine Tabellen nicht sehen
---


# Ich kann meine Tabellen nicht sehen


Sie haben die Metabase mit einer Datenbank verbunden, aber:


- Sie sehen die Tabellen nicht im Abschnitt [Table Metadata](../data-modeling/metadata-editing.md) des Admin Panels,
- die Tabellen erscheinen nicht im [Data Browser](https://www.metabase.com/learn/metabase-basics/querying-and-dashboards/data-browser),
- die Tabellen werden nicht als mögliche Datenquellen angezeigt, wenn Sie eine Abfrage mit dem Query Builder erstellen, oder
- Sie können die Tabellen nicht mehr sehen, die Sie früher sehen konnten.


## Prüfen Sie auf Browser-Probleme


1. Löschen Sie Ihren Browser-Cache.
2. Prüfen Sie, ob eine Browsererweiterung oder ein Plugin die Metabase beeinträchtigt:
- Deaktivieren Sie alle Erweiterungen und Plugins,
- Öffnen Sie Metabase in einer Inkognito-Browser-Sitzung, oder
- Öffnen Sie Metabase in einem anderen Browser.


**Erläuterung**


Manchmal zeigt Ihr Browser eine alte, zwischengespeicherte Liste von Tabellen an. Auch Browser-Erweiterungen können das korrekte Laden von Seiten verhindern.


## Testen Sie die Datenbankverbindung


1. Gehen Sie zur Metabase [SQL editor](../questions/native-editor/writing-sql.md).
2. Testen Sie die Verbindung zu Ihrer Datenbank, indem Sie den Befehl
```sql
SELECT 1
```


Wenn Sie einen Fehler erhalten, lesen Sie bitte [Troubleshooting database connections](./db-connection.md).


**Erläuterung**


Möglicherweise hat sich auf der Datenbankseite etwas geändert (wenn Sie zuvor verbunden waren). Es kann zum Beispiel sein, dass Sie während einer Evaluierung eine Verbindung zu einer Testdatenbank hergestellt haben, sich jetzt aber in einer Produktionsumgebung befinden.


## Tabellenzugriff prüfen


So stellen Sie sicher, dass Ihre Tabelle tatsächlich von der Metabase abgefragt werden kann:


1. Gehen Sie zur Metabase [SQL editor](../questions/native-editor/writing-sql.md).
2. Suchen Sie nach Ihrer Tabelle:
```sql
SELECT *
FROM ihre_tabelle
```


Wenn es ein Problem mit dem Tabellennamen oder den Datenbankberechtigungen gibt, erhalten Sie eine Fehlermeldung wie:


- [Tabelle nicht gefunden](https://www.metabase.com/learn/sql/debugging-sql/sql-syntax#column-or-table-name-is-not-found-or-not-recognized)
- [Berechtigung verweigert](./data-permissions.md#getting-a-permission-denied-error-message)


Bei weniger häufigen Fehlern versuchen Sie es mit einer Suche oder fragen Sie die [Metabase community](https://discourse.metabase.com/).


**Erläuterung**


Es könnte sich etwas auf der Datenbankseite geändert haben: Ihre Tabelle könnte umbenannt oder gelöscht worden sein, oder die Berechtigungen wurden widerrufen.


## Metabase permissions


Wenn es nur wenige Personen gibt, die keine Tabellen einsehen können, siehe [Eine Benutzergruppe hat den falschen Zugriff auf eine Tabelle oder ein Schema](./data-permissions.md#a-user-group-has-the-wrong-access-to-a-table-or-schema).
