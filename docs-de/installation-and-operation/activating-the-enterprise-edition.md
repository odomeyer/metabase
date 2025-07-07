---
Titel: Aktivieren Ihrer kommerziellen Metabase-Lizenz
redirect_from:
- /docs/latest/enterprise-guide/activating-the-enterprise-edition
- /docs/latest/bezahlte-features/aktivierung-des-unternehmens-edition
---


# Aktivieren Ihrer kommerziellen Metabase-Lizenz


Die [kostenpflichtigen Pro- und Enterprise-Editionen](https://www.metabase.com/pricing/) von Metabase unterscheiden sich von der kostenlosen [Open Source-Edition](../installation-and-operation/running-the-metabase-jar-file.md) und der [Starter-Version von Metabase Cloud](https://www.metabase.com/cloud/).


## Wenn Sie mit Metabase Cloud arbeiten


Wenn Sie sich für einen Pro- oder Enterprise-Tarif für Metabase Cloud angemeldet oder ein Upgrade darauf durchgeführt haben, werden alle diese Schritte für Sie erledigt.


## Wenn Sie Metabase selbst hosten


Um Ihre Pro/Enterprise-Funktionen nutzen zu können, müssen Sie zwei Dinge tun:


- Metabase Enterprise Edition herunterladen
- Geben Sie Ihre Lizenz ein.


Sie können eine Lizenz erhalten, indem Sie sich für eine kostenlose Testversion der [Pro- oder Enterprise-Edition](https://www.metabase.com/pricing/) anmelden, die beide selbst gehostet oder auf der Metabase Cloud gehostet werden können.


### Download der Enterprise-Edition


- [Enterprise Docker image](https://hub.docker.com/r/metabase/metabase-enterprise/) unter `metabase/metabase-enterprise:latest`. (EMPFOHLEN)
- [Enterprise JAR](https://downloads.metabase.com/enterprise/latest/metabase.jar).


Außerdem müssen Sie eine dedizierte [Anwendungsdatenbank] einrichten(../installation-and-operation/configuring-application-database.md), um Ihre Metabase-Daten zu speichern.


### Aktivieren Sie Ihre Lizenz


Es gibt zwei Möglichkeiten, Ihre Lizenz zu aktivieren, wenn Sie die Metabase selbst hosten:


- **Wenn die Metabase läuft**: Gehen Sie zu**Einstellungen** >**Admin-Einstellungen**, und klicken Sie auf**Lizenz und Abrechnung** in der linken Seitenleiste. Fügen Sie unter**Lizenz** Ihr Lizenz-Token ein und klicken Sie auf**Aktivieren**.


ODER


- **Vor dem Start der Metabase**: Sie können das Lizenz-Token auch mit der Umgebungsvariablen [`MB_PREMIUM_EMBEDDING_TOKEN`] setzen(../configuring-metabase/environment-variables.md#mb_premium_embedding_token). Diese Umgebungsvariable muss gesetzt werden, _bevor_ Sie Ihre Metabase starten.


## Upgrade von einer selbst gehosteten Metabase Open Source Edition auf ein Pro- oder Enterprise-Abo


Um alle Funktionen zu erhalten, die bei einem Upgrade auf einen _selbst gehosteten_ [Pro- oder Enterprise-Plan](https://www.metabase.com/pricing/) verfügbar sind, müssen Sie Folgendes tun


1. Wechseln Sie zur Metabase Enterprise Edition (das gilt sowohl für den Pro- als auch für den Enterprise-Tarif).
2. Aktivieren Sie Ihre Lizenz.


Unter der Annahme, dass Sie eine [Produktionsanwendungsdatenbank](../installation-and-operation/configuring-application-database.md) verwendet haben, müssen Sie Folgendes tun:


1. [ SichernSie Ihre Anwendungsdatenbank](./backing-up-metabase-application-data.md).
2. Laden Sie die Enterprise Edition-Version herunter, die Ihrer aktuellen Metabase-Version entspricht. Wenn Sie also das Docker-Image für {{site.data.latest_version}} verwenden, sollten Sie auf das Docker-Image für {{site.data.latest_enterprise}} wechseln. Eine Liste der verfügbaren Versionen für die Open Source und Enterprise Editionen finden Sie unter [Metabase releases](https://github.com/metabase/metabase/releases).
3. Beenden Sie Ihre aktuelle Metabase Open Source Edition.
4. Tauschen Sie das heruntergeladene Enterprise Edition Docker-Image oder jar aus.
5. Starten Sie Ihre Metabase wie gewohnt mit dem neuen Enterprise Edition-Image oder -Jar. Mit Ihrer Anwendungsdatenbank (die Sie in Schritt eins gesichert haben) brauchen Sie nichts zu tun.
