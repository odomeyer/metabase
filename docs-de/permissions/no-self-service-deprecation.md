---
Titel: Migration von Legacy-Berechtigungen
---


# Migration von Legacy-Berechtigungen


In Metabase 50 haben wir unser System für Datenberechtigungen überarbeitet, um es aussagekräftiger und einfacher zu gestalten. Auf dieser Seite wird erklärt, was sich geändert hat und warum.


**TL;DR: Wir haben die alte Einstellung für den Datenzugriff in zwei Einstellungen aufgeteilt : [Daten ansehen](./data.md#can-view-data-permission) und [Abfragen erstellen](./data.md#create-queries-permissions). Ihre Datenberechtigungen sehen vielleicht anders aus, aber der Zugriff hat sich nicht geändert.**


## Wie Metabase Ihre Berechtigungen migriert hat


Wenn Sie von Metabase 50 oder einer früheren Version migrieren, wird Metabase (mit [einer Ausnahme](#the-no-self-service-deprecated-view-access-level)) Ihre Berechtigungen automatisch an das neue System anpassen. Die Gruppenberechtigungen sind zwar etwas anders (und hoffentlich einfacher zu verstehen), aber Ihre Gruppen haben die gleichen Zugriffsrechte wie zuvor.


## Warum wir unser Berechtigungssystem aktualisiert haben


Die ursprüngliche Einstellung für die Datenzugriffsberechtigung enthielt fünf Zugriffsstufen: uneingeschränkt, unpersönlich, granular, keine Selbstbedienung und gesperrt. Diese Stufen lagen nicht auf der gleichen Achse. Sie kombinierten auf einer Achse, ob Sie Daten anzeigen können, und auf einer anderen Achse, ob Sie diese Daten abfragen können. Dadurch wurde eine zweidimensionale Einstellung geschaffen:


-**Keine Selbstbedienung.**Schränkt Gruppen davon ab, den Query Builder zum Erstellen oder Bearbeiten von Fragen zu verwenden.
-**Sandbox und Block.** Schränkt den Zugriff auf die zugrundeliegenden Daten für Ansicht _und_ Query Builder ein.


Die Vermischung von zwei Achsen (Abfragen + Anzeigen) in einer einzigen Berechtigungseinstellung könnte zu unerwartetem Verhalten führen. Wenn ein Administrator beispielsweise den Zugriff von "Sandboxed" auf "No self-service" ändert, könnte er denken, dass er den Zugriff dieser Gruppe auf Daten_einschränkt_. Aber in diesem Fall könnte die Gruppe potenziell _mehr_ Daten sehen, vorausgesetzt, die Gruppe hat auch Zugriff auf Sammlungen mit bestehenden Modellen, Fragen oder Dashboards.


## Was unsere Überarbeitung der Datenberechtigungen bewirkt


- Splittet [View-Zugriff](./data.md#view-data-permissions) und [Query-Zugriff](./data.md#create-queries-permissions) in zwei Berechtigungsdimensionen. Diese Aufteilung ermöglicht es Administratoren, z.B. Tabellen mit oder ohne Zugriff auf den Query Builder in eine Sandbox zu stellen (vorher war es nicht möglich, Sandboxing nur als View zu konfigurieren).
- Erleichtert die Argumentation bei der Vergabe von Berechtigungen. Eine restriktivere Berechtigung gibt nie mehr Zugriff als eine weniger restriktive.


## Migrationstabelle von alten zu neuen Berechtigungen


Diese Tabelle ist nur für den Fall gedacht, dass Sie archäologisch an Metabase interessiert sind. Metabase übernimmt die Migration für Sie.


Früher verfügte die Metabase über **Datenzugriff** und **Native Abfragebearbeitung**. Jetzt verfügt die Metabase über [Daten anzeigen](./data.md#view-data-permissions) und [Abfragen erstellen](./data.md#create-queries-permissions). Die Metabase hat die einzelnen Paarungen wie folgt auf das neue System migriert.


| **Datenzugriff** | **Native Abfragebearbeitung** | **>** | **Daten anzeigen** | **Abfragen erstellen** |
| -------------------------- | ------------------------ | ----- | -------------------- | ----------------------------- |
| Unrestricted | Yes | **>** | Can view | Query builder and native code |
| Unrestricted | No | **>** | Can view | Query builder |
| Keine Selbstbedienung | Nein | **>** | Kann anzeigen | Nein |
| Blockiert | Nein | **>** | Blockiert | Nein |
| Unpersönlich | Ja | **>** | Unpersönlich | Query Builder und nativer Code |
| Unpersönlich | Nein | **>** | Unpersönlich | Query Builder |
| Unrestricted (granular) | No | **>** | Can view | Query builder (granular) |
| Sandboxed (granular) | Nein | **>** | Sandboxed (granular) | Query builder (granular) |
| Keine Selbstbedienung (granular) | Nein | **>** | Kann anzeigen | Nein (granular) |


## Die Zugriffsstufe"Keine Selbstbedienung (veraltet) " anzeigen


Wenn Sie die Berechtigungseinstellung "Keine Selbstbedienung (veraltet)" in**Ansichtsdaten** für eine beliebige Gruppe sehen, sollten Sie diese irgendwann manuell ändern.


Für jede Gruppe, deren**Datenansicht**-Zugriff auf "Keine Selbstbedienung (veraltet)" eingestellt ist, müssen Sie die**Datenansicht**-Berechtigung auf eine der neuen Optionen ändern:


- [Kann anzeigen](./data.md#can-view-data-permission)
- [Unpersönlich](./data.md#unpersönliche-daten-einsehen-erlaubnis)
- [Sandboxed](./data.md#sandboxed-view-data-permission)
- [Blockiert](./data.md#blocked-view-data-permission)


Wenn Sie nichts unternehmen, wird Metabase in einem zukünftigen Release alle Gruppen, deren Ansichtsdatenzugriff auf "No self-service (deprecated)" gesetzt ist, auf "Blocked" ändern. Die Voreinstellung ist "Blockiert", der am wenigsten zulässige Zugriff auf Ansichtsdaten, um einen unbeabsichtigten Zugriff auf Daten zu verhindern. Diese Änderung zu "Blockiert" könnte jedoch dazu führen, dass Personen den Zugriff auf Daten verlieren, auf die sie zuvor Zugriff hatten.
