---
Titel: Versionierung von Metabase Releases
---


# Versionierung der Metabase-Version


Wir folgen unserer eigenen Variante der [semantischen Versionsrichtlinien](https://semver.org/), um die [Open-Source-Version](https://www.metabase.com/product/starter) von Metabase von der kostenpflichtigen, quelloffenen Version von Metabase zu unterscheiden (verfügbar in den [Pro](https://www.metabase.com/product/pro) und [Enterprise](https://www.metabase.com/product/enterprise) Plänen).


Die semantische Versionierung erfolgt in der Regel nach dem Format: Major.Minor.Point.Patch`. Zum Beispiel, Version `3.15.2` oder `3.15.2.1`.


Bei Metabase-Releases wird der Version je nach Lizenz eine`0` oder`1` vorangestellt.


## Das Versionsschema der Metabase


```
Lizenz.Major.Punkt.Hotfix
```


z.B.,


```
v0.46.3.1
```


`v0.46.3.1` wäre ein Hotfix(`1`) für die dritte(`3`) Punktversion von Metabase `46`, der Open-Source-Ausgabe(`0`).


### Lizenz


-0" für die freie, quelloffene Version (manchmal OSS genannt, für Open-Source-Software).
- 1` für die kostenpflichtige, quelloffene Version mit allem Schnickschnack (manchmal auch EE für "Enterprise Edition" genannt).


### Major


Wir veröffentlichen Major-Versionen, wenn wir neue Funktionen oder wichtige Änderungen einführen.


### Punkt


Manchmal auch als Minor Release bezeichnet, geben wir Point Releases heraus, wenn wir Fehlerkorrekturen und Verfeinerungen an bestehenden Funktionen vornehmen.


### Hotfix


Manchmal auch als Patch-Release bezeichnet, geben wir diese Hotfix-Releases heraus, um Sicherheitsprobleme zeitnah zu beheben oder um eine schreckliche Regression rückgängig zu machen.


## Andere Release-Begriffe


### Die Gold-Version


Das Gold-Release ist das erste Release einer neuen Hauptversion von Metabase. Für die Metabase-Version 46 wären die Gold-Releases also folgende:


-v0.46.0" (die OSS-Version)
-v1.46.0" (die EE-Version)


### Release Candidates


Normalerweise veröffentlichen wir Release Candidates, um neue Funktionen auszuprobieren, bevor wir eine neue Hauptversion (Gold Release) veröffentlichen. Um diese Release Candidates zu unterscheiden, fügen wir ein `-RC#` am Ende an.


Z.B.,


-v1.46.0-RC1" (der erste Veröffentlichungskandidat für die EE-Version)
-v0.46.0-RC3" (der dritte Veröffentlichungskandidat für die OSS-Version)
