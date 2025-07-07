---
Titel: Umgebungsvariablen
redirect_from:
- /docs/latest/operations-guide/environment-variables
---


# Umgebungsvariablen


Diese Dokumentation wurde aus dem Quellcode generiert, indem Folgendes ausgeführt wurde:_


```
clojure -M:ee:doc umgebung-variablen-dokumentation
```


Viele Einstellungen in der Metabase können über das Admin-Panel eingesehen und geändert oder über Umgebungsvariablen festgelegt werden. Die Umgebungsvariablen haben immer Vorrang. Beachten Sie, dass die Umgebungsvariablen im Gegensatz zu den in den Admin-Einstellungen Ihrer Metabase konfigurierten Einstellungen nicht in die Anwendungsdatenbank geschrieben werden.


## Wie werden Umgebungsvariablen gesetzt?


Das Setzen von Umgebungsvariablen kann auf verschiedene Weise erfolgen, je nachdem, wie Sie Metabase ausführen.


JAR-Datei:


```
# Mac, Linux und andere Unix-basierte Systeme
export MB_SITE_NAME="Awesome Company"
# Windows Powershell
$env:MB_SITE_NAME="Awesome Company"
# Windows-Batch/cmd
MB_SITE_NAME="Awesome Company" festlegen


java --add-opens java.base/java.nio=ALL-UNNAMED -jar metabase.jar
```


Oder setzen Sie es als Java-Eigenschaft, was auf allen Systemen gleich funktioniert:


```
java -DMB_SITE_NAME="Awesome Company" -jar metabase.jar
```


Docker:


```
docker run -d -p 3000:3000 -e MB_SITE_NAME="Awesome Company" --name metabase metabase/metabase
```


## Umgebungsvariablen auf Metabase Cloud


Wenn Sie mit Metabase Cloud arbeiten, können Sie [Kontakt zum Support](https://www.metabase.com/help-premium)aufnehmen, um die Umgebungsvariablen für Ihre Metabase anzupassen.


---


## Liste der Umgebungsvariablen




### `MB_ADMIN_EMAIL`


- Typ: Zeichenkette
- Standard: `null`
- [Name der Konfigurationsdatei](./config-file.md): `admin-email`


Die E-Mail-Adresse, an die sich Benutzer bei Problemen wenden sollten.


### `MB_AGGREGATED_QUERY_ROW_LIMIT`


- Typ: Ganzzahl
- Voreinstellung: `10000`
- [Exportiert als](../installation-and-operation/serialization.md): `aggregated-query-row-limit`.
- [Name der Konfigurationsdatei](./config-file.md): `aggregated-query-row-limit`


Maximale Anzahl von Zeilen, die für aggregierte Abfragen über die API zurückgegeben werden.
