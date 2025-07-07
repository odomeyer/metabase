---
Titel: Synchronisieren und Scannen von Datenbanken
Zusammenfassung: Erfahren Sie, wie die Metabase mit Ihrer Datenbank synchron bleibt, indem sie regelmäßig Abfragen durchführt, um Metadaten zu aktualisieren, Feldwerte abzufragen und Statistiken zu berechnen.
---


# Synchronisieren und Scannen von Datenbanken


Metabase führt regelmäßig verschiedene Arten von Abfragen in Ihrem Data Warehouse durch, um mit den Metadaten Ihrer Datenbank auf dem Laufenden zu bleiben. Mit den Informationen über Ihre Daten kann Metabase beispielsweise automatisch das richtige Diagramm für die Ergebnisse anzeigen und Dropdown-Menüs in Filter-Widgets auffüllen.


- [Datenbankschema synchronisieren](#how-database-syncs-work): erfasst Datenbankschema, Tabellenstrukturen, Felder, Beschränkungen (Primär- und Fremdschlüssel) und deaktiviert gelöschte Tabellen.
- [Feldwerte scannen](#how-database-scans-work): nimmt Stichproben von Spaltenwerten, um Filter-Dropdown-Menüs aufzufüllen, eindeutige Werte zu finden und gültige Visualisierungen zu identifizieren. Metabase speichert keine _kompletten_ Tabellen aus Ihrer Datenbank.
- [Fingerprinting](#how-database-fingerprinting-works): Stichproben der ersten 10.000 Zeilen der Tabelle, um Statistiken für jedes Feld in der Stichprobe in Abhängigkeit von ihrem Typ zu berechnen, insbesondere: Anzahl der eindeutigen Werte, % der Nullwerte (alle Feldtypen), Durchschnitt, Median, Minimum, Maximum und Quartile (numerische Typen).


## Erste Synchronisierung, Scan und Fingerprinting


Wenn Metabase zum ersten Mal eine Verbindung zu Ihrer Datenbank herstellt, führt sie einen [Sync](#how-database-syncs-work) durch, um die Metadaten der Spalten in Ihren Tabellen zu ermitteln und jeder Spalte automatisch einen [semantischen Typ](../data-modeling/field-types.md) zuzuweisen.


Sie können den Fortschritt dieser Abfragen unter **Zahnradsymbol** >**Verwaltungseinstellungen** > **Tools** > **Aufgaben** verfolgen und nach den verschiedenen Synchronisierungsaufgaben filtern.


Sobald die Abfragen abgeschlossen sind, können Sie die synchronisierten Metadaten unter**Admin-Einstellungen** >**Tabellenmetadaten** anzeigen und bearbeiten. Weitere Informationen finden Sie unter [Bearbeiten von Metadaten](../data-modeling/metadata-editing.md).


## Auswählen, wann Synchronisierungen und Überprüfungen stattfinden


Standardmäßig führt die Metabase eine einfache stündliche Synchronisierung und eine intensive tägliche Überprüfung der Feldwerte durch. Wenn Sie eine große Datenbank haben, möchten Sie vielleicht festlegen, wann die Synchronisierungen und Überprüfungen stattfinden.


1. Klicken Sie auf das **Zahnradsymbol**.
2. Wählen Sie **Admin-Einstellungen**.
3. Gehen Sie zu **Datenbanken**.
4. Wählen Sie Ihre Datenbank aus.
5. Klicken Sie im Bereich **Verbindung und Synchronisierung** auf **Verbindungsdetails bearbeiten**.
6. Erweitern Sie **Erweiterte Optionen anzeigen**.
7. Schalten Sie **Auswählen, wann Synchronisierungen und Scans stattfinden** um.


Von dort aus können Sie Zeitpläne für Synchronisationen und Scans festlegen.


### Datenbank-Synchronisierung


Die Optionen umfassen:


- Die Häufigkeit der [sync](#how-database-syncs-work): stündlich (Standard) oder täglich.
- Die Uhrzeit für die Synchronisierung, in der Zeitzone des Servers, auf dem Ihre Metabase-App läuft.


### Scannen nach Filterwerten


Bei der Suche werden nur "aktive Felder" berücksichtigt: Felder, die in den letzten vierzehn Tagen verwendet wurden. Metabase scannt keine Felder, die seit mehr als vierzehn Tagen nicht mehr verwendet wurden. Felder, die inaktiv geworden sind, werden wieder aktiv, wenn sie von jemandem verwendet werden, und die Metabase nimmt sie in die nächste Überprüfung auf.


Folgende Optionen stehen zur Verfügung:


- **Regelmäßig, nach Zeitplan** ermöglicht es Ihnen, [Scan-Abfragen](#how-database-scans-work) in einer Häufigkeit durchzuführen, die der Änderungsrate Ihrer Datenbank entspricht. Die Zeit wird in der Zeitzone des Servers eingestellt, auf dem Ihre Metabase-Anwendung läuft. Dies ist die beste Option für eine kleine Datenbank oder Tabellen mit eindeutigen Werten, die häufig aktualisiert werden.
-Nur beim Hinzufügen eines neuen Filter-Widgets** ist eine gute Option, wenn Sie möchten, dass Scan-Abfragen bei Bedarf ausgeführt werden. Das Aktivieren dieser Option**EIN** bedeutet, dass Metabase nur die Werte der Felder scannt und zwischenspeichert, die verwendet werden, wenn jemand ein neues Filter-Widget zu einem Dashboard oder einer SQL-Abfrage hinzufügt (d. h., er fügt einen Parameter zu seiner SQL-Abfrage hinzu).
- **Niemals, ich mache das manuell, wenn es nötig ist** ist eine Option für Datenbanken, die entweder untragbar groß sind oder bei denen nie wirklich neue Werte hinzugefügt werden. Verwenden Sie die Schaltfläche [Feldwerte neu scannen](#manually-scanning-column-values), um einen manuellen Scan durchzuführen und Ihre Filterwerte auf den neuesten Stand zu bringen.
