---
title: List of expressions
redirect_from:
  - /docs/latest/users-guide/expressions-list
---

# List of expressions

For an introduction to expressions, check out the [overview of custom expressions][expressions].

- [Aggregations](#aggregations)

  - [Average](#average)
  - [Count](#count)
  - [CountIf](./expressions/countif.md)
  - [Distinct](#distinct)
  - [DistinctIf](#distinctif)
  - [Max](#max)
  - [Median](#median)
  - [Min](#min)
  - [Percentile](#percentile)
  - [Share](#share)
  - [StandardDeviation](#standarddeviation)
  - [Sum](#sum)
  - [SumIf](./expressions/sumif.md)
  - [Variance](#variance)
  - [CumulativeSum](./expressions/cumulative.md)
  - [CumulativeCount](./expressions/cumulative.md)

- Functions

  - [Logical functions](#logical-functions)

    - [between](#between)
    - [case](./expressions/case.md)
    - [coalesce](./expressions/coalesce.md)
    - [if](./expressions/case.md)
    - [in](#in)
    - [isNull](./expressions/isnull.md)
    - [notIn](#notin)
    - [notNull](#notnull)

  - [Math functions](#math-functions)

    - [abs](#abs)
    - [ceil](#ceil)
    - [exp](#exp)
    - [floor](#floor)
    - [integer](#integer)
    - [log](#log)
    - [power](#power)
    - [round](#round)
    - [sqrt](#sqrt)

  - [String functions](#string-functions)

    - [concat](./expressions/concat.md)
    - [contains](#contains)
    - [date](#date)
    - [doesNotContain](#doesnotcontain)
    - [domain](#domain)
    - [endsWith](#endswith)
    - [float](#float)
    - [host](#host)
    - [isEmpty](./expressions/isempty.md)
    - [integer](#integer)
    - [lTrim](#ltrim)
    - [length](#length)
    - [lower](#lower)
    - [notEmpty](#notempty)
    - [path](#path)
    - [regexExtract](./expressions/regexextract.md)
    - [replace](#replace)
    - [splitPart](#splitpart)
    - [rTrim](#rtrim)
    - [startsWith](#startswith)
    - [subdomain](#subdomain)
    - [substring](./expressions/substring.md)
    - [text](#text)
    - [trim](#trim)
    - [upper](#upper)

  - [Date functions](#date-functions)

    - [convertTimezone](./expressions/converttimezone.md)
    - [date](#date)
    - [datetime](#datetime)
    - [datetimeAdd](./expressions/datetimeadd.md)
    - [datetimeDiff](./expressions/datetimediff.md)
    - [datetimeSubtract](./expressions/datetimesubtract.md)
    - [day](#day)
    - [dayName](#dayname)
    - [hour](#hour)
    - [interval](#interval)
    - [minute](#minute)
    - [month](#month)
    - [monthName](#monthname)
    - [now](./expressions/now.md)
    - [quarter](#quarter)
    - [quarterName](#quartername)
    - [relativeDateTime](#relativedatetime)
    - [second](#second)
    - [week](#week)
    - [weekday](#weekday)
    - [year](#year)

  - [Type-casting functions](#type-casting-functions)

    - [date](#date)
    - [datetime](#datetime)
    - [float](#float)
    - [integer](#integer)
    - [text](#text)

  - [Window functions](#window-functions)

    - [Offset](./expressions/offset.md)
    - [CumulativeCount](./expressions/cumulative.md)
    - [CumulativeSum](./expressions/cumulative.md)

- [Limitations](#limitations)
  - [Database limitations](#database-limitations)

## Aggregations

Aggregation expressions take into account all values in a field. They can only be used in the **Summarize** section of the query builder.

### Average

Gibt den Durchschnitt der Werte in der Spalte zurück.
Syntax: `Durchschnitt(Spalte)`
Beispiel: "Durchschnitt([Menge])" gibt den Mittelwert für das Feld "Menge" zurück.

### Count

Gibt die Anzahl der Zeilen (auch als Datensätze bezeichnet) in den ausgewählten Daten zurück.
Syntax: `Zahl()`
Beispiel: `Count()` Wenn eine Tabelle oder ein Ergebnis 10 Zeilen liefert, gibt `Count` `10` zurück.

### [CountIf](./expressions/countif.md)

Zählt nur Zeilen, bei denen die Bedingung erfüllt ist.
Syntax: `CountIf(condition)`
Beispiel: `CountIf([Zwischensumme] > 100)` würde die Anzahl der Zeilen zurückgeben, in denen die Zwischensumme größer als 100 ist.

### Distinct

Die Anzahl der eindeutigen Werte in dieser Spalte.
Syntax: `Distinct(column)`
Beispiel: `Distinct([Nachname])`. Gibt die Anzahl der eindeutigen Nachnamen in der Spalte zurück. Duplikate (z. B. des Nachnamens "Smith") werden nicht gezählt.

### DistinctIf

Gibt die Anzahl der eindeutigen Werte in einer Spalte zurück, für die die Bedingung wahr ist.
Syntax: `DistinctIf(Spalte, Bedingung)`
Beispiel: `DistinctIf([ID], [Kategorie] = "Gizmo")` würde die Anzahl der eindeutigen IDs zurückgeben, bei denen die Spalte `Kategorie` "Gizmo" ist.

### Max

Gibt den größten in der Spalte gefundenen Wert zurück.
Syntax: `Max(Spalte)`
Beispiel: `Max([Alter])` würde das älteste Alter aller Werte in der Spalte `Alter` zurückgeben.
Verwandt: [Min](#min), [Average](#average), [Median](#median).

### Median

Gibt den Medianwert der angegebenen Spalte zurück.
Syntax: `Median(Spalte)`
Beispiel: `Median([Alter])` würde den Mittelwert des Alters ermitteln, bei dem die Hälfte der Altersangaben älter und die Hälfte der Altersangaben jünger ist.
Datenbanken, die `Median` nicht unterstützen: Druid, MariaDB, MongoDB, MySQL, SQLite, Vertica und SQL Server. Presto liefert nur ungefähre Ergebnisse.
Verwandt: [Min](#min), [Max](#max), [Average](#average).

### Min

Gibt den kleinsten in der Spalte gefundenen Wert zurück.
Syntax: `Min(Spalte)`
Beispiel: `Min([Gehalt])` würde das niedrigste Gehalt unter allen Gehältern in der Spalte `Gehalt` finden.
Verwandt: [Max](#max), [Median](#median), [Average](#average).

### Percentile

Gibt den Wert der Spalte mit dem Perzentilwert zurück.
Syntax: `Perzentil(Spalte, Perzentilwert)`
Beispiel: `Perzentil([Punktzahl], 0.9)` würde den Wert am 90. Perzentil für alle Werte in dieser Spalte zurückgeben.
Datenbanken, die `Percentile` nicht unterstützen: Druid, H2, MariaDB, MySQL, MongoDB, SQL Server, SQLite, Vertica. Presto liefert nur ungefähre Ergebnisse.

### Share

Gibt den Prozentsatz der Zeilen in den Daten, die die Bedingung erfüllen, als Dezimalwert zurück.
Syntax: `Anteil(Bedingung)`
Beispiel: `Share([Farbe] = "Blau")` gibt die Anzahl der Zeilen zurück, in denen das Feld `Farbe` auf `Blau` gesetzt ist, geteilt durch die Gesamtzahl der Zeilen.

### StandardDeviation

Berechnet die Standardabweichung der Spalte, die ein Maß für die Streuung in einer Gruppe von Werten ist. Eine geringe Standardabweichung zeigt an, dass sich die Werte um den Mittelwert gruppieren, während eine hohe Standardabweichung bedeutet, dass die Werte über einen großen Bereich verteilt sind.
Syntax: `Standardabweichung(Spalte)`
Beispiel: `Standardabweichung([Bevölkerung])` würde die SD für die Werte in der Spalte `Bevölkerung` zurückgeben.
Datenbanken, die `StandardDeviation` nicht unterstützen: Druid, SQLite.

### Sum

Addiert alle Werte der Spalte.
Syntax: `Summe(Spalte)`
Beispiel: `Sum([Zwischensumme])` würde alle Werte der Spalte `Zwischensumme` addieren.

### [SumIf](./expressions/sumif.md)

Summiert die angegebene Spalte nur für Zeilen, in denen die Bedingung wahr ist.
Syntax: `SumIf(Spalte, Bedingung)`
Beispiel: `SumIf([Zwischensumme], [Auftragsstatus] = "Gültig")` würde alle Zwischensummen für Aufträge mit dem Status "Gültig" addieren.

### Variance

Gibt die numerische Varianz für eine bestimmte Spalte zurück.
Syntax: `Varianz(Spalte)`
Beispiel: `Varianz([Temperatur])` gibt ein Maß für die Abweichung von der mittleren Temperatur für alle Temperaturen in dieser Spalte zurück.
Verwandt: [StandardDeviation](#standarddeviation), [Average](#average).
Datenbanken, die `Variance` nicht unterstützen: Druid, SQLite.

## Functions

Funktionsausdrücke gelten für jeden einzelnen Wert. Sie können verwendet werden, um Werte in einer Spalte zu ändern oder zu filtern, oder um neue, benutzerdefinierte Spalten zu erstellen.

## Logical functions

Logische Funktionen bestimmen, ob eine Bedingung erfüllt ist, oder legen fest, welcher Wert auf der Grundlage einer Bedingung zurückgegeben werden soll.

### between

Gibt true zurück, wenn der Wert einer Datums- oder Zahlenspalte in einen bestimmten Bereich fällt. Andernfalls wird false zurückgegeben.
Syntax: `between(Spalte, Anfang, Ende)`
Beispiel: Wenn Sie mit dem Ausdruck "zwischen([Erstellt am], "2019-01-01", "2020-12-31")` gefiltert haben, gibt Metabase Zeilen zurück, die für diesen Ausdruck den Wert "wahr" ergeben, in diesem Fall, wenn das Datum "Erstellt am" innerhalb des Bereichs zwischen dem 1. Januar 2019 und dem 31. Dezember 2020 liegt, einschließlich des Start- (01.01.2019) und Enddatums (20.12.31).
Verwandt: [interval](#interval).

### [case](./expressions/case.md)

`case` (alias `if`) testet einen Ausdruck gegen eine Liste von Fällen und gibt den entsprechenden Wert des ersten übereinstimmenden Falles zurück, mit einem optionalen Standardwert, wenn nichts anderes erfüllt ist.
Syntax: `case(Bedingung, Ausgabe, ...)`
Beispiel: `case([Gewicht] > 200, "Groß", [Gewicht] > 150, "Mittel", "Klein")` Wenn ein `Gewicht` 250 ist, würde der Ausdruck "Groß" zurückgeben. In diesem Fall ist der Standardwert "Klein", so dass jedes "Gewicht" von 150 oder weniger "Klein" ergeben würde.

### [coalesce](./expressions/coalesce.md)

Betrachtet die Werte in jedem Argument der Reihe nach und gibt für jede Zeile den ersten Wert zurück, der nicht null ist.
Syntax: `Koaleszieren(Wert1, Wert2, ...)`
Beispiel: `Koaleszieren([Kommentare], [Notizen], "Keine Kommentare")`. Wenn sowohl die Spalten "Kommentare" als auch "Notizen" für diese Zeile null sind, gibt der Ausdruck die Zeichenfolge "Keine Kommentare" zurück.

### [if](./expressions/case.md)

if" ist ein Alias für [case](./expressions/case.md). Prüft einen Ausdruck gegen eine Liste von Bedingungen und gibt den entsprechenden Wert des ersten übereinstimmenden Falls zurück, mit einem optionalen Standardwert, wenn nichts anderes erfüllt ist.
Syntax: `if(Bedingung, Ausgabe, ...)`
Beispiel: `if([Gewicht] > 200, "Groß", [Gewicht] > 150, "Mittel", "Klein")` Wenn ein `Gewicht` 250 ist, würde der Ausdruck "Groß" zurückgeben. In diesem Fall ist der Standardwert "Klein", so dass jedes "Gewicht" von 150 oder weniger "Klein" ergeben würde.

### in

Gibt true zurück, wenn `Wert1` gleich `Wert2` ist (oder `Wert3`, usw., falls angegeben).
Syntax: `in(wert1, wert2, ...)`
- Wert1": Die zu prüfende Spalte oder der Wert.
- `Wert2, ...`: Die Liste der zu prüfenden Spalten oder Werte.
Sie können weitere Werte hinzufügen, gegen die geprüft werden soll.
Beispiel: `in([Kategorie], "Widget", "Gadget")` würde true für Zeilen zurückgeben, in denen die `Kategorie` entweder "Widget" oder "Gadget" ist.
Verwandt: [notIn](#notin), [contains](#contains), [startsWith](#startswith), [endsWith](#endswith)

### [isNull](./expressions/isnull.md)

Gibt true zurück, wenn die Spalte null ist.
Syntax: `istNull(Spalte)`
Beispiel: `istNull([Steuer])` würde true zurückgeben, wenn in der Spalte für diese Zeile kein Wert vorhanden wäre.
Verwandt: [notNull](#notnull), [isEmpty](#isempty)

### notNull

Gibt true zurück, wenn die Spalte einen Wert enthält.
Syntax: `notNull(Spalte)`
Beispiel: `notNull([Steuer])` würde true zurückgeben, wenn in der Spalte für diese Zeile ein Wert vorhanden ist.
Verwandt: [isNull](#isnull), [notEmpty](#notempty)

### notIn

Gibt true zurück, wenn `wert1` nicht gleich `wert2` ist (und `wert3`, usw., falls angegeben).
Syntax: `notIn(wert1, wert2, ...)`
- Wert1": Die zu prüfende Spalte oder der zu prüfende Wert.
- `Wert2, ...`: Die Spalte oder der Wert, nach dem gesucht werden soll.
Sie können weitere Werte hinzufügen, nach denen gesucht werden soll.
Beispiel: `notIn([Kategorie], "Widget", "Gadget")` würde true für Zeilen zurückgeben, in denen die `Kategorie` nicht "Widget" oder "Gadget" ist.
Verwandt: [in](#in), [case](./ausdrücke/case.md)

## Math functions

Math-Funktionen implementieren allgemeine mathematische Operationen.

### abs

Gibt den absoluten (positiven) Wert der angegebenen Spalte zurück.
Syntax: `abs(Spalte)`
Beispiel: `abs([Schulden])`. Wenn `Schulden` -100 wäre, würde `abs(-100)` den Wert `100` zurückgeben.

### ceil

Rundet eine Dezimalzahl auf (ceil wie in ceiling).
Syntax: `Ceil(Spalte)`
Beispiel: `Ceil([Preis])`. Ceil(2.99)` würde 3 ergeben.
Verwandt: [floor](#floor), [round](#round).

### exp

Gibt die [Eulersche Zahl](<https://en.wikipedia.org/wiki/E_(mathematische_Konstante)>), e, hochgezählt mit der angegebenen Zahl zurück. (Euler klingt wie "Oy-ler").
Syntax: `exp(Spalte)`
Beispiel: `exp([Zinsmonate])`
Verwandt: [power](#power).

### floor

Rundet eine Dezimalzahl ab.
Syntax: `Boden(Spalte)`
Beispiel: `Grundwert([Preis])`. Wenn der "Preis" 1,99 wäre, würde der Ausdruck 1 zurückgeben.
Verwandt: [ceil](#ceil), [round](#round).

### log

Gibt den Logarithmus zur Basis 10 der Zahl zurück.
Syntax: `log(Spalte)`
Beispiel: `log([Wert])`.

### power

Erhöht eine Zahl auf die Potenz des Exponentenwertes.
Syntax: `Potenz(Spalte, Exponent)`
Beispiel: `Potenz([Länge], 2)`. Wäre die Länge `3`, würde der Ausdruck `9` zurückgeben (3 hoch 2 ist 3\*3).
Datenbanken, die `power` nicht unterstützen: SQLite.
Verwandt: [exp](#exp).

### round

Rundet eine Dezimalzahl entweder auf oder ab auf den nächsten ganzzahligen Wert.
Syntax: `Runden(Spalte)`
Beispiel: `Runden([Temperatur])`. Wäre die Temperatur 13,5 Grad Celsius, würde der Ausdruck 14 ergeben.
Beispiel: `Runden([Temperatur] * 10) / 10`. Wäre die Temperatur `100,75`, würde der Ausdruck `100,8` ergeben.

### sqrt

Gibt die Quadratwurzel eines Wertes zurück.
Syntax: `sqrt(Spalte)`
Beispiel: `sqrt([Hypotenuse])`.
Datenbanken, die `sqrt` nicht unterstützen: SQLite.
Verwandt: [Power](#power).

## String functions

String-Funktionen manipulieren oder validieren String-Daten.

### [concat](./expressions/concat.md)

Kombiniert zwei oder mehr Zeichenfolgen miteinander.
Syntax: `concat(wert1, wert2, ...)`
Beispiel: `concat([Nachname], ", ", [Vorname])` würde eine Zeichenkette des Formats "Nachname, Vorname" erzeugen, wie "Palazzo, Enrico".

### contains

Prüft, ob `Zeichenfolge1` in ihr `Zeichenfolge2` enthält.
Führt standardmäßig einen Abgleich unter Berücksichtigung der Groß- und Kleinschreibung durch.
Sie können einen optionalen Parameter "case-insensitive" übergeben, um eine Übereinstimmung ohne Berücksichtigung der Groß-/Kleinschreibung durchzuführen.
Syntax: `beinhaltet(zeichenkette1, zeichenkette2)` für die Übereinstimmung unter Berücksichtigung der Groß- und Kleinschreibung.
`beinhaltet(zeichenkette1, zeichenkette2, "case-insensitive")` für eine Übereinstimmung ohne Berücksichtigung der Groß-/Kleinschreibung.
Beispiel: `beinhaltet([Status], "Klasse")`.
Wenn `Status` "Klassifiziert" wäre, würde der Ausdruck `true` zurückgeben. Wäre der "Status" "**c**klassifiziert", würde der Ausdruck "False" zurückgeben, da die Groß- und Kleinschreibung nicht übereinstimmt.
Verwandt:[doesNotContain](#doesnotcontain), [regexExtract](#regexextract).

### date

> Nicht verfügbar für Oracle oder den Nicht-JDBC-Apache-Druid-Treiber.
- Bei Verwendung auf eine Zeichenkette wird eine ISO 8601-Datumszeichenkette in ein Datum umgewandelt. Die Zeichenkette _muss_ in einem gültigen ISO 8601-Format vorliegen. Wenn die Zeichenkette eine Zeitangabe enthält, wird der Zeitteil abgeschnitten.
- Bei Verwendung für einen datetime-Wert wird datetime in ein Datum umgewandelt.
Syntax: `Datum(Wert)`
Beispiel: `date("2025-03-20")` würde einen Datumswert zurückgeben, so dass Sie alle Datumsfunktionen in der Abfrageerstellung verwenden können: Gruppieren nach Monat, Filtern nach den letzten 30 Tagen usw.
ISO 8601 Standardformat:
- Jahr (JJJJ): 2025
- Monat (MM): 03
- Tag (DD): 25
- Zeittrennzeichen (T)
- Stunden (HH): 14
- Minuten (MM): 30
- Sekunden (SS): 45
- Indikator für die UTC-Zeitzone (Z)
Gültige ISO 8601 Beispiele sind:
- Nur Datum: `2025-03-25`
- Datum mit Uhrzeit: `2025-03-25T14:30:45`
- Datum mit Zeit und Zeitzonen-Offset: `2025-03-25T14:30:45+01:00`
Ein anderes Beispiel: `date(2025-04-19T17:42:53+01:00)` würde `2025-04-19` ergeben.
Verwandt: [datetime](#datetime)

### datetime

> Verfügbar für PostgreSQL, MySQL/MariaDB, BigQuery, Redshift, ClickHouse und Snowflake
Konvertiert eine Datetime-Zeichenfolge in eine Datetime.
Syntax: `datetime(column)`
Beispiel: `datetime("2025-03-20 12:45:04")`
`datetime` unterstützt die folgenden Datetime-String-Formate:
``txt
2025-05-15T22:20:01
2025-05-15 22:20:01
```
Einige Datenbanken können aber auch mit anderen Datetime-Formaten arbeiten.
Verwandt: [date](#date)

### doesNotContain

Prüft, ob `Zeichenfolge1` in ihr `Zeichenfolge2` enthält.
Führt standardmäßig einen Abgleich unter Berücksichtigung der Groß- und Kleinschreibung durch.
Sie können einen optionalen Parameter "case-insensitive" übergeben, um eine Übereinstimmung ohne Berücksichtigung der Groß-/Kleinschreibung durchzuführen.
Syntax: `doesNotContain(string1, string2)` für eine Übereinstimmung unter Berücksichtigung der Groß- und Kleinschreibung.
`doesNotContain(string1, string2, "case-insensitive")` für eine Übereinstimmung ohne Berücksichtigung der Groß-/Kleinschreibung.
Beispiel: `doesNotContain([Status], "Klasse")`. Wenn `Status` "Klassifiziert" wäre, würde der Ausdruck `false` zurückgeben.
Verwandt: [contains](#contains), [regexExtract](#regexextract).

### domain

Extrahiert den Domänennamen aus einer URL oder E-Mail.
Syntax: `domain(urlOderEmail)`
Beispiel: `domain([Seiten-URL])`. Wenn die Spalte `[Seiten-URL]` den Wert `https://www.metabase.com` hätte, würde `domain([Seiten-URL])` `metabase` zurückgeben. Mit `domain([Email])` würde `metabase` aus `hello@metabase.com` extrahiert.
Verwandt: [host](#host), [path](#path), [subdomain](#subdomain).

### endsWith

Gibt true zurück, wenn das Ende des Textes mit dem Vergleichstext übereinstimmt.
Führt standardmäßig einen Abgleich unter Berücksichtigung der Groß- und Kleinschreibung durch.
Sie können einen optionalen Parameter `"case-insensitive"` übergeben, um einen Abgleich ohne Berücksichtigung der Groß-/Kleinschreibung durchzuführen.
Syntax: `endsWith(text, comparison)` für Übereinstimmung unter Berücksichtigung der Groß- und Kleinschreibung.
`endsWith(text, comparison, "case-insensitive")` für eine Übereinstimmung ohne Berücksichtigung der Groß-/Kleinschreibung.
Beispiel: `EndeMit([Appetit], "hungrig")`
Verwandt: [startsWith](#startswith), [contains](#contains), [doesNotContain](#doesnotcontain).

### float

> Available for PostgreSQL, MySQL/MariaDB, BigQuery, Redshift, ClickHouse, and Snowflake.

Converts a string to a floating point value. Useful if you want to do some math on numbers, but your data is stored as strings.

Syntax: `float(value)`

Example: `float("123.45")` would return `123.45` as a floating point value.

### host

Extracts the host, which is the domain and the TLD, from a URL or email.

Syntax: `host(urlOrEmail)`

Example: `host([Page URL])`. If the `[Page URL]` column had a value of `https://www.metabase.com`, `host([Page URL])` would return `metabase.com`. `host([Email])` would extract `metabase.com` from `hello@metabase.com`.

Related: [domain](#domain), [path](#path), [subdomain](#subdomain).

### [isEmpty](./expressions/isempty.md)

Returns true if a _string column_ contains an empty string or is null. Calling this function on a non-string column will cause an error. You can use [isNull](#isnull) for non-string columns.

Syntax: `isEmpty(column)`

Example: `isEmpty([Feedback])` would return true if `Feedback` was an empty string (`''`) or did not contain a value.

Related: [notEmpty](#notempty), [isNull](#isnull).

### integer

> Not available for the non-JDBC Apache Druid driver.

- Converts a string to an integer value. Useful if you want to do some math on numbers, but your data is stored as strings.
- Converts a floating point value by rounding it to an integer.

Syntax: `integer(value)`

String example: `integer("123")` would return `123` as an integer. The string must evaluate to an integer (so `integer("123.45")` would return an error.)

Float example: `integer(123.45)` would return `123`.

Related: [round](#round).

### lTrim

Removes leading whitespace from a string of text.

Syntax: `lTrim(text)`

Example: `lTrim([Comment])`. If the comment were `" I'd prefer not to"`, `lTrim` would return `"I'd prefer not to"`.

Related: [trim](#trim) and [rTrim](#rtrim).

### length

Returns the number of characters in text.

Syntax: `length(text)`

Example: `length([Comment])`. If the `comment` were "wizard", `length` would return 6 ("wizard" has six characters).

### lower

Returns the string of text in all lower case.

Syntax: `lower(text)`

Example: `lower([Status])`. If the `Status` were "QUIET", the expression would return "quiet".

Related: [upper](#upper).

### notEmpty

Returns true if a _string column_ contains a value that is not the empty string. Calling this function on a non-string column will cause an error. You can use [notNull](#notnull) on non-string columns.

Syntax: `notEmpty(column)`

Example: `notEmpty([Feedback])` would return true if `Feedback` contains a value that isn't the empty string (`''`).

Related: [isEmpty](#isempty), [isNull](#isnull), [notNull](#notnull)

### path

Extracts the pathname from a URL.

Syntax: `path(url)`

Example: `path([Page URL])`. For example, `path("https://www.example.com/path/to/page.html?key1=value")` would return `/path/to/page.html`.

Related: [domain](#domain), [host](#host), [subdomain](#subdomain).

### [regexExtract](./expressions/regexextract.md)

> ⚠️ `regexExtract` is unavailable for MongoDB, SQLite, and SQL Server. For Druid, `regexExtract` is only available for the Druid-JDBC driver.

Extracts matching substrings according to a regular expression.

Syntax: `regexExtract(text, regular_expression)`

Example: `regexExtract([Address], "[0-9]+")`

Databases that don't support `regexExtract`: H2, SQL Server, SQLite.

Related: [contains](#contains), [doesNotContain](#doesnotcontain), [substring](#substring).

### replace

Replaces all occurrences of a search text in the input text with the replacement text.

Syntax: `replace(text, find, replace)`

Example: `replace([Title], "Enormous", "Gigantic")`

### splitPart

> Available in PostgreSQL, MySQL/MariaDB, BigQuery, Redshift, Clickhouse, and Snowflake

Splits a string on a specified delimiter and returns the nth substring.

Syntax: `splitPart(text, delimiter, position)`

`text`: The column or text to return a portion of.

`delimiter`: The pattern describing where each split should occur.

`position`: Which substring to return after the split. Index starts at position 1.

Example: `splitPart([Date string], " ", 1)`. If the value for `Date string` was `"2024-09-18 16:55:15.373733-07"`, `splitPart` would return `"2024-09-18"` because it split the data on space (`" "`, and took the first part (the substring at index 1)).

Another example: `splitPart("First name, Middle Name, Last name", ", ", 3)` would return `"Last Name"` (because we used the comma and space `", "` as the delimiter to split the string into parts, and took the third substring).

### rTrim

Removes trailing whitespace from a string of text.

Syntax: `rTrim(text)`

Example: `rTrim([Comment])`. If the comment were "Fear is the mindkiller. ", the expression would return "Fear is the mindkiller."

Related: [trim](#trim) and [lTrim](#ltrim).

### startsWith

Returns true if the beginning of the text matches the comparison text. Performs case-sensitive match by default.
You can pass an optional parameter `"case-insensitive"` to perform a case-insensitive match.

Syntax: `startsWith(text, comparison)` for case-sensitive match.

`startsWith(text, comparison, "case-insensitive")` for case-insensitive match.

Example: `startsWith([Course Name], "Computer Science")` would return true for course names that began with "Computer Science", like "Computer Science 101: An introduction".

It would return false for "Computer **s**cience 201: Data structures" because the case of "science" does not match the case in the comparison text.

`startsWith([Course Name], "Computer Science", "case-insensitive")` would return true for both "Computer Science 101: An introduction" and "Computer science 201: Data structures".

Related: [endsWith](#endswith), [contains](#contains), [doesNotContain](#doesnotcontain).

### subdomain

Extracts the subdomain from a URL. Ignores `www` (returns a blank string).

Syntax: `subdomain(url)`

Example: `subdomain([Page URL])`. If the `[Page URL]` column had a value of `https://status.metabase.com`, `subdomain([Page URL])` would return `status`.

Related: [domain](#domain), [host](#host), [path](#path).

### [substring](./expressions/substring.md)

Returns a portion of the supplied text, specified by a starting position and a length.

Syntax: `substring(text, position, length)`

Example: `substring([Title], 1, 10)` returns the first 10 letters of a string (the string index starts at position 1).

Related: [regexExtract](#regexextract), [replace](#replace).

### text

> Not available for the non-JDBC Druid driver

Converts a number or date to text (a string). Useful for applying text filters or joining with other columns based on text comparisons.

Syntax: `text(value)`

Example: `text(Created At])` would take a datetime (`Created At`) and return that datetime converted to a string (like `"2024-03-17 16:55:15.373733-07"`).

### trim

Removes leading and trailing whitespace from a string of text.

Syntax: `trim(text)`

Example: `trim([Comment])` will remove any whitespace characters on either side of a comment.

### upper

Returns the text in all upper case.

Syntax: `upper(text)`

Example: `upper([Status])`. If status were "hyper", `upper("hyper")` would return "HYPER".

Related: [lower](#lower).

## Date functions

Date functions manipulate, extract, or create date and time values.

### [convertTimezone](./expressions/converttimezone.md)

Shifts a date or timestamp value into a specified time zone.

Syntax: `convertTimezone(column, target, source)`

Example: `convertTimezone("2022-12-28T12:00:00", "Canada/Pacific", "Canada/Eastern")` would return the value `2022-12-28T09:00:00`, displayed as `December 28, 2022, 9:00 AM`.

See the [database limitations](./expressions/converttimezone.md#limitations) for `convertTimezone`.

### [datetimeAdd](./expressions/datetimeadd.md)

Adds some unit of time to a date or timestamp value.

Syntax: `datetimeAdd(column, amount, unit)`

Example: `datetimeAdd("2021-03-25", 1, "month")` would return the value `2021-04-25`, displayed as `April 25, 2021`.

`amount` must be an integer, not a fractional number. For example, you cannot add "half a year" (0.5).

Related: [between](#between), [datetimeSubtract](#datetimesubtract).

### [datetimeDiff](./expressions/datetimediff.md)

Returns the difference between two datetimes in some unit of time. For example, `datetimeDiff(d1, d2, "day")` will return the number of days between `d1` and `d2`.

Syntax: `datetimeDiff(datetime1, datetime2, unit)`

Example: `datetimeDiff("2022-02-01", "2022-03-01", "month")` would return `1`.

See the [database limitations](./expressions/datetimediff.md#limitations) for `datetimediff`.

### [datetimeSubtract](./expressions/datetimesubtract.md)

Subtracts some unit of time from a date or timestamp value.

Syntax: `datetimeSubtract(column, amount, unit)`

Example: `datetimeSubtract("2021-03-25", 1, "month")` would return the value `2021-02-25`, displayed as `February 25, 2021`.

`amount` must be an integer, not a fractional number. For example, you cannot subtract "half a year" (0.5).

Related: [between](#between), [datetimeAdd](#datetimeadd).

### day

Takes a datetime and returns the day of the month as an integer.

Syntax: `day([datetime column])`

Example: `day("2021-03-25T12:52:37")` would return the day as an integer, `25`.

### dayName

Returns the localized name of a day of the week, given the day's number (1-7). Respects the [first day of the week setting](../../configuring-metabase/localization.md#first-day-of-the-week).

Syntax: `dayName(dayNumber)`

Example: `dayName(1)` would return `Sunday`, unless you change the [first day of the week setting](../../configuring-metabase/localization.md#first-day-of-the-week).

Related: [quarterName](#quartername), [monthName](#monthname).

### hour

Takes a datetime and returns the hour as an integer (0-23).

Syntax: `hour([datetime column])`

Example: `hour("2021-03-25T12:52:37")` would return `12`.

### interval

Checks a date column's values to see if they're within the relative range.

Syntax: `interval(column, number, text)`

Example: `interval([Created At], -1, "month")`

The `number` must be an integer. You cannot use a fractional value.

Related: [between](#between).

### minute

Takes a datetime and returns the minute as an integer (0-59).

Syntax: `minute([datetime column])`

Example: `minute("2021-03-25T12:52:37")` would return `52`.

### month

Takes a datetime and returns the month number (1-12) as an integer.

Syntax: `month([datetime column])`

Example: `month("2021-03-25T12:52:37")` would return the month as an integer, `3`.

### monthName

Returns the localized short name for the given month.

Syntax: `monthName([Birthday Month])`

Example: `monthName(10)` would return `Oct` for October.

Related: [dayName](#dayname), [quarterName](#quartername).

### [now](./expressions/now.md)

Returns the current date and time using your Metabase [report timezone](../../configuring-metabase/localization.md#report-timezone).

Syntax: `now()`

### quarter

Takes a datetime and returns the number of the quarter in a year (1-4) as an integer.

Syntax: `quarter([datetime column])`

Example: `quarter("2021-03-25T12:52:37")` would return `1` for the first quarter.

### quarterName

Given the quarter number (1-4), returns a string like `Q1`.

Syntax: `quarterName([Fiscal Quarter])`

Example: `quarterName(3)` would return `Q3`.

Related: [dayName](#dayname), [monthName](#monthname).

### relativeDateTime

Gets a timestamp relative to the current time.

Syntax: `relativeDateTime(number, text)`

`number`: Period of interval, where negative values are back in time. The `number` must be an integer. You cannot use a fractional value.

`text`: Type of interval like `"day"`, `"month"`, `"year"`

Note that `relativeDateTime()` will truncate the result to the unit specified as its argument.

Example: `[Orders → Created At] < relativeDateTime(-30, "day")` will filter for orders created over 30 days ago from current date.

Related: [datetimeAdd](#datetimeadd), [datetimeSubtract](#datetimesubtract).

### second

Takes a datetime and returns the number of seconds in the minute (0-59) as an integer.

Syntax: `second([datetime column])`

Example: `second("2021-03-25T12:52:37")` would return the integer `37`.

### timeSpan

Gets a time interval of specified length.

Syntax: `timeSpan(number, text)`

`number`: Period of interval, where negative values are back in time. The `number` must be an integer. You cannot use a fractional value.

`text`: Type of interval like `"day"`, `"month"`, `"year"`

Example: `[Orders → Created At] + timeSpan(7, "day")` will return the date 7 days after the `Created At` date.

### [week](./expressions/week.md)

Takes a datetime and returns the week as an integer.

Syntax: `week(column, mode)`

Example: `week("2021-03-25T12:52:37")` would return the week as an integer, `12`.

- column: the name of the column of the date or datetime value.
- mode: Optional.
  - ISO: (default) Week 1 starts on the Monday before the first Thursday of January.
  - US: Week 1 starts on Jan 1. All other weeks start on Sunday.
  - Instance: Week 1 starts on Jan 1. All other weeks start on the day defined in your Metabase localization settings.

Note that summarizing by week of year in the query builder uses a different mode of determining the first week, see [Week of year](./expressions/week.md) for more information.

### weekday

Takes a datetime and returns an integer (1-7) with the number of the day of the week.

Syntax: `weekday(column)`

- column: The datetime column.

Example:

```
case(
  weekday([Created At]) = 1, "Sunday",
  weekday([Created At]) = 2, "Monday",
  weekday([Created At]) = 3, "Tuesday",
  weekday([Created At]) = 4, "Wednesday",
  weekday([Created At]) = 5, "Thursday",
  weekday([Created At]) = 6, "Friday",
  weekday([Created At]) = 7, "Saturday")
```

### year

Takes a datetime and returns the year as an integer.

Syntax: `year([datetime column])`

Example: `year("2021-03-25T12:52:37")` would return the year 2021 as an integer, `2,021`.

## Type-casting functions

- [date](#date)
- [datetime](#datetime)
- [float](#float)
- [integer](#integer)
- [text](#text)

## Window functions

Window functions can only be used in the **Summarize** section. They cannot be used to create a custom column or a custom filter.

### CumulativeCount

For more info, check out our page on [cumulative functions](./expressions/cumulative.md).

The additive total of rows across a breakout.

Syntax: `CumulativeCount()`

### CumulativeSum

For more info, check out our page on [cumulative functions](./expressions/cumulative.md).

The rolling sum of a column across a breakout.

Syntax: `CumulativeSum(column)`

Example: `CumulativeSum([Subtotal])`

Related: [Sum](#sum) and [SumIf](#sumif).

### Offset

> ⚠️ The `Offset` function is currently unavailable for MySQL/MariaDB, ClickHouse, MongoDB, and Druid.

For more info, check out our page on [Offset](./expressions/offset.md).

Returns the value of an expression in a different row. `Offset` can only be used in the query builder's Summarize step (you cannot use `Offset` to create a custom column).

Syntax: `Offset(expression, rowOffset)`

The `expression` is the value to get from a different row.

The `rowOffset` is the number relative to the current row. For example, `-1` for the previous row, or `1` for the next row.

Example: `Offset(Sum([Total]), -1)` would get the `Sum([Total])` value from the previous row.

## Limitations

- [Aggregation expressions](#aggregations) can only be used in the **Summarize** section of the query builder.

## Database limitations

Limitations are noted for each aggregation and function above, and here there are in summary:

**H2** (including Metabase Sample Database): `Median`, `Percentile`, `convertTimezone`, `regexExtract`, `datetime`, `float`, `splitPart`.

**Athena**: `convertTimezone`, `datetime`, `float`, `splitPart`.

**Databricks**: `convertTimezone`, `datetime`, `float`, `splitPart`.

**Druid**: `Median`, `Percentile`, `StandardDeviation`, `power`, `log`, `exp`, `sqrt`, `Offset`, `datetime`, `float`, `splitPart`. Function `regexExtract` and some [type casting functions](#type-casting-functions) are only available for the Druid-JDBC driver.

**MongoDB**: `Median`, `Percentile`, `power`, `log`, `exp`, `sqrt`, `Offset`, `regexExtract`, `datetime`, `float`, `splitPart`.

**MariaDB**: `Median`, `Percentile`, `Offset`.

**MySQL**: `Median`, `Percentile`, `Offset`.

**Oracle**: `date`, `datetime`, `float`, `splitPart`.

**Presto**: `convertTimezone`, `datetime`, `float`, `splitPart`. Only provides _approximate_ results for `Median` and `Percentile`.

**SparkSQL**: `convertTimezone`, `datetime`, `float`, `splitPart`.

**SQL Server**: `Median`, `Percentile`, `regexExtract`, `datetime`, `float`, `splitPart`.

**SQLite**: `exp`, `log`, `Median`, `Percentile`, `power`, `regexExtract`, `StandardDeviation`, `sqrt`, `Variance`, `datetime`, `float`, `splitPart`.

**Vertica**: `Median`, `Percentile`, `datetime`, `float`, `splitPart`.

If you're using or maintaining a third-party database driver, please [refer to the wiki](https://github.com/metabase/metabase/wiki/What's-new-in-0.35.0-for-Metabase-driver-authors) to see how your driver might be impacted.

Check out our tutorial on [custom expressions in the query builder](https://www.metabase.com/learn/metabase-basics/querying-and-dashboards/questions/custom-expressions) to learn more.

[expressions]: ./expressions.md
