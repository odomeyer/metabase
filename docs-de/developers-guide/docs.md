---
Titel: Entwicklung der Metabase-Dokumentation
---


# Entwicklung der Metabase-Dokumentation


Hinweise zum Schreiben von Dokumentationen für Metabase.


## Linting von Markdown-Links


Sie können das Verzeichnis [docs](../) auf defekte Links überprüfen, indem Sie es ausführen:


```
yarn run docs-lint-links
```


Dieser Befehl verwendet [Markdown link check](https://github.com/tcort/markdown-link-check), um die Links in allen Markdown-Dateien im Verzeichnis [docs](../) zu überprüfen. Wir empfehlen, die Ausgabe des Befehls in eine Datei zu schreiben. E.links,


```
touch ~/links-to-fix.txt && yarn run docs-lint-links > ~/links-to-fix.txt
```


Alternativ können Sie auch nur die produktinternen Links überprüfen, um sicherzustellen, dass sie auf tatsächliche Dokumente verweisen:


```
yarn run lint-docs-links
```


Sie können beide Befehle in der Datei [package.json](https://github.com/metabase/metabase/blob/master/package.json) unter`Scripts` einsehen.


## Aktualisieren von API-Dokumenten


Um eine API-Endpunktbeschreibung zu aktualisieren, müssen Sie den Kommentar im [Quellcode für diesen Endpunkt](https://github.com/metabase/metabase/tree/master/src/metabase/api) bearbeiten.


Um Ihre Änderungen in ` docs/latest/api-documentation` einzubringen, müssen Sie einen separaten PR öffnen. Checken Sie einen neuen Zweig aus dem aktuellen Veröffentlichungszweig aus, und führen Sie aus:


```
clojure -M:ee:run api-documentation
```


## Style guide


Alter [Style Guide](<https://github.com/metabase/metabase/wiki/Writing-style-guide-for-documentation-and-blog-posts-(WIP)> ), der eine Aktualisierung benötigt.

