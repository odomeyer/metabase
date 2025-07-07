---
Titel: Zeitzonen
redirect_from:
- /docs/latest/operations-guide/handling-timezones
---


# Zeitzonen


Die Metabase tut ihr Bestes, um eine korrekte und genaue Berichterstattung in der von Ihnen gewünschten Zeitzone zu gewährleisten. Aber Zeitzonen sind geheimnisvolle Wesen.


## Zeitzoneneinstellungen


Die folgenden Stellen, an denen Zeitzonen eingestellt werden, können sich alle auf die angezeigten Daten auswirken:


-Datenbank" - umfasst globale Datenbank-Zeitzoneneinstellungen, spezifische Spaltentypeinstellungen und sogar einzelne Datenwerte.
-OS & JVM" - auf jedem System, auf dem Metabase läuft, können sich die Zeitzoneneinstellungen des Betriebssystems und der Java Virtual Machine auf Ihre Berichte auswirken.
-Metabase" - innerhalb der Metabase beeinflusst die Einstellung der Berichtszeitzone (falls festgelegt), wie Ihre Daten berichtet werden.
-Metabase Cloud" - die Zeitzone auf dem Server, der Ihre Metabase Cloud-Instanz hostet.


## Empfohlene Einstellungen


Um eine korrekte Berichterstattung zu gewährleisten, ist es wichtig, dass die Zeitzonen an allen Stellen einheitlich eingestellt sind. Metabase empfiehlt die folgenden Einstellungen:


- Vergewissern Sie sich, dass alle Ihre Datenbankspalten so eingerichtet sind, dass sie [Zeitzonenbewusstsein] enthalten(#data-types).
- Wenn Sie keinen besonderen Bedarf haben, ist es am besten, die Zeitzone für Ihre Datenbankberichte auf UTC einzustellen und alle Ihre datums-/zeitbezogenen Werte in UTC zu speichern.
- Konfigurieren Sie Ihre JVM so, dass sie dieselbe Zeitzone verwendet, die Sie auch für die Berichterstellung verwenden möchten, und die idealerweise auch mit der Zeitzone Ihrer Datenbank übereinstimmt.
- Stellen Sie die Metabase "Report Timezone" so ein, dass sie der Zeitzone entspricht, in der Sie Ihre Berichte sehen möchten. Auch dies sollte mit den übrigen Zeitzoneneinstellungen übereinstimmen, die Sie vorgenommen haben.
- Wenn Sie die Zeitzone Ihrer Metabase Cloud ändern möchten,wenden Sie sich bittean den Support(https://www.metabase.com/help-premium).


## Datentypen


Sie können Ihre Datenbankspalten zeitzonenabhängig machen, indem Sie sie als spezifische Datentypen speichern, z. B:


| Datentyp | Beschreibung | Beispiel |
| ----------------------------- | ----------------------------------------- | ---------------------------------------------------- |
| `Zeitstempel mit Zeitzone` | Kennt den Ort. | `2022-12-28T12:00:00 AT TIME ZONE 'America/Toronto'` |
| `Zeitstempel mit Offset` | Kennt den Zeitunterschied zur UTC. | `2022-12-28T12:00:00-04:00` |
| `Zeitstempel ohne Zeitzone` | Keine Zeitzoneninformation. | `2022-12-28T12:00:00` |


Der genaue Datentyp hängt von Ihrer Datenbank ab. Einige Metabase-Funktionen funktionieren nur mit bestimmten Datentypen:


- [Einstellung der Berichtszeitzone](../configuring-metabase/localization.md#report-timezone)
- [`converttimezone` eigener Ausdruck](../questions/query-builder/expressions/converttimezone.md)


## Häufige Fallstricke


1. Ihre Datenbank verwendet Datum/Zeit-Spalten ohne Zeitzoneninformationen. Wenn dies der Fall ist, geht Ihre Datenbank normalerweise davon aus, dass alle Daten aus der Zeitzone stammen, in der die Datenbank konfiguriert ist, oder sie ist möglicherweise einfach auf UTC voreingestellt (überprüfen Sie Ihren Datenbankanbieter, um sicherzugehen).
2. Ihre JVM-Zeitzone unterscheidet sich von der in der Metabase gewählten "Report Timezone". Dies ist ein sehr häufig auftretendes Problem und kann behoben werden, indem Sie Java mit der Option `-Duser.timezone=<timezone>` starten, die so eingestellt ist, dass sie mit der Zeitzone Ihres Metabase Reports übereinstimmt.


Wenn Sie immer noch Probleme mit der Zeitzone haben, sehen Sie sich den [timezone troubleshooting-guide](../troubleshooting-guide/timezones.md) an.

