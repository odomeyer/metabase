---
Titel: Fehlersuche bei Fehlermeldungen
---


# Fehlermeldungen zur Fehlerbehebung


Eine Fehlermeldung kann Ihnen helfen, die richtige Anleitung zur Fehlerbehebung zu finden. Der genaue Wortlaut hängt von Ihrer Datenbank und der Metabase-Version ab. Versuchen Sie daher, die nächstliegende Übereinstimmung zu finden.


## SQL-Editor


Prüfen Sie, ob Ihre Fehlerdetails eines der folgenden Elemente enthalten:


- [Tabelle oder Spalte "nicht gefunden" oder "nicht erkannt"](https://www.metabase.com/learn/sql/debugging-sql/sql-syntax#column-or-table-name-is-not-found-or-not-recognized).
- [Funktion existiert nicht](https://www.metabase.com/learn/sql/debugging-sql/sql-syntax#sql-function-does-not-exist).
- [Permission denied](./data-permissions.md#getting-a-permission-denied-error-message).


Dieser SQL-Fehler besagt zum Beispiel, dass die Funktion ` DATEFROMPARTS` in einer BigQuery-Datenbank nicht funktioniert:


(./images/sample-error-sql.png)Beispielhafte SQL-Fehlermeldung


## Fragen und Dashboards


- [Ihre Frage hat zu lange gedauert](./timeout.md).
- [Still waiting...](./my-dashboard-is-slow.md).


## Stecken Sie immer noch fest?


Wenn Sie Ihren Fehler auf dieser Seite nicht finden können:


- Suchen Sie oder fragen Sie die [Metabase community](https://discourse.metabase.com/).
- Suchen Sie nach [bekannten Fehlern oder Einschränkungen](./known-issues.md).

