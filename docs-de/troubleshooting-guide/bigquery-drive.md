---
Titel: Fehlerbehebung bei BigQuery- und Google Drive-Verbindungen in Metabase
---


# Fehlerbehebung bei BigQuery- und Google Drive-Verbindungen in Metabase


[Auf dieser Seite(../databases/connections/bigquery.md) wird erklärt, wie man eine BigQuery-Datenquelle verbindet, einschließlich einer, die eine in Google Drive gespeicherte Datei wie ein Google Sheet (GSheets) verwendet.)


## 403 Forbidden POST error


Wenn Sie auf eine Fehlermeldung stoßen, die wie diese aussieht:


```
403 Forbidden POST https://www.googleapis.com/bigquery/v2/projects/PROJECT-NAME/queries { "code" : 403, "errors" : [ { "domain" : "global", "message" : "Access Denied: BigQuery BigQuery: Permission denied while getting Drive credentials.", "reason" : "accessDenied" } ], "message" : "Zugriff verweigert: BigQuery BigQuery: Permission denied while getting Drive credentials.", "status" : "PERMISSION_DENIED" }
```


Möglicherweise haben Sie vergessen, [Ihre Google Drive-Quelle](../databases/connections/bigquery.md#share-your-google-drive-source-with-the-service-account) mit der E-Mail des Servicekontos zuteilen. Sobald dies behoben ist, sollte der Fehler verschwinden und Sie können Ihre Datenquelle anzeigen und abfragen.


## Weitere Lektüre


- [Fehlersuche bei Datenbankverbindungen](./db-connection.md)
