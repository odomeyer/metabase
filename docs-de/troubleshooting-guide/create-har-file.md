---
Titel: Erstellen einer HAR-Datei zur Fehlerbehebung
---


# Erstellen einer HAR-Datei zur Fehlersuche


HAR-Dateien (kurz für _HTTP Archive_) zeichnen Netzwerkanfragen auf, die von Ihrem Browser erzeugt werden. HAR-Dateien können bei der Fehlerbehebung von Problemen mit der Metabase-Leistung hilfreich sein.


> HAR-Dateien können vertrauliche Informationen enthalten, die Sie während der Aufzeichnung übermitteln, z. B. Kennwörter und API-Schlüssel. Bevor Sie die HAR-Datei weitergeben, sollten Sie den Inhalt in einem Texteditor überprüfen.


Um die HAR-Datei zu erstellen, folgen Sie den Anweisungen für Ihren Webbrowser:


- [Chrome](#create-a-har-file-in-chrome)
- [Edge](#create-a-har-file-in-edge)
- [Firefox](#create-a-har-file-in-firefox)
- [Safari](#erstelle-eine-har-datei-in-safari)


## Eine HAR-Datei in Chrome erstellen


1. Öffnen Sie Chrome **Entwicklertools**.
Klicken Sie mit der rechten Maustaste auf eine beliebige Stelle der Seite und wählen Sie "Untersuchen".


2. Wechseln Sie in den Entwicklertools auf die Registerkarte **Netzwerk**.
Die Aufzeichnung des Netzwerkprotokolls sollte automatisch starten.


3. Wiederholen Sie bei geöffneter Registerkarte Netzwerk und laufender Aufzeichnung die Schritte, um das Problem zu reproduzieren.


4. Sobald Sie das Problem reproduziert haben, klicken Sie mit der rechten Maustaste auf eine beliebige Stelle in der Tabelle der Netzwerkanrufe und wählen Sie **Alles als HAR mit Inhalt speichern**.


## Erstellen einer HAR-Datei in Edge


1. Öffnen Sie Edge **Entwicklertools**. Klicken Sie mit der rechten Maustaste auf eine beliebige Stelle der Seite und wählen Sie "Prüfen".


2. Wechseln Sie in den Entwicklertools zur Registerkarte **Netzwerk** (suchen Sie nach dem Wi-Fi-Symbol). Die Aufzeichnung des Netzwerkprotokolls sollte automatisch starten.


3. Wiederholen Sie bei geöffneter Registerkarte Netzwerk und laufender Aufzeichnung die Schritte, um das Problem zu reproduzieren.


4. Sobald Sie das Problem reproduziert haben, klicken Sie mit der rechten Maustaste auf eine beliebige Stelle in der Tabelle und wählen Sie **Alles als HAR mit Inhalt speichern**.


## Erstellen Sie eine HAR-Datei in Firefox


1. Öffnen Sie Firefox **Entwicklertools**. Klicken Sie mit der rechten Maustaste auf eine beliebige Stelle der Seite und wählen Sie "Untersuchen".


2. Wechseln Sie in den Entwicklertools zur Registerkarte **Netzwerk**.


3. Wiederholen Sie bei geöffneter Registerkarte Netzwerk und laufender Aufzeichnung die Schritte, um das Problem zu reproduzieren.


4. Sobald Sie das Problem reproduziert haben, klicken Sie mit der rechten Maustaste auf eine beliebige Stelle in der Tabelle der Netzwerkanrufe und wählen Sie **Alle als HAR speichern**.


## Erstellen einer HAR-Datei in Safari


1. Wenn Sie dies noch nicht getan haben, aktivieren Sie das Menü **Entwickeln**, indem Sie zu **Safari > Einstellungen > Erweitert** gehen und **Funktionen für Webentwickler anzeigen** wählen.


2. Öffnen Sie die Safari-Entwicklerwerkzeuge, indem Sie **Develop > Show Web Inspector** wählen.


3. Wechseln Sie in den Entwicklertools auf die Registerkarte **Netzwerk**. Die Aufzeichnung des Netzwerkprotokolls sollte automatisch starten.


4. Wiederholen Sie bei geöffneter Registerkarte Netzwerk und laufender Aufzeichnung die Schritte, um das Problem zu reproduzieren.


5. Wenn Sie mit der Reproduktion des Problems fertig sind, klicken Sie oben rechts auf der Registerkarte Netzwerk auf **Exportieren**.

