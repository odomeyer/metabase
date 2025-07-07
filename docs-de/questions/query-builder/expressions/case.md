---
Titel: Fall
---


# Case


case" (alias "if") prüft, ob ein Wert mit einer Liste von Bedingungen übereinstimmt, und gibt eine Ausgabe basierend auf der ersten erfüllten Bedingung zurück. ` if` und`case` funktionieren genau gleich.


Optional können Sie`case` anweisen, eine Standardausgabe zu liefern, wenn keine der Bedingungen erfüllt ist. Wenn Sie keine Standardausgabe festlegen, gibt`case` nach Prüfung aller Bedingungen`null` zurück(`null`-Werte werden in der Metabase als leere Werte angezeigt).


Verwenden Sie den Ausdruck "case", wann immer Sie ihn benötigen:


- [einen Wertebereich ausblenden](#bucketing-data-for-frequency-tables-or-histograms),
- [die Zeilen in Ihrem Datensatz beschriften](#labeling-a-row-based-on-conditions-from-multiple-columns), oder
- [Zeilen auf der Grundlage einer bedingten Logik aggregieren](#aggregating-data-based-on-conditions-from-multiple-columns).


| Syntax |
| --------------------------------------------------------------------- |
| `case(condition1, output1, condition2, output2, ..., default_output)` |
| Gibt die Ausgabe der ersten erfüllten Bedingung zurück. |


| Beispiel |
| ---------------------------------------------------------------------------------------------------------------- |
| `case(isempty("Glas halb voll"), "leeres Glas", isNull("Glas halb voll"), "fehlendes Glas", "Glas halb voll")` |
| "Glas halb voll" |


## Daten für Häufigkeitstabellen oder Histogramme in Eimer packen


| Menge | Bucket |
| ------ | ------ |
| 6 | 0-9 |
| 18 | 10-19 |
| 31 | 30-39 |
| 57 | 50+ |


wobei **Bucket** eine benutzerdefinierte Spalte mit dem Ausdruck ist:


```
case([Betrag] >= 0 AND [Betrag] <= 9, "0-9",
[Betrag] >= 10 AND [Betrag] <= 19, "10-19",
[Betrag] >= 20 AND [Betrag] <= 29, "20-29",
[Betrag] >= 30 AND [Betrag] <= 39, "30-39",
[Betrag] >= 40 AND [Betrag] <= 49, "40-49", "50+")
```


## Beschriftung einer Zeile basierend auf Bedingungen aus mehreren Spalten


| Sighting ID | Has Wings | Has Face | Sighting Type |
| ----------- | --------- | -------- | ------------- |
| 1 | Wahr | Wahr | Vogel |
| 2 | Wahr | Falsch | Flugzeug |
| 3 | Falsch | Wahr | Superman |
| 4 | Falsch | Falsch | Unbekannt |


wobei **Sichtungstyp** eine benutzerdefinierte Spalte mit dem Ausdruck ist:


```
case([Has Wings] = TRUE AND [Has Face] = TRUE, "Vogel",
