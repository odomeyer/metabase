---
Titel: Mein Armaturenbrett ist langsam
---


# Mein Dashboard ist langsam


Vergewissern Sie sich zunächst, dass Ihr Browser mit der Metabase kompatibel ist:


- Löschen Sie Ihren Browser-Cache und deaktivieren Sie alle Erweiterungen, bevor Sie die Seite aktualisieren, oder
- Versuchen Sie, das Dashboard in einer privaten/Incognito-Sitzung zu laden.


## Das Dashboard hat über 10 Karten


1. Erstellen Sie ein neues Dashboard für jede Gruppe von Karten, die sich auf denselben Zeitraum oder dasselbe Segment beziehen.
- Erstellen Sie z. B. neue Dashboards für wöchentliche vs. monatliche Metriken oder für neue vs. wiederkehrende Kunden.
2. Verschieben Sie Ihre Karten auf die neue(n) Übersichtstafel(n), bis jede Übersichtstafel 10 oder weniger Karten hat.
3. Verwenden Sie [benutzerdefinierte Ziele](https://www.metabase.com/learn/metabase-basics/querying-and-dashboards/dashboards/custom-destinations), um verwandte Karten auf verschiedenen Dashboards zu verknüpfen.


**Erläuterung**


Ein Dashboard mit 50 Karten wird fast immer langsamer sein als 5 Dashboards mit 10 Karten. Metabase zeigt ein Dashboard an, indem es alle darin enthaltenen Fragen aktualisiert (d. h. alle Abfragen an Ihre Datenbank erneut ausführt). Ihr Data Warehouse kann versuchen, diese Abfragen gleichzeitig auszuführen, um die Ergebnisse schneller zu erhalten. Allerdings können diese Abfragen miteinander konkurrieren und die Abläufe verlangsamen (wie wenn Sie zu viele Programme gleichzeitig auf Ihrem Computer geöffnet haben).


Ein kleines und übersichtliches Dashboard ist nicht nur schneller, sondern auch leichter zu verstehen, ohne dass die Benutzer überfordert werden. Weitere Tipps finden Sie in unserem Artikel über [BI-Dashboard Best Practices](https://www.metabase.com/learn/metabase-basics/querying-and-dashboards/dashboards/bi-dashboard-best-practices).


## Dashboard wird von vielen Personen gleichzeitig genutzt


1. Optional: Verwenden Sie die Metabase [Usage analytics](../usage-and-performance-tools/usage-analytics.md), um Ihre Metabase-Nutzungsstatistiken einzusehen\*.
2. Richten Sie [caching](../configuring-metabase/caching.md) für die Fragen in Ihrem beliebten Dashboard ein.
3. Führen Sie das Dashboard außerhalb der Geschäftszeiten aus, damit die Benutzer die zwischengespeicherten Ergebnisse in Sekundenschnelle laden können, anstatt eine neue Abfrage an Ihre Datenbank zu stellen.


\* Verfügbar für Pro- und Enterprise-Tarife.


**Erläuterung**


Wenn Sie ein Dashboard haben, das viele Personen zur gleichen Zeit abfragen (z. B. zu Beginn des Arbeitstages), kann es vorkommen, dass sich Abfragen in der Warteschlange befinden oder Datenbankverbindungen überlastet sind. Mit Caching können Sie sich auf Spitzenbelastungen vorbereiten, indem Sie diese langsamen Abfragen einmal im Voraus ausführen, so dass die Ergebnisse sofort zur Verfügung stehen.


Caching ist mit weniger Aufwand verbunden, da keine Änderungen an Ihren Schemata oder Datenbanken vorgenommen werden müssen. Wenn Sie bereit sind, mehr Ressourcen in die Ursache von Dashboard-Performance-Problemen zu investieren, sehen Sie sich diese Liste von gemeinsamen [Schema- und Datenbank-Optimierungen](https://metabase.com/learn/metabase-basics/administration/administration-and-operation/making-dashboards-faster#organize-data-to-anticipate-common-questions) an.


## Eingebettetes Dashboard ist langsam im Vergleich zum ursprünglichen Dashboard


1. Um das eingebettete Dashboard zu beschleunigen, richten Sie einen [gesperrten Parameter zur Vorfilterung Ihrer Daten ein](../embedding/static-embedding-parameters.md#restricting-data-in-a-static-embed-with-locked-parameters).


**Erläuterung**


Eine der einfachsten Möglichkeiten, eine Frage oder ein Dashboard schneller laufen zu lassen, besteht darin, mit einem kleineren Datensatz zu arbeiten. Ihr Metabase-Administrator kann automatische Datenbeschränkungen mit Hilfe von Funktionen wie [SSO](../people-and-groups/start.md#authentication), [data permissions](../permissions/data.md) und [data sandboxing](../permissions/data-sandboxes.md) anwenden.


Wenn jemand eine Frage oder ein Dashboard in einer statischen Einbettung lädt, wird diese Frage oder dieses Dashboard jedoch den vollständigen Datensatz abfragen (und nicht einen kleineren, durch Berechtigungen eingeschränkten Datensatz). Statische, [signierte Einbettungen](../embedding/static-embedding.md) erfordern keine Anmeldung, und nicht authentifizierte Personen, die die signierte Einbettung ansehen, unterliegen nicht den von Ihrem Administrator eingerichteten Berechtigungen und Datenbeschränkungen.


## Das Dashboard ist im Vergleich zu ähnlichen Dashboards langsam


1. Entfernen Sie Felder (Spalten), die Sie im Endergebnis nicht benötigen.
2. Fügen Sie einen [Filter](../questions/query-builder/filters.md) hinzu, um die Menge der abgefragten Daten zu reduzieren. Ein Beispiel:
- Schränken Sie den Zeitrahmen auf den für Sie relevanten Berichtszeitraum ein.
- Schließen Sie ungültige Datensätze aus, z. B. Leerzeichen, Nullen oder Zeilen mit Werten wie "storniert", "abgelaufen", "ungültig" usw.
3. Entfernen Sie [joins](../questions/query-builder/join.md) zu Tabellen, die nicht verwendet werden.
4. Wenn Sie Daten aus dem Query Builder aggregieren, fragen Sie Ihren Datenbankadministrator, ob es eine voraggregierte [Ansicht](https://www.metabase.com/glossary/view) gibt, die Sie stattdessen verwenden können.


**Erläuterung**


Wenn Sie Ihre Frage aktualisieren, um eine minimale Anzahl von Zeilen oder Spalten zu verwenden (oder Ihre Frage so umstellen, dass sie eine kleinere Tabelle verwendet, wie z. B. eine Zusammenfassungstabelle), kann Ihre Datenbank weniger Zeit damit verbringen, diese Datensätze zu durchsuchen, um Ihre Ergebnisse zurückzugeben. Den Umfang Ihrer Frage einzuschränken ist besonders wichtig, wenn Sie von einer gespeicherten Frage oder einem Modell eines anderen Nutzers ausgehen, da Sie möglicherweise nicht alle Daten benötigen, die der ursprüngliche Ersteller aufgenommen hat.


Wenn alle Ihre Dashboards langsam sind, sind Sie möglicherweise durch die Leistung einer bestimmten Datenquelle eingeschränkt. In diesem Fall empfehlen wir Ihnen, gemeinsam mit Ihrem Datenbankadministrator [Troubleshoot database performance](./db-performance.md).


## Verwandte Probleme


- [Fehlermeldung: Ihre Frage hat zu lange gedauert](./timeout.md).
- [Fragen, die Zahlen, Daten oder Zeiten verwenden, sind langsamer als andere Fragen](./db-performance.md#questions-that-use-number-date-or-timestamp-columns).
- [Ich kann meine Frage oder mein Dashboard nicht speichern](./proxies.md).
- [Ich kann eine Frage oder ein Dashboard nicht anzeigen oder bearbeiten](./cant-view-or-edit.md).
- [Meine Visualisierungen sind falsch](./visualization.md).


## Stecken Sie immer noch fest?


Wenn Sie Ihr Problem nicht mit Hilfe der Anleitungen zur Fehlerbehebung lösen können:


- Suchen oder fragen Sie die [Metabase-Community](https://discourse.metabase.com/).
- Suchen Sie nach [bekannten Fehlern oder Einschränkungen](./known-issues.md).

---
Titel: Mein Armaturenbrett ist langsam
---

# Mein Dashboard ist langsam

Vergewissern Sie sich zunächst, dass Ihr Browser mit der Metabase kompatibel ist:

-  Löschen Sie Ihren Browser-Cache und deaktivieren Sie alle Erweiterungen, bevor Sie die Seite aktualisieren, oder
-  Versuchen Sie, das Dashboard in einer privaten/Incognito-Sitzung zu laden.

## Das Dashboard hat über 10 Karten

1. Erstellen Sie ein neues Dashboard für jede Gruppe von Karten, die sich auf denselben Zeitraum oder dasselbe Segment beziehen.
- Erstellen Sie z. B. neue Dashboards für wöchentliche vs. monatliche Metriken oder für neue vs. wiederkehrende Kunden.
2. Verschieben Sie Ihre Karten auf die neue(n) Übersichtstafel(n), bis jede Übersichtstafel 10 oder weniger Karten hat.
3. Verwenden Sie [benutzerdefinierte Ziele](https://www.metabase.com/learn/metabase-basics/querying-and-dashboards/dashboards/custom-destinations), um verwandte Karten auf verschiedenen Dashboards zu verknüpfen.

**Erläuterung**

Ein Dashboard mit 50 Karten wird fast immer langsamer sein als 5 Dashboards mit 10 Karten. Metabase zeigt ein Dashboard an, indem es alle darin enthaltenen Fragen aktualisiert (d. h. alle Abfragen an Ihre Datenbank erneut ausführt). Ihr Data Warehouse kann versuchen, diese Abfragen gleichzeitig auszuführen, um die Ergebnisse schneller zu erhalten. Allerdings können diese Abfragen miteinander konkurrieren und die Abläufe verlangsamen (wie wenn Sie zu viele Programme gleichzeitig auf Ihrem Computer geöffnet haben).

Ein kleines und übersichtliches Dashboard ist nicht nur schneller, sondern auch leichter zu verstehen, ohne dass die Benutzer überfordert werden. Weitere Tipps finden Sie in unserem Artikel über [BI-Dashboard Best Practices](https://www.metabase.com/learn/metabase-basics/querying-and-dashboards/dashboards/bi-dashboard-best-practices).

## Dashboard wird von vielen Personen gleichzeitig genutzt

1. Optional: Verwenden Sie die Metabase [Usage analytics](../usage-and-performance-tools/usage-analytics.md), um Ihre Metabase-Nutzungsstatistiken einzusehen\*.
2. Richten Sie [caching](../configuring-metabase/caching.md) für die Fragen in Ihrem beliebten Dashboard ein.
3. Führen Sie das Dashboard außerhalb der Geschäftszeiten aus, damit die Benutzer die zwischengespeicherten Ergebnisse in Sekundenschnelle laden können, anstatt eine neue Abfrage an Ihre Datenbank zu stellen.

\* Verfügbar für Pro- und Enterprise-Tarife.

**Erläuterung**

Wenn Sie ein Dashboard haben, das viele Personen zur gleichen Zeit abfragen (z. B. zu Beginn des Arbeitstages), kann es vorkommen, dass sich Abfragen in der Warteschlange befinden oder Datenbankverbindungen überlastet sind. Mit Caching können Sie sich auf Spitzenbelastungen vorbereiten, indem Sie diese langsamen Abfragen einmal im Voraus ausführen, so dass die Ergebnisse sofort zur Verfügung stehen.

Caching ist mit weniger Aufwand verbunden, da keine Änderungen an Ihren Schemata oder Datenbanken vorgenommen werden müssen. Wenn Sie bereit sind, mehr Ressourcen in die Ursache von Dashboard-Performance-Problemen zu investieren, sehen Sie sich diese Liste von gemeinsamen [Schema- und Datenbank-Optimierungen](https://metabase.com/learn/metabase-basics/administration/administration-and-operation/making-dashboards-faster#organize-data-to-anticipate-common-questions) an.

## Eingebettetes Dashboard ist langsam im Vergleich zum ursprünglichen Dashboard

1. Um das eingebettete Dashboard zu beschleunigen, richten Sie einen [gesperrten Parameter zur Vorfilterung Ihrer Daten ein](../embedding/static-embedding-parameters.md#restricting-data-in-a-static-embed-with-locked-parameters).

**Erläuterung**

Eine der einfachsten Möglichkeiten, eine Frage oder ein Dashboard schneller laufen zu lassen, besteht darin, mit einem kleineren Datensatz zu arbeiten. Ihr Metabase-Administrator kann automatische Datenbeschränkungen mit Hilfe von Funktionen wie [SSO](../people-and-groups/start.md#authentication), [data permissions](../permissions/data.md) und [data sandboxing](../permissions/data-sandboxes.md) anwenden.

Wenn jemand eine Frage oder ein Dashboard in einer statischen Einbettung lädt, wird diese Frage oder dieses Dashboard jedoch den vollständigen Datensatz abfragen (und nicht einen kleineren, durch Berechtigungen eingeschränkten Datensatz). Statische, [signierte Einbettungen](../embedding/static-embedding.md) erfordern keine Anmeldung, und nicht authentifizierte Personen, die die signierte Einbettung ansehen, unterliegen nicht den von Ihrem Administrator eingerichteten Berechtigungen und Datenbeschränkungen.

## Das Dashboard ist im Vergleich zu ähnlichen Dashboards langsam

1. Entfernen Sie Felder (Spalten), die Sie im Endergebnis nicht benötigen.
2. Fügen Sie einen [Filter](../questions/query-builder/filters.md) hinzu, um die Menge der abgefragten Daten zu reduzieren. Ein Beispiel:
-  Schränken Sie den Zeitrahmen auf den für Sie relevanten Berichtszeitraum ein.
-  Schließen Sie ungültige Datensätze  aus, z. B. Leerzeichen, Nullen oder Zeilen mit Werten wie "storniert", "abgelaufen", "ungültig" usw.
3. Entfernen Sie [joins](../questions/query-builder/join.md) zu Tabellen, die nicht verwendet werden.
4. Wenn Sie Daten aus dem Query Builder aggregieren, fragen Sie Ihren Datenbankadministrator, ob es eine voraggregierte [Ansicht](https://www.metabase.com/glossary/view) gibt, die Sie stattdessen verwenden können.

**Erläuterung**

Wenn Sie Ihre Frage aktualisieren, um eine minimale Anzahl von Zeilen oder Spalten zu verwenden (oder Ihre Frage so umstellen, dass sie eine kleinere Tabelle verwendet, wie z. B. eine Zusammenfassungstabelle), kann Ihre Datenbank weniger Zeit damit verbringen, diese Datensätze zu durchsuchen, um Ihre Ergebnisse zurückzugeben. Den Umfang Ihrer Frage einzuschränken ist besonders wichtig, wenn Sie von einer gespeicherten Frage oder einem Modell eines anderen Nutzers ausgehen, da Sie möglicherweise nicht alle Daten benötigen, die der ursprüngliche Ersteller aufgenommen hat.

Wenn alle Ihre Dashboards langsam sind, sind Sie möglicherweise durch die Leistung einer bestimmten Datenquelle eingeschränkt. In diesem Fall empfehlen wir Ihnen, gemeinsam mit Ihrem Datenbankadministrator [Troubleshoot database performance](./db-performance.md).

## Verwandte Probleme

- [Fehlermeldung: Ihre Frage hat zu lange gedauert](./timeout.md).
- [Fragen, die Zahlen, Daten oder Zeiten verwenden, sind langsamer als andere Fragen](./db-performance.md#questions-that-use-number-date-or-timestamp-columns).
- [Ich kann meine Frage oder mein Dashboard nicht speichern](./proxies.md).
- [Ich kann eine Frage oder ein Dashboard nicht anzeigen oder bearbeiten](./cant-view-or-edit.md).
- [Meine Visualisierungen sind falsch](./visualization.md).

## Stecken Sie immer noch fest?

Wenn Sie Ihr Problem nicht mit Hilfe der Anleitungen zur Fehlerbehebung lösen können:

-  Suchen oder fragen Sie die [Metabase-Community](https://discourse.metabase.com/).
-  Suchen Sie nach [bekannten Fehlern oder Einschränkungen](./known-issues.md).
