---
LIMIT 1000
```


Ein fehlgeschlagener Scan wird durch eine fehlgeschlagene Scan-Abfrage verursacht - Sie können sich die Protokolle ansehen, um die Abfrage zu debuggen, ähnlich wie bei anderen Abfragen, die Sie direkt gegen Ihre Datenbank ausführen würden.


Beachten Sie, dass Sie eine Suchabfrage für dieses Feld auslösen, wenn Sie [einen Suchfeldfilter in einen Dropdown-Filter](../data-modeling/metadata-editing.md#changing-a-search-box-filter-to-a-dropdown-filter) in den Tabellenmetadatenändern. Wenn Sie einen Dropdown-Filter haben, der nicht alle Werte in einem Feld erfasst, denken Sie daran, dass die Metabase nur die ersten 1.000 eindeutigen Werte pro Feld abfragt und maximal 100 Kilobytes Text speichert. Wenn Sie mehr als 1.000 eindeutige Werte in einer Spalte oder viele textlastige Daten (wie lange URLs oder Umfrageantworten) haben, können Sie das tun:


- Verwenden Sie einen Suchfeldfilter für dieses Feld.
- Bereinigen Sie die Daten weiter in Ihrem [ETL oder ELT](https://www.metabase.com/learn/grow-your-data-skills/data-landscape/etl-landscape) Prozess.


## Fingerprinting


Um eine Fingerprinting-Abfrage für eine bestimmte Spalte manuell erneut auszulösen:


1. Gehen Sie zu **Verwaltung** > **Datenbanken** > **Ihre Datenbank** > **Erweiterte Optionen anzeigen**.
2. Schalten Sie **Tabellen regelmäßig neu ausdrucken** ein und klicken Sie auf **Änderungen speichern**.
3. Gehen Sie zu **Verwaltung** > **Tabellenmetadaten**.
4. Wählen Sie Ihre Datenbank und Tabelle aus.
5. Ändern Sie die Sichtbarkeit der Tabelle auf "Ausgeblendet".
6. Ändern Sie die Sichtbarkeit wieder auf "abfragbar".
7. Warten Sie 10 Sekunden.
8. Gehen Sie zu Ihrer Spalte und ändern Sie den **Typ** von "Entitätsschlüssel" in "Kein semantischer Typ" und wieder zurück in "Entitätsschlüssel".


### Sonderfälle


Wenn Sie darauf warten, dass die erste Fingerprinting-Abfrage nach dem Verbinden einer Datenbank ausgeführt wird, stellen Sie sicher, dass die erste Synchronisierung abgeschlossen ist (Sie können den Status unter **Admin** > **Fehlerbehebung** > **Protokolle** überprüfen).


Wenn Sie MongoDB verwenden, erstellt Metabase Fingerprints für die ersten 10.000 Dokumente pro Sammlung. Wenn Sie nicht alle Ihre Felder sehen, liegt das daran, dass diese Felder in diesen ersten 10.000 Dokumenten möglicherweise nicht vorhanden sind. Weitere Informationen finden Sie in unserem [MongoDB-Referenzdokument](../databases/connections/mongodb.md#i-added-fields-to-my-database-but-dont-see-them-in-metabase).


**Erläuterung**


Die anfängliche Fingerprinting-Abfrage untersucht die ersten 10.000 Zeilen einer bestimmten Tabelle oder Ansicht in Ihrer Datenbank:


```sql
SELECT
*
FROM
"ihr_schema". "ihre_tabelle_oder_ansicht"
LIMIT 10000
```


Wenn die ersten 10.000 Zeilen nicht repräsentativ für die Daten in einer Tabelle sind (z. B. wenn Sie spärliche Daten mit vielen Leerzeichen oder Nullen haben), können Sie Probleme wie diese sehen:


- Falsche [Filtertypen](../questions/query-builder/filters.md#filter-types), z. B. eine Kategorie, wenn Sie einen Kalender wünschen.
- Histogramm-Visualisierungen, die nicht funktionieren (da Metabase einen Min- und Max-Wert benötigt, um die Bins zu generieren).


Metabase verfügt nicht über eine integrierte Option zum Auslösen manueller Fingerprinting-Abfragen. Sie können die Einstellungen eines Feldes mit den oben genannten Schritten "zurücksetzen", um eine Fingerprinting-Abfrage zu erzwingen, aber es ist nicht garantiert, dass dies bei allen Versionen von Metabase funktioniert.


## Die Synchronisierung oder das Scannen dauert sehr lange


So beschleunigen Sie**Synchronisierungen**:


- Schränken Sie die Berechtigungen für die Verbindung zur Datenbank ein, damit Metabase nur eine begrenzte Teilmenge von Schemata oder Tabellen synchronisiert.
- [Reduzieren Sie die Häufigkeit der Sync-Abfragen](../databases/sync-scan.md#database-syncing).


So beschleunigen Sie **Scans**:


- [Verringern Sie die Häufigkeit der Scans, oder deaktivieren Sie die Scans ganz](../databases/sync-scan.md#scanning-for-filter-values).
- Verringern Sie die Anzahl der zu überprüfenden Spalten, indem Sie zu **Admin** > **Tabellenmetadaten** gehen und **Filterung auf dieses Feld** auf **Suchfeld** oder **Einfaches Eingabefeld** setzen.


**Erläuterung**


Synchronisationen und Scans sind letztlich nur zwei Arten von Abfragen, die gegen Ihre Datenbank ausgeführt werden. Die Ausführungsgeschwindigkeit wird also durch die Anzahl der ausgeführten Abfragen, die Häufigkeit der Ausführung, die Größe Ihrer Daten und die Menge der Ressourcen, die Sie Ihrer Datenbank zugewiesen haben, begrenzt. Metabase bietet Ihnen die Möglichkeit, die Anzahl und Häufigkeit der Synchronisierungs- und Scan-Abfragen anzupassen, da wir Ihre Datenbank leider nicht mit mehr Leistung ausstatten können... (noch?)


## Verwandte Themen


- [Fehlerbehebung bei Datenbankverbindungen](./db-connection.md).
- [Fehlerbehebung bei Filtern](./filters.md).
- [Wie Synchronisationen und Scans funktionieren](../databases/sync-scan.md#how-database-syncs-work).


## Stecken Sie immer noch fest?


Wenn Sie Ihr Problem nicht mit Hilfe der Anleitungen zur Fehlerbehebung lösen können:


- Suchen oder fragen Sie die [Metabase-Community](https://discourse.metabase.com/).
- Suchen Sie nach [bekannten Fehlern oder Einschränkungen](./known-issues.md).

---
LIMIT 1000
```

Ein fehlgeschlagener Scan wird durch eine fehlgeschlagene Scan-Abfrage verursacht - Sie können sich die Protokolle ansehen, um die Abfrage zu debuggen, ähnlich wie bei anderen Abfragen, die Sie direkt gegen Ihre Datenbank ausführen würden.

Beachten Sie, dass Sie eine Suchabfrage für dieses Feld auslösen, wenn Sie [einen Suchfeldfilter in einen Dropdown-Filter](../data-modeling/metadata-editing.md#changing-a-search-box-filter-to-a-dropdown-filter) in den Tabellenmetadatenändern. Wenn Sie einen Dropdown-Filter haben, der nicht alle Werte in einem Feld erfasst, denken Sie daran, dass die Metabase nur die ersten 1.000 eindeutigen Werte pro Feld abfragt und maximal 100 Kilobytes Text speichert. Wenn Sie mehr als 1.000 eindeutige Werte in einer Spalte oder viele textlastige Daten (wie lange URLs oder Umfrageantworten) haben, können Sie das tun:

-  Verwenden Sie einen Suchfeldfilter für dieses Feld.
-  Bereinigen Sie die Daten weiter in Ihrem [ETL oder ELT](https://www.metabase.com/learn/grow-your-data-skills/data-landscape/etl-landscape) Prozess.

## Fingerprinting

Um eine Fingerprinting-Abfrage für eine bestimmte Spalte manuell erneut auszulösen:

1. Gehen Sie zu **Verwaltung** > **Datenbanken** > **Ihre Datenbank** > **Erweiterte Optionen anzeigen**.
2. Schalten Sie **Tabellen regelmäßig neu ausdrucken** ein und klicken Sie auf **Änderungen speichern**.
3. Gehen Sie zu **Verwaltung** > **Tabellenmetadaten**.
4. Wählen Sie Ihre Datenbank und Tabelle aus.
5. Ändern Sie die Sichtbarkeit der Tabelle auf "Ausgeblendet".
6. Ändern Sie die Sichtbarkeit wieder auf "abfragbar".
7. Warten Sie 10 Sekunden.
8. Gehen Sie zu Ihrer Spalte und ändern Sie den **Typ** von "Entitätsschlüssel" in "Kein semantischer Typ" und wieder zurück in "Entitätsschlüssel".

### Sonderfälle

Wenn Sie darauf warten, dass die erste Fingerprinting-Abfrage nach dem Verbinden einer Datenbank ausgeführt wird, stellen Sie sicher, dass die erste Synchronisierung abgeschlossen ist (Sie können den Status unter **Admin** > **Fehlerbehebung** > **Protokolle** überprüfen).

Wenn Sie MongoDB verwenden, erstellt Metabase Fingerprints für die ersten 10.000 Dokumente pro Sammlung. Wenn Sie nicht alle Ihre Felder sehen, liegt das daran, dass diese Felder in diesen ersten 10.000 Dokumenten möglicherweise nicht vorhanden sind. Weitere Informationen finden Sie in unserem [MongoDB-Referenzdokument](../databases/connections/mongodb.md#i-added-fields-to-my-database-but-dont-see-them-in-metabase).

**Erläuterung**

Die anfängliche Fingerprinting-Abfrage untersucht die ersten 10.000 Zeilen einer bestimmten Tabelle oder Ansicht in Ihrer Datenbank:

```sql
SELECT
*
FROM
"ihr_schema". "ihre_tabelle_oder_ansicht"
LIMIT 10000
```

Wenn die ersten 10.000 Zeilen nicht repräsentativ für die Daten in einer Tabelle sind (z. B. wenn Sie spärliche Daten mit vielen Leerzeichen oder Nullen haben), können Sie Probleme wie diese sehen:

-  Falsche [Filtertypen](../questions/query-builder/filters.md#filter-types), z. B. eine Kategorie, wenn Sie einen Kalender wünschen.
-  Histogramm-Visualisierungen, die nicht funktionieren (da Metabase einen Min- und Max-Wert benötigt, um die Bins zu generieren).

Metabase verfügt nicht über eine integrierte Option zum Auslösen manueller Fingerprinting-Abfragen. Sie können die Einstellungen eines Feldes mit den oben genannten Schritten "zurücksetzen", um eine Fingerprinting-Abfrage zu erzwingen, aber es ist nicht garantiert, dass dies bei allen Versionen von Metabase funktioniert.

## Die Synchronisierung oder das Scannen dauert sehr lange

So beschleunigen Sie**Synchronisierungen**:

-  Schränken Sie die Berechtigungen für die Verbindung zur Datenbank  ein, damit Metabase nur eine begrenzte Teilmenge von Schemata oder Tabellen synchronisiert.
- [Reduzieren Sie die Häufigkeit der Sync-Abfragen](../databases/sync-scan.md#database-syncing).

So beschleunigen Sie **Scans**:

- [Verringern Sie die Häufigkeit der Scans, oder deaktivieren Sie die Scans ganz](../databases/sync-scan.md#scanning-for-filter-values).
-  Verringern Sie die Anzahl der zu überprüfenden Spalten, indem Sie zu **Admin** > **Tabellenmetadaten** gehen und **Filterung auf dieses Feld** auf **Suchfeld** oder **Einfaches Eingabefeld** setzen.

**Erläuterung**

Synchronisationen und Scans sind letztlich nur zwei Arten von Abfragen, die gegen Ihre Datenbank ausgeführt werden. Die Ausführungsgeschwindigkeit wird also durch die Anzahl der ausgeführten Abfragen, die Häufigkeit der Ausführung, die Größe Ihrer Daten und die Menge der Ressourcen, die Sie Ihrer Datenbank zugewiesen haben, begrenzt. Metabase bietet Ihnen die Möglichkeit, die Anzahl und Häufigkeit der Synchronisierungs- und Scan-Abfragen anzupassen, da wir Ihre Datenbank leider nicht mit mehr Leistung ausstatten können... (noch?)

## Verwandte Themen

- [Fehlerbehebung bei Datenbankverbindungen](./db-connection.md).
- [Fehlerbehebung bei Filtern](./filters.md).
- [Wie Synchronisationen und Scans funktionieren](../databases/sync-scan.md#how-database-syncs-work).

## Stecken Sie immer noch fest?

Wenn Sie Ihr Problem nicht mit Hilfe der Anleitungen zur Fehlerbehebung lösen können:

-  Suchen oder fragen Sie die [Metabase-Community](https://discourse.metabase.com/).
-  Suchen Sie nach [bekannten Fehlern oder Einschränkungen](./known-issues.md).
