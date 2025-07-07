---
Titel: Tabellen
redirect_from:
  - /docs/latest/questions/sharing/visualizations/table
---

# Tabellen
![Eine Tabelle in der Metabase](../images/table.png)
Tabellen sind der natürliche Lebensraum von Daten.

## Spalten neu anordnen, hinzufügen und ausblenden
Wenn Sie die Einstellungen für Ihre Tabellenvisualisierung öffnen, sehen Sie die Registerkarte Spalten, auf der alle Spalten angezeigt werden, die derzeit in der Tabelle zu sehen sind. Um eine Spalte auszublenden, klicken Sie auf das Augensymbol.

Um diese Spalten zu verwalten, einschließlich Spalten aus verknüpften Tabellen, klicken Sie einfach auf **Spalten hinzufügen oder entfernen**. Markieren Sie die Kästchen neben den Spalten, die Sie im **sichtbaren Bereich** anzeigen möchten, oder deaktivieren Sie sie, um sie auszublenden.
Wenn Sie Tabellen anzeigen, können Sie auf das Symbol **Zahnrad** unten links klicken, um die Spaltenauswahl aufzurufen. Klicken Sie auf **Spalten hinzufügen oder entfernen**, um nach Spalten zu suchen und diese auszuwählen, einschließlich Spalten aus Bezugstabellen.
Hinzufügen oder Entfernen von Spalten](../images/column-selection.png)
Administratoren (und Personen in Gruppen mit Zugriff auf Tabellenmetadaten) können Spalten in der gesamten Metabasis ausblenden, indem sie sie in den [Einstellungen für Tabellenmetadaten] (../../data-modeling/metadata-editing.md#column-visibility) als ausgeblendet markieren.
> **Das Ausblenden von Spalten sollte _nicht_ dazu verwendet werden, sensible Informationen zu schützen**. Das Ausblenden von Spalten in Tabellenvisualisierungseinstellungen wirkt sich nur auf die Sichtbarkeit der Spalten _in der Visualisierung_ aus, nicht in den Abfrageergebnissen. Auch Personen mit Nur-Ansichtsrechten für die Frage können die Visualisierungseinstellungen ändern und Spalten wieder einblenden. Um eine Spalte aus den Ergebnissen einer bestimmten Abfrage auszuschließen, entfernen Sie die Markierung der Spalte im Block "Daten" des Abfragegenerators.
Um die Reihenfolge der Spalten zu ändern, klicken Sie einfach auf eine der Spalten in der Seitenleiste und ziehen Sie sie. Sie können auch auf die Überschrift einer Spalte in der Tabelle klicken und die Spalte an eine andere Position in der Tabelle ziehen.

## Benutzerdefinierte Spalten
![Spalte hinzufügen](../images/add-column.png)
Um eine Spalte hinzuzufügen, können Sie auf die Schaltfläche **+** oben rechts in der Tabelle klicken. Von hier aus können Sie:
- einen Teil der Spalte extrahieren (z. B. einen Teil einer URL oder eines Datums)
- Spalten kombinieren (z. B. Verkettung von Spalten für Vor- und Nachname)
Für kompliziertere Berechnungen können Sie den Editor verwenden, um [eine benutzerdefinierte Spalte hinzuzufügen] (../query-builder/editor.md#custom-columns).

## Zeilennummern zu einer Tabelle hinzufügen
Um die Zeilen einer Tabelle zu nummerieren, klicken Sie auf das Symbol **Zahnrad** unten links, um die Seitenleiste für die Tabellenformatierung aufzurufen. Klicken Sie auf die Registerkarte **Spalten** und aktivieren Sie **Zeilenindex anzeigen**. Metabase fügt eine Spalte auf der linken Seite der Tabelle hinzu, in der für jede Zeile eine Nummer angezeigt wird.
[Zeilennummern zu einer Tabelle hinzufügen](../images/show-row-index.png)

## Größe der Spalten ändern
Um die Breite einer Spalte zu ändern, können Sie auf die Ränder der Spaltenüberschrift klicken und diese ziehen.

## Spaltenüberschriften-Optionen zum Filtern und Zusammenfassen
![Spaltenaktionen](../images/column-actions.png)
Klicken Sie auf eine Spaltenüberschrift und Metabase zeigt Ihnen schnelle Optionen zum Filtern und Zusammenfassen der Daten an. Die Optionen für die Spalte hängen vom Datentyp der Spalte ab (ID, Text, Zahl, Datum).

### Nach dieser Spalte filtern
Sie können einen Wert eingeben und den Spaltenwert filtern:
Textfilter:
- Ist / Ist nicht
- Enthält / Enthält nicht
- Beginnt mit / Endet mit
- Ist leer / Nicht leer
Zahlen-Filter:
- Zwischen
- Größer als / Kleiner als
- Größer als oder gleich / Kleiner als oder gleich
- Gleich / Nicht gleich
- Ist leer / Nicht leer

### Verteilung
Wenn Sie auf Verteilung klicken, werden die Daten zusammengefasst, indem die Zeilen gezählt und die Zählungen nach den Werten in der Spalte gruppiert werden.

### Eindeutige Werte
Ermittelt die Anzahl der eindeutigen Werte.

### Spalten kombinieren
Sie können eine oder mehrere Textspalten kombinieren. Zum Beispiel eine Spalte mit dem Vornamen und eine Spalte mit dem Nachnamen.
Sie können Metabase mitteilen, wie die Spalten kombiniert werden sollen, indem Sie ein Trennzeichen angeben, z. B. ein Leerzeichen, ein Komma oder das Wort "Danger".

### Extrahiere Tag, Monat...
Aus einer Datumsangabe können Sie Folgendes entnehmen:
- **Stunde des Tages**: 0, 1, 2...
- **Tag des Monats**: 0, 1, 2...
- **Tag der Woche**: Montag, Dienstag...
- **Monat des Jahres**: Jan, Feb...
- **Quartal des Jahres**: Q1, Q2...
- **Jahr**: 2024, 2025...

### Domain, Subdomain, Host oder Pfad extrahieren
Erfassen Sie die Domain oder den Host aus einer URL oder E-Mail. Wenn Sie also `https://www.example.com/path/to/page#heading-on-page` haben:
- Host: `example.com`
- Domäne: `example`
- Unterdomäne: `www`
- Pfad: `/path/to/page`
> Das Extrahieren von Teilen einer URL oder E-Mail ist für MongoDB, SQLite und SQL Server nicht verfügbar. Für Druid ist das Extrahieren von Domäne und Host nur für den Druid-JDBC-Treiber verfügbar.

### Summe über die Zeit
Addieren Sie alle Werte und gruppieren Sie sie nach einem Zeitraum, in der Regel nach Monat.

## Klick-Optionen für Tabellenzellen
![Beim Klicken auf eine Tabellenzelle erhalten Sie je nach Datentyp der Spalte unterschiedliche Optionen](../images/cell-action-string.png)
Wenn Sie auf eine Tabellenzelle klicken, erhalten Sie verschiedene Optionen, die vom Datentyp und seinen Werten abhängen.

## Detailansichten


### Einheit der Währung


Ermöglicht die Änderung der Währungseinheit von der Standardeinstellung des Systems.


### Stil des Währungsetiketts


Ermöglicht es Ihnen, zwischen der Anzeige des Währungsetiketts als:


- ein Symbol (wie $)
- einen Code (wie USD)
- der vollständige Name der Währung (z. B. "US Dollar")


### Wo die Währungseinheit angezeigt werden soll


Ermöglicht es Ihnen, zwischen der Anzeige der Währungsbezeichnung in der Spaltenüberschrift oder in jeder Zelle der Spalte umzuschalten.


## Bedingte Tabellenformatierung


Manchmal ist es hilfreich, bestimmte Zeilen oder Spalten in Ihren Tabellen hervorzuheben, wenn sie eine bestimmte Bedingung erfüllen. Sie können Regeln für die bedingte Formatierung einrichten, indem Sie die Visualisierungseinstellungen aufrufen, während Sie eine beliebige Tabelle betrachten, und dann auf die Registerkarte **Bedingte Formatierung** klicken.


[Bedingte Formatierung](../images/conditional-formatting.png)


Wenn Sie eine neue Regel hinzufügen, müssen Sie zunächst auswählen, welche Spalte(n) betroffen sein sollen. Ihre Spalten können auf eine von zwei Arten formatiert werden:


- **Einfarbig**. Wählen Sie eine Farbe, wenn Sie Zellen in der Spalte hervorheben möchten, die größer, kleiner oder gleich einer bestimmten Zahl sind, oder wenn sie ein bestimmtes Wort oder einen bestimmten Satz enthalten. Sie können optional die gesamte Zeile einer Zelle hervorheben, die die von Ihnen gewählte Bedingung erfüllt, damit sie beim Scrollen in der Tabelle leichter zu erkennen ist.
- **Farbbereich**. Wählen Sie Farbbereich, wenn Sie alle Zellen in der Spalte von der kleinsten zur größten oder umgekehrt einfärben möchten. Diese Option ist nur für numerische Spalten verfügbar.


Sie können beliebig viele Regeln für eine Tabelle festlegen und die Reihenfolge, in der diese Regeln angewendet werden, ändern. Wenn zwei oder mehr Regeln nicht miteinander übereinstimmen, gewinnt die Regel, die in der Liste der Regeln ganz oben steht. Sie können Ihre Regeln anklicken und ziehen, um sie neu anzuordnen, und auf eine Regel klicken, um sie zu bearbeiten.


## Hinzufügen von Tabellen zu Dashboards


Wenn Sie eine Tabelle zu einem Dashboard hinzufügen, können Sie [benutzerdefinierte Ziele](../../dashboards/interactive.md#custom-destinations) zu einzelnen Spalten hinzufügen, Filter-Widgets verkabeln und vieles mehr. Ein Beispiel für eine Tabelle, die in einem Dashboard verwendet wird, finden Sie in unserem Artikel [Erstellen eines Datensatznachschlagetools mit Metabase](/learn/metabase-basics/querying-and-dashboards/dashboards/build-a-record-lookup-tool).


## Tabellenpaginierung auf Dashboard-Karten


Wenn Sie eine Tabelle zum Dashboard hinzufügen, ist die Tabelle standardmäßig blätterbar. Sie können die Zeilen paginieren, indem Sie:


1. Klicken Sie auf das Symbol **Bleistift**, um das Dashboard zu bearbeiten.
2. Bewegen Sie den Mauszeiger über die Dashcard, die die Tabelle enthält, und klicken Sie auf das Symbol **Visualisierung**.
3. Schalten Sie auf der Registerkarte **Spalten** die Option **Ergebnisse paginieren** ein.


![Tabellenergebnisse auf Dashboard-Karte paginieren](../images/paginate-table-on-dashboard-card.png)


## Fremdschlüssel-Zuordnung


Hier noch eine letzte coole Funktion, für die allerdings ein Administrator einige Einstellungen im Abschnitt Datenmodell ändern muss. Fremdschlüssel sind nützlich, aber im Allgemeinen nicht aussagekräftig für (menschliche) Leser. Anstatt einen Fremdschlüssel als Zahl, z. B. eine Produkt-ID, anzuzeigen, wäre es schön, die Werte als "Titel" des Produkts anzuzeigen. Metabase kann Fremdschlüssel durch Werte aus der Fremdtabelle ersetzen, die mit diesem Entitätsschlüssel verbunden sind. Das bedeutet, dass anstelle des Wertes "Product_ID" derProdukttitel angezeigt werden kann, z. B. "Lightweight Wool Computer". Ihre Metabase-Administratoren können dies im **Admin Panel** auf derRegisterkarte ** Datenmodell** einrichten. In diesem Fall wählen wir die Tabelle "Bestellungen" aus und ändern den Fremdschlüssel aus der Tabelle "Produkte" so, dass er stattdessen in der Tabelle "Bestellung" als "Produkt → Titel" angezeigt wird.


### Pivotierte Tabellen


> Diese automatische Pivotierung unterscheidet sich von der Visualisierung der [Pivot-Tabelle](./pivot-table.md).


Wenn es sich bei Ihrer Tabelle um ein Ergebnis handelt, das eine numerische Spalte und zwei Gruppierungsspalten enthält, kann Metabase Ihre Tabelle "pivotieren", wie im folgenden Beispiel, in dem Zeilenwerte für die Spalte "Kategorie"("Doohickey", "Gadget", "Gizmo" und "Widget") zu Spaltenüberschriften werden. Wenn Sie die Visualisierungseinstellungen öffnen, indem Sie auf das Zahnradsymbol klicken, können Sie auswählen, welche Spalte gedreht werden soll, falls Metabase einen Fehler macht. Sie können das Pivot-Verhalten auch ganz abschalten.


![Pivot-Tabelle](../images/pivot.png)


## Optionen für den Tabellenexport


Siehe [Ergebnisse exportieren](../exporting-results.md).## Detailansichten

### Einheit der Währung

Ermöglicht die Änderung der Währungseinheit von der Standardeinstellung des Systems.

### Stil des Währungsetiketts

Ermöglicht es Ihnen, zwischen der Anzeige des Währungsetiketts als:

-  ein Symbol (wie $)
-  einen Code (wie USD)
-  der vollständige Name der Währung (z. B. "US Dollar")

### Wo die Währungseinheit angezeigt werden soll

Ermöglicht es Ihnen, zwischen der Anzeige der Währungsbezeichnung in der Spaltenüberschrift oder in jeder Zelle der Spalte umzuschalten.

## Bedingte Tabellenformatierung

Manchmal ist es hilfreich, bestimmte Zeilen oder Spalten in Ihren Tabellen hervorzuheben, wenn sie eine bestimmte Bedingung erfüllen. Sie können Regeln für die bedingte Formatierung einrichten, indem Sie die Visualisierungseinstellungen aufrufen, während Sie eine beliebige Tabelle betrachten, und dann auf die Registerkarte **Bedingte Formatierung** klicken.

[Bedingte Formatierung](../images/conditional-formatting.png)

Wenn Sie eine neue Regel hinzufügen, müssen Sie zunächst auswählen, welche Spalte(n) betroffen sein sollen. Ihre Spalten können auf eine von zwei Arten formatiert werden:

- **Einfarbig**. Wählen Sie eine Farbe, wenn Sie Zellen in der Spalte hervorheben möchten, die größer, kleiner oder gleich einer bestimmten Zahl sind, oder wenn sie ein bestimmtes Wort oder einen bestimmten Satz enthalten. Sie können optional die gesamte Zeile einer Zelle hervorheben, die die von Ihnen gewählte Bedingung erfüllt, damit sie beim Scrollen in der Tabelle leichter zu erkennen ist.
- **Farbbereich**. Wählen Sie Farbbereich, wenn Sie alle Zellen in der Spalte von der kleinsten zur größten oder umgekehrt einfärben möchten. Diese Option ist nur für numerische Spalten verfügbar.

Sie können beliebig viele Regeln für eine Tabelle festlegen und die Reihenfolge, in der diese Regeln angewendet werden, ändern. Wenn zwei oder mehr Regeln nicht miteinander übereinstimmen, gewinnt die Regel, die in der Liste der Regeln ganz oben steht. Sie können Ihre Regeln anklicken und ziehen, um sie neu anzuordnen, und auf eine Regel klicken, um sie zu bearbeiten.

## Hinzufügen von Tabellen zu Dashboards

Wenn Sie eine Tabelle zu einem Dashboard hinzufügen, können Sie [benutzerdefinierte Ziele](../../dashboards/interactive.md#custom-destinations) zu einzelnen Spalten hinzufügen, Filter-Widgets verkabeln und vieles mehr. Ein Beispiel für eine Tabelle, die in einem Dashboard verwendet wird, finden Sie in unserem Artikel [Erstellen eines Datensatznachschlagetools mit Metabase](/learn/metabase-basics/querying-and-dashboards/dashboards/build-a-record-lookup-tool).

## Tabellenpaginierung auf Dashboard-Karten

Wenn Sie eine Tabelle zum Dashboard hinzufügen, ist die Tabelle standardmäßig blätterbar. Sie können die Zeilen paginieren, indem Sie:

1. Klicken Sie auf das Symbol **Bleistift**, um das Dashboard zu bearbeiten.
2. Bewegen Sie den Mauszeiger über die Dashcard, die die Tabelle enthält, und klicken Sie auf das Symbol **Visualisierung**.
3. Schalten Sie auf der Registerkarte **Spalten** die Option **Ergebnisse paginieren** ein.

![Tabellenergebnisse auf Dashboard-Karte paginieren](../images/paginate-table-on-dashboard-card.png)

## Fremdschlüssel-Zuordnung

Hier noch eine letzte coole Funktion, für die allerdings ein Administrator einige Einstellungen im Abschnitt Datenmodell ändern muss. Fremdschlüssel sind nützlich, aber im Allgemeinen nicht aussagekräftig für (menschliche) Leser. Anstatt einen Fremdschlüssel als Zahl, z. B. eine Produkt-ID, anzuzeigen, wäre es schön, die Werte als "Titel" des Produkts anzuzeigen. Metabase kann Fremdschlüssel durch Werte aus der Fremdtabelle ersetzen, die mit diesem Entitätsschlüssel verbunden sind. Das bedeutet, dass anstelle des Wertes "Product_ID" derProdukttitel angezeigt werden kann, z. B. "Lightweight Wool Computer". Ihre Metabase-Administratoren können dies im **Admin Panel** auf derRegisterkarte ** Datenmodell** einrichten. In diesem Fall wählen wir die Tabelle "Bestellungen" aus und ändern den Fremdschlüssel aus der Tabelle "Produkte" so, dass er stattdessen in der Tabelle "Bestellung" als "Produkt → Titel" angezeigt wird.

### Pivotierte Tabellen

>  Diese automatische Pivotierung unterscheidet sich von der Visualisierung der [Pivot-Tabelle](./pivot-table.md).

Wenn es sich bei Ihrer Tabelle um ein Ergebnis handelt, das eine numerische Spalte und zwei Gruppierungsspalten enthält, kann Metabase Ihre Tabelle "pivotieren", wie im folgenden Beispiel, in dem Zeilenwerte für die Spalte "Kategorie"("Doohickey", "Gadget", "Gizmo" und "Widget") zu Spaltenüberschriften werden. Wenn Sie die Visualisierungseinstellungen öffnen, indem Sie auf das Zahnradsymbol klicken, können Sie auswählen, welche Spalte gedreht werden soll, falls Metabase einen Fehler macht. Sie können das Pivot-Verhalten auch ganz abschalten.

![Pivot-Tabelle](../images/pivot.png)

## Optionen für den Tabellenexport

Siehe [Ergebnisse exportieren](../exporting-results.md).
