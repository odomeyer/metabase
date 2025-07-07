---
Titel: Fehlersuche bei Metabase auf Docker
---


# Fehlersuche bei Metabase auf Docker


Docker vereinfacht die Ausführung von Metabase in vielerlei Hinsicht, aber es gibt auch einige Fallstricke, die Sie beachten sollten. Wenn Sie Probleme mit der Metabase unter Docker haben, versuchen Sie, den folgenden Prozess zur Fehlerbehebung zu durchlaufen, und suchen Sie dann weiter unten nach Details zu dem spezifischen Problem, das Sie gefunden haben.


1. Ist der Container in Betrieb?
2. Läuft der Server innerhalb des Containers?
3. Verwendet die Metabase die richtige Anwendungsdatenbank?
4. Können Sie eine Verbindung mit dem Docker-Host über den Metabase-Port herstellen?
5. Können Sie vom Docker-Host aus eine Verbindung zum Container herstellen?
6. Können Sie vom Container aus eine Verbindung zum Server herstellen?


Die folgenden Befehle können Ihnen dabei helfen. Um die Shell im Metabase-Container zu erreichen:


```
docker exec -ti CONTAINER_NAME bash
```


Und um die Protokolle für den Metabase Container zu erhalten:


```
docker logs -f CONTAINER_NAME
```


## Der Metabase-Container beendet sich, ohne den Server zu starten.


**So stellen Sie dies fest:** Führen Sie "docker ps" aus, um festzustellen, ob der Metabase-Container derzeit ausgeführt wird. Ist dies der Fall, fahren Sie mit dem nächsten Schritt fort.


Wenn "docker ps" den laufenden Container nicht anzeigt, dann listen Sie die gestoppten Container auf, indem Sie "docker ps" ausführen:


```
docker ps -a | grep metabase/metabase
```


Suchen Sie den Container, der sich zuletzt beendet hat, und notieren Sie sich die Container-ID. Sehen Sie sich die Protokolle dieses Containers mit an:


```
Docker protokolliert CONTAINER_ID
```


## Der Metabase-Container läuft, aber der Server nicht


**So stellen Sie dies fest:** Führen Sie "docker ps" aus, um sicherzustellen, dass der Container ausgeführt wird. Der Server sollte in den Docker-Container-Protokollen protokolliert werden. Überprüfen Sie dies durch Ausführen:


```
docker protokolliert CONTAINER_NAME
```


Am Anfang sollten Sie eine Zeile wie diese sehen:


```
05-10 18:11:32 INFO metabase.util :: Metabase laden...
```


Weiter unten sollten Sie schließlich eine Zeile wie diese sehen:


```
05-10 18:12:30 INFO metabase.core :: Metabase Initialization COMPLETE
```


Wenn Sie die folgenden Zeilen sehen:


```
05-15 19:07:11 INFO metabase.core :: Metabase Shutdown ...
05-15 19:07:11 INFO metabase.core :: Metabase Shutdown COMPLETE
```


dann hat sich die Metabase selbst abgeschaltet.


**So beheben Sie das Problem:** Überprüfen Sie die Docker-Container-Protokolle auf Fehler bei der Verbindung mit der Anwendungsdatenbank. Überprüfen Sie die Protokolle, um zu sehen, ob Metabase noch gestartet wird; der Befehl:


```
Docker logs -f CONTAINER_ID
```


können Sie die Protokolle sehen, während sie gedruckt werden.


Wenn der Container beendet wird, bevor er fertig gestartet ist, könnte das Problem eine Zeitüberschreitung bei der Zustandsprüfung im Orchestrierungsdienst sein, der zum Starten des Containers verwendet wird, wie z. B. Docker Cloud.


Wenn der Container _nicht_ von außen beendet wird, aber trotzdem nicht startet, ist dieses Problem wahrscheinlich nicht spezifisch für Docker. Wenn Sie ein von Metabase bereitgestelltes Image verwenden,öffnen Sie bitteein GitHub-Problem(https://github.com/metabase/metabase/issues/new/choose).---
Titel: Fehlersuche bei Metabase auf Docker
---

# Fehlersuche bei Metabase auf Docker

Docker vereinfacht die Ausführung von Metabase in vielerlei Hinsicht, aber es gibt auch einige Fallstricke, die Sie beachten sollten. Wenn Sie Probleme mit der Metabase unter Docker haben, versuchen Sie, den folgenden Prozess zur Fehlerbehebung zu durchlaufen, und suchen Sie dann weiter unten nach Details zu dem spezifischen Problem, das Sie gefunden haben.

1. Ist der Container in Betrieb?
2. Läuft der Server innerhalb des Containers?
3. Verwendet die Metabase die richtige Anwendungsdatenbank?
4. Können Sie eine Verbindung mit dem Docker-Host über den Metabase-Port herstellen?
5. Können Sie vom Docker-Host aus eine Verbindung zum Container herstellen?
6. Können Sie vom Container aus eine Verbindung zum Server herstellen?

Die folgenden Befehle können Ihnen dabei helfen. Um die Shell im Metabase-Container zu erreichen:

```
docker exec -ti CONTAINER_NAME bash
```

Und um die Protokolle für den Metabase Container zu erhalten:

```
docker logs -f CONTAINER_NAME
```

## Der Metabase-Container beendet sich, ohne den Server zu starten.

**So stellen Sie dies fest:** Führen Sie "docker ps" aus, um festzustellen, ob der Metabase-Container derzeit ausgeführt wird. Ist dies der Fall, fahren Sie mit dem nächsten Schritt fort.

Wenn "docker ps" den laufenden Container nicht anzeigt, dann listen Sie die gestoppten Container auf, indem Sie "docker ps" ausführen:

```
docker ps -a | grep metabase/metabase
```

Suchen Sie den Container, der sich zuletzt beendet hat, und notieren Sie sich die Container-ID. Sehen Sie sich die Protokolle dieses Containers mit an:

```
Docker protokolliert CONTAINER_ID
```

## Der Metabase-Container läuft, aber der Server nicht

**So stellen Sie dies fest:** Führen Sie "docker ps" aus, um sicherzustellen, dass der Container ausgeführt wird. Der Server sollte in den Docker-Container-Protokollen protokolliert werden. Überprüfen Sie dies durch Ausführen:

```
docker protokolliert CONTAINER_NAME
```

Am Anfang sollten Sie eine Zeile wie diese sehen:

```
05-10 18:11:32 INFO metabase.util :: Metabase laden...
```

Weiter unten sollten Sie schließlich eine Zeile wie diese sehen:

```
05-10 18:12:30 INFO metabase.core :: Metabase Initialization COMPLETE
```

Wenn Sie die folgenden Zeilen sehen:

```
05-15 19:07:11 INFO metabase.core :: Metabase Shutdown ...
05-15 19:07:11 INFO metabase.core :: Metabase Shutdown COMPLETE
```

dann hat sich die Metabase selbst abgeschaltet.

**So beheben Sie das Problem:** Überprüfen Sie die Docker-Container-Protokolle auf Fehler bei der Verbindung mit der Anwendungsdatenbank. Überprüfen Sie die Protokolle, um zu sehen, ob Metabase noch gestartet wird; der Befehl:

```
Docker logs -f CONTAINER_ID
```

können Sie die Protokolle sehen, während sie gedruckt werden.

Wenn der Container beendet wird, bevor er fertig gestartet ist, könnte das Problem eine Zeitüberschreitung bei der Zustandsprüfung im Orchestrierungsdienst sein, der zum Starten des Containers verwendet wird, wie z. B. Docker Cloud.

Wenn der Container _nicht_ von außen beendet wird, aber trotzdem nicht startet, ist dieses Problem wahrscheinlich nicht spezifisch für Docker. Wenn Sie ein von Metabase bereitgestelltes Image verwenden,öffnen Sie bitteein GitHub-Problem(https://github.com/metabase/metabase/issues/new/choose).

