---
Titel: Allgemeine Einstellungen
redirect_from:
- /docs/latest/administration-guide/08-konfiguration-settings
---


# Allgemeine Einstellungen


Dieser Abschnitt enthält Einstellungen für Ihre gesamte Instanz, wie z. B. die URL, die Berichtszeitzone und Umschaltmöglichkeiten zum Deaktivieren oder Aktivieren einiger optionaler Funktionen der Metabase.


Sie können diese Einstellungen unter **Einstellungen** > **Admin-Einstellungen** > **Allgemein** konfigurieren.


## Standortname


Wie möchten Sie diese Instanz der Metabase bezeichnen?


## Website-URL


Die Site-URL ist die Webadresse, über die auf Ihre Metabase-Instanz zugegriffen wird. Geben Sie unbedingt "http://" oder "https://" an, um sicherzustellen, dass sie erreichbar ist. Diese Funktion ist nur für selbst gehostete Metabases verfügbar. Für Kunden der Metabase Cloud finden Sie unter [Custom domains](../cloud/custom-domain.md).


## Benutzerdefinierte Homepage


Administratoren können ein Dashboard auswählen, das als Startseite dienen soll. Wenn Personen keine Berechtigung zum Anzeigen des ausgewählten Dashboards haben, leitet Metabase sie auf die Standard-Homepage um.


Wenn Sie ein Dashboard als Startseite festgelegt haben und zur Standard-Homepage von Metabase zurückkehren möchten, deaktivieren Sie einfach den Schalter **Aktiviert**, um die Funktion "Benutzerdefinierte Homepage" zu deaktivieren.


## Umleitung zu HTTPS


Die Metabase wird standardmäßig über HTTP bereitgestellt.


Um die Verwendung von HTTPS für den gesamten Datenverkehr über eine Umleitung zu erzwingen, klicken Sie auf "http://" (unter dem Abschnitt "Site URL" ) und wählen Sie "https://" aus dem Dropdown-Menü.


Beispiel: Sie aktivieren die HTTPS-Weiterleitung für eine Metabase-Instanz mit der Site-URL "example.com". Wenn jemand eine Adresse wie "example.com/data" in die Adressleiste seines Browsers eingibt, wird er automatisch zu einer sicheren Verbindung unter "https://example.com/data" umgeleitet.


> Hinweis: Wenn Sie auf Ihrem Server kein HTTPS eingerichtet haben, können Sie in der Metabase keine HTTPS-Weiterleitung aktivieren. Stattdessen erhalten Sie eine Warnung, die besagt: "Es sieht so aus, als sei HTTPS nicht richtig konfiguriert."


## E-Mail-Adresse für Hilfeanfragen


Diese E-Mail-Adresse wird in verschiedenen Meldungen in der Metabase angezeigt, wenn Benutzer Hilfe von einem Administrator benötigen, z. B. beim Zurücksetzen eines Passworts.


## Anonyme Verfolgung


Mit dieser Option legen Sie fest, ob Sie zulassen, dass [anonyme Daten über Ihre Nutzung von Metabase](../installation-and-operation/information-collection.md) an uns zurückgeschickt werden, um das Produkt zu verbessern. [Die Daten Ihrer Datenbank werden niemals nachverfolgt oder gesendet](https://www.metabase.com/security).


## Freundliche Tabellen- und Feldnamen


Standardmäßig versucht die Metabase, Feld- und Tabellennamen besser lesbar zu machen, indem sie Dinge wie `somehorriblename` in `Some Horrible Name` ändert. Dies funktioniert nicht gut bei anderen Sprachen als Englisch oder bei Feldern, die viele Abkürzungen oder Codes enthalten. Wenn Sie diese Einstellung deaktivieren möchten, können Sie dies über das Admin-Panel unter **Einstellungen** > **Admin-Einstellungen** > **Allgemein** tun.


Wenn Sie diese Einstellung wieder aktivieren, führt Metabase einen [scan](../databases/sync-scan.md#how-database-scans-work) gegen Ihre Datenbank durch, um Ihre Tabellen- und Spaltennamen erneut zu überprüfen.


Um Feld- oder Tabellennamen in Metabase manuell zu beschriften, sehen Sie sich den Abschnitt [Table Metadata](../data-modeling/metadata-editing.md) in Ihren Admin-Einstellungen an. Die Metadaten in den Tabellen-Metadaten können in [models](../data-modeling/models.md) weiter kuratiert werden.


## Röntgenstrahlen einschalten


[X-rays(../exploration-and-organization/x-rays.md) sind eine gute Möglichkeit, um schnell eine Übersicht über Ihre Daten zu erhalten. Wenn diese Röntgenabfragen zu langsam oder zu teuer werden, können Sie sie hier abschalten.


## Erlaubte Domänen für iframes in Dashboards
