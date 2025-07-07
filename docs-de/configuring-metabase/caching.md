---
Titel: Zwischenspeicherung von Abfrageergebnissen
redirect_from:
  - /docs/latest/administration-guide/14-caching
  - /docs/latest/enterprise-guide/cache
---

# Caching von Abfrageergebnissen


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


Sie können festlegen, dass der Cache ungültig wird:


- Stündlich
- Täglich
- Wöchentlich
- Monatlich


Wir unterstützen noch keine Mondzyklen.

### Adaptive Caching-Richtlinie


Datenbank-Caching-Einstellungen in den Admin-Einstellungen auf der Registerkarte Leistung(./images/data-caching-settings.png)


Entspricht der Standard-Caching-Richtlinie, allerdings können Sie eine Caching-Richtlinie für bestimmte Datenbanken festlegen.


Wenn Sie mit Metabase verbundene Datenbanken haben, für die die Richtlinie**Standard verwenden** eingestellt ist, aktualisiert Metabase die Anzeige entsprechend der eingestellten Standardrichtlinie. Wenn Sie z. B. als Standardrichtlinie "Adaptiv" eingestellt haben, zeigt Metabase für die Datenbanken, die auf "Standard verwenden" eingestellt sind, "Adaptiv" als aktuelle Richtlinie an.


### Dashboard-Caching-Richtlinie


{% include plans-blockquote.html feature="Dashboard caching" %}


Um eine Caching-Richtlinie für ein Dashboard festzulegen, müssen Sie [curate access](../permissions/collections.md#curate-access) für die Sammlung des Dashboards haben.


1. Gehen Sie zu Ihrem Dashboard.
2. Klicken Sie auf das Symbol **Info**.
3. Klicken Sie auf **Caching-Richtlinie**.
4. Wählen Sie die [Caching-Invalidierungsrichtlinie](#cache-invalidation-policies).
5. Optional: Aktivieren Sie [Cache automatisch aktualisieren](#refresh-cache-automatically).
6. Speichern Sie Ihre Änderungen.


### Richtlinie für die Zwischenspeicherung von Fragen


{% include plans-blockquote.html feature="Question caching" %}


Um eine Caching-Richtlinie für eine Frage festzulegen, müssen Sie [curate access](../permissions/collections.md#curate-access) für die Sammlung der Frage haben.


1. Gehen Sie zu Ihrer Frage.
2. Klicken Sie auf das Drei-Punkte-Menü **...** und wählen Sie **Einstellungen bearbeiten**.
3. Wählen Sie unter **Caching** die [Caching-Invalidierungsrichtlinie](#cache-invalidation-policies).
5. Optional: Wenn Sie eine Richtlinie für Dauer oder Zeitplan auswählen, haben Sie die Möglichkeit, denCache automatisch zu aktualisieren(#refresh-cache-automatically).
6. Speichern Sie Ihre Änderungen.


## Wie Dashboard-, Fragen-, Datenbank- und Standard-Caching-Richtlinien zusammenwirken


Wenn mehrere Caching-Richtlinien dieselbe Frage betreffen, verwendet Metabase die erste verfügbare Richtlinie, und zwar in dieser Reihenfolge:


1. Frage
2. Armaturenbrett
3. Datenbank
4. Standard (standortweit)


Eine Fragerichtlinie hat Vorrang vor einer Dashboard-Richtlinie, die wiederum Vorrang vor einer Datenbankrichtlinie hat, die wiederum Vorrang vor einer Standardrichtlinie hat.


## Löschen des Caches


Um den Cache zu löschen und die Ergebnisse zu aktualisieren:


- **Fragen und Dashboards**: Besuchen Sie das Element und klicken Sie auf **Info > Caching policy > Clear cache** (die Schaltfläche "Clear cache" befindet sich unten in der Seitenleiste).
-**Datenbank**: Klicken Sie auf das **Zahnradsymbol** und klicken Sie sich durch **Admin-Einstellungen** > **Leistung** > **Datenbank-Caching**. Wählen Sie Ihre Datenbank aus und klicken Sie auf die Schaltfläche**Cache löschen** (unten auf der Seite).


## Cache-Speicherort


Wenn Sie Metabase selbst hosten, werden die im Cache gespeicherten Fragen in Ihrer [Anwendungsdatenbank](../installation-and-operation/configuring-application-database.md) gespeichert.


Wenn Sie Metabase Cloud verwenden, werden die zwischengespeicherten Fragenergebnisse auf den Servern von Metabase in den USA gespeichert (da unser Cloud-Service Ihre Anwendungsdatenbank für Sie verwaltet).


## Weitere Lektüre


- [Modellpersistenz](../data-modeling/model-persistence.md)
