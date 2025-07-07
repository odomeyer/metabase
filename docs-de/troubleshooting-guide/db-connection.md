---
Titel: Fehlersuche bei Datenbankverbindungen
redirect_from:
- /docs/latest/troubleshooting-guide/datawarehouse
---


# Fehlersuche bei Datenbankverbindungen


Wenn Sie keine Verbindung zu Ihrer Datenbank herstellen können, müssen Sie herausfinden, ob das Problem mit der Metabase oder Ihrem Datenbankserver zusammenhängt.


Wenn Ihre Datenbankverbindung erfolgreich ist, aber die Tabellen nicht im [Data Browser](https://www.metabase.com/learn/metabase-basics/querying-and-dashboards/data-browser) angezeigt werden, gehen Sie zu [Troubleshooting missing tables](./cant-see-tables.md).


## Fehlersuche bei Verbindungen zur Metabase


1. Gehen Sie zu**Admin** >**Datenbanken** und wählen Sie Ihre Datenbank aus, um sicherzustellen, dass Ihre Verbindung nicht geändert oder gelöscht wurde.


- Wenn Metabase noch nicht mit der Synchronisierung mit Ihrer Datenbank begonnen hat, klicken Sie auf**Datenbankschema synchronisieren**.


- Wenn die Metabase für die Synchronisierung viel Zeit benötigt, gehen Sie zu [Troubleshooting syncs and scans](./sync-fingerprint-scan.md).


2. Gehen Sie zu **Admin** > **Fehlerbehebung** > **Protokolle**, um zu überprüfen, ob die Metabase nicht synchronisiert werden konnte [aufgrund eines Fehlers](#common-database-connection-errors).


- Wenn Sie mit den Protokollen überfordert sind, lesen Sie [How to read the server logs](./server-logs.md).


Wenn Sie keinen Zugriff auf das Metabase Admin Panel haben, müssen Sie die Person fragen, die Ihre Metabase eingerichtet hat.


## Fehlersuche bei Verbindungen zum Datenbankserver


1. [Prüfen Sie, ob der Data Warehouse Server läuft](#checking-the-server-status).


2. Prüfen Sie, ob Sie von einem anderen Client aus eine Verbindung zum Data Warehouse herstellen können, indem Sie den Rechner verwenden, auf dem Sie Metabase ausführen.


- Wenn Sie von einem Bastion-Host oder einem anderen Rechner aus auf den Server zugreifen können, [überprüfen Sie, ob die IP-Adresse Ihrer Metabase Zugriff auf Ihren Datenbankserver hat](#checking-your-server-access).


- Wenn Sie Metabase Cloud verwenden, überprüfen Sie, ob Sieunsere IP-Adressen auf eine Whitelist gesetzt haben(../cloud/ip-addresses-to-whitelist.md).


3. Vergewissern Sie sich, dass die Metabase eine Rolle mit den erforderlichen Berechtigungen für die Verbindung zu Ihrem Data Warehouse verwendet. Siehe [Erteilen von Datenbankprivilegien](../databases/users-roles-privileges.md).


Anhand der obigen Schritte können Sie feststellen, ob das Problem außerhalb der Metabase auftritt. Um_ Probleme mit Ihrem Datenbankserverzu beheben, müssen Sie die Dokumentation Ihrer Datenbank oder Ihres Cloud-Dienstes konsultieren. Denken Sie daran,Ihre Datenbankverbindung zu [testen](#testing-the-connection-status), nachdem Sie Änderungen vorgenommen haben.


Wenn Sie keinen Zugriff auf den Data-Warehouse-Server haben, müssen Sie die Person fragen, die Ihre Datenbank oder Ihr Data-Warehouse verwaltet.


## Fehlerbehebung bei BigQuery- und Google Drive-Verbindungen


Siehe [Fehlerbehebung bei BigQuery- und Google Drive-Verbindungen](./bigquery-drive.md)


## Häufige Datenbankverbindungsfehler


### Ihre Frage hat zu lange gedauert


Wenn Sie diese Fehlermeldung in der Metabase-Schnittstelle sehen, gehen Sie zu [Troubleshooting timeouts](./timeout.md).
