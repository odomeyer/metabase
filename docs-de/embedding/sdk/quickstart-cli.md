---
Titel: Embedded analytics SDK - CLI-Schnellstart
---


# Embedded analytics SDK - CLI-Schnellstart


{% include plans-blockquote.html feature="Embedded analytics SDK" sdk=true convert_pro_link_to_embbedding=true %}


Wir haben einen einzigen Befehl erstellt, um eine Metabase zu erstellen und Ihnen zu helfen, ein eingebettetes Dashboard in Ihre App zu bekommen. Diese Einrichtung mit API-Schlüsseln wird nicht in der Produktion funktionieren; sie ist nur dafür gedacht, dass Sie das SDK schnell auf Ihrem lokalen Rechner ausprobieren können. Eine Produktionseinrichtung erfordert eine Pro/Enterprise-Lizenz und SSO mit JWT.


## Voraussetzungen


- Docker (sollte auf Ihrem Rechner installiert sein und laufen)
- [Node.js 20.x LTS](https://nodejs.org/en) oder höher.
- Lizenz (Optional - nur wenn Sie Multi-Tenancy ausprobieren möchten).
- Datenbank (Sie können sich mit der Datenbank Ihrer Anwendung verbinden).


Sie benötigen keine laufende Metabase; das Tool wird eine Metabase für Sie auf Docker einrichten.


## Der Quickstart CLI-Befehl


Wechseln Sie in Ihre React-Anwendung und führen Sie ihn aus:


```sh
npx @metabase/embedding-sdk-react@latest start
```


Das CLI-Tool wird Sie durch die Einrichtung führen. Es gibt eine ganze Reihe von Teilen, die zusammengefügt werden müssen, daher hier ein Überblick darüber, was der Befehl bewirkt:


- [Vorabprüfung](#prereq-check)
- [Datenbankverbindung (optional)](#database-connection-optional)
- [Metabasis-Einrichtung](#metabase-setup)
- [Einrichtung von Berechtigungen mit Mandantenfähigkeit (optional)](#permissions-setup-with-multi-tenancy-optional)
- [React-Komponenten einrichten](#react-components-setup)
- [Siehe: Metabase ist in Ihrer Anwendung eingebettet](#behold-metabase-is-embedded-in-your-app)


## Vorabprüfung


Das Tool prüft auf Folgendes:


- Sie haben den Befehl im obersten Verzeichnis Ihrer React-Anwendung ausgeführt.
- Sie haben das SDK installiert (falls nicht, installiert das CLI das SDK für Sie und fügt es als Abhängigkeit in Ihrer "package.json" hinzu).
- Sie haben Docker auf Ihrem Rechner installiert und laufen lassen.


## Datenbankverbindung (optional)


Das Tool fragt Sie, ob Sie eine Datenbank haben, mit der Sie sich verbinden möchten. Verwenden Sie die Pfeiltasten, um Ja oder Nein auszuwählen. Das Tool wird diese Datenbank verwenden, um ein eingebettetes Dashboard zu erstellen.


Wenn Sie Nein wählen, verwendet das Skript die Beispieldatenbank, die mit Metabase geliefert wird, um ein Dashboard zu erstellen, das eingebettet werden soll.


Wenn Sie Ja wählen, werden Sie vom Tool aufgefordert, eine Verbindung zu einer Datenbank herzustellen. Wählen Sie die Engine Ihrer Datenbank. Sie müssen den Host, den Port, den Benutzernamen und das Passwort der Datenbank angeben. Das Tool stellt eine Verbindung zur Datenbank her und fordert Sie auf, Tabellen aus Ihrer Datenbank auszuwählen, die Sie einbetten möchten. Wählen Sie 1-3 Tabellen. Wenn Sie Multi-Tenancy in Aktion sehen möchten, wählen Sie eine Tabelle mit Benutzer-IDs. Metabase röntgt diese Tabellen, um ein Dashboard zum Einbetten zu erstellen.


## Metabase einrichten


Das Tool fragt Sie nach einer E-Mail-Adresse, um das erste Administratorkonto in der Metabase zu erstellen. Dabei muss es sich nicht um eine echte E-Mail-Adresse handeln (das Tool richtet keinen SMTP-Server ein); die E-Mail-Adresse ist lediglich für die Anmeldung bei der Metabase erforderlich, die das Tool einrichtet.


Als nächstes wird das Tool eine Metabase auf Docker aufsetzen. Dies dauert ein wenig. Um den Status des Docker-Containers zu sehen, verwenden Sie den Befehl "docker ps". Oder nutzen Sie die Zeit, um über gute Entscheidungen nachzudenken, die Sie in letzter Zeit getroffen haben.


Sobald die Metabase eingerichtet ist und läuft, erstellt das Tool einen Admin-Benutzer mit der von Ihnen angegebenen E-Mail-Adresse und generiert einen [API-Schlüssel](../../people-and-groups/api-keys.md) für diese Metabase.


Das Tool fordert Sie dann auf, 1-3 Tabellen zum Einbetten auszuwählen. Sie können <Leertaste> drücken, um auszuwählen, <a>, um alle umzuschalten, <i>, um die Auswahl umzukehren, und <Enter>, um fortzufahren.
