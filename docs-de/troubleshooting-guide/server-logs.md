---
Titel: Wie man die Serverprotokolle liest
---
# Wie man die Serverprotokolle liest
Hier ist ein Beispielprotokoll einer Abfrage:

```
2021-07-07 15:53:18,560 DEBUG middleware.log :: POST /api/dataset 202 [ASYNC: completed] 46.9 ms (17 DB calls) App DB connections: 1/10 Jetty threads: 3/50 (4 idle, 0 queued) (72 total active threads) Queries in flight: 0 (0 queued); h2 DB 4 connections: 0/1 (0 threads blocked)
```

Lassen Sie uns das Protokoll auspacken:

- **Time of log:** `2021-07-07 15:53:18,560`.
- **Log level:** DEBUG". Es gibt verschiedene Arten von Protokollebenen. Um mehr zu erfahren, lesen Sie [Metabase logs][log-level].
- **Namespace:**. middleware.log". Sie können Ihre Protokollierungsebene anpassen, um mehr oder weniger Informationen aus diesem Namensraum zu erhalten.
- **Method:** POST". Die HTTP-Methode Verb, wie POST, PUT, GET, DELETE.
- **Path:** `/api/dataset`. Die Behandlungs-URL. Beachten Sie, dass die URL-Parameter nicht enthalten sind, was die Fehlersuche bei bestimmten Problemen erschweren kann.
- **Code:** `202`. Der HTTP-Statuscode.
- **ASYNC:** `[ASYNC: abgeschlossen]`. Ob die Metabase die Ergebnisse an den Browser liefern konnte. Wenn Metabase die Ergebnisse nicht liefern konnte, z. B. wenn jemand eine Abfrage startet und den Browser schließt, bevor die Abfrage beendet ist, wird im ASYNC-Status "cancelled" angezeigt.
- **Response time:** 46,9 ms". Die Zeit, die Metabase für die Bearbeitung der Anfrage benötigt (vom Eingang der Anfrage bei Metabase bis zur Rückgabe der Ergebnisse an den Browser).
- **Database calls:** (17 DB-Aufrufe)". Die Anzahl der verwendeten Abfrageanweisungen, die neben den Aufrufen der abgefragten Datenquelle(n) auch die Aufrufe der Anwendungsdatenbank Metabase umfasst.
- **Application database connections:** App DB-Verbindungen: 1/10`. Die Anzahl der aktiven Verbindungen und der verfügbare Pool von Verbindungen.
- **Jetty threads:** Jetty-Threads: 3/50 (4 im Leerlauf, 0 in der Warteschlange)`. Auflistung der Anzahl der aktiven Threads und des gesamten Pools der verfügbaren Threads. (4 ungenutzte, 0 in der Warteschlange)" sind die freien heißen Threads und die Anzahl der Threads in der Warteschlange. Wenn Sie feststellen, dass die Anzahl der Threads in Ihrem Pool ausgeschöpft ist, sehen Sie sich [Metabase at scale][scale] an.
- **Java threads:** (72 aktive Threads insgesamt)`. Die Gesamtzahl der Threads, die Metabase verwendet.
- **Queries in flight:** Laufende Abfragen: 0 (0 in der Warteschlange)`. Die Anzahl der aktiven und in der Warteschlange befindlichen Abfragen für alle an die Metabase angeschlossenen Datenbankquellen. Wir empfehlen, die **Datenbankinformationen** unten zu überprüfen, um Probleme mit der Datenbank im Zusammenhang mit der Anfrage zu beheben.
- **Database info**:`h2 DB 4 Verbindungen: 0/1 (0 Threads blockiert)`. Zeigt Datenbanktyp, Datenbank-ID, aktive Verbindungen/Pool (und Warteschlange). Diese Informationen sind spezifisch für die Datenbank, die mit der Anfrage verbunden ist (in diesem Fall eine "POST"-Anfrage), und nicht für die gesamten Abfragen im Flug.

[log-level]: ../configuring-metabase/log-configuration.md
[scale]: https://www.metabase.com/learn/metabase-basics/administration/administration-and-operation/metabase-at-scale
