---
Titel: Google BigQuery
redirect_from:
- /docs/latest/administration-guide/databases/bigquery
---


# Google BigQuery


Um eine Datenbankverbindung hinzuzufügen, klicken Sie auf das**Zahnradsymbol** oben rechts und navigieren Sie zu**Admin-Einstellungen** >**Datenbanken** >**Datenbank hinzufügen**.


## Voraussetzungen


Sie benötigen ein [Google Cloud Platform](https://cloud.google.com/) Konto mit einem [Projekt](https://cloud.google.com/storage/docs/projects), das Sie in Metabase verwenden möchten. In der Google Cloud Platform-Dokumentation finden Sie Hinweise zum [Erstellen und Verwalten eines Projekts](https://cloud.google.com/resource-manager/docs/creating-managing-projects). Dieses Projekt sollte einen BigQuery-Datensatz enthalten, mit dem sich Metabase verbinden kann.


## Google Cloud Platform: Erstellen eines Dienstkontos und einer JSON-Datei


Zunächst benötigen Sie eine JSON-Datei [service account](https://cloud.google.com/iam/docs/service-account-overview), die Metabase für den Zugriff auf Ihren BigQuery-Datensatz verwenden kann. Dienstkonten sind für nicht-menschliche Benutzer (z. B. Anwendungen wie Metabase) gedacht, um ihre API-Aufrufe zu authentifizieren (wer bin ich?) und zu autorisieren (was kann ich tun?).


Um die JSON-Datei für das Dienstkonto zu erstellen, folgen Sie der Google-Dokumentation zum [Einrichten eines Dienstkontos](https://cloud.google.com/iam/docs/creating-managing-service-accounts) für Ihren BigQuery-Datensatz. Hier ist der grundlegende Ablauf:


1. **Dienstkonto erstellen**. Öffnen Sie in Ihrer Google Cloud Platform-Projektkonsole das Hauptmenü in der linken Seitenleiste, gehen Sie zum Abschnitt**IAM & Admin** und wählen Sie**Dienstkonto**. Die Konsole listet die vorhandenen Servicekonten auf, falls vorhanden. Klicken Sie oben auf dem Bildschirm auf **+ SERVICE-KONTO ERSTELLEN**.


2. **Füllen Sie die Details des Dienstkontos aus**. Geben Sie dem Dienstkonto einen Namen und fügen Sie eine Beschreibung hinzu (die ID des Dienstkontos wird eingefügt, sobald Sie einen Namen hinzugefügt haben). Klicken Sie dann auf die Schaltfläche **Erstellen**.


3. **Gewähren Sie dem Dienstkonto Zugriff auf dieses Projekt**. Sie müssen dem Dienstkonto**Rollen** hinzufügen, damit Metabase die Berechtigung zum Anzeigen und Ausführen von Abfragen für Ihr Dataset erhält. Stellen Sie sicher, dass Sie dem Dienstkonto die folgenden Rollen hinzufügen:


- BigQuery-Datenbetrachter
- BigQuery-Metadaten-Betrachter
- BigQuery Job User (unterscheidet sich von BigQuery User)


Weitere Informationen über**Rollen** in BigQuery finden Sie in der [Dokumentation von Google Cloud Platform](https://cloud.google.com/bigquery/docs/access-control).


4. **Schlüssel erstellen**. Wenn Sie dem Dienstkonto Rollen zugewiesen haben, klicken Sie auf die Schaltfläche**Schlüssel erstellen** und wählen Sie**JSON** für den**Schlüsseltyp**. Die JSON-Datei wird auf Ihren Computer heruntergeladen.


**Sie können den Schlüssel nur einmal herunterladen**. Wenn Sie den Schlüssel löschen, müssen Sie ein neues Dienstkonto mit denselben Rollen erstellen.


## Verbindung und Synchronisierung


Nachdem Sie eine Verbindung zu einer Datenbank hergestellt haben, sehen Sie den Abschnitt "Verbindung und Synchronisierung", der den aktuellen Verbindungsstatus und Optionen zur Verwaltung Ihrer Datenbankverbindung anzeigt.


Hier können Sie [das Datenbankschema synchronisieren und Feldwerte neu scannen](../sync-scan.md) und Verbindungsdetails bearbeiten.


## Verbindungsdetails bearbeiten


Sie können diese Einstellungen jederzeit ändern. Denken Sie nur daran, Ihre Änderungen zu speichern.


### Anzeigename


Der Anzeigename für die Datenbank in der Metabase-Schnittstelle.


### Projekt-ID


Jeder BigQuery-Datensatz hat eine **Projekt-ID**. Sie können diese ID über die [Google Cloud Console](https://console.cloud.google.com/) finden. Wenn Sie nicht sicher sind, wo Sie die**Projekt-ID** finden können, sehen Sie in der Google-Dokumentation zu [Informationen über Datensätze abrufen](https://cloud.google.com/bigquery/docs/dataset-metadata#getting_dataset_information) nach.


> Lassen Sie bei der Eingabe der**Projekt-ID** das Präfix "Projekt-ID" weg. Wenn Ihre ID z. B. "projekt_name:projekt_id" lautet, geben Sie nur "projekt_id" ein.
