---
Titel: Modellpersistenz
---


# Modellpersistenz


> Derzeit verfügbar für PostgreSQL, MySQL und Redshift.


Metabase kann die Ergebnisse Ihrer Modelle persistieren, sodass Ihre Modelle (und die auf diesen Modellen basierenden Fragen) schneller geladen werden.


Metabase speichert die Modellergebnisse in Tabellen in einem benutzerdefinierten Schema in Ihrem Data Warehouse (nicht in der Metabase-Anwendungsdatenbank). Wenn Personen Fragen stellen, die auf Ihren Modellen basieren, verwendet Metabase die Tabellen mit den gespeicherten Ergebnissen, anstatt die Abfrage des Modells erneut auszuführen.


> Die Modellpersistenz funktioniert nicht mit [data sandboxing](../permissions/data-sandboxes.md) oder [impersonation](../permissions/impersonation.md).


## Modellpersistenz in der Metabase einschalten


Um Modelle für ein schnelleres Laden aufrechtzuerhalten, müssen Sie die Modellpersistenz für Folgendes aktivieren:


1. [Ihre Metabasis](#turn-on-model-persistence-for-your-metabase)
2. [Einzelne Datenbanken](#turn-on-model-persistence-for-each-database)
3. [(Optional) individuelle Modelle](#turn-on-model-persistence-for-individual-models)


### Aktivieren Sie die Modellpersistenz für Ihre Metabase


Um die Modellpersistenz für Ihre Metabasis zu aktivieren, gehen Sie zu**Admin-Einstellungen** >**Leistung** >**Modellpersistenz**.


Sie können die Modelle so einstellen, dass sie in einem der Standardintervalle (alle 1 Stunde, 2 Stunden usw.) aktualisiert werden, oder Sie wählen die Option**Benutzerdefiniert**, um mithilfe der [cron-Syntax](https://www.quartz-scheduler.org/documentation/quartz-2.3.0/tutorials/crontrigger.html) Ihre eigene Aktualisierungsfrequenz festzulegen.


Der Cron-Scheduler verwendet die [Report Timezone](../configuring-metabase/localization.md#report-timezone), wenn sie ausgewählt ist. Andernfalls verwendet der Scheduler die Systemzeitzone (die in der [Metabase Cloud](https://www.metabase.com/cloud/) standardmäßig auf GMT eingestellt ist).


Wir empfehlen, die Aktualisierung Ihrer Modelle so zu planen, dass die Häufigkeit der Aktualisierung Ihrer Quelltabellen mit neuen Daten berücksichtigt wird.


Wenn jemand [die Abfragedefinition eines Modells ändert](./models.md#edit-a-models-query), wird jede Frage, die auf diesem Modell basiert, die Abfrage des Modells bis zur nächsten geplanten Modellaktualisierung erneut ausführen.


## Aktivieren Sie die Modellpersistenz für jede Datenbank.


Nachdem Sie die Modellpersistenz für Ihre Metabase aktiviert haben, müssen Sie sie für jede einzelne Datenbank einrichten, da die Metabase ein Schema in Ihrem Data Warehouse erstellen muss, um die persistierten Modelle zu speichern.


1. Gehen Sie zu **Admin-Einstellungen** > **Datenbanken** > [Ihre Datenbank] > **Modellpersistenz einschalten**. Wenn die Anmeldeinformationen, die Sie Metabase für die Verbindung mit Ihrer Datenbank gegeben haben, zulässig sind, sollte Metabase die ganze Arbeit für Sie erledigen: Metabase prüft, ob das Schema bereits vorhanden ist, oder versucht andernfalls, es zu erstellen. Wenn die Anmeldeinformationen der Verbindung_nicht über die erforderlichen Berechtigungen zum Erstellen des Schemas in Ihrer Datenbankverfügen, müssen Sie das Schema selbst in der Datenbank erstellen.


2. Um das Schema manuell in Ihrem Data Warehouse zu erstellen, klicken Sie auf das **Infosymbol**, um den Schemanamen zu erhalten.


3. Erstellen Sie das Schema in Ihrer Datenbank - stellen Sie sicher, dass Sie den exakten Schemanamen aus Schritt 1 verwenden. Wenn Sie beispielsweise PostgreSQL als Data Warehouse verwenden, erstellen Sie das Schema, indem Sie "CREATE SCHEMA IF NOT EXISTS schema_name" ausführen, wobei "schema_name" der Name ist, den Ihnen Metabase im Infosymbol angezeigt hat.


4. Stellen Sie sicher, dass die Anmeldeinformationen, die Metabase für die Verbindung zu Ihrem Data Warehouse verwendet, dieses Schema verwalten und beschreiben können.


## Aktivieren Sie die Modellpersistenz für einzelne Modelle


{% include plans-blockquote.html feature="Individual model persistence" %}


Sie können die Persistenz auch für einzelne Modelle ein- oder ausschalten. Klicken Sie bei der Anzeige eines Modells auf das Symbol **...** oben rechts und wählen Sie **Einstellungen bearbeiten**. Schalten Sie**Modelldaten beibehalten** ein (dazu benötigen Sie [Curate access](../permissions/collections.md#curate-access) für die Sammlung des Modells).


Das Umschalten der Persistenz für einzelne Modelle ist nützlich für Modelle mit Daten, die in einer anderen Häufigkeit aktualisiert werden als der Zeitplan, den Sie für andere Modelle in dieser Datenbank festgelegt haben, oder für Modelle, die mehr oder weniger als andere Modelle in dieser Datenbank verwendet werden.


## Aktualisieren der gespeicherten Ergebnisse eines Modells


Um die Ergebnisse eines Modells zu aktualisieren, gehen Sie zu dem Modell, klicken Sie auf das Menü mit den drei Punkten(**...**) und wählen Sie **Einstellungen bearbeiten**. In der Info-Seitenleiste, die sich öffnet, sehen Sie einen Hinweis darauf, wann Metabase die Ergebnisse des Modells zuletzt aktualisiert hat, sowie ein Symbol zum Aktualisieren der Ergebnisse.


## Protokolle der Modellpersistenz anzeigen


Sie können die Protokolle für die Modellpersistenz anzeigen, indem Sie auf das **Zahnradsymbol** oben rechts klicken und **Admin-Einstellungen** > **Tools** > **Modell-Caching-Protokolle** auswählen. Siehe [Admin-Tools](../usage-and-performance-tools/tools.md).
