---
Titel: Visuelle Tests
---


# Visuelle Tests


Wir verwenden [Loki](https://loki.js.org/) mit Storybook für visuelle Tests. Loki erfasst Schnappschüsse von ausgewählten Geschichten und erstellt PNG-Referenzen im Ordner `./loki/references`.


## Lokaler Rechner


Bevor Sie Loki-Tests lokal ausführen, stellen Sie sicher, dass sowohl Storybook als auch Docker laufen.


### Befehle


- Visuelle Tests ausführen: `yarn test-visual:loki`
- Aktualisieren Sie fehlgeschlagene Snapshots: `yarn test-visual:loki-approve-diff`
- Erzeugen eines HTML-Berichts: `yarn test-visual:loki-report`
- Bericht generieren und öffnen: `yarn test-visual:loki-report-open`


## CI


Visuelle Tests werden automatisch bei Pull-Requests ausgelöst. Der Loki CI Job baut das Storybook auf, erfasst neue Snapshots und vergleicht sie mit den Referenzen. Wenn es Unterschiede gibt, schlägt die "Loki Visual Regression Testing" Prüfung fehl.


Um den visuellen Diff-Report zu sehen, öffnen Sie die Seite des fehlgeschlagenen Jobs, gehen Sie zum Abschnitt "Summary" und laden Sie das Artefakt "loki-report" herunter.


Wenn die Unterschiede beabsichtigt sind oder durch einen Fehler verursacht wurden, aktualisieren Sie die Referenz-Snapshots, indem Sie das Label ` loki-update` zum Pull Request hinzufügen.


## Hinzufügen neuer Tests


Das Hinzufügen neuer Tests ist so einfach wie das Hinzufügen neuer Stories. Derzeit verwenden wir visuelle Tests nur für Diagramme, aber Sie können sie für jede andere Geschichte verwenden. Stellen Sie sicher, dass der Wert "storiesFilter" in "loki.config.js" die Stories enthält, die Sie als visuelle Tests verwenden möchten.

