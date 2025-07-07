---
Titel: Verwendungsanalytik
---

# Nutzungsanalyse


{% include plans-blockquote.html feature="Nutzungsanalyse" %}


Die Sammlung**Nutzungsanalyse** ist eine spezielle Sammlung, die Fragen, Dashboards und Modelle enthält, die nur zur Ansicht bestimmt sind und die Ihnen helfen zu verstehen, wie die Benutzer Ihre Metabase nutzen.

![Usage analytics collection](./images/metabase-analytics.png)

Sie finden die Sammlung **Nutzungsanalyse** unter **Sammlungen** in der linken Navigationsleiste. Sie können auch benutzerdefinierte Berichte erstellen.


Diese Ressourcen sind nützlich für:


- **Verstehen der Nutzung**: Verstehen, wie die Nutzer Ihre Metadatenbank verwenden (z. B. neue Fragen, die aktivsten Personen und Gruppen usw.).
-Überprüfen der Aktivitäten**: Wissen, wer was wann angesehen oder getan hat, einschließlich der Verfolgung von Dashboard- und Frageansichten, Abfragen, Downloads und anderen Aktivitäten wie dem Ändern von Einstellungen oder dem Einladen von Personen zu Ihrer Metabase.
- **Verbesserung der Abläufe**: Sie kennen die langsamsten Dashboards und Fragen, wissen, wie Ihre Datenbanken arbeiten, wer die meisten Ressourcen verbraucht und so weiter.


> Die Metabase erstellt einige Standardbenutzerkonten, die Sie in Ihren Nutzungsanalysen sehen können, z. B. ` internal@metabase.com`. Siehe [Standardkonten](../people-and-groups/managing.md#default-user-accounts).

## Zugang zur Nutzungsanalyse


Sie finden die Sammlung**Nutzungsanalyse** unter**Sammlungen** in der Navigationsleiste. Standardmäßig können nur Administratoren die Nutzungsanalyse-Sammlung sehen, aber Administratoren können anderen Gruppen Zugriff auf die Sammlung gewähren. Sie können die Berechtigungen für die Sammlung unter **Admin-Einstellungen** > **Berechtigungen** > **Sammlungen** verwalten.


Es gibt nur zwei Zugriffsarten für die Nutzungsanalysesammlung: **Ansicht** und **Kein Zugriff**. Nicht einmal Administratoren können Nutzungsanalysen kuratieren.


Darüber hinaus verfügt diese Nutzungsanalysesammlung über eine standardmäßige Untersammlung namens "Benutzerdefinierte Berichte", die Sie zum Speichern von duplizierten/geänderten Fragen, Dashboards und Modellen verwenden können. Diese Untersammlung verfügt über dieselben Berechtigungen, ist aber nicht auf die Ansicht beschränkt; Administratoren haben standardmäßig den Zugriff "Curate" und können anderen Gruppen den Zugriff auf die Ansicht gewähren.


> Wenn Sie ein Upgrade von einer älteren Version als 48 durchführen, erhalten Personen in Gruppen mit Überwachungszugriff auch Zugriff auf die Sammlung Nutzungsanalyse. Nach dieser anfänglichen Eingliederung ist die Berechtigung für den Überwachungszugriff jedoch nicht mehr mit der Sammlung Nutzungsanalyse verknüpft; Sie müssen den Gruppen ausdrücklich Zugriff auf die Sammlung Nutzungsanalyse gewähren.

## Nutzungseinblicke für eine Frage, ein Dashboard oder ein Modell anzeigen


> Nur Personen in Gruppen mit Ansichtszugriff auf die Sammlung Nutzungsanalyse sehen diese Option Nutzungsanalyse.


So zeigen Sie Nutzungsanalysen für eine Frage, ein Dashboard oder ein Modell an:


- Besuchen Sie das Element.
- Klicken Sie auf die Info-Schaltfläche oben rechts.
- Klicken Sie auf **Einblicke**.


Metabase leitet Sie zum entsprechenden Nutzungs-Dashboard weiter und gibt die ID des Artikels ein.

## Wie lange Metabase Nutzungsdaten aufbewahrt


Standardmäßig bewahrt die Metabase die Daten über [Aktivität](#activity-log-model), [Ansichten](#view-log-model) und [Abfrageausführung](#query-log-model) für **720 Tage** auf. Zweimal täglich löscht die Metabase Zeilen, die älter als dieser Grenzwert sind. Sie können diesen Grenzwert ändern, indem Sie die Umgebungsvariable [`MB_AUDIT_MAX_RETENTION_DAYS`] anpassen(../configuring-metabase/environment-variables.md#mb_audit_max_retention_days).


Die Metabase Open Source Edition, die auch auf dem [Metabase Cloud Starter Plan](https://www.metabase.com/pricing/) verwendet wird, sammelt keine [Activity](#activity-log-model) und [View](#view-log-model) Daten. Wenn Sie vom Open Source/Starter-Tarif auf einen Pro- oder Enterprise-Tarif upgraden, sehen Sie in Usage Analytics nur Ansichts- und Aktivitätsdaten _ab dem Zeitpunkt des Upgrades_.

## Erstellen von benutzerdefinierten Berichten


- Meistgesehene Dashboards
- Meistgesehene Fragen
- Meist angesehene Tabellen


### Personenübersicht Dashboard


Sehen Sie, was jemand in Ihrer Metabase gemacht hat. Die Karten beinhalten:


- Mitglied von
- Aktive Warnungen
- Erstellte Fragen pro Monat
- Frageaufrufe pro Monat
- Meist angesehene Dashboards
- Meist angesehene Fragen
- Zuletzt angesehene Dashboards
- Zuletzt angesehene Fragen
- Zuletzt angesehene Tabellen
- Letzte Aktivität
- Letzte Abfragen


### Dashboard Übersicht Dashboard


Informationen über Dashboards, Fragen, Modelle und Tabellen. Die Karten enthalten:


- Dashboard-Metadaten
- Dashboard-Aufrufe pro Monat
- Leistung der Fragen
- Die aktivsten Personen auf diesem Dashboard
- Fragen in diesem Dashboard
- Die aktivsten Personen auf diesem Dashboard
- Fragen in diesem Dashboard
- Jüngste Aktivitäten auf dem Dashboard
- Abonnements auf diesem Dashboard


Übersichts-Dashboard für Fragen###


Ansichten, Leistung, Aktivität und andere Daten für eine bestimmte Frage. Die Karten enthalten:


- Metadaten zur Frage
- Frageaufrufe pro Monat
- Leistung der Frage
- Die aktivsten Personen zu dieser Frage
- Dashboards mit dieser Frage
- Letzte Aktivität zu dieser Frage
- Warnungen zu dieser Frage## Erstellen von benutzerdefinierten Berichten

-  Meistgesehene Dashboards
-  Meistgesehene Fragen
-  Meist angesehene Tabellen

### Personenübersicht Dashboard

Sehen Sie, was jemand in Ihrer Metabase gemacht hat. Die Karten beinhalten:

-  Mitglied von
-  Aktive Warnungen
- Erstellte  Fragen pro Monat
-  Frageaufrufe pro Monat
-  Meist angesehene Dashboards
-  Meist angesehene Fragen
-  Zuletzt angesehene Dashboards
-  Zuletzt angesehene Fragen
-  Zuletzt angesehene Tabellen
-  Letzte Aktivität
-  Letzte Abfragen

### Dashboard Übersicht Dashboard

Informationen über Dashboards, Fragen, Modelle und Tabellen. Die Karten enthalten:

-  Dashboard-Metadaten 
-  Dashboard-Aufrufe pro Monat
- Leistung der  Fragen 
-  Die aktivsten Personen auf diesem Dashboard
-  Fragen in diesem Dashboard
-  Die aktivsten Personen auf diesem Dashboard
-  Fragen in diesem Dashboard
-  Jüngste Aktivitäten auf dem Dashboard
-  Abonnements auf diesem Dashboard

 Übersichts-Dashboard für Fragen###

Ansichten, Leistung, Aktivität und andere Daten für eine bestimmte Frage. Die Karten enthalten:

- Metadaten zur  Frage 
-  Frageaufrufe pro Monat
- Leistung der  Frage 
-  Die aktivsten Personen zu dieser Frage
-  Dashboards mit dieser Frage
-  Letzte Aktivität zu dieser Frage
-  Warnungen zu dieser Frage
  
### Leistungsübersicht Dashboard


Fragen, Dashboard und Datenbankleistung. Die Karten umfassen:


- Die langsamsten Dashboards
- Dashboards, die die meisten Ressourcen verbrauchen
- Die langsamsten Fragen
- Fragen, die die meisten Ressourcen verbrauchen
- Dashboards mit mehr Fragen auf derselben Registerkarte
- Benutzer, die die meisten Ressourcen verbrauchen


> Wenn Sie MySQL oder MariaDB als Anwendungsdatenbank verwenden, zeigt das Leistungsübersichts-Dashboard keine Ergebnisse für die Karten mit den 50- und 90-prozentigen Abfragelaufzeiten an, da MySQL und MariaDB die [Perzentil-Aggregation] nicht unterstützen(../questions/query-builder/expressions-list.md#percentile). Wir empfehlen die Verwendung von PostgreSQL als Anwendungsdatenbank.

### Inhalt mit Spinnweben Dashboard
- Ergebnis-Zeilen
- Ist nativ
- Quelle abfragen
- Fehler
- Benutzer-ID
- Karten-ID
- Karte Qualifizierte ID
- Dashboard ID
- Dashboard Qualifizierte ID
- Impuls-ID
- Datenbank-ID
- Qualifizierte Datenbank-ID
- Cache-Treffer
- Aktions-ID


Abfragequellen umfassen:


- Aktion
- Ad-hoc
- Sammlung
- csv-download
- Dashboard
- eingebettetes-dashboard
- eingebetteter-csv-herunterladen
- eingebetteter-json-download
- eingebettete-frage
- eingebettet-xlsx-herunterladen
- json-download
- Karten-Kacheln
- metabot (experimentell)
- public-dashboard
- public-question
- pulse (einschließlich Dashboard-Abonnements und Warnmeldungen)
- Frage
- xlsx-herunterladen### Inhalt mit Spinnweben Dashboard
-  Ergebnis-Zeilen 
-  Ist nativ
- Quelle  abfragen 
-  Fehler 
-  Benutzer-ID 
-  Karten-ID 
-  Karte Qualifizierte ID
-  Dashboard ID
-  Dashboard Qualifizierte ID
-  Impuls-ID 
-  Datenbank-ID 
- Qualifizierte  Datenbank-ID 
-  Cache-Treffer 
-  Aktions-ID 

Abfragequellen umfassen:

-  Aktion 
-  Ad-hoc 
-  Sammlung 
-  csv-download 
-  Dashboard 
-  eingebettetes-dashboard 
-  eingebetteter-csv-herunterladen 
-  eingebetteter-json-download 
-  eingebettete-frage 
-  eingebettet-xlsx-herunterladen 
-  json-download 
-  Karten-Kacheln 
-  metabot (experimentell)
-  public-dashboard 
-  public-question 
-  pulse (einschließlich Dashboard-Abonnements und Warnmeldungen)
-  Frage 
-  xlsx-herunterladen 

## Modell für Warnungen
Fragen, Dashboards, Modelle, Ereignisse und Sammlungen.


- Entitäts-ID
- Entität Qualifizierte ID
- Entitätstyp
- Erstellt am
- Aktualisiert am
- Ersteller-ID
- Name
- Beschreibung
- Sammlung ID
- Vom Benutzer öffentlich gemacht
- Ist die Einbettung aktiviert
- archiviert
- Aktionstyp
- Aktion Modell-ID
- Sammlung ist offiziell
- Sammlung ist persönlich
- Frage Viz-Typ
- Frage Datenbank-ID
- Frage ist nativ
- Ereignis Zeitstempel


Entitätstypen umfassen:


- Aktion
- sammlung
- Dashboard
- Ereignis
- Modell
- Frage


## Personenmodell


Alle Personen in Ihrer Metabase, einschließlich deaktivierter Konten. Die Felder umfassen:


- Benutzer-ID
- E-Mail
- Vorname
- Nachname
- Vollständiger Name
- Datum des Beitritts
- Letzte Anmeldung
- Aktualisiert bei
- Ist Verwaltung
- Ist aktiv
- SSO-Quelle
- Schauplatz

## Dashboard-Abonnementmodell
- KENNUNG
- Dashboard ID
- Dashboardtab ID
- Frage-ID
- Erstellt am
- Aktualisiert am
- Größe X
- Größe Y
- Einstellungen für die Visualisierung
- Parameter-Zuordnungen


## Datenbankmodell


Informationen über Ihre verbundenen Datenquellen. Die Felder umfassen:


- Entitäts-ID
- Entität Qualifizierte ID
- Erstellt am
- Aktualisiert am
- Name
- Beschreibung
- Datenbank-Typ
- Zeitplan für Metadaten-Synchronisation
- Zeitplan für Cache-Feldwerte
- Zeitzone
- Ist auf Anfrage
- Auto Run Abfragen
- Cache Ttl
- Ersteller-ID
- Db-Version


## Tabellenmodell


Liste aller Tabellen über alle verbundenen Datenquellen. Die Felder umfassen:


- Entitäts-ID
- Entität Qualifizierte ID
- Erstellt am
- Aktualisiert am
- Name
- Name anzeigen
- Beschreibung
- Aktiv
- Datenbank-ID
- Schema
- Ist Upload


## Felder Modell


Alle Felder aus allen verbundenen Datenquellen. Die Felder umfassen:


- Entitäts-ID
- Entität Qualifizierte ID
- Erstellt am
- Aktualisiert am
- Name
- Name anzeigen
- Beschreibung
- Basis Typ
- Sichtbarkeit Typ
- Fk Zielfeld-ID
- Hat Feldwerte
- Aktiv
- Tabelle ID


## Systemaufgaben-Modell


Beschreibt die letzten 14 Tage der Metabase-internen Prozessaufgaben.


- KENNUNG
- Aufgabe
- Datenbank Qualifizierte ID
- Begonnen am
- Beendet am
- Dauer Sekunden
- Einzelheiten
