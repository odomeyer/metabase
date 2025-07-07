---
Titel: API-Änderungsprotokoll
---


# Wesentliche Änderungen an der API-Schnittstelle


## Metabase 0.55.0


-POST/api/card/from-csv` wurde umbenannt inPOST/api/upload/csv`.


-GET/api/util/stats` wurde umbenannt inGET/api/analytics/anonymous-stats`.


-GET/api/util/bug_report_details` wurde umbenannt in `GET/api/bug-reporting/details`.


-POST/api/util/product-feedback` wurde umbenannt in`POST/api/product-feedback`.


-POST/api/util/entity_id` wurde umbenannt in`POST/api/eid-translation/translate`.


-POST/api/util/password_check` wurde umbenannt in`POST/api/session/password-check`.


-GET/api/util/logs` wurde umbenannt in `GET/api/logger/logs`.


-GET/api/util/openapi` wurde entfernt; Sie können stattdessen `GET /api/docs/openapi.json` verwenden, was dasselbe bewirkt.
tut.


-GET/api/util/diagnostic_info/connection_pool_info` wurde umbenannt in `GET
/api/bug-reporting/connection-pool-details` umbenannt.


## Metabase 0.54.0


- Das Warnsystem wurde von der alten Puls-Infrastruktur auf das neue Benachrichtigungssystem migriert. Diese Migration umfasst die folgenden Änderungen:


- Die Mehrzahl der "/api/alert"-Endpunkte wurde zugunsten der neuen "/api/notification"-Endpunkte entfernt. Aus Gründen der Abwärtskompatibilität werden diese Endpunkte bis zur nächsten Version verfügbar bleiben:
-`GET/api/alert`
- `GET/api/alert/:id`
-DELETE /api/alert/:id/abonnement`


- Entwickler sollten auf die Verwendung der Endpunkte "/api/notification" umsteigen. Als Referenz:
- Einen Überblick über das neue Benachrichtigungssystem finden Sie unter `src/metabase/notification/README.md`
- Dokumentation der Benachrichtigungs-API unter `{{YOUR_URL}}/api/docs/#tag/apinotification`
- Interaktive API-Dokumentation verfügbar unter `/api/docs` endpoint


## Metabase 0.53.0


-POST /api/card/:card-id/query/:export-format`


Bisher konnten Anforderungsparameter (parameters, pivot-results? und format-rows?) über Abfrageparameter oder
als application/x-www-form-urlencoded form content gesendet werden. In Metabase 0.53.0 müssen Parameter entweder als:


- application/x-www-form-urlencoded Formularinhalt
- JSON-kodiert im Anfragekörper


Die Übermittlung von Parametern als Abfrageparameter in der URL wird nicht mehr unterstützt.


## Metabase 0.52.0


-POST /api/user/:id/send_invite` wurde entfernt.
-GET /:id/fields` enthält jetzt die Tabellen-ID.


- APIs unter `/api/pulse` und `/api/alert` werden in einer zukünftigen Version entfernt, da wir auf eine neue Architektur umstellen.


## Metabase 0.51.0


-GET /api/dashboard/:id/query_metadata`


Neuer Endpunkt, der Antworten für `/api/field/:id`, `/api/database/:id` und `/api/table/:id/query_metadata` kombiniert.
Dies sollte die Anzahl der erforderlichen Anfragen zur Anzeige einer Karte drastisch reduzieren.


-GET /api/card/:id/query_metadata`


Neuer Endpunkt, der Antworten für `/api/field/:id`, `/api/database/:id`, und `/api/table/:id/query_metadata` kombiniert.
