---
Titel: Fehlersuche bei SQL-Fragen
---


# Fehlersuche bei SQL-Fragen


## Falsche Ergebnisse


- [Aggregationen (Zählungen, Summen usw.) sind falsch](https://www.metabase.com/learn/sql/debugging-sql/sql-logic#aggregated-results-counts-sums-etc-are-wrong).
- [Ergebnisse haben doppelte Zeilen](https://www.metabase.com/learn/sql/debugging-sql/sql-logic-duplicated-data).
- [Inden Ergebnissen fehlen Zeilen](https://www.metabase.com/learn/sql/debugging-sql/sql-logic-missing-data).
- [Datums- und Zeitangaben sind falsch](./timezones.md).
- [Daten sind nicht aktuell](./sync-fingerprint-scan.md).


## SQL-Variablen und Feldfilter


- [Filter-Widget zeigt kein Dropdown-Menü mit Werten an](../data-modeling/metadata-editing.md#changing-a-search-box-filter-to-a-dropdown-filter).
- [SQL-Abfrage enthält Tabellen-Aliase](../questions/native-editor/sql-parameters.md#field-filters-dont-work-with-table-aliases).
- [SQL-Syntaxfehler: fehlende "FROM" -Klausel](../questions/native-editor/sql-parameters.md#field-filters-must-be-connected-to-fields-included-in-the-query).
- [Keine Option zur Anzeige eines Filter-Widgets](../questions/native-editor/sql-parameters.md#field-filter-compatible-types).
- [Ich kenne den SQL-Variablentyp nicht](https://www.metabase.com/learn/metabase-basics/querying-and-dashboards/sql-in-metabase/sql-variables)


## SQL-Syntaxfehler


Einige häufige Fehlermeldungen finden Sie unter [error messages](./error-message.md).


## Arbeiten mit JSON in SQL


Die Verwendung des Operators `?` für die Arbeit mit JSON in SQL kann zum Scheitern von Abfragen führen. Bei PostgreSQL können Sie stattdessen `??` verwenden.


## Stecken Sie immer noch fest?


Wenn Sie Ihr Problem nicht mit Hilfe der Anleitungen zur Fehlerbehebung lösen können:


- Suchen oder fragen Sie die [Metabase-Community](https://discourse.metabase.com/).
- Suchen Sie nach [bekannten Fehlern oder Einschränkungen](./known-issues.md).
- Mieten Sie einen [Metabase Expert](https://www.metabase.com/partners/){:target="\_blank"}.

