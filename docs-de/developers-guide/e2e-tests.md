---
Titel: End-to-End-Tests mit Cypress
---


# End-to-End-Tests mit Cypress


Metabase verwendet Cypress für "End-to-End-Tests", d. h. Tests, die für die Anwendung als Ganzes ausgeführt werden, einschließlich Frontend, Backend und Anwendungsdatenbank. Bei diesen Tests handelt es sich im Wesentlichen um in JavaScript geschriebene Skripte, die im Webbrowser ausgeführt werden: Besuchen Sie verschiedene URLs, klicken Sie auf verschiedene UI-Elemente, geben Sie Text ein und stellen Sie sicher, dass die Dinge wie erwartet ablaufen (z. B. ein Element, das auf dem Bildschirm erscheint, oder eine Netzwerkanfrage).


*Machen Sie sich bitte mit den [Cypress Best Practices](https://docs.cypress.io/app/core-concepts/best-practices)vertraut , bevor Sie fortfahren.


## Erste Schritte


Die Cypress-Tests der Metabase befinden sich im Quellbaum ` e2e/test/scenarios`, in einer Struktur, die in etwa die URL-Struktur der Metabase widerspiegelt. So befinden sich beispielsweise die Tests für die Admin-"Datenmodell"-Seiten in "e2e/test/scenarios/admin/datamodel".


Unser benutzerdefinierter Cypress-Runner baut sein eigenes Backend auf und erstellt eine temporäre H2-App-DB. Beide werden zerstört, wenn dieser Prozess beendet wird. Der reservierte Standardport ist ` 4000` auf dem lokalen Host. Nichts hindert Sie daran, Ihre lokale Metabase-Instanz gleichzeitig auf "localhost:3000" laufen zu lassen. Dies kann sogar für Debugging-Zwecke hilfreich sein.


### Standard-Entwicklungsablauf


1. Kontinuierlicher Aufbau des Frontends


a. Wenn Sie nur das Frontend benötigen, führen Sie `yarn build-hot` aus


b. Wenn Sie eine lokale Metabase-Instanz zusammen mit Cypress betreiben möchten, können Sie dies am einfachsten mit `yarn dev` oder `yarn dev-ee` erreichen (beide basieren auf dem Hot-Reloading des Frontends unter der Haube)


2. Führen Sie in einer separaten Terminalsitzung (ohne die vorherige zu beenden) "yarn test-cypress" aus. Dadurch wird eine grafische Benutzeroberfläche von Cypress geöffnet, in der Sie auswählen können, welche Tests Sie ausführen möchten. Alternativ können Sie auch einen Blick auf `run_cypress_local.js` und `e2e/test/scenarios/docker-compose.yml` für alle möglichen Optionen werfen.


### Ausführungsoptionen


Um alle Cypress-Tests kopflos im Terminal auszuführen:


```sh
OPEN_UI=false yarn test-cypress ausführen
```


Sie können schnell eine einzelne Datei testen, indem Sie das offizielle Flag "--spec" verwenden.
Dieses Flag kann verwendet werden, um alle Specs innerhalb eines Ordners oder mehrere verschiedene Specs zu testen. Konsultieren Sie [die offizielle Dokumentation](https://docs.cypress.io/app/references/command-line#cypress-run-spec-lt-spec-gt) für Anweisungen.


```sh
OPEN_UI=false yarn test-cypress --spec e2e/test/scenarios/question/new.cy.spec.js
```


Sie können einen Browser angeben, in dem Cypress-Tests ausgeführt werden sollen, indem Sie die Option "--browser" verwenden. Weitere Einzelheiten finden Sie in [der offiziellen Dokumentation](https://docs.cypress.io/guides/guides/launching-browsers).


Die Angabe eines Browsers ist am sinnvollsten, wenn Cypress im_ausführen_ Modus läuft. Andererseits kann man im_offenen_ Modus (GUI) von Cypress leicht zwischen allen auf dem System verfügbaren Browsern wechseln. Manche Leute ziehen es jedoch vor, auch in diesem Szenario einen Browser festzulegen. In diesem Fall sollten Sie bedenken, dass Sie lediglich einen ersten Browser für Cypress vorgeben, aber immer noch die Möglichkeit haben, einen anderen zu wählen.


## Anatomie des Tests


Cypress-Testdateien sind wie Mocha-Tests strukturiert, wobei "describe" -Blöcke verwendet werden, um verwandte Tests zu gruppieren, und "it" -Blöcke die Tests selbst sind.


`it`js
describe("Homepage", () => {
it("soll die Homepage laden und...", () => {
cy.visit("/metabase/url");
// ...
});
});
```


Wir bevorzugen die Verwendung von Selektoren wie `cy.findByText()` und `cy.findByLabelText()` aus [`@testing-library/cypress`](https://github.com/testing-library/cypress-testing-library), da sie das Schreiben von Tests fördern, die nicht von Implementierungsdetails wie CSS-Klassennamen abhängen.


Versuchen Sie zu vermeiden, Teile der Anwendung wiederholt zufällig zu testen. Wenn Sie zum Beispiel etwas über den Abfragegenerator testen wollen, springen Sie direkt dorthin, indem Sie einen Helfer wie "openOrdersTable()" verwenden, anstatt auf der Startseite zu beginnen und auf "Neu", dann auf "Frage" usw. zu klicken.
