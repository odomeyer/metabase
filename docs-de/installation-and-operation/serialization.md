---
Titel: "Serialisierung"
Zusammenfassung: Exportieren und Importieren von Metabase-Inhalten zwischen Instanzen unter Verwendung der Serialisierung. Nützlich für Versionskontrolle, Staging-Umgebungen und das Duplizieren von Assets.
redirect_from:
- /docs/latest/enterprise-guide/serialization
---


# Serialisierung


{% include plans-blockquote.html feature="Serialisierung" %}


Wenn Sie erst einmal mit der Metabase arbeiten, haben Sie oft mehr als eine Metabase-Instanz in Betrieb. Vielleicht haben Sie ein paar Test- oder Entwicklungsinstanzen und ein paar Produktionsinstanzen, oder Sie haben eine separate Metabase pro Büro oder Region.


Um Ihnen in solchen Situationen zu helfen, verfügt Metabase über eine Serialisierungsfunktion, mit der Sie einen _Export_ des Inhalts einer Metabase erstellen können, der dann_ in eine oder mehrere Metabasesimportiert werden kann.


Beim**Export** wird der Inhalt der Quell-Metabasis als YAML-Datei serialisiert.


** Import** liest diese exportierten YAML-Dateien und erstellt oder aktualisiert Elemente in der Ziel-Metabasis auf Basis der in den YAML-Dateien serialisierten Inhalte.


Es gibt zwei Möglichkeiten, die Befehle`Export` und`Import` auszuführen:


- [Mit CLI-Befehlen](#serialization-with-cli-commands)
- [Über die API](#serialization-via-the-api)


> Wir sind daran interessiert, wie wir die Serialisierung für Ihren Arbeitsablauf verbessern können. [Bewerten Sie ein bestehendes Problem(https://github.com/metabase/metabase/issues?q=is%3Aissue+is%3Aopen+serialization+label%3AOperation%2FSerialization), um uns mitzuteilen, dass es für Sie wichtig ist. Wenn es noch kein entsprechendes Problem gibt, erstellen Sie bitte eines und teilen Sie uns mit, was Sie brauchen.


## Anwendungsfälle der Serialisierung


-Staging-Umgebungen**. Ermöglichen Sie einen Staging-to-Production-Workflow für wichtige Dashboards, indem Sie sie aus einer Staging-Instanz von Metabase exportieren und dann in Ihre Produktionsinstanz(en) importieren.
- **Versionskontrolle**. Überprüfen Sie die exportierten Dateien in der Versionskontrolle und kontrollieren Sie Änderungen an ihnen, da die im Export enthaltenen YAML-Dateien recht gut lesbar sind.
- **Duplizieren von Assets in andere Metabase-Instanzen**. Exportieren Sie die "Vorlagen"-Daten aus einer Quell-Metabase und importieren Sie sie in eine oder mehrere Zielinstanzen.


Lesen Sie unsere Anleitungen für:


- [Ausführen mehrerer Umgebungen](https://www.metabase.com/learn/metabase-basics/administration/administration-and-operation/multi-env)
- [Einrichten eines Git-basierten Arbeitsablaufs](https://www.metabase.com/learn/metabase-basics/administration/administration-and-operation/git-based-workflow)


## Wie der Export funktioniert


- [Was wird exportiert](#what-gets-exported)
- [Allgemeine Metabasis-Einstellungen, die exportiert werden](#general-metabase-settings-that-are-exported)
- [Anpassen, was exportiert wird](#customize-what-gets-exported)
- [Beispiel einer serialisierten Frage](#example-of-a-serialized-question)
- [Metabase uses Entity IDs to identify and reference items](#metabase-uses-entity-ids-to-identify-and-reference-metabase-items)


### Was wird exportiert


Die Metabase exportiert nur die folgenden Entitäten:
