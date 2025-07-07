---
Titel: Fehlerbehebung bei der Datenbankleistung
---


# Fehlersuche bei der Datenbankleistung


Diese Anleitung bezieht sich auf Datenbanken oder Data Warehouses, die als Datenquellenmit der Metabase verbunden sind(../databases/connecting.md).


Um Probleme mit Ihrer Metabase [Anwendungsdatenbank](../installation-and-operation/configuring-application-database.md) zu beheben, lesen Sie diese Anleitungen zur Fehlerbehebung:


- [Ausführen von Metabase](./running.md).
- [Ausführender Metabase auf Docker](./docker.md).
- [Verwenden oder Migrieren von einer H2-Anwendungsdatenbank](./loading-from-h2.md).


## Identifizierung von Engpässen


1. Optional: Verwenden Sie die Metabase [Usage analytics](../usage-and-performance-tools/usage-analytics.md), um Ihre Metabase-Nutzungsstatistiken zu betrachten.\*
2. Gehen Sie zu den Serverprotokollen Ihrer Datenbank und überprüfen Sie, ob:
- Ihre Tabellen werden immer größer,
- Mehr Personen verwenden Metabase für den Zugriff auf Ihre Datenbank,
- Es wird häufiger auf Ihre Datenbank zugegriffen, oder
- Ein Skript oder eine Anwendung (außer Metabase) greift häufig auf die Datenbank zu.
3. Wenn bestimmte Tabellen häufig abgefragt werden, versuchen Sie [Optimieren Sie Ihre Tabellenschemata](https://www.metabase.com/learn/metabase-basics/administration/administration-and-operation/making-dashboards-faster#organize-data-to-anticipate-common-questions).
4. Führen Sie eine Frage aus der Metabase aus und [führen Sie danndieselbe Abfrage](../questions/query-builder/editor.md#viewing-the-native-query-that-powers-your-question) direkt gegen Ihre Datenbank aus.
- Wenn die Abfragen in etwa die gleiche Zeit benötigen, kann es sein, dass Ihre Daten oder die Nutzung Ihrer Datenbank über den Kopf gewachsen sind. Sie können Ihrer Datenbank mehr Ressourcen zur Verfügung stellen oder ein [Upgrade Ihrer Hardware] in Betracht ziehen(https://www.metabase.com/learn/grow-your-data-skills/data-landscape/which-data-warehouse).
- Wenn die Abfrage in der Metabase länger dauert als eine direkte Abfrage in Ihrer Datenbank, müssen Sie möglicherweise die Bereitstellung Ihrer Metabase-Anwendung anpassen. Sehen Sie sich einige Optionen in [Metabase at scale](https://www.metabase.com/learn/metabase-basics/administration/administration-and-operation/metabase-at-scale) an.
5. Wenn ein Skript oder eine Anwendung eines Drittanbieters Ihre Datenbank mit einer Vielzahl von Abfragen gleichzeitig belastet:
- Stoppen Sie Ihr Skript oder Ihre Anwendung und [löschen Sie alle Abfragen in der Warteschlange](#clearing-queued-queries).
- Empfohlen: Fügen Sie Ihrem Skript eine Zeitüberschreitung hinzu, planen Sie das Skript oder die Anwendung so, dass es/sie außerhalb der Geschäftszeiten ausgeführt wird, oder replizieren Sie Ihre Datenbank (und richten Sie Ihre Tools stattdessen dorthin).


\* Verfügbar für Pro- und Enterprise-Tarife.


## Zurücksetzen einer Datenbankverbindung


1. Gehen Sie zu **Einstellungen** > **Verwaltungseinstellungen** > **Datenbanken** > Ihre Datenbank.
2. Klicken Sie auf **Änderungen speichern** (ohne Änderungen vorzunehmen), um die Verbindungen der Metabase mit Ihrer Datenbank zurückzusetzen.
3. Alternativ: Beenden Sie die Verbindung(en) direkt von Ihrer Datenbank aus.


**Erläuterung**


"Schalten Sie es aus und wieder ein", indem Sie die Verbindung zu Ihrer Datenbank trennen und wiederherstellen - eine einfache Überprüfung, die Ihnen viel Zeit ersparen kann.


Im Allgemeinen versucht Metabase, hängende Verbindungen zu Ihrer Datenbank nach 10 Minuten und dann erneut nach 20 Minuten zu schließen. Wenn Ihre Datenbank jedoch nicht antwortet, müssen Sie die Verbindung zur Metabase möglicherweise von der Datenbankseite aus schließen.


## Löschen von Abfragen in der Warteschlange


1. Stoppen Sie den Prozess (z. B. ein Skript oder ein Dashboard mit [zu vielen Karten](./my-dashboard-is-slow.md#dashboard-has-over-10-cards), der viele Abfragen auf einmal startet.
2. Gehen Sie zu Ihrem Datenbankserver und stoppen Sie alle laufenden Abfragen (von Metabase).
3. Optional: Erhöhen Sie die [Anzahl der Verbindungen zu Ihrer Datenbank](../configuring-metabase/environment-variables.md#mb_jdbc_data_warehouse_max_connection_pool_size).


**Erläuterung**


Wenn jemand oder etwas 100 Abfragen gleichzeitig erstellt, nimmt diese Flut von Abfragen alle verfügbaren Verbindungen zwischen der Metabase und Ihrer Datenbank in Anspruch, so dass keine neuen Abfragen mehr ausgeführt werden können. Wenn andere Personen weiterhin Fragen und Dashboards erstellen, während die ersten 100 Abfragen noch in Bearbeitung sind, wächst die Warteschlange schneller, als Ihre Datenbank mithalten kann.
