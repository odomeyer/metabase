---
Titel: Entwicklungsumgebung
---


# Entwicklungsumgebung


Die Metabase-Anwendung besteht aus zwei grundlegenden Komponenten:


1. Ein in Clojure geschriebenes Backend, das eine REST-API sowie den gesamten relevanten Code für die Kommunikation mit Datenbanken und die Verarbeitung von Abfragen enthält.
2. Ein Frontend, das als einseitige Javascript-Anwendung geschrieben wurde und die Web-UI bereitstellt.


Beide Komponenten werden zusammen in einer einzigen JAR-Datei erstellt und zusammengefügt. In dem Verzeichnis, in dem Sie die JAR-Datei ausführen, können Sie eine JAR-Datei erstellen (sofern Metabase sie nicht bereits erstellt hat) und darin Treiber hinzufügen (die Treiber sind ebenfalls JAR-Dateien).


## Schnellstart


Um eine Entwicklungsumgebung einzurichten, führen Sie aus:


```
Fadenlauf
```


Dies führt sowohl das [Frontend](#frontend) als auch das [Backend](#backend) aus. Alternativ können Sie sie auch separat in zwei Terminalsitzungen ausführen.


### Frontend


Die Metabase ist auf Bibliotheken von Drittanbietern angewiesen, so dass Sie diese auf dem neuesten Stand halten müssen. Die Clojure-CLI ruft die Abhängigkeiten bei Bedarf automatisch ab. Bei JavaScript-Abhängigkeiten müssen Sie den Installationsprozess jedoch manuell starten.


```sh
# javascript-Abhängigkeiten
$ Garn
```


Starten Sie den Erstellungsprozess für das Frontend mit


```
yarn build-hot
```


Siehe [Frontend-Entwicklung](#frontend-development).


### Backend


Starten Sie Ihren Backend-Entwicklungsserver mit


```
clojure -M:run


```


Siehe [Backend-Entwicklung](#backend-development).


## Frontend-Entwicklung


Wir verwenden diese Technologien für unseren FE-Build-Prozess, um Module, es6-Syntax und css-Variablen verwenden zu können.


- Webpack
- babel
- cssnext


Frontend-Aufgaben werden mit ` yarn` ausgeführt. Alle verfügbaren Aufgaben können in `package.json` unter _scripts_ gefunden werden.


Um den Frontend-Client zu bauen, ohne auf Änderungen zu achten, können Sie verwenden:


```sh
$ yarn build
```


Wenn Sie direkt am Frontend arbeiten, werden Sie höchstwahrscheinlich Änderungen beim Speichern neu laden wollen, und im Fall von React-Komponenten tun Sie dies unter Beibehaltung des Status. Um einen Build mit Hot-Reloading zu starten, verwenden Sie:


```sh
$ yarn build-hot
```


Beachten Sie, dass derzeit Änderungen an CSS-Variablen nur dann übernommen werden, wenn ein Build neu gestartet wird.---
Titel: Entwicklungsumgebung
---

# Entwicklungsumgebung

Die Metabase-Anwendung besteht aus zwei grundlegenden Komponenten:

1. Ein in Clojure geschriebenes Backend, das eine REST-API sowie den gesamten relevanten Code für die Kommunikation mit Datenbanken und die Verarbeitung von Abfragen enthält.
2. Ein Frontend, das als einseitige Javascript-Anwendung geschrieben wurde und die Web-UI bereitstellt.

Beide Komponenten werden zusammen in einer einzigen JAR-Datei erstellt und zusammengefügt. In dem Verzeichnis, in dem Sie die JAR-Datei ausführen, können Sie eine JAR-Datei erstellen (sofern Metabase sie nicht bereits erstellt hat) und darin Treiber hinzufügen (die Treiber sind ebenfalls JAR-Dateien).

## Schnellstart

Um eine Entwicklungsumgebung einzurichten, führen Sie aus:

```
Fadenlauf
```

Dies führt sowohl das [Frontend](#frontend) als auch das [Backend](#backend) aus. Alternativ können Sie sie auch separat in zwei Terminalsitzungen ausführen.

### Frontend

Die Metabase ist auf Bibliotheken von Drittanbietern angewiesen, so dass Sie diese auf dem neuesten Stand halten müssen. Die Clojure-CLI ruft die Abhängigkeiten bei Bedarf automatisch ab. Bei JavaScript-Abhängigkeiten müssen Sie den Installationsprozess jedoch manuell starten.

```sh
# javascript-Abhängigkeiten
$ Garn
```

Starten Sie den Erstellungsprozess für das Frontend mit

```
yarn build-hot
```

Siehe [Frontend-Entwicklung](#frontend-development).

### Backend

Starten Sie Ihren Backend-Entwicklungsserver mit

```
clojure -M:run

```

Siehe [Backend-Entwicklung](#backend-development).

## Frontend-Entwicklung

Wir verwenden diese Technologien für unseren FE-Build-Prozess, um Module, es6-Syntax und css-Variablen verwenden zu können.

-  Webpack 
-  babel 
-  cssnext 

Frontend-Aufgaben werden mit ` yarn` ausgeführt. Alle verfügbaren Aufgaben können in `package.json` unter _scripts_ gefunden werden.

Um den Frontend-Client zu bauen, ohne auf Änderungen zu achten, können Sie verwenden:

```sh
$ yarn build
```

Wenn Sie direkt am Frontend arbeiten, werden Sie höchstwahrscheinlich Änderungen beim Speichern neu laden wollen, und im Fall von React-Komponenten tun Sie dies unter Beibehaltung des Status. Um einen Build mit Hot-Reloading zu starten, verwenden Sie:

```sh
$ yarn build-hot
```

Beachten Sie, dass derzeit Änderungen an CSS-Variablen nur dann übernommen werden, wenn ein Build neu gestartet wird.

