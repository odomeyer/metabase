---
Titel: Instrumente der Rechnungsprüfung
redirect_from:
  - /docs/latest/enterprise-guide/audit
---

# Auditing-Tools


Der Abschnitt Fragen zeigt Ihnen die beliebtesten und die langsamsten Abfragen an. Wenn Abfragen, die Sie für wichtig halten, nicht in der Liste der beliebtesten Abfragen auftauchen, sollten Sie sicherstellen, dass sich Ihr Team auf die richtigen Dinge konzentriert.


Wenn wichtige Abfragen in der Liste der langsamsten Abfragen auftauchen, sollten Sie sich um deren Optimierung kümmern. Eine Möglichkeit ist die Anpassung der [Caching-Einstellungen](../configuring-metabase/caching.md), aber es gibt auch viele andere Möglichkeiten. Um festzustellen, ob Ihre Optimierungsbemühungen in die richtige Richtung gehen, können Sie die Visualisierung "Abfrageaufrufe und Geschwindigkeit pro Tag" unten auf der Seite verwenden.


(./images/audit-questions.png)


Eine Liste aller Ihrer Fragen ist ebenfalls verfügbar, und Sie können verschiedene Datenpunkte zu jeder Frage auf einen Blick sehen:


- Abfrageläufe
- Durchschnittliche Laufzeit
- Cache-Dauer
- Gesamtlaufzeit
- Datenbank
- Tabelle
- Sammlung
- Öffentlicher Link


Sie können auch auf eine beliebige Frage klicken, um eine detailliertere Profilansicht zu erhalten:


- Aktivität anzeigen
- Revisionsverlauf
- Ein vollständiges Prüfprotokoll darüber, wer die Frage wann angesehen hat


### Dashboards


Der Abschnitt **Dashboards** hilft Ihnen zu verstehen, welche Dashboards von den Nutzern betrachtet werden, und sicherzustellen, dass sie reibungslos funktionieren. Wenn Sie feststellen, dass ein beliebtes Dashboard eine hohe durchschnittliche Ladezeit für Fragen aufweist, können Sie dies mithilfe des oben beschriebenen Abschnitts "Fragen" näher untersuchen.


![Items](./images/audit-dashboards.png)


Eine Liste all Ihrer Dashboards ist ebenfalls verfügbar, und Sie können verschiedene Datenpunkte zu jedem Dashboard auf einen Blick sehen, wie z. B:


- Anzahl der Ansichten
- Durchschnittliche Ausführungszeit der Frage (ms)
- Anzahl der Karten
- Gesichert von
- Dauer des Cache
- Öffentlicher Link
- Gesichert am
- Zuletzt bearbeitet am


### Downloads


Verwenden Sie den Abschnitt **Downloads**, um zu erfahren, welche Personen Daten herunterladen (oder exportieren) und wie groß (Anzahl der Zeilen) die Downloads sind, die sie durchführen. Dieser Bereich enthält einige Visualisierungen sowie eine Liste aller Downloads.


### Abonnements und Alarme


Hier können sich Administratoren einen Überblick über alle [Dashboard-Abonnements][Dashboard-Abonnements] und [Alerts][Alerts] verschaffen, die derzeit für diese Metabase aktiv sind.


- Dashboard-Name (oder Fragenname für Alerts)
- Empfänger
- Art (z. B. E-Mail oder Slack)
- Sammlung
- Frequenz
- Erstellt von
- Erstellt am
- Filter


Administratoren können Personen zu einem Abonnement oder einer Benachrichtigung hinzufügen oder daraus entfernen, indem sie auf die Nummer**Empfänger** des Elements klicken. Administratoren können das Abonnement oder die Benachrichtigung auch komplett löschen, indem sie auf das**X** in der entsprechenden Zeile klicken.


Jeder kann alle seine Abonnements und Benachrichtigungen einsehen, indem er auf das **Zahnradsymbol** oben rechts klickt und zu **Kontoeinstellungen** > **Benachrichtigungen** navigiert.


Weitere Informationen finden Sie unter [wie Berechtigungen mit Alarmen und Abonnements funktionieren](../permissions/notifications.md).

[alerts]: ../questions/alerts.md
[dashboard-subscriptions]: ../dashboards/subscriptions.md
