---
Titel: Aktualisierung der Metabase
redirect_from:
- /docs/latest/operations-guide/upgrading-metabase
---


# Metabase upgraden


Auf dieser Seite erfahren Sie, wie Sie ein Upgrade auf eine neue [Metabase-Version](https://github.com/metabase/metabase/releases) durchführen können.


## Upgrade der Metabase Cloud


Wenn Sie einen [Metabase Cloud](https://www.metabase.com/pricing/) Plan haben, aktualisieren wir Ihre Metabase automatisch mit jeder neuen Version, ohne dass Sie etwas tun müssen.


Wie schnell das Upgrade durchgeführt wird, hängt von der Art des Releases ab:


- Nebenversionen (z. B. x.54.4 auf x.54.5): Normalerweise etwa eine Woche.
- Hauptversionen (z. B. x.53.4 bis x.54.1): Länger, in der Regel Monate (nur um sicherzustellen, dass alles reibungslos funktioniert).


Cloud-Kunden können ein frühzeitiges Upgrade anfordern, indem sie eine E-Mail an den Support unter help@metabase.com senden. Geben Sie dabei die URL der Metabase an, die wir aktualisieren sollen.


## Upgraden einer selbst gehosteten Metabase


Im Folgenden werden die Schritte für ein Upgrade auf eine neue Metabase-Version (Major oder Minor) beschrieben:


### 1. Sicherung Ihrer Anwendungsdatenbank


In der Anwendungsdatenbank werden alle Daten Ihrer Metabase-Instanz gespeichert (mit Ausnahme der Daten der verbundenen Datenbank). Es ist zwar unwahrscheinlich, dass Sie Ihre aktuelle Version zurücksetzen müssen, aber ein Backup ist für den Fall, dass etwas schief geht, sehr hilfreich.


Siehe [Sichern der Metabase-Anwendungsdaten](backing-up-metabase-application-data.md).


### 2. Tauschen Sie die neue Metabase-Version ein


Die Schritte unterscheiden sich je nachdem, ob Sie das Container-Image oder das JAR ausführen.


**Upgrade des Container-Images**


1. Halten Sie den aktuellen Container an.


2. Ziehen Sie das neueste Metabase-Docker-Image (wir empfehlen jedoch, ein bestimmtes Tag zu ziehen, anstatt "latest" zu verwenden).


Metabase Open Source:


```
docker pull metabase/metabase:latest
```


Metabase Pro oder Enterprise:


```
docker pull metabase/metabase-enterprise:latest
```


3. Starten Sie das neue Container-Image. Abhängig von den Ports und dem Containernamen wird der Befehl etwa so aussehen:


Metabase Open Source:


```
docker run -d -p 3000:3000 -e MB_DB_CONNECTION_URI="jdbc:postgresql://<host>:5432/metabase?user=<username>&password=<password>" --name metabase metabase/metabase:latest
```


Metabase Pro oder Enterprise:


```
docker run -d -p 3000:3000 -e MB_DB_CONNECTION_URI="jdbc:postgresql://<host>:5432/metabase?user=<username>&password=<password>" --name metabase metabase/metabase-enterprise:latest
```


Beim Starten führt Metabase das Upgrade automatisch durch. Sobald Metabase das Upgrade abgeschlossen hat, wird die neue Version ausgeführt.


**Aktualisieren der JAR-Datei**


Um ein Upgrade durchzuführen, müssen Sie den Dienst anhalten, das JAR durch die neuere Version ersetzen und den Dienst neu starten.


Wenn Sie z. B. Metabase unter Debian als Dienst mit Nginx ausführen.


1. Beenden Sie den Metabase-Dienst. Unter der Annahme, dass Sie Ihren Dienst "metabase.service" genannt haben, werden Sie ihn ausführen:---
Titel: Aktualisierung der Metabase
redirect_from:
- /docs/latest/operations-guide/upgrading-metabase 
---

# Metabase upgraden

Auf dieser Seite erfahren Sie, wie Sie ein Upgrade auf eine neue [Metabase-Version](https://github.com/metabase/metabase/releases) durchführen können.

## Upgrade der Metabase Cloud

Wenn Sie einen [Metabase Cloud](https://www.metabase.com/pricing/) Plan haben, aktualisieren wir Ihre Metabase automatisch mit jeder neuen Version, ohne dass Sie etwas tun müssen.

Wie schnell das Upgrade durchgeführt wird, hängt von der Art des Releases ab:

-  Nebenversionen (z. B. x.54.4 auf x.54.5): Normalerweise etwa eine Woche.
-  Hauptversionen (z. B. x.53.4 bis x.54.1): Länger, in der Regel Monate (nur um sicherzustellen, dass alles reibungslos funktioniert).

Cloud-Kunden können ein frühzeitiges Upgrade anfordern, indem sie eine E-Mail an den Support unter help@metabase.com senden. Geben Sie dabei die URL der Metabase an, die wir aktualisieren sollen.

## Upgraden einer selbst gehosteten Metabase

Im Folgenden werden die Schritte für ein Upgrade auf eine neue Metabase-Version (Major oder Minor) beschrieben:

### 1. Sicherung Ihrer Anwendungsdatenbank

In der Anwendungsdatenbank werden alle Daten Ihrer Metabase-Instanz gespeichert (mit Ausnahme der Daten der verbundenen Datenbank). Es ist zwar unwahrscheinlich, dass Sie Ihre aktuelle Version zurücksetzen müssen, aber ein Backup ist für den Fall, dass etwas schief geht, sehr hilfreich.

Siehe [Sichern der Metabase-Anwendungsdaten](backing-up-metabase-application-data.md).

### 2. Tauschen Sie die neue Metabase-Version ein

Die Schritte unterscheiden sich je nachdem, ob Sie das Container-Image oder das JAR ausführen.

**Upgrade des Container-Images**

1. Halten Sie den aktuellen Container an.

2. Ziehen Sie das neueste Metabase-Docker-Image (wir empfehlen jedoch, ein bestimmtes Tag zu ziehen, anstatt "latest" zu verwenden).

Metabase Open Source:

```
docker pull metabase/metabase:latest
```

Metabase Pro oder Enterprise:

```
docker pull metabase/metabase-enterprise:latest
```

3. Starten Sie das neue Container-Image. Abhängig von den Ports und dem Containernamen wird der Befehl etwa so aussehen:

Metabase Open Source:

```
docker run -d -p 3000:3000 -e MB_DB_CONNECTION_URI="jdbc:postgresql://<host>:5432/metabase?user=<username>&password=<password>" --name metabase metabase/metabase:latest
```

Metabase Pro oder Enterprise:

```
docker run -d -p 3000:3000 -e MB_DB_CONNECTION_URI="jdbc:postgresql://<host>:5432/metabase?user=<username>&password=<password>" --name metabase metabase/metabase-enterprise:latest
```

Beim Starten führt Metabase das Upgrade automatisch durch. Sobald Metabase das Upgrade abgeschlossen hat, wird die neue Version ausgeführt.

**Aktualisieren der JAR-Datei**

Um ein Upgrade durchzuführen, müssen Sie den Dienst anhalten, das JAR durch die neuere Version ersetzen und den Dienst neu starten.

Wenn Sie z. B. Metabase unter Debian als Dienst mit Nginx ausführen.

1. Beenden Sie den Metabase-Dienst. Unter der Annahme, dass Sie Ihren Dienst "metabase.service" genannt haben, werden Sie ihn ausführen:

