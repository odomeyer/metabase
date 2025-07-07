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

> Verfügbar für PostgreSQL, MySQL/MariaDB, BigQuery, Redshift, ClickHouse und Snowflake.
Konvertiert einen String in einen Fließkommawert. Nützlich, wenn Sie mit Zahlen rechnen wollen, Ihre Daten aber als Strings gespeichert sind.
Syntax: `float(Wert)`
Beispiel: `float("123.45")` would return `123.45` as a floating point value.

### host

Extrahiert den Host, d. h. die Domäne und die TLD, aus einer URL oder E-Mail.
Syntax: `Host(urlOderEmail)`
Beispiel: `Host([Seiten-URL])`. Wenn die Spalte `[Seiten-URL]` einen Wert von `https://www.metabase.com` hätte, würde `host([Seiten-URL])` `metabase.com` zurückgeben. Mit `host([Email])` würde `metabase.com` aus `hello@metabase.com` extrahiert.
Verwandt: [domain](#domain), [path](#path), [subdomain](#subdomain).

### [isEmpty](./expressions/isempty.md)

Gibt true zurück, wenn eine _String-Spalte_ einen leeren String enthält oder null ist. Der Aufruf dieser Funktion für eine Nicht-String-Spalte führt zu einem Fehler. Sie können [isNull](#isnull) für Nicht-String-Spalten verwenden.
Syntax: `isEmpty(column)`
Beispiel: `isEmpty([Feedback])` würde true zurückgeben, wenn `Feedback` ein leerer String (`''`) ist oder keinen Wert enthält.
Verwandt: [notEmpty](#notempty), [isNull](#isnull).

### integer

> Nicht verfügbar für den Nicht-JDBC-Apache-Druid-Treiber.
- Konvertiert eine Zeichenkette in einen Integer-Wert. Nützlich, wenn Sie mit Zahlen rechnen wollen, Ihre Daten aber als Strings gespeichert sind.
- Konvertiert einen Fließkommawert durch Runden in eine ganze Zahl.
Syntax: `Ganzzahl(Wert)`
Beispiel für eine Zeichenkette: `integer("123")` würde `123` als ganze Zahl zurückgeben. Die Zeichenkette muss eine ganze Zahl ergeben (`integer("123.45")` würde also einen Fehler zurückgeben).
Beispiel für Fließkommazahlen: `integer(123.45)` würde `123` zurückgeben.
Verwandt: [round](#round).

### lTrim

Entfernt führende Leerzeichen aus einer Textkette.
Syntax: `lTrim(text)`
Beispiel: `lTrim([Kommentar])`. Wenn der Kommentar "Ich möchte lieber nicht" lautet, würde `lTrim` "Ich möchte lieber nicht" zurückgeben.
Verwandt: [trim](#trim) and [rTrim](#rtrim).

### length

Gibt die Anzahl der Zeichen im Text zurück.
Syntax: `Länge(Text)`
Beispiel: `length([Comment])`. If the `comment` were "wizard", `length` would return 6 ("wizard" has six characters).

### lower

Gibt die Textzeichenfolge in Kleinbuchstaben zurück.
Syntax: `niedriger(Text)`
Beispiel: `niedriger([Status])`. Wenn der `Status` "QUIET" wäre, würde der Ausdruck "quiet" zurückgeben.
Verwandt: [upper](#upper).

### notEmpty

Gibt true zurück, wenn eine _String-Spalte_ einen Wert enthält, der nicht der leere String ist. Der Aufruf dieser Funktion für eine Nicht-String-Spalte führt zu einem Fehler. Sie können [notNull](#notnull) für Nicht-String-Spalten verwenden.
Syntax: `notEmpty(column)`
Beispiel: `notEmpty([Feedback])` würde true zurückgeben, wenn `Feedback` einen Wert enthält, der nicht die leere Zeichenkette (`''`) ist.
Verwandt: [isEmpty](#isempty), [isNull](#isnull), [notNull](#notnull)

### path

Extrahiert den Pfadnamen aus einer URL.
Syntax: `pfad(url)`
Beispiel: `pfad([Seiten-URL])`. Zum Beispiel würde `path("https://www.example.com/path/to/page.html?key1=value")` `/path/to/page.html` zurückgeben.
Verwandt: [domain](#domain), [host](#host), [subdomain](#subdomain).

### [regexExtract](./expressions/regexextract.md)

> ⚠️ `regexExtract` ist für MongoDB, SQLite und SQL Server nicht verfügbar. Für Druid ist "regexExtract" nur für den Druid-JDBC-Treiber verfügbar.
Extrahiert übereinstimmende Teilzeichenfolgen gemäß einem regulären Ausdruck.
Syntax: `regexExtract(text, regulärer_Ausdruck)`
Beispiel: `regexExtract([Adresse], "[0-9]+")`
Datenbanken, die `regexExtract` nicht unterstützen: H2, SQL Server, SQLite.
Verwandt: [contains](#contains), [doesNotContain](#doesnotcontain), [substring](#substring).

### replace

Ersetzt alle Vorkommen eines Suchtextes im Eingabetext durch den Ersetzungstext.
Syntax: `replace(text, find, replace)`
Beispiel: `replace([Titel], "Enorm", "Gigantisch")`

### splitPart

> Verfügbar in PostgreSQL, MySQL/MariaDB, BigQuery, Redshift, Clickhouse und Snowflake
Teilt eine Zeichenfolge an einem angegebenen Begrenzungszeichen und gibt die n-te Teilzeichenfolge zurück.
Syntax: `splitPart(text, Begrenzungszeichen, Position)`
Text": Die Spalte oder der Text, von dem ein Teil zurückgegeben werden soll.
Begrenzer`: Das Muster, das beschreibt, wo jede Aufteilung stattfinden soll.
Position": Die Teilzeichenkette, die nach der Teilung zurückgegeben werden soll. Der Index beginnt an Position 1.
Beispiel: `splitPart([Datumszeichenfolge], " ", 1)`. Wenn der Wert für `Date string` `"2024-09-18 16:55:15.373733-07"` wäre, würde `splitPart` `"2024-09-18"` zurückgeben, da es die Daten am Leerzeichen aufteilt (`" "`, und den ersten Teil (die Teilzeichenkette bei Index 1) nimmt).
Ein anderes Beispiel: `splitPart("Vorname, Mittlerer Name, Nachname", ", ", 3)` würde `"Nachname"` zurückgeben (weil wir das Komma und das Leerzeichen `", "` als Begrenzer verwendet haben, um die Zeichenkette in Teile aufzuteilen, und den dritten Teilstring genommen haben).

### rTrim

Entfernt nachstehende Leerzeichen aus einer Textzeichenkette.
Syntax: `rTrim(text)`
Beispiel: `rTrim([Kommentar])`. Wenn der Kommentar "Fear is the mindkiller. ", würde der Ausdruck "Fear is the mindkiller." zurückgeben.
Verwandt: [trim](#trim) and [lTrim](#ltrim).

### startsWith

Gibt true zurück, wenn der Anfang des Textes mit dem Vergleichstext übereinstimmt. Führt standardmäßig einen Abgleich unter Berücksichtigung der Groß- und Kleinschreibung durch.
Sie können einen optionalen Parameter `"case-insensitive"` übergeben, um einen Abgleich ohne Berücksichtigung der Groß-/Kleinschreibung durchzuführen.
Syntax: `startsWith(text, comparison)` für eine Übereinstimmung unter Berücksichtigung der Groß- und Kleinschreibung.
`startsWith(text, comparison, "case-insensitive")` für eine Übereinstimmung ohne Berücksichtigung der Groß-/Kleinschreibung.
Beispiel: `startsWith([Kursname], "Computer Science")` würde true für Kursnamen zurückgeben, die mit "Computer Science" beginnen, wie "Computer Science 101: An introduction".
Es würde false für "Computer **s**cience 201: Datenstrukturen" falsch, da die Groß- und Kleinschreibung von "Wissenschaft" nicht mit der Groß- und Kleinschreibung im Vergleichstext übereinstimmt.
startsWith([Kursname], "Informatik", "case-insensitive")` würde sowohl für "Informatik 101: Eine Einführung" als auch für "Informatik 201: Datenstrukturen".
Verwandt: [endsWith](#endswith), [contains](#contains), [doesNotContain](#doesnotcontain).

### subdomain

Extrahiert die Subdomain aus einer URL. Ignoriert `www` (gibt eine leere Zeichenkette zurück).
Syntax: `subdomain(url)`
Beispiel: "subdomain([Seiten-URL])`. Wenn die Spalte `[Seiten-URL]` einen Wert von `https://status.metabase.com` hätte, würde `subdomain([Seiten-URL])` `status` zurückgeben.
Verwandt: [domain](#domain), [host](#host), [path](#path).

### [substring](./expressions/substring.md)

Gibt einen Teil des angegebenen Textes zurück, der durch eine Startposition und eine Länge spezifiziert wird.
Syntax: `substring(text, position, length)`
Beispiel: `substring([Titel], 1, 10)` gibt die ersten 10 Buchstaben einer Zeichenkette zurück (der Index der Zeichenkette beginnt an Position 1).
Verwandt: [regexExtract](#regexextract), [replace](#replace).

### text

> Nicht verfügbar für den Nicht-JDBC-Druid-Treiber
Konvertiert eine Zahl oder ein Datum in Text (eine Zeichenkette). Nützlich für die Anwendung von Textfiltern oder die Verknüpfung mit anderen Spalten auf der Grundlage von Textvergleichen.
Syntax: `Text(Wert)`
Beispiel: `text(Created At])` would take a datetime (`Created At`) and return that datetime converted to a string (like `"2024-03-17 16:55:15.373733-07"`).

### trim

Entfernt führende und nachgestellte Leerzeichen aus einer Textkette.
Syntax: `trim(text)`
Beispiel: `trim([Comment])` will remove any whitespace characters on either side of a comment.

### upper

Gibt den Text in Großbuchstaben zurück.
Syntax: `Groß(text)`
Beispiel: `upper([Status])`. Wenn Status "hyper" wäre, würde `upper("hyper")` "HYPER" zurückgeben.
Verwandt: [lower](#lower).

## Date functions

Datumsfunktionen manipulieren, extrahieren oder erstellen Datums- und Zeitwerte.

### [convertTimezone](./expressions/converttimezone.md)

Verschiebt einen Datums- oder Zeitstempelwert in eine bestimmte Zeitzone.
Syntax: `convertTimezone(Spalte, Ziel, Quelle)`
Beispiel: `convertTimezone("2022-12-28T12:00:00", "Canada/Pacific", "Canada/Eastern")` würde den Wert `2022-12-28T09:00:00` zurückgeben, angezeigt als `December 28, 2022, 9:00 AM`.
Siehe die [Datenbankbeschränkungen](./expressions/converttimezone.md#limitations) für `convertTimezone`.

### [datetimeAdd](./expressions/datetimeadd.md)

Fügt eine Zeiteinheit zu einem Datums- oder Zeitstempelwert hinzu.
Syntax: `datetimeAdd(Spalte, Betrag, Einheit)`
Beispiel: `datetimeAdd("2021-03-25", 1, "month")` würde den Wert `2021-04-25` zurückgeben, angezeigt als `April 25, 2021`.
Betrag" muss eine ganze Zahl sein, keine Bruchzahl. Sie können zum Beispiel nicht "ein halbes Jahr" (0,5) hinzufügen.
Verwandt: [between](#between), [datetimeSubtract](#datetimesubtract).

### [datetimeDiff](./expressions/datetimediff.md)

Gibt die Differenz zwischen zwei Zeitpunkten in einer Zeiteinheit zurück. Zum Beispiel gibt `datetimeDiff(d1, d2, "day")` die Anzahl der Tage zwischen `d1` und `d2` zurück.
Syntax: `datetimeDiff(datetime1, datetime2, unit)`
Beispiel: `datetimeDiff("2022-02-01", "2022-03-01", "month")` würde `1` zurückgeben.
Siehe die [Datenbankbeschränkungen](./expressions/datetimediff.md#limitations) für `datetimediff`.

### [datetimeSubtract](./expressions/datetimesubtract.md)

Subtrahiert eine Zeiteinheit von einem Datums- oder Zeitstempelwert.
Syntax: `datetimeSubtract(Spalte, Betrag, Einheit)`
Beispiel: `datetimeSubtract("2021-03-25", 1, "month")` würde den Wert `2021-02-25` zurückgeben, angezeigt als `February 25, 2021`.
Betrag" muss eine ganze Zahl sein, keine Bruchzahl. Sie können zum Beispiel nicht "ein halbes Jahr" (0,5) subtrahieren.
Verwandt: [between](#between), [datetimeAdd](#datetimeadd).

### day

Nimmt eine Datetime und gibt den Tag des Monats als Ganzzahl zurück.
Syntax: `Tag([datetime-Spalte])`
Beispiel: `day("2021-03-25T12:52:37")` würde den Tag als Ganzzahl zurückgeben, `25`.

### dayName

Gibt den lokalisierten Namen eines Wochentags mit der Nummer des Tages (1-7) zurück. Beachtet die Einstellung [erster Wochentag] (../../configuring-metabase/localization.md#first-day-of-the-week).
Syntax: `Tagsname(Tagesnummer)`
Beispiel: `Tagsname(1)` würde `Sonntag` zurückgeben, es sei denn, Sie ändern die [Einstellung für den ersten Tag der Woche](../../configuring-metabase/localization.md#first-day-of-the-week).
Verwandt: [quarterName](#quartername), [monthName](#monthname).

### hour

Nimmt eine Datetime und gibt die Stunde als Ganzzahl (0-23) zurück.
Syntax: `Stunde([Datumszeitspalte])`
Beispiel: `hour("2021-03-25T12:52:37")` würde `12` zurückgeben.

### interval

Prüft die Werte einer Datumsspalte, um festzustellen, ob sie innerhalb des relativen Bereichs liegen.
Syntax: `Intervall(Spalte, Zahl, Text)`
Beispiel: `Intervall([Erstellt am], -1, "Monat")`
Die `Zahl` muss eine ganze Zahl sein. Sie können keine Bruchzahlen verwenden.
Verwandt: [between](#between).

### minute

Nimmt eine Datetime und gibt die Minute als Ganzzahl (0-59) zurück.
Syntax: Minute([Datums-Spalte])`
Beispiel: `Minute("2021-03-25T12:52:37")` würde `52` zurückgeben.

### month

Nimmt eine Datumszeit und gibt die Monatszahl (1-12) als Ganzzahl zurück.
Syntax: `Monat([Datumszeitspalte])`
Beispiel: `Monat("2021-03-25T12:52:37")` gibt den Monat als ganze Zahl zurück, `3`.

### monthName

Gibt den lokalisierten Kurznamen für den angegebenen Monat zurück.
Syntax: Monatsname([Geburtstagsmonat])`
Beispiel: `Monatsname(10)` würde `Okt` für Oktober zurückgeben.
Verwandt: [Tagesname](#Tagsname), [Quartalsname](#Quartalsname).
### [now](./expressions/now.md)
Gibt das aktuelle Datum und die Uhrzeit unter Verwendung Ihrer Metabase zurück [report timezone](../../configuring-metabase/localization.md#report-timezone).
Syntax: `now()`

### quarter

Nimmt eine Datetime und gibt die Nummer des Quartals in einem Jahr (1-4) als Ganzzahl zurück.
Syntax: `Quartal([Datums-Spalte])`
Beispiel: `quarter("2021-03-25T12:52:37")` würde `1` für das erste Quartal zurückgeben.

### quarterName

Gibt die Viertelnummer (1-4) an und liefert eine Zeichenkette wie `Q1`.
Syntax: `Quartalsname([Geschäftsquartal])`
Beispiel: `Quartalsname(3)` würde `Q3` zurückgeben.
Verwandt: [dayName](#dayname), [monthName](#monthname).

### relativeDateTime

Ermittelt einen Zeitstempel relativ zur aktuellen Zeit.
Syntax: `relativeDateTime(Zahl, Text)`
Zahl": Zeitraum des Intervalls, wobei negative Werte in der Zeit zurückreichen. Die `Zahl` muss eine ganze Zahl sein. Sie können keine Bruchzahlen verwenden.
Text": Typ des Intervalls wie `"Tag"`, `"Monat"`, `"Jahr"`.
Beachten Sie, dass `relativeDateTime()` das Ergebnis auf die als Argument angegebene Einheit abschneidet.
Beispiel: `[Aufträge → Erstellt am] < relativeDateTime(-30, "Tag")` filtert nach Aufträgen, die vor mehr als 30 Tagen ab dem aktuellen Datum erstellt wurden.
Verwandt: [datetimeAdd](#datetimeadd), [datetimeSubtract](#datetimesubtract).

### second

Nimmt eine Datetime und gibt die Anzahl der Sekunden in der Minute (0-59) als Ganzzahl zurück.
Syntax: `Sekunde([Datumszeitspalte])`
Beispiel: `Sekunde("2021-03-25T12:52:37")` würde die ganze Zahl `37` zurückgeben.

### timeSpan

Ruft ein Zeitintervall der angegebenen Länge ab.
Syntax: `Zeitspanne(Zahl, Text)`
Zahl": Zeitraum des Intervalls, wobei negative Werte in der Zeit zurückreichen. Die `Zahl` muss eine ganze Zahl sein. Sie können keine Bruchzahlen verwenden.
Text": Typ des Intervalls wie "Tag", "Monat", "Jahr".
Beispiel: `[Orders → Created At] + timeSpan(7, "day")` gibt das Datum 7 Tage nach dem Datum `Created At` zurück.

### [week](./expressions/week.md)

Nimmt eine Datetime und gibt die Woche als Ganzzahl zurück.
Syntax: `Woche(Spalte, Modus)`
Beispiel: `week("2021-03-25T12:52:37")` gibt die Woche als Ganzzahl zurück, `12`.
- column: der Name der Spalte des Datums- oder Datetime-Wertes.
- Modus: Optional.
- ISO: (Standard) Woche 1 beginnt am Montag vor dem ersten Donnerstag im Januar.
- US: Woche 1 beginnt am 1. Januar, alle anderen Wochen beginnen am Sonntag.
- Instanz: Woche 1 beginnt am 1. Januar. Alle anderen Wochen beginnen an dem Tag, der in den Lokalisierungseinstellungen der Metabase festgelegt ist.
Beachten Sie, dass die Zusammenfassung nach Woche des Jahres im Query Builder einen anderen Modus zur Bestimmung der ersten Woche verwendet, siehe [Woche des Jahres](./expressions/week.md) für weitere Informationen.

### weekday

Nimmt eine Datetime und gibt eine Ganzzahl (1-7) mit der Nummer des Wochentags zurück.
Syntax: `Wochentag(Spalte)`
- Spalte: Die datetime-Spalte.
Beispiel:
```
case(
Wochentag([Erstellt am]) = 1, "Sonntag",
wochentag([Erstellt am]) = 2, "Montag",
wochentag([Erstellt am]) = 3, "Dienstag",
wochentag([Erstellt am]) = 4, "Mittwoch",
wochentag([Erstellt am]) = 5, "Donnerstag",
wochentag([Erstellt am]) = 6, "Freitag",
wochentag([Erstellt am]) = 7, "Samstag")
```

### year

Nimmt eine Datetime und gibt das Jahr als Ganzzahl zurück.
Syntax: `Jahr([Datums-Spalte])`
Beispiel: `Jahr("2021-03-25T12:52:37")` gibt das Jahr 2021 als Ganzzahl zurück, `2,021`.

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
