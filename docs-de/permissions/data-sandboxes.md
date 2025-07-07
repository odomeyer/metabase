---
Titel: Daten-Sandkästen
redirect_from:
- /docs/latest/enterprise-guide/data-sandboxes
---


# Daten-Sandkästen


{% include plans-blockquote.html feature="Daten-Sandboxen" %}


Mit Daten-Sandboxen können Sie Zeilen und Spalten für verschiedene Personengruppen mit detaillierten Berechtigungen versehen. Sie können festlegen, welche Daten eine Gruppe [anzeigen kann](./data.md#can-view-data-permission), und welche Daten eine Gruppe [abfragen kann](./data.md#create-queries-permissions) mit dem Query Builder.


Sie können Sandboxen verwenden, um [Self-Service-Analysen](https://www.metabase.com/learn/metabase-basics/embedding/multi-tenant-self-service-analytics) einzurichten, so dass jeder Ihrer Kunden nur die Zeilen sieht, die seiner Kunden-ID entsprechen. Wenn Sie zum Beispiel eine Tabelle "Konten" mit Informationen über Ihre Kunden haben, können Sie diese Tabelle in eine Sandbox stellen, damit jeder Kunde nur die für ihn relevanten Daten sieht.


## Beispiele für Daten-Sandboxen


Sie können die Theorie überspringen und [direkt zu den Sandbox-Beispielen gehen](data-sandbox-examples.md).


## Wie Sandkästen funktionieren


Sie können sich eine Daten-Sandbox als ein Bündel von Berechtigungen vorstellen, das Folgendes umfasst:


- Die gefilterte Version einer Tabelle, die Ihre Originaltabelle ersetzt, überall dort, wo die Originaltabelle in der Metabase verwendet wird.
- Die [Gruppe](../people-and-groups/managing.md#groups) der Personen, die die gefilterte Version der Tabelle sehen sollen.


Sie können bis zu einer Daten-Sandbox für jede Tabelle/Gruppen-Kombination in Ihrer Metabase definieren. Das bedeutet, dass Sie verschiedene Versionen einer Tabelle für verschiedene Gruppen anzeigen können, z. B. "Sandboxed Accounts for Sales" für Ihre Vertriebsmitarbeiter und "Sandboxed Accounts for Managers" für Vertriebsleiter.


## Arten von Daten-Sandboxen


Daten-Sandboxen zeigen jeder Person spezifische Daten an, die auf ihren [Benutzerattributen] basieren(../people-and-groups/managing.md#adding-a-user-attribute). Sie können:


-**Zeilen** für bestimmte Personen mit einer [einfachen Sandbox] einschränken(#basic-data-sandboxes-filter-by-a-column-in-the-table).
- Beschränken Sie **Spalten** (sowie Zeilen) für bestimmte Personen mit einer [benutzerdefinierten Sandbox](#custom-data-sandboxes-use-a-saved-question-to-create-a-custom-view-of-a-table) (auch bekannt als erweiterte Sandbox).


| | Einfache Sandbox (Filter nach einer Spalte in der Tabelle) | Benutzerdefinierte Sandbox (Verwendung einer gespeicherten SQL-Frage) |
| ---------------------------------------------- | ----------------------------------------------- | ----------------------------------------- |
| Zeilen durch Filterung auf eine einzelne Spalte einschränken | ✅ | ✅ |
| Zeilen einschränken durch Filtern auf mehrere Spalten | ❌ | ✅ |
| Spalten einschränken | ❌ | ✅ |
| Spalten bearbeiten | ❌ | ✅ |


### Grundlegende Daten-Sandboxen: Filtern nach einer Spalte in der Tabelle


Um **Zeilen einzuschränken**, verwenden Sie eine einfache Sandbox. Eine einfache Sandbox zeigt einer Gruppe eine gefilterte Version einer Tabelle anstelle der Originaltabelle an. Der Filter funktioniert, indem eine Spalte in der Tabelle auf einen bestimmten [Benutzerattributwert] gesetzt wird(#choosing-user-attributes-for-data-sandboxes).


Sie können zum Beispiel eine einfache Sandbox erstellen, um die Tabelle "Konten" für eine Gruppe zu filtern, so dass:


- Eine Person mit dem Benutzerattributwert "Basic" sieht die Zeilen, in denen`Plan = "Basic"` (Zeilen, in denen die Spalte Plan den Wert "Basic" hat).
- Eine Person mit dem Benutzerattributwert "Premium" sieht die Zeilen, in denen`Plan = "Premium"` (Zeilen, in denen die Spalte Plan dem Wert "Premium" entspricht).


### Benutzerdefinierte Daten-Sandboxen: Verwenden Sie eine gespeicherte Frage, um eine benutzerdefinierte Ansicht einer Tabelle zu erstellen


Um **Spalten** sowie Zeileneinzuschränken, verwenden Sie eine benutzerdefinierte Sandbox (auch bekannt als erweiterte Sandbox). In einer benutzerdefinierten Sandbox werden die Ergebnisse einer gespeicherten SQL-Frage anstelle Ihrer Originaltabelle angezeigt.
