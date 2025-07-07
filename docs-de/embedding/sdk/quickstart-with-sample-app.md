---
Titel: Embedded analytics SDK - Schnellstart mit Beispielanwendung
---


# Embedded analytics SDK - Schnellstart mit Beispielanwendung


{% include plans-blockquote.html feature="Embedded analytics SDK" sdk=true convert_pro_link_to_embbedding=true %}


Diese Anleitung richtet das Embedded Analytics SDK mit einer [Beispiel-React-App](https://github.com/metabase/metabase-nodejs-react-sdk-embedding-sample/tree/{{page.version | remove: "v0."}}-stable), aber Sie können auch mit Ihrer eigenen Anwendung folgen.


{% include youtube.html id='AtMn-G-Al80' %}


## Voraussetzungen


- [Node.js 20.x LTS oder höher](https://nodejs.org/en) (für die Beispielanwendung).
- [Metabase Version v1.52 oder höher](https://github.com/metabase/metabase/releases).
- [Eine Metabase Pro- oder Enterprise-Lizenz](https://www.metabase.com/pricing/) (Wenn Sie keine Lizenz haben, sehen Sie sich [diesen Schnellstart](./quickstart.md) an, in dem die kostenpflichtige JWT SSO-Einrichtung fehlt).
- ( Optional): [Docker](https://www.docker.com/)


## Zwei Möglichkeiten, die Beispielanwendung mit Metabase einzurichten


- [Schnelles Setup mit Docker](#quick-setup-with-docker) (enthält eine Beispiel-Metabase)
-(#walkthrough-setup) (bringen Sie Ihre eigene Metabase mit, oder erstellen Sie eine neue)


## Schnelle Einrichtung mit Docker


Bei dieser Schnellinstallation wird ein Docker-Container mit der Beispielanwendung und einer Beispiel-Metabasis ausgeführt.


1. Kopieren Sie `.env.docker.example` nach `.env.docker`.
2. Ersetzen Sie in der Datei ".env.docker" "<Ihr_Unternehmens-Token>" durch Ihr Premium-Einbettungs-Token.
3. Führen Sie im obersten Verzeichnis aus:
````bash
Garn starten
```


Dieses Skript wird:


- Ein Metabase-Docker-Image ziehen und in einem Container ausführen.
- Richten Sie JWT SSO in Metabase ein.
- Erstellen und starten Sie die Beispielanwendung mit einer eingebetteten interaktiven Frage.


Die Anwendung wird auf [http://localhost:4400](http://localhost:4400) gestartet.


Das war's! Sie sollten jetzt [startklar] sein(#at-this-point-you-should-be-up-and-running).


Wenn Sie sich bei der Beispiel-Metabasis anmelden möchten, die mit diesem Befehl eingerichtet wurde, besuchen Sie [http://localhost:4300](http://localhost:4300). Sie können sich mit E-Mail und Passwort als Rene Descartes anmelden:


- E-Mail: rene@example.com
- Kennwort: foobarbaz


## Exemplarische Einrichtung


Wir werden einige Einstellungen in der Metabase und dann in der Beispielanwendung vornehmen. Sie können auch Ihre eigene Metabase mitbringen. In diesem Fall können Sie den Installationsschritt überspringen.


Hier ist ein kurzer Überblick über Ihre Arbeit:
