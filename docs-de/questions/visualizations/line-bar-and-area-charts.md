---
Titel: Liniendiagramme, Balkendiagramme und Flächendiagramme
redirect_from:
  - /docs/latest/questions/visualizations/line-bar-and-area-charts
---

# Liniendiagramme, Balkendiagramme und Flächendiagramme
Sie sind ziemlich nützlich.

## Liniendiagramme
**Liniendiagramme** eignen sich am besten für die Darstellung des Trends einer Zahl im Zeitverlauf, vor allem, wenn Sie viele Werte auf der x-Achse haben. Weitere Informationen finden Sie in unseren Tutorials [Leitfaden für Liniendiagramme](https://www.metabase.com/learn/metabase-basics/querying-and-dashboards/visualization/line-charts) und [Zeitreihenanalyse](https://www.metabase.com/learn/metabase-basics/querying-and-dashboards/time-series).
![Trendlinien](../images/goal-line.png)

## Balkendiagramme
[Balkendiagramm](../images/bar.png)
Wenn Sie versuchen, eine Zahl nach einer Spalte zu gruppieren, die viele mögliche Werte hat, wie z. B. ein Feld "Lieferant" oder "Produkttitel", versuchen Sie es als **Zeilendiagramm** darzustellen. Metabase zeigt Ihnen die Balken in absteigender Reihenfolge der Größe an, mit einem letzten Balken am unteren Ende für die Elemente, die nicht passen.
[Zeilendiagramm](../images/row.png)
Bei einem Balkendiagramm wie "Anzahl der Benutzer nach Alter", bei dem die x-Achse eine Zahl ist, erhalten Sie eine spezielle Art von Diagramm, das **[Histogramm](https://www.metabase.com/learn/metabase-basics/querying-and-dashboards/visualization/histograms)**, bei dem jeder Balken einen Wertebereich (eine so genannte "Bin") darstellt. Beachten Sie, dass Metabase Ihre Ergebnisse immer dann automatisch einordnet, wenn Sie eine Zahl als Gruppierung verwenden, auch wenn Sie kein Balkendiagramm anzeigen. Fragen, die Längen- und Breitengrade verwenden, werden ebenfalls automatisch eingeteilt.

## Kombinierte Linien- und Balkendiagramme
Siehe [Combo charts](./combo-chart.md).

## Histogramme
![Histogramm](../images/histogram.png)
Standardmäßig wählt Metabase automatisch ein geeignetes Verfahren zum Binning Ihrer Ergebnisse. Sie können jedoch die Anzahl der Bins für Ihr Ergebnis ändern oder das Binning ganz ausschalten, indem Sie auf den Bereich rechts neben der Spalte klicken, nach der Sie gruppieren möchten:
![Binning-Optionen](../images/histogram-bins.png)

## Flächendiagramme
**Flächendiagramme** sind nützlich, wenn man die Proportionen zweier Metriken über die Zeit vergleicht. Sowohl Balken- als auch Flächendiagramme können gestapelt werden.
![Gestapeltes Flächendiagramm](../images/area.png)

## Einstellungen für Linien-, Balken- und Flächendiagramme
Diese drei Diagrammtypen verfügen über sehr ähnliche Optionen, die auf die folgenden Registerkarten aufgeteilt sind. Sie können auf diese Diagrammeinstellungen zugreifen, indem Sie auf das Symbol **Zahnrad** unten links im Diagramm klicken.
- Dateneinstellungen](#data-settings)
- Anzeigeeinstellungen](#display-settings)
- Achsen-Einstellungen](#axes-settings)

## Dateneinstellungen
Hier können Sie Einstellungen für die Darstellung der Daten vornehmen.
Für jede Serie im Diagramm können Sie:
- Ob die Serie ein- oder ausgeblendet werden soll.
- Bestimmen, wie die Serie angezeigt werden soll: als Linien-, Balken- oder Flächendiagramm.
- Bestimmen Sie die Reihenfolge, in der Metabase die Serien in der Legende des Diagramms anzeigt.

### Optionen für Liniendiagramm und Flächendiagramm
Liniendiagramm-Optionen](../images/line-options.png)
- Farbe der Linie
- Form der Linie
- Linienstil
- Liniengröße: Klein, Mittel, oder Groß
- Ob Dokumente auf den Linien angezeigt werden sollen (die Punkte stellen die tatsächlichen Datenpunkte dar, die im Diagramm dargestellt werden)
- Ob Werte für die Serie angezeigt werden sollen. Diese Option ist nur verfügbar, wenn Sie die Option [Werte an Datenpunkten anzeigen](#values-on-data-points) aktiviert haben.
- Wie fehlende Werte ersetzt werden sollen: Null, Nichts (nur ein Bruch in der Linie), oder Linear interpoliert
Sie können auch Serien neu anordnen (was ihre Reihenfolge in der Legende des Diagramms bestimmt).

### Balkendiagramm-Optionen
Für Balkendiagramme können Sie konfigurieren:
- Balkenfarbe
- Position der Y-Achse (auf welcher Seite des Diagramms die Beschriftung der Y-Achse angezeigt werden soll)

## Anzeigeeinstellungen
Hier stellen Sie Dinge ein wie:
- [Torlinie](#goal-lines)
- [Balkendiagramm stapeln](#stacked-bar-chart)
- Ob Werte an Datenpunkten angezeigt werden sollen](#values-on-data-points)

### Torlinien
![Torlinie auf der Karte](../images/goal-line.png)
Ziellinien können in Verbindung mit [alerts](../alerts.md) verwendet werden, um eine E-Mail oder eine Slack-Nachricht zu senden, wenn Ihre Kennzahl diese Linie überschreitet.

### Trendlinien
**Trendlinien** sind eine weitere nützliche Option für Linien-, Flächen-, Balken- und Punktdiagramme. Wenn Sie eine Frage haben, bei der Sie nach einem Zeitfeld gruppieren, öffnen Sie die Visualisierungseinstellungen und schalten Sie den Schalter **Trendlinie anzeigen** ein, um eine Trendlinie anzuzeigen. Metabase wählt den besten Linientyp aus, der sich an den Trend Ihrer Reihe anpasst. Trendlinien funktionieren auch dann, wenn Sie in Ihrer Zusammenfassung mehrere Metriken ausgewählt haben. Trendlinien funktionieren jedoch nicht, wenn Sie Gruppierungen haben, die über das eine Zeitfeld hinausgehen.
![Trendlinien](../images/trend-lines.png)

### Gestapeltes Balkendiagramm
Wenn Sie mehrere Serien haben, können Sie diese in einem Balkendiagramm stapeln.
![Gestapeltes Balkendiagramm](../images/stacked-bar-chart.png)
Sie können sie auch als Prozentsatz stapeln:
![Gestapeltes Balkendiagramm 100%](../images/stacked-100.png)

### Werte auf Datenpunkten
Sie können einige Werte anzeigen (Metabase wählt einige Werte aus, um das Diagramm besser lesbar zu machen), alle Werte oder keine Werte.
Wenn Sie die Werte für Datenpunkte einschalten, können Sie die Werte für die einzelnen Serien auf der Registerkarte [Daten](#data-settings) in den Einstellungen des Diagramms umschalten. Beispiel: Sie haben vier Reihen und möchten nur die Werte für eine der Reihen anzeigen.

### Automatische Formatierung
Bei der Anzeige von Zahlen im Diagramm kann Metabase die Zahlen abschneiden, um die Lesbarkeit des Diagramms zu verbessern. Metabase kürzt zum Beispiel 42.000 zu 42K ab.

## Achseneinstellungen
Hier finden Sie zusätzliche Einstellungen für die Konfiguration Ihrer x- und y-Achsen (wie in Achse, nicht Schlachtaxt).

### X-Achse
- Label anzeigen (das Label für die Achse).
- Umbenennen der Achse
- Linie und Markierungen anzeigen
- Skalieren: Zeitreihe oder Ordinal.

### Y-Achse
- Label anzeigen (das Label für die Achse).
- Umbenennen der Achse
- Y-Achse teilen, wenn nötig
- Auto y-Achsenbereich. Wenn diese Option nicht aktiviert ist, können Sie den Bereich der y-Achse festlegen (Mindest- und Höchstwerte).
- Skala: Linear, Potenz oder Log.
- Linien und Markierungen anzeigen
- Von Null aufheben. Ermöglicht das "Heranzoomen" in Diagrammen mit Werten weit über Null. Hier ein Beispiel (beachten Sie, dass die y-Achse bei 20.000 beginnt):
![y-Achse vom Nullpunkt aus entkoppelt](../images/entkoppelt-vom-Nullpunkt-y-axis.png)

## Diagrammlegende
Bei Diagrammen mit mehreren Serien oder Ausbrüchen zeigt die Diagrammlegende die Beschriftung und Farbe jeder Serie an.
![Legende](../images/legend.png)
Sie können die Farbe und Beschriftung für jede Serie ändern und sie in den [Dateneinstellungen](#data-settings) neu anordnen.
Sie können die Legende verwenden, um:
- eine Reihe hervorheben, indem Sie mit dem Mauszeiger über den Namen der Reihe in der Legende fahren.
- die Serie ausblenden, indem Sie auf den Farbkreis für die Serie klicken.
Um die Serie dauerhaft aus dem Diagramm auszublenden, verwenden Sie die [Dateneinstellungen](#data-settings).
- Klicken Sie auf den Namen der Reihe, um die einzelnen Datensätze der aggregierten Reihe aufzuschlüsseln.
Derzeit können Sie die Legende nicht ausblenden oder ihre Position im Diagramm ändern.

## Weitere Lektüre
- [Leitfaden für Liniendiagramme](https://www.metabase.com/learn/metabase-basics/querying-and-dashboards/visualization/line-charts)
- [Beherrschen Sie das Balkendiagramm](https://www.metabase.com/learn/metabase-basics/querying-and-dashboards/visualization/bar-charts)
- Visualisieren Sie Ihre Daten als Histogramm](https://www.metabase.com/learn/metabase-basics/querying-and-dashboards/visualization/histograms)
