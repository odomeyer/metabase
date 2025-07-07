---
Titel: Kann nicht angezeigt oder bearbeitet werden
---


# Kann nicht angezeigt oder bearbeitet werden


1. Löschen Sie Ihren Browser-Cache.
2. Prüfen Sie, ob eine Browsererweiterung oder ein Plugin die Metabase stört:
- Deaktivieren Sie alle Erweiterungen und Plugins,
- Öffnen Sie den Link in einer Inkognito-Browser-Sitzung, oder
- Öffnen Sie den Link in einem anderen Browser.
3. Wenn Sie nicht der Ersteller der Frage, des Dashboards oder des Modells sind, prüfen Sie, ob Sie über Berechtigungen für die Sammlung verfügen, in der das Element gespeichert ist.
4. Überprüfen Sie den [Papierkorb](../exploration-and-organization/delete-and-restore.md#see-items-in-trash).


## Kann keine Karten auf einem Dashboard anzeigen


1. Überprüfen Sie die Sammlungen, in denen jede Frage (oder Karte) auf dem Dashboard gespeichert ist.
2. Wenn sich eine gespeicherte Frage in einer Sammlung befindet, auf die Sie keinen Zugriff haben, müssen Sie jemanden mit Bearbeitungsrechten für die Sammlung darum bitten:
- Ihnen die Berechtigung für die Sammlung zu erteilen.
- Oder, um die gespeicherte Frage in eine Sammlung zu verschieben, für die Sie eine Berechtigung haben.
3. Wenn die obigen Schritte Ihr Problem nicht lösen, fragen Sie Ihren Metabase-Administrator, ob Sie [Rechte für die Datenbank haben, die von der Frage verwendet wird](../permissions/data.md#blocked-view-data-permission).


**Erläuterung**


Wenn Sie ein Dashboard in eine andere Sammlung verschieben, werden die Fragen des Dashboards nicht in diese Sammlung verschoben.


Wenn die gespeicherten Fragen in einer eingeschränkten Sammlung gespeichert sind (z. B. im persönlichen Ordner einer Person), können andere Gruppen diese Karten nicht anzeigen.


Jemand mit Bearbeitungsrechten (Ihr Metabase-Administrator ist wahrscheinlich ein sicherer Kandidat) muss diese Fragen in eine Sammlung verschieben, auf die Sie Zugriffsrechte haben.


## Verwandte Probleme


- [Fehlermeldung: Ihre Frage dauerte zu lange](./timeout.md).
- [Fehlermeldung: Berechtigung verweigert](./data-permissions.md#getting-a-permission-denied-error-message).
- [Ich kann keine Abfragen im SQL-Editor anzeigen oder bearbeiten](./data-permissions.md#a-user-group-cant-access-the-sql-editor).
- [Ich kann meine Frage oder mein Dashboard nicht speichern](./proxies.md).
- [Ich kann meine Tabellen nicht sehen](./cant-see-tables.md).


## Stecken Sie immer noch fest?


Wenn Sie Ihr Problem nicht mit Hilfe der Anleitungen zur Fehlerbehebung lösen können:


- Suchen oder fragen Sie die [Metabase-Community](https://discourse.metabase.com/).
- Suchen Sie nach [bekannten Fehlern oder Einschränkungen](./known-issues.md).

