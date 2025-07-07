---
Titel: Wie man die Serverprotokolle liest
---


# Wie man die Serverprotokolle liest


Hier ist ein Beispielprotokoll einer Abfrage:


```
2021-07-07 15:53:18,560 DEBUG middleware.log :: POST /api/dataset 202 [ASYNC: abgeschlossen] 46.9 ms (17 DB-Aufrufe) App DB-Verbindungen: 1/10 Jetty-Threads: 3/50 (4 im Leerlauf, 0 in der Warteschlange) (72 aktive Threads insgesamt) Abfragen in Bearbeitung: 0 (0 in der Warteschlange); h2 DB 4-Verbindungen: 0/1 (0 Threads blockiert)
```


Lassen Sie uns das Protokoll entpacken:


- **Zeitpunkt des Logs:** `2021-07-07 15:53:18,560`.
-**Protokollebene:** `DEBUG`. Es gibt verschiedene Arten von Log-Levels. Um mehr darüber zu erfahren, lesen Sie [Metabase logs][log-level].
- **Namespace:**. middleware.log`. Sie können Ihre Protokollierungsebene anpassen, um mehr oder weniger Informationen aus diesem Namensraum zu erhalten.
-Methode:** `POST`. Das Verb der HTTP-Methode, wie POST, PUT, GET, DELETE.
- **Pfad:** `/api/dataset`. Die Behandlungs-URL. Beachten Sie, dass die URL-Parameter nicht enthalten sind, was die Fehlersuche bei bestimmten Problemen erschweren kann.
- **Code:** `202`. Der HTTP-Statuscode.
- **ASYNC:** `[ASYNC: abgeschlossen]`. Ob die Metabase die Ergebnisse an den Browser liefern konnte. Wenn Metabase die Ergebnisse nicht liefern konnte, z. B. wenn jemand eine Abfrage startet und seinen Browser schließt, bevor die Abfrage beendet ist, wird im ASYNC-Status "cancelled" angezeigt.
- **Antwortzeit:** `46.9 ms`. Die Zeit, die Metabase benötigt, um die Anfrage zu bearbeiten (vom Eingang der Anfrage bis zur Rückgabe der Ergebnisse an den Browser).
- **Datenbankaufrufe:** `(17 DB-Aufrufe)`. Die Anzahl der verwendeten Abfrageanweisungen, die neben den Aufrufen der abgefragten Datenquelle(n) auch Aufrufe der Metabase-Anwendungsdatenbank umfasst.
- **Verbindungen zur Anwendungsdatenbank:** `App DB-Verbindungen: 1/10`. Die Anzahl der aktiven Verbindungen und der verfügbare Pool von Verbindungen.
- **Jetty-Threads:** `Jetty-Threads: 3/50 (4 im Leerlauf, 0 in der Warteschlange)`. Auflistung der Anzahl der aktiven Threads und des gesamten Pools der verfügbaren Threads. Die `(4 idle, 0 queued)` sind die freien heißen Threads und die Anzahl der Threads in der Warteschlange. Wenn Sie feststellen, dass Sie die Anzahl der Threads in Ihrem Pool ausgeschöpft haben, sehen Sie sich [Metabase at scale][scale] an.
-Java-Threads:** `(72 aktive Threads insgesamt)`. Die Gesamtzahl der Threads, die Metabase verwendet.
- **Abfragen in Bearbeitung:** `Abfragen in Bearbeitung: 0 (0 in der Warteschlange)`. Die Anzahl der aktiven und in der Warteschlange befindlichen Abfragen für alle mit der Metabase verbundenen Datenbankquellen. Es wird empfohlen, die**Datenbankinfo** unten zu überprüfen, um Probleme mit der Datenbank im Zusammenhang mit der Anfrage zu beheben.
-**Datenbankinfo**:`h2 DB 4 Verbindungen: 0/1 (0 Threads blockiert)`. Zeigt Datenbanktyp, Datenbank-ID, aktive Verbindungen/Pool (und Warteschlange). Diese Informationen sind spezifisch für die Datenbank, die mit der Anfrage verbunden ist (in diesem Fall eine POST-Anfrage ), und nicht für die gesamten Anfragen im Flug.


[log-level]:. ./configuring-metabase/log-configuration.md
[scale]: https://www.metabase.com/learn/metabase-basics/administration/administration-and-operation/metabase-at-scale

