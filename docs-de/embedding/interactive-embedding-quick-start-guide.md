---
Titel: "Interaktive Einbettung Schnellstart"
---


# Interaktiver Einbettungs-Schnellstart


Sie betten die vollständige Metabase-Anwendung in Ihre Anwendung ein. Nach der Anmeldung können die Benutzer ein Metabase-Dashboard in Ihrer Webanwendung anzeigen und die vollständige Metabase-Anwendung verwenden, um ihre Daten - und nur ihre Daten - zu untersuchen.


{% include shared/in-page-promo-embedding-workshop.html %}


## Voraussetzungen


- Sie haben eine Anwendung, in die Sie Metabase einbetten können.
- Sie haben ein Pro- oder Enterprise-Abonnement für Metabase. Wenn Sie sich nicht sicher sind, wo Sie anfangen sollen, melden Sie sich für eine kostenlose Testversion von [Pro On-Prem](https://store.metabase.com/checkout/embedding) an. Wenn Sie Docker Desktop installiert haben, können Sie einfach nach "metabase-enterprise" suchen, um das Docker-Image zu finden und es auszuführen. Alternativ können Sie auch [diese Anweisungen] befolgen(../installation-and-operation/running-metabase-on-docker.md#pro-or-enterprise-quick-start).


Der Code in dieser Anleitung ist in unserem [sample repo](https://github.com/metabase/metabase-nodejs-express-interactive-embedding-sample) zu finden.


## SSO und interaktive Einbettung in Metabase einrichten


### Das Dashboard zum Einbetten bereithalten


Sie benötigen zunächst ein Dashboard zum Einbetten. Wenn Sie noch keins haben, können Sie das Beispiel-Dashboard verwenden, das die Metabase bei neuen Instanzen einbindet, oder Sie können eines mithilfe von X-Rays erstellen.


Besuchen Sie dieses Dashboard und notieren Sie sich seine URL, z. B. `/dashboard/1-e-commerce-insights`. Sie müssen diese relative URL in Ihre App einfügen, da Sie das Dashboard als erste Seite verwenden werden, die eingeloggte Personen sehen, wenn sie den Analysebereich in Ihrer App besuchen. Es reicht aus, nur die ID anzugeben und den Rest der URL wegzulassen, z. B. "/dashboard/1".


Sie können auch die [Entity ID] des Dashboards verwenden(../installation-and-operation/serialization.md#metabase-uses-entity-ids-to-identify-and-reference-metabase-items). Klicken Sie auf dem Dashboard auf die Schaltfläche**Info**. Suchen Sie auf der Registerkarte**Übersicht** nach der**Entitäts-ID** des Dashboards. Kopieren Sie diese Entitäts-ID. Sie werden diese Entitäts-ID in der "src" -URL des iframe verwenden: (z.B. `src=/dashboard/entity/[Entity ID]`).


### Interaktive Einbettung aktivieren


Klicken Sie in der Metabase auf das**Zahnradsymbol** oben rechts und gehen Sie zu**Admin-Einstellungen** >**Einstellungen** >**Einbettung**. Suchen Sie nach**Interaktive Einbettung** und klicken Sie auf den Schalter**Aktiviert**.


Klicken Sie unter**Interaktive Einbettung** auf die Schaltfläche**Konfigurieren**. Fügen Sie unter**Autorisierte Herkunft** die URL der Website oder Webanwendung hinzu, in die Sie die Metabase einbetten möchten. Wenn Sie Ihre Anwendung lokal ausführen, können Sie localhost hinzufügen und die Portnummer angeben, z. B. `http://localhost:8080`.


#### SameSite-Konfiguration


Wenn Sie die Metabase in einer anderen Domäne einbetten, müssen Sie möglicherweise [den SameSite-Wert des Session-Cookies auf ` none`setzen ](./interactive-embedding.md#embedding-metabase-in-a-different-domain)


### SSO mit JWT in Ihrer Metabase einrichten


#### Aktivieren Sie die Authentifizierung mit JWT


Klicken Sie im Bereich**Einstellungen** des Admin-Panels auf**Authentifizierung**.


Klicken Sie auf der Karte**JWT** auf die Schaltfläche**Einrichten** (möglicherweise müssen Sie nach unten scrollen, um die JWT-Karte zu sehen).


(/images/jwt-setup.png)[Admin-Einstellungen: Authentifizierung > JWT-Einrichtung].


#### JWT-Identitätsanbieter-URI festlegen


In Ihrer Anwendung erstellen Sie eine Route für SSO unter `/sso/metabase`. In das Feld **JWT IDENTITY PROVIDER URI** geben Sie die URL Ihrer SSO-Route ein. Unsere Beispielanwendung läuft beispielsweise auf Port 8080, so dass die JWT IDENTITY PROVIDER URI in diesem Fall `http://localhost:8080/sso/metabase` lauten könnte.


#### Erzeugen eines JWT-Signierschlüssels


Klicken Sie auf die Schaltfläche **Schlüssel generieren**, um einen Signierschlüssel zu erzeugen. Halten Sie diesen Schlüssel geheim. Sie werden ihn auf Ihrem Server verwenden. Wenn Sie einen weiteren Schlüssel generieren, überschreiben Sie den vorhandenen Schlüssel, so dass Sie den Schlüssel in Ihrer Anwendung ebenfalls aktualisieren müssen.
