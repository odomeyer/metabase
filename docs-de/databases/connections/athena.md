---
Titel: Amazonas Athena
---


# Amazon Athena


Um eine Datenbankverbindung hinzuzufügen, klicken Sie auf das **Zahnradsymbol** oben rechts, und navigieren Sie zu **Admin-Einstellungen** > **Datenbanken** > **Datenbank hinzufügen**.


## Verbindung und Synchronisierung


Nachdem Sie eine Verbindung zu einer Datenbank hergestellt haben, sehen Sie den Abschnitt "Verbindung und Synchronisierung", der den aktuellen Verbindungsstatus und Optionen zur Verwaltung Ihrer Datenbankverbindung anzeigt.


Hier können Sie [das Datenbankschema synchronisieren und Feldwerte neu scannen](../sync-scan.md) und Verbindungsdetails bearbeiten.


### Verbindungsdetails bearbeiten


Sie können diese Einstellungen jederzeit bearbeiten (und vergessen Sie nicht, Ihre Änderungen zu speichern).


### Anzeigename


Der Anzeigename für die Datenbank in der Metabase-Schnittstelle.


### Region


Die AWS-Region, in der Ihre Datenbank gehostet wird, für Amazon Athena. Sie könnten zum Beispiel `us-east-1` eingeben.


### Arbeitsgruppe


AWS-Arbeitsgruppe. Zum Beispiel: `primary`. Siehe [Dokumentation über Arbeitsgruppen](https://docs.aws.amazon.com/athena/latest/ug/user-created-workgroups.html).


### S3 Staging-Verzeichnis


Dieses S3-Staging-Verzeichnis muss sich in derselben Region befinden, die Sie oben angegeben haben.


### Zugriffsschlüssel


Teil der IAM-Anmeldeinformationen für AWS. Metabase verschlüsselt diese Anmeldeinformationen.


Wenn Sie Metabase auf AWS ausführen und [AWS Default Credentials Chain](https://docs.aws.amazon.com/sdk-for-java/v1/developer-guide/credentials.html#credentials-default) verwenden möchten, lassen Sie die Schlüssel Access und Secret leer.


Siehe auch unsere [Hinweise zur Verbindung mit Athena](#notes-on-connecting-to-athena).


### Geheimer Schlüssel


Teil der IAM-Anmeldeinformationen für AWS. Die Metabase verschlüsselt diese Anmeldeinformationen.


### Zusätzliche Athena-Verbindungsstring-Optionen


Sie können zusätzliche Optionen über einen String angeben, z.B. `UseResultsetStreaming=0;LogLevel=6`.


### Benutzer-ID und Abfrage-Hash in Abfragen einbeziehen


Dies kann für Auditing und Debugging nützlich sein, verhindert aber, dass Datenbanken Ergebnisse zwischenspeichern und kann Ihre Kosten erhöhen. Aktivieren Sie diese Funktion, wenn Sie verfolgen müssen, welche Benutzer bestimmte Abfragen ausführen.


### Wiederholung von Abfragen für einfache Erkundungen


Schalten Sie diese Option**AUS**, wenn Sie auf**Ausführen** (die Abspielschaltfläche) klicken möchten, bevor Sie eine [Zusammenfassen](../../questions/query-builder/summarizing-and-grouping.md) oder eine Filterauswahl treffen.


Standardmäßig führt Metabase eine Abfrage aus, sobald Sie eine Gruppierungsoption aus dem Menü**Zusammenfassen** oder eine Filterbedingung aus dem [Drill-through-Menü](https://www.metabase.com/learn/metabase-basics/querying-and-dashboards/questions/drill-through) auswählen. Wenn Ihre Datenbank langsam ist, sollten Sie die erneute Ausführung deaktivieren, um das Laden von Daten bei jedem Klick zu vermeiden.
