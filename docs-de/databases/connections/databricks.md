---
Titel: Databricks
---


**Datenbankverbindungen**


Um eine Datenbankverbindung hinzuzufügen, klicken Sie auf das**Zahnradsymbol** oben rechts, und navigieren Sie zu**Admin-Einstellungen** >**Datenbanken** >**Datenbank hinzufügen**. Wählen Sie dann**Databricks**.


Sie können diese Einstellungen jederzeit ändern. Denken Sie nur daran, Ihre Änderungen zu speichern.


## Verbindungsdetails bearbeiten


### Anzeigename


Der Anzeigename für die Datenbank in der Metabase-Schnittstelle.


### Host


Die IP-Adresse Ihrer Datenbank oder ihr Domänenname (z. B. "xxxxxxxxxx.cloud.databricks.com" oder "adb-xxxxx.azuredatabricks.net"). Dies ist der Wert des Server-Hostnamens der Rechenressource Ihres Databricks.


Siehe [Compute settings for the Databricks JDBC Driver](https://docs.databricks.com/en/integrations/jdbc/compute.html).


### HTTP Pfad


Dies ist der Wert für den HTTP-Pfad der Rechenressourcen des Databricks. Dieser Wert ist oft ein SQL-Warehouse-Endpunkt im Format "/sql/1.0/endpoints/abcdef1234567890". Siehe [Verbindung zu einem SQL-Warehouse](https://docs.databricks.com/en/compute/sql-warehouse/index.html).


Siehe auch [Compute settings for the Databricks JDBC Driver](https://docs.databricks.com/en/integrations/jdbc/compute.html).


### Authentifizierung


Es gibt zwei Möglichkeiten, sich bei Databricks zu authentifizieren. Sie können ein persönliches Zugriffstoken (PAT) oder einen Dienstprinzipal mit OAuth (OAuth M2M) verwenden.


Der Databricks-Treiber unterstützt beide Optionen. Verwenden Sie die Umschalttaste, um die gewünschte Authentifizierungsmethode auszuwählen.


#### Persönliche Zugangstoken-Authentifizierung


Siehe [Personal Access Token (PAT)](https://docs.databricks.com/en/dev-tools/auth/pat.html).


#### Authentifizierung des Zugriffs mit einem Dienstprinzipal unter Verwendung von OAuth (OAuth M2M)


Siehe [Authentifizierung des Zugriffs mit einem Dienstprinzipal über OAuth](https://docs.databricks.com/en/dev-tools/auth/oauth-m2m.html).


### Mehrere Kataloge aktivieren


Schalten Sie diese Option ein, um mehrere Kataloge zu synchronisieren. Wenn Sie dies aktivieren, können Sie [angeben, welche Kataloge synchronisiert werden sollen](#catalogs-and-schemas).


### Standardkatalog


Erforderlich. Sie müssen einen Standardkatalog angeben (damit Sie sich nicht mit Katalogqualifikationen in nativen Abfragen befassen müssen).


Sie können jedoch nicht die Legacy-Kataloge von Databricks synchronisieren, einschließlich der Kataloge "samples" oder "hive_metastore".


### Kataloge und Schemata


Sie können angeben, welche Kataloge und Schemata Sie synchronisieren und scannen möchten. Die Optionen sind:


- Alle
- Nur diese...
- Alle außer...


Bei den Optionen**Nur diese** und**Alle außer** können Sie eine durch Kommata getrennte Liste von Werten eingeben, um der Metabase mitzuteilen, welche Kataloge und Schemata Sie einschließen (oder ausschließen) möchten. Ein Beispiel:


```
foo,bar,baz
```


Sie können den Platzhalter "*" verwenden, um mehrere Schemata abzugleichen.
