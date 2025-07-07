---
Titel: Diagnoseinformationen zur Fehlersuche
---


# Diagnoseinformationen für die Fehlersuche


Um Diagnoseinformationen herunterzuladen, drücken Sie `Cmd + F1` auf Macs, `Ctrl + F1` auf PCs. Drücken Sie Cmd/Ctrl + K, um die Befehlspalette aufzurufen, suchen Sie nach "Diagnostic" und wählen Sie "Open diagnostic error modal".


Wählen Sie die Informationen aus, die Sie in die Diagnose-JSON-Datei aufnehmen möchten. Die Optionen umfassen:


- Elementdefinition (wie Informationen über ein Dashboard)
- Browser-Fehlermeldungen
- Alle Server-Fehlermeldungen
- Alle Serverprotokolle
- Serverprotokolle nur für den aktuellen Benutzer
- Informationen zur Version der Metabase-Instanz


Welche Daten die Metabase erfasst, hängt von der Seite ab, auf der Sie sich befinden, wenn Sie Diagnoseinformationen anfordern.


> Überprüfen Sie die heruntergeladene Datei, bevor Sie sie weitergeben, da die Diagnoseinformationen sensible Daten enthalten können.


## Metabase-Server- und Konsolenprotokolle


Metabase protokolliert Fehler sowohl auf dem Server als auch in der Browserkonsole, je nachdem, wo der Fehler auftritt, was Ihnen bei der Fehlersuche helfen kann. Administratoren haben Zugriff auf die Serverprotokolle, und jeder, der über einen Browser verfügt, kann die Entwicklerwerkzeuge öffnen, um die Konsolenprotokolle einzusehen.


**Zugriff auf die Metabase-Serverprotokolle**: Sie können nach den Protokollen suchen, die Metabase im Dateisystem des Servers (oder an einem anderen Ort, an dem Sie Protokolle sammeln) hinterlässt. Wenn Sie mit einem Admin-Konto bei Metabase angemeldet sind, können Sie auch auf die Protokolle zugreifen, indem Sie oben rechts auf dem Bildschirm auf das Symbol **Zahnrad** > **Admin-Einstellungen** > **Fehlerbehebung** > **Protokolle** klicken. Lesen Sie [Wie man die Serverprotokolle liest](./server-logs.md)


**Prüfen auf Javascript-Konsolenfehler:** Metabase sendet Debugging-Informationen und Fehler an die Entwicklerkonsole Ihres Browsers. Um die Entwicklerkonsole zu öffnen, folgen Sie den Anweisungen für Ihren Webbrowser:


- [Chrome](https://developers.google.com/web/tools/chrome-devtools/open#console)
- [Edge](https://docs.microsoft.com/en-us/microsoft-edge/devtools-guide-chromium)
- [Firefox](https://firefox-source-docs.mozilla.org/devtools-user/)
- [Safari](https://support.apple.com/guide/safari-developer/develop-menu-dev39df999c1/mac)


**Erstellen einer HAR-Datei**: HAR-Dateien zeichnen von Ihrem Browser generierte Netzwerkanfragen auf. HAR-Dateien können bei der Fehlersuche in Bezug auf die Leistung der Metabase hilfreich sein. Siehe [Erstellen von HAR-Dateien für die Fehlersuche](./create-har-file.md).

