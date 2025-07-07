---
Titel: API-Schlüssel
---


# API-Schlüssel


Die Metabase kann API-Schlüssel erstellen, um programmatische Anfragen an die API zu authentifizieren. Um die Berechtigungen für einen API-Schlüssel festzulegen, können Sie den Schlüssel einer [Gruppe] zuordnen(./managing.md#groups).


## Eine Warnung zur Metabase-API


Die [Metabase API](../api.html) wird nicht versioniert. Wir ändern selten API-Endpunkte und entfernen sie fast nie, aber wenn Sie Code schreiben, der sich auf die API stützt, besteht die Möglichkeit, dass Sie Ihren Code in Zukunft aktualisieren müssen.


Es gibt jedoch Situationen, in denen es sinnvoll ist, mit der API zu arbeiten, z. B. bei der Verwaltung von Berechtigungen für eine große Anzahl von Personen und Gruppen, der Massenarchivierung oder der Erstellung von Inhalten. Deshalb haben wir die Möglichkeit hinzugefügt, API-Schlüssel zu erstellen, um Ihre programmatischen Anfragen zu authentifizieren.


## Einen API-Schlüssel erstellen


So erstellen Sie einen API-Schlüssel:


1. Klicken Sie auf das Symbol **Zahnrad** in der oberen rechten Ecke.
2. Wählen Sie **Admin-Einstellungen**.
3. Wechseln Sie zur Registerkarte **Einstellungen**.
4. Klicken Sie im linken Menü auf die Registerkarte**Authentifizierung**.
5. Blättern Sie zu **API-Schlüssel** und klicken Sie auf **Verwalten**.
6. Klicken Sie auf die Schaltfläche **API-Schlüssel erstellen**.
7. Geben Sie einen **Schlüsselnamen** ein. Sie können mehrere API-Schlüssel haben, also geben Sie ihm einen Namen, der Ihnen hilft, sich zu merken, wofür Sie den Schlüssel verwenden.
8. Wählen Sie eine **[Gruppe](./managing.md#groups)**. Der Schlüssel erhält die gleichen Berechtigungen wie diese Gruppe.
9. Klicken Sie auf **Erstellen**.
10. Kopieren Sie den generierten API-Schlüssel und speichern Sie ihn an einem sicheren Ort. Die Metabase kann Ihnen den Schlüssel nicht mehr anzeigen. Wenn Sie den Schlüssel verlieren, müssen Sie einen neuen Schlüssel generieren.


### API-Schlüssel über die Konfigurationsdatei erstellen


Wenn Sie einen [Pro oder Enterprise self-hosted Plan](https://www.metabase.com/pricing/) nutzen, können Sie [API-Schlüssel über die Konfigurationsdatei](../configuring-metabase/config-file.md#api-keys)erstellen.


## Verwalten von API-Schlüsseln


So zeigen Sie vorhandene API-Schlüssel an und verwalten sie:


1. Klicken Sie auf das Symbol **Zahnrad** in der oberen rechten Ecke.
2. Wählen Sie **Admin-Einstellungen**.
3. Wechseln Sie zur Registerkarte **Einstellungen**.
4. Klicken Sie im linken Menü auf die Registerkarte**Authentifizierung**.
5. Scrollen Sie zu **API-Schlüssel** und klicken Sie auf **Verwalten**.


### API-Schlüssel bearbeiten


Um einen API-Schlüssel zu bearbeiten, scrollen Sie zu dem Schlüssel, den Sie bearbeiten möchten, und klicken Sie auf das Symbol**Bleistift**. Metabase öffnet ein **Modal zumBearbeiten des API-Schlüssels**, in dem Sie den Schlüssel bearbeiten können:


- den Namen des Schlüssels
- Zu welcher Gruppe der Schlüssel gehört.
- Ändern (neu generieren) des Schlüssels. Metabase ersetzt den vorhandenen API-Schlüssel durch einen neuen Schlüssel. Sie können den alten Schlüssel nicht wiederherstellen.


### Löschung von API-Schlüsseln
