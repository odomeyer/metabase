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

## Combo line and bar charts

See [Combo charts](./combo-chart.md).

## Histograms

![Histogram](../images/histogram.png)

By default, Metabase will automatically choose a good way to bin your results. But you can change how many bins your result has, or turn the binning off entirely, by clicking on the area to the right of the column you're grouping by:

![Binning options](../images/histogram-bins.png)

## Area charts

**Area charts** are useful when comparing the proportions of two metrics over time. Both bar and area charts can be stacked.

![Stacked area chart](../images/area.png)

## Settings for line, bar, and area charts

These three charting types have very similar options, which are broken up into the following tabs. You can access these chart settings by clicking the **gear** icon in the lower left of the chart.

- [Data settings](#data-settings)
- [Display settings](#display-settings)
- [Axes settings](#axes-settings)

## Data settings

Here you can configure settings for the how the data is displayed.

For each series on the chart, you can:

- Whether to show or hide the series.
- Determine how to display the series: as a line, bar, or area chart.
- Determine the order Metabase displays the series in the chart's legend.

### Line chart and Area chart options

![Line chart options](../images/line-options.png)

- Line color
- Line shape
- Line style
- Line size: Small, Medium, or Large
- Whether to show docs on the lines (the dots represent the actual data points plotted on the chart)
- Whether to show values for the series. This option is only available if you've toggled on [Show value on data points](#values-on-data-points).
- How to replace missing values: Zero, Nothing (just a break in the line), or Linear interpolated

You can also rearrange series (which determines their order in the chart's legend).

### Bar chart options

For bar charts, you can configure:

- Bar color
- Y-axis position (which side of the chart to display the y-axis labels)

## Display settings

Here you set things like:

- [Goal line](#goal-lines)
- [Stack a bar chart](#stacked-bar-chart)
- [Whether to show values on data points](#values-on-data-points)

### Goal lines

![Goal line on chart](../images/goal-line.png)

Goal lines can be used in conjunction with [alerts](../alerts.md) to send an email or a Slack message when your metric cross this line.

### Trend lines

**Trend lines** are another useful option for line, area, bar, and scatter charts. If you have a question where you're grouping by a time field, open up the visualization settings and turn the **Show trend line** toggle on to display a trend line. Metabase will choose the best type of line to fit to the trend of your series. Trend lines will even work if you have multiple metrics selected in your summary. But trend lines won't work if you have any groupings beyond the one time field.

![Trend lines](../images/trend-lines.png)

### Stacked bar chart

If you have multiple series, you can stack them on bar chart.

![Stacked bar chart](../images/stacked-bar-chart.png)

As well as stack them as a percentage:

![Stacked bar chart 100%](../images/stacked-100.png)

### Values on data points

You can show some values (Metabase will pick some values to make the chart more legible), all values, or no values.

If you toggle on values on data points, you can toggle values for individual series on the [Data](#data-settings) tab of the chart's settings. For example, if you have four series, and only want to display values for one of the series.

### Autoformatting

For displaying numbers on the chart, Metabase can truncate the numbers to make the chart more legible. For example, Metabase will truncate 42,000 to 42K.

## Axes settings

Here you'll find additional settings for configuring your x and y axes (as in axis, not battle axe).

### X-axis

- Show label (the label for the axis).
- Rename the axis
- Show line and marks
- Scale: Timeseries or Ordinal.

### Y-axis

- Show label (the label for the axis).
- Rename the axis
- Split y-axis when necessary
- Auto y-axis range. When not toggled on, you can set the y-axis range (it's min and max values).
- Scale: Linear, power, or log.
- Show lines and marks
- Unpin from zero. Allows you to "Zoom in" on charts with values well above zero. Here's an example (note the y-axis starts at 20,000):
  ![y-axis unpinned from zero](../images/unpinned-from-zero-y-axis.png)

## Chart legend

For charts with multiple series or breakouts, chart legend displays the label and color of each series.

![Legend](../images/legend.png)

You can change the color and label for each series and reorder them in [data settings](#data-settings).

You can use the legend to:

- Highlight a series, by hovering over the name of the series in the legend.
- Hide the series, by clicking on the color circle for the series.

To permanently hide the series from the chart, use the [data settings](#data-settings).

- Drill down to individual records for aggregated series, by clicking on the series name.

Currently, you can't hide the legend or change its position on the chart.

## Further reading

- [Guide to line charts](https://www.metabase.com/learn/metabase-basics/querying-and-dashboards/visualization/line-charts)
- [Master the bar chart](https://www.metabase.com/learn/metabase-basics/querying-and-dashboards/visualization/bar-charts)
- [Visualize your data as a histogram](https://www.metabase.com/learn/metabase-basics/querying-and-dashboards/visualization/histograms)
