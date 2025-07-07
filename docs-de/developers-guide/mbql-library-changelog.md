---
Titel: MBQL Bibliothek changelog
---


# MBQL Bibliothek Changelog


Änderungen an der API der Bibliothek zur Bearbeitung von MBQL-Abfragen, zu finden in `metabase.lib.js`. Die neueste API-Dokumentation
finden Sie [hier](https://metabase-dev-docs.github.io/metabase/metabase.lib.js.html).


Diese Bibliothek wird hauptsächlich vom Metabase-eigenen Frontend verwendet, aber sie wird als eigene API-Oberfläche behandelt, die versioniert
und in diesem Changelog dokumentiert ist.


## Metabase 0.50.0


- Diese Datei wurde erstellt und die Versionierung dieser API begonnen.
- Neue Funktion ` as-returned` wurde hinzugefügt. Sie behandelt einen kniffligen Fall beim Hinzufügen von Filtern oder Ausdrücken zu einer Abfrage
mit Aggregationen.


Angenommen, wir haben eine Abfrage mit Aggregationen in der letzten Stufe. Wenn ein Filter oder Ausdruck zu dieser Stufe hinzugefügt wird, wird er
**vor** den Aggregationen angewendet. Das mag das gewünschte Verhalten sein, aber wenn wir einen Filter oder benutzerdefinierten Ausdruck
auf der Grundlage der Aggregationen und Breakouts in der letzten Stufe wünschen, bietet diese API keine gute Unterstützung.


as-returned" prüft die Abfrage und die Stufe und wechselt bei Bedarf zu einer späteren Stufe. Wenn eine spätere Stufe erforderlich ist, aber
wir bereits auf der letzten Stufe waren, wird eine neue leere Stufe angehängt.


- Neue Funktionen`Spalten-Extraktionen`,`Extrakt` und`Extraktions-Ausdruck` wurden hinzugefügt.
- DieFunktion "column-extractions" gibt eine Liste von "extractions" zurück, die mögliche benutzerdefinierte Ausdrücke sind, die wir von einer bestimmten Spalte ableiten können.
Spalte ableiten können. Zum Beispiel kann der Host- oder Basisdomänenname aus einer URL oder E-Mail-Adresse oder der Wochentag
aus einem Datum oder einer Zeitangabe.
- extract` wendet eine Extraktion auf die Abfrage an.
-extraction-expression" gibt den Ausdruck für die Extraktion zurück und ermöglicht die weitere Bearbeitung.

