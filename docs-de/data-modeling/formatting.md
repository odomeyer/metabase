---
Titel: Formatierungsvorgaben
redirect_from:
- /docs/latest/administration-guide/19-formatting-settings
---


# Formatierungsvorgaben


Metabase-Benutzer auf der ganzen Welt haben unterschiedliche Vorlieben für die Formatierung und Anzeige von Daten, Zeiten, Zahlen und Währungen. In der Metabase können Sie diese Formatierungsoptionen auf drei verschiedenen Ebenen anpassen:


1. **Global**. Legen Sie die globalen Standardwerte im Abschnitt [Lokalisierung](../configuring-metabase/localization.md) unter Verwaltung -> Einstellungen -> Lokalisierung fest.
2. **Feld**. Legen Sie Feldvorgaben (Spaltenvorgaben) unter Verwaltung -> Tabellenmetadaten fest. Die Feldvorgaben haben Vorrang vor den globalen Voreinstellungen.
3. **Frage**. Legen Sie Formatierungsvorgaben für einzelne Fragen in den Visualisierungseinstellungen der jeweiligen Frage fest. Fragenvorgaben setzen globale und Feldvorgaben außer Kraft.


## Formatierung auf Feldebene


Sie können die globalen Standardeinstellungen für ein bestimmtes Feld außer Kraft setzen, indem Sie im Abschnitt "Tabellenmetadaten" des Verwaltungsbereichs die Datenbank und die Tabelle des betreffenden Feldes auswählen und auf das Zahnradsymbol ganz rechts auf dem Bildschirm neben dem Feld klicken, um zu seiner Optionsseite zu gelangen.


Die Optionen, die Sie hier sehen, hängen vom Feldtyp ab. Im Allgemeinen handelt es sich um die gleichen Optionen wie in den globalen Formatierungseinstellungen, mit einigen Ergänzungen:


### Daten und Zeiten


-Zeit anzeigen: Hier können Sie wählen, ob das Zeitfeld standardmäßig ohne Zeitangabe, mit Stunden und Minuten, mit Stunden, Minuten und Sekunden oder zusätzlich mit Millisekunden angezeigt werden soll.


### Zahlen


-Minibalkendiagramm anzeigen:` Gilt nur für Tabellenvisualisierungen. Zeigt einen Balken für jeden Wert an, um zu zeigen, wie groß oder klein er im Verhältnis zu den anderen Werten in der Spalte ist.
-Stil: Hier können Sie wählen, ob die Zahl als einfache Zahl, als Prozentwert, in wissenschaftlicher Notation oder als Währung angezeigt werden soll.
-Trennzeichen: Hier haben Sie verschiedene Möglichkeiten, wie die Zahl durch Kommas und Punkte getrennt werden kann.
-Anzahl der Nachkommastellen:` Erzwingt die Anzeige der Zahl mit genau dieser Anzahl an Nachkommastellen.
-Multiplizieren mit einer Zahl:` multipliziert diese Zahl mit dem, was Sie hier eingeben.
-Präfix/Suffix hinzufügen:` Sie können ein Symbol, ein Wort usw. vor oder hinter die Zahl setzen.


### Währung


Die Einstellungen für die Formatierung von Währungsfeldern umfassen dieselben Optionen wie im Abschnitt "Globale Formatierung" sowie alle Optionen, die auch für Zahlenfelder gelten.


Siehe [Währungsformatierungsoptionen](../questions/visualizations/table.md#currency-formatting-options).


## Formatierung auf Frageebene


Schließlich können Sie alle Formatierungseinstellungen in einer bestimmten gespeicherten Frage oder Dashboardkarte außer Kraft setzen, indem Sie auf das Zahnrad klicken, um die Visualisierungsoptionen zu öffnen. Um eine überschriebene Einstellung auf die Standardeinstellung zurückzusetzen, klicken Sie einfach auf das rotierende Pfeilsymbol neben der Bezeichnung der Einstellung. Dadurch wird die Einstellung auf die Einstellung auf Feldebene zurückgesetzt, sofern eine solche vorhanden ist; andernfalls wird sie auf den globalen Standard zurückgesetzt.


Die Formatierungsoptionen hängen von der Art der Visualisierung ab:


- [Kombinationsdiagramm](../questions/visualizations/combo-chart.md)
- [Detail](../Fragen/Visualisierungen/Detail.md)
- [Trichter](../questions/visualizations/funnel.md)
- [Messgerät](../questions/visualizations/gauge.md)
- [Linien-, Balken- und Flächendiagramme](../questions/visualizations/line-bar-and-area-charts.md)
-Karten](../questions/visualizations/map.md)
-Zahlen](../questions/visualizations/numbers.md)
- [Torten- oder Donut-Diagramm](../questions/visualizations/pie-or-donut-chart.md)
- [Pivot-Tabelle](../questions/visualizations/pivot-table.md)
- [Fortschrittsbalken](../questions/visualizations/progress-bar.md)
- [Streudiagramm oder Blasendiagramm](../questions/visualizations/scatterplot-or-bubble-chart.md)
-Tabellen](../Fragen/Visualisierungen/Tabelle.md)
- [Trend](../Fragen/Visualisierungen/Trend.md)
- [Wasserfalldiagramm](../questions/visualizations/waterfall-chart.md)

