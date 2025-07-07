---
Titel: Caching von Abfrageergebnissen
redirect_from:
- /docs/latest/administration-guide/14-caching
- /docs/latest/enterprise-guide/cache
---


# Caching von Abfrageergebnissen


Wenn sich die Ergebnisse Ihrer Fragen nicht häufig ändern, können Sie die Ergebnisse speichern, so dass die Metabase beim nächsten Aufruf der Frage die zwischengespeicherten Ergebnisse abrufen kann, anstatt die Datenbank erneut abzufragen.


Wenn Ihre Daten beispielsweise nur einmal am Tag aktualisiert werden, macht es keinen Sinn, die Datenbank mehr als einmal am Tag abzufragen, da sich die Daten nicht geändert haben werden. Die Rückgabe von zwischengespeicherten Ergebnissen kann erheblich schneller sein, da die Datenbank die Ergebnisse nicht neu berechnen muss, um Ihre Frage zu laden.


Sie können [ Cache-Invalidierungsrichtlinien](#cache-invalidation-policies) für [Fragen](#question-caching-policy), [Dashboards](#dashboard-caching-policy) und [Datenbanken](#database-caching-policy) festlegen.


## Wie funktioniert Caching in der Metabase?


Nehmen wir an, Sie legen eine Caching-Richtlinie für eine bestimmte Frage fest. Sie legen eine Richtlinie [duration](#duration-caching-policy) fest, die besagt, dass die Ergebnisse nach einer Stunde ungültig gemacht (und der Cache gelöscht) werden sollen.


Wenn Sie die Frage zum ersten Mal aufrufen, sucht die Metabase nach gespeicherten Ergebnissen. Wenn sie keine findet, fragt sie Ihre Datenbank ab, gibt die Ergebnisse zurück und speichert sie (im Cache). Diese Ergebnisse bleiben für die nächste Stunde gültig (entsprechend der von Ihnen festgelegten Zeitspanne von einer Stunde).


Wenn Sie die Frage eine halbe Stunde später ausführen, gibt die Metabase diese gespeicherten Ergebnisse zurück.


Wenn Sie die Frage mehr als eine Stunde nach dem ersten Durchlauf ausführen, stellt Metabase fest, dass die gespeicherten Ergebnisse älter sind, als Ihre Caching-Richtlinie erlaubt. Die Metabase löscht die gespeicherten Ergebnisse, führt die Abfrage gegen Ihre Datenbank aus, gibt die Ergebnisse zurück und speichert sie für zukünftige Abfragen. Dieser Cache bleibt für die nächste Stunde gültig, je nach der von Ihnen festgelegten Dauer. Um den Cache immer zu aktualisieren, wenn die Ergebnisse ablaufen, siehe [Cache automatisch aktualisieren](#refresh-cache-automatically).


Sehen Sie, wie [verschiedene Caching-Richtlinien interagieren](#how-dashboard-question-database-and-default-caching-policies-interact).


## Cache-Ungültigkeitserklärungen


Diese Richtlinien bestimmen, wie lange zwischengespeicherte Ergebnisse gültig bleiben.


- [Dauer](#duration-caching-policy)
- [Zeitplan](#schedule-caching-policy)
- [Adaptiv](#adaptive-caching-policy)
- [Ergebnisse nicht zwischenspeichern](#dont-cache-results)


### Caching-Richtlinie für die Dauer


{% include plans-blockquote.html feature="Duration caching policy" %}


Invalidieren und Löschen des Caches nach einer bestimmten Anzahl von Stunden. Wenn jemand eine Abfrage ausführt, prüft die Metabase zunächst, ob sie die Ergebnisse zwischengespeichert hat und ob diese Ergebnisse noch gültig sind. Wenn dies nicht der Fall ist, führt die Metabase die Abfrage in der Datenbank aus und speichert die Ergebnisse im Cache. Diese zwischengespeicherten Ergebnisse bleiben für die von Ihnen eingestellte Dauer gültig.


### Planen Sie die Caching-Richtlinie


{% include plans-blockquote.html feature="Caching-Richtlinie planen" %}


Legen Sie fest, wann der Cache regelmäßig ungültig gemacht werden soll. Die Metabase speichert nur Ergebnisse, wenn eine Abfrage ausgeführt wird, und löscht die zwischengespeicherten Ergebnisse entsprechend dem hier festgelegten Zeitplan.


Sie können festlegen, wann der Cache ungültig werden soll:


- Stündlich
- Täglich
- Wöchentlich
- Monatlich


Wir unterstützen noch keine Mondzyklen.


### Adaptive Caching-Politik


Verwenden Sie die durchschnittliche Ausführungszeit einer Abfrage, um zu bestimmen, wie lange die Ergebnisse der Abfrage zwischengespeichert werden sollen.


- **Mindestdauer der Abfrage**: Die Metabase wird diese Frage in den Cache stellen, wenn die durchschnittliche Ausführungszeit der Abfrage größer als diese Anzahl von Sekunden ist.
- **Multiplikator**: Um zu bestimmen, wie lange jedes zwischengespeicherte Ergebnis gültig sein soll, nehmen wir die durchschnittliche Ausführungszeit dieser Abfrage und multiplizieren sie mit dem hier eingegebenen Wert. Das Ergebnis ist die Anzahl der Sekunden, für die der Cache gültig bleiben soll. Wenn eine Frage beispielsweise durchschnittlich 10 Sekunden braucht, um Ergebnisse zu liefern, und Sie einen Multiplikator von 100 festlegen, speichert die Metabase den Cache für 10 x 100 Sekunden: 1.000 Sekunden (~16 Minuten).


Die Metabase berechnet die durchschnittliche Ausführungszeit einer Abfrage immer dann neu, wenn sie die Abfrage gegen die Datenbank ausführt, um die zwischengespeicherten Ergebnisse zu aktualisieren. Wenn also die Metabase bei der ersten Ausführung der Abfrage gegen die Datenbank 5 Minuten für die Rückgabe der Ergebnisse benötigt, beträgt die durchschnittliche Ausführungszeit 5 Minuten. Wenn die nächste Abfrage an die Datenbank 7 Minuten dauert, aktualisiert die Metabase den Durchschnitt auf 6 Minuten (der Durchschnitt von 5 und 7 ist 6).
