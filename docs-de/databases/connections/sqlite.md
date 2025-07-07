---
Titel: SQLite
---


# SQLite


> SQLite ist für [Metabase Cloud](https://www.metabase.com/cloud/) nicht verfügbar.


Um eine Datenbankverbindung hinzuzufügen, klicken Sie auf das**Zahnradsymbol** oben rechts und navigieren Sie zu**Admin-Einstellungen** >**Datenbanken** >**Datenbank hinzufügen**.


Füllen Sie die Felder für diese Datenbank aus, und klicken Sie unten auf**Änderungen speichern**.


## Einstellungen


Sie können diese Einstellungen jederzeit ändern. Denken Sie nur daran, Ihre Änderungen zu speichern.


### Anzeigename


Der Anzeigename für die Datenbank in der Metabase-Schnittstelle.


### Dateiname


Der Speicherort der SQLite-Datenbank (der absolute Pfad).


### Wiederholung von Abfragen für einfache Erkundungen


Schalten Sie diese Option**AUS**, wenn Sie auf**Ausführen** (die Abspielschaltfläche) klicken möchten, bevor Sie eine [Zusammenfassen](../../questions/query-builder/summarizing-and-grouping.md) oder eine Filterauswahl treffen.


Standardmäßig führt Metabase eine Abfrage aus, sobald Sie eine Gruppierungsoption aus dem Menü**Zusammenfassen** oder eine Filterbedingung aus dem [Drill-through-Menü](https://www.metabase.com/learn/metabase-basics/querying-and-dashboards/questions/drill-through) auswählen. Wenn Ihre Datenbank langsam ist, sollten Sie die erneute Ausführung deaktivieren, um das Laden von Daten bei jedem Klick zu vermeiden.


### Auswählen, wann Metabase synchronisiert und scannt


Aktivieren Sie diese Option**EIN**, um die Abfragen zu verwalten, die Metabase verwendet, um mit Ihrer Datenbank auf dem neuesten Stand zu bleiben. Weitere Informationen finden Sie unter [Synchronisieren und Scannen von Datenbanken](../sync-scan.md).


#### Datenbank-Synchronisierung


Wenn Sie **Auswählen, wann Synchronisierungen und Scans stattfinden** > **ON** gewählt haben, können Sie dies einstellen:


- Die Häufigkeit des [sync](../sync-scan.md#how-database-syncs-work): stündlich (Standard) oder täglich.
- Die Zeit, zu der die Synchronisierung durchgeführt werden soll, in der Zeitzone des Servers, auf dem Ihre Metabase-App ausgeführt wird.


### Scannen nach Filterwerten


Metabase kann die Werte in den einzelnen Feldern dieser Datenbank durchsuchen, um Checkbox-Filter in Dashboards und Fragen zu aktivieren. Dies kann ein etwas ressourcenintensiver Prozess sein, insbesondere wenn Sie eine sehr große Datenbank haben.


Wenn Sie **Auswählen, wann Synchronisierungen und Scans stattfinden** > **ON** gewählt haben, sehen Sie unter **Scannen nach Filterwerten** die folgenden Optionen:


- Mit**Regelmäßig, nach Zeitplan** können Sie [Scan-Abfragen](../sync-scan.md#how-database-scans-work) in einer Häufigkeit ausführen, die der Änderungsrate Ihrer Datenbank entspricht. Die Zeit wird in der Zeitzone des Servers eingestellt, auf dem Ihre Metabase-Anwendung läuft. Dies ist die beste Option für eine kleine Datenbank oder Tabellen mit eindeutigen Werten, die häufig aktualisiert werden.
-Nur beim Hinzufügen eines neuen Filter-Widgets** ist eine gute Option, wenn Sie möchten, dass Scan-Abfragen bei Bedarf ausgeführt werden. Das Aktivieren dieser Option**EIN** bedeutet, dass Metabase nur die Werte der Felder scannt und zwischenspeichert, die verwendet werden, wenn ein neuer Filter zu einem Dashboard oder einer SQL-Frage hinzugefügt wird.
-Niemals, ich mache das manuell, wenn es nötig ist** ist eine Option für Datenbanken, die entweder sehr groß sind oder bei denen wirklich nie neue Werte hinzugefügt werden. Verwenden Sie die Schaltfläche [Feldwerte neu scannen](../sync-scan.md#manually-scanning-column-values), um einen manuellen Scan durchzuführen und Ihre Filterwerte auf den neuesten Stand zu bringen.


### Regelmäßiges Refingerprinting von Tabellen


> Regelmäßiges Refingerprinting erhöht die Belastung Ihrer Datenbank.
