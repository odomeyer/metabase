---
Titel: Metabase-Dokumentation
redirect_from:
  - /docs/latest/enterprise-guide
  - /docs/latest/users-guide
  - /docs/latest/administration-guide
  - /docs/latest/operations-guide
  - /docs/latest/faq
---

# Metabase Dokumentation

![Metabase dashboard](./images/metabase-product-screenshot.png)

Metabase ist eine Open-Source-Plattform für Business Intelligence. Sie können Metabase verwenden, um Fragen zu Ihren Daten zu stellen, oder Metabase in Ihre App einbetten, damit Ihre Kunden ihre Daten selbständig erkunden können.

## Erste Schritte

### Metabase Cloud

Der einfachste Weg, mit Metabase zu arbeiten, ist die Anmeldung für eine kostenlose Testversion von [Metabase Cloud] (https://store.metabase.com/checkout). Sie erhalten Support, Backups, Upgrades, einen SMTP-Server, ein SSL-Zertifikat, SoC2 Typ 2 Sicherheitsaudits und mehr (und Ihr Geld fließt in die Verbesserung von Metabase). Sehen Sie sich unseren kurzen Überblick über [Cloud vs. Self-Hosting](./cloud/cloud-vs-self-hosting.md) an. Bei Bedarf können Sie jederzeit zu [self-hosting](./installation-and-operation/installing-metabase.md) Metabase wechseln (oder umgekehrt).

### [Installation der Metabase](./installation-und-betrieb/installing-metabase.md)

Ausführen als JAR, mit Docker oder auf der [Metabase Cloud](https://store.metabase.com/checkout).

### [Einrichten der Metabase](./configuring-metabase/setting-up-metabase.md)

Nach der Installation richten Sie Ihre Metabase ein und stellen eine Verbindung zu Ihren Daten her.

### [Erste Schritte](https://www.metabase.com/learn/metabase-basics/getting-started/index)

Nachdem Sie Ihre Daten verbunden haben, können Sie Fragen stellen, Dashboards erstellen und Ihre Arbeit teilen.

### [Ein Rundgang durch Metabase](https://www.metabase.com/learn/metabase-basics/overview/tour-of-metabase)

Metabase ist ein umfangreiches Produkt mit vielen Tools zur Vereinfachung von Business Intelligence, von einbettbaren Diagrammen und interaktiven Dashboards über GUI- und SQL-Editoren bis hin zu Auditing und Data Sandboxing und vielem mehr.

## Themen der Dokumentation

Die Referenzdokumentation der Metabase.

### Installation

- [Installationsübersicht](./installation-und-betrieb/start.md)
- [Installation der Metabase](./installation-and-operation/installing-metabase.md)
- [Aktualisierung der Metabase](./installation-and-operation/upgrading-metabase.md)
- [Konfigurieren der Metabase-Anwendungsdatenbank](./installation-and-operation/configuring-application-database.md)
- [Sichern der Metabase](./installation-and-operation/backing-up-metabase-application-data.md)
- [Migration zu einer Produktionsanwendungsdatenbank](./installation-and-operation/migrating-from-h2.md)
- [Überwachung der Metabasis](./installation-and-operation/monitoring-metabase.md)
- [Entwicklungsinstanzen](./installation-and-operation/development-instance.md)
- [Serialisierung](./installation-und-betrieb/serialization.md)
- [Befehle](./installation-and-operation/commands.md)
-Unterstützte Browser](./installation-and-operation/supported-browsers.md)
- [Datenschutz](./installation-and-operation/privacy.md)
- [Über die von uns gesammelten anonymen Nutzungsdaten](./installation-and-operation/information-collection.md)

### Datenbanken

- [Überblick über Datenbanken](./databases/start.md)
- [Hinzufügen und Verwalten von Datenbanken](./databases/connecting.md)
- [Datenbankbenutzer, Rollen und Rechte](./databases/users-roles-privileges.md)
- [Synchronisieren und Scannen von Datenbanken](./databases/sync-scan.md)
- [Verschlüsselung der Datenbankverbindung](./databases/encrypting-details-at-rest.md)
- [SSH-Tunneling](./databases/ssh-tunnel.md)
- [SSL-Zertifikat](./databases/ssl-certificates.md)
- [Daten hochladen](./databases/uploads.md)

### Fragen

- [Fragenübersicht](./questions/start.md)
- [Warnungen](./questions/alerts.md)
- [Daten exportieren](./questions/exporting-results.md)
  
#### Abfrage-Editor

- [Der Abfrage-Editor](./questions/query-builder/editor.md)
- [Filterung](./questions/query-builder/filters.md)
- [Zusammenfassen und gruppieren](./questions/query-builder/summarizing-and-grouping.md)
- [Benutzerdefinierte Ausdrücke](./questions/query-builder/expressions.md)
- [Liste der Ausdrücke](./questions/query-builder/expressions-list.md)
- [Verknüpfung von Daten](./questions/query-builder/join.md)

#### SQL und native Abfragen

- [Der SQL-Editor](./questions/native-editor/writing-sql.md)
- [SQL-Parameter](./questions/native-editor/sql-parameters.md)
- [Referenzierung von Modellen und gespeicherten Fragen](./questions/native-editor/referencing-saved-questions-in-queries.md)
- [Schnipsel](./questions/native-editor/snippets.md)
- [Snippet-Ordner-Zulassungen](./permissions/snippets.md)

#### Visualisierung von Daten

- [Visualisierung von Daten](./questions/visualizations/visualizing-results.md)
- [Kombinationsdiagramme](./questions/visualizations/combo-chart.md)
- [Detail](./questions/visualizations/detail.md)
- [Trichterdiagramme](./questions/visualizations/funnel.md)
- [Pegeldiagramme](./questions/visualizations/gauge.md)
- [Linien-, Balken- und Flächendiagramme](./questions/visualizations/line-bar-and-area-charts.md)
- [Karten](./questions/visualizations/map.md)
- [Zahlen](./questions/visualizations/numbers.md)
- [Torten- oder Donut-Diagramme](./questions/visualizations/pie-or-donut-chart.md)
- [Pivot-Tabelle](./questions/visualizations/pivot-table.md)
- [Fortschrittsbalken](./questions/visualizations/progress-bar.md)
- [Sankey-Diagramm](./questions/visualizations/sankey.md)
- [Streudiagramm oder Blasendiagramm](./questions/visualizations/scatterplot-or-bubble-chart.md)
- [Tabelle](./questions/visualizations/table.md)
- [Tooltips](./questions/visualizations/tooltips.md)
- [Trend](./questions/visualizations/trend.md)
- [Wasserfalldiagramm](./questions/visualizations/waterfall-chart.md)

### Dashboards

- [Übersicht über die Dashboards](./dashboards/start.md)
- [Einführung in Dashboards](./dashboards/introduction.md)
- [Dashboard-Filter](./dashboards/filters.md)
- [Interaktive Dashboards](./dashboards/interactive.md)
- [Diagramme mit mehreren Reihen](./dashboards/multiple-series.md)
- [Dashboard-Abonnements](./dashboards/subscriptions.md)
- [Aktionen auf Dashboards](./dashboards/actions.md)
  
### Datenmodellierung

- [Überblick über die Datenmodellierung](./data-modeling/start.md)
- [Modelle](./data-modeling/models.md)
- [Modell-Persistenz](./data-modeling/model-persistence.md)
- [Metriken](./data-modeling/metrics.md)
- [Verwaltungseinstellungen für Tabellenmetadaten](./data-modeling/metadata-editing.md)
- [Feldtypen](./data-modeling/field-types.md)
- [Formatierungsvorgaben](./data-modeling/formatting.md)
- [Arbeiten mit JSON](./data-modeling/json-unfolding.md)
- [Segmente](./data-modeling/segments.md)

### Aktionen

- [Übersicht über Aktionen](./actions/start.md)
- [Einführung in Aktionen](./actions/introduction.md)
- [Grundlegende Aktionen](./actions/basic.md)
- [Benutzerdefinierte Aktionen](./actions/custom.md)

### Erkundung und Organisation

- [Organisationsübersicht](./exploration-and-organization/start.md)
- [Grundlegende Erkundung](./exploration-and-organisation/exploration.md)
- [Sammlungen](./exploration-and-organization/collections.md)
- [Tastaturkürzel](./exploration-and-organization/keyboard-shortcuts.md)
- [Geschichte](./exploration-and-organization/history.md)
- [Papierkorb](./exploration-and-organization/delete-and-restore.md)
- [Datenreferenz](./exploration-and-organization/data-model-reference.md)
- [Ereignisse und Zeitleisten](./exploration-and-organization/events-and-timelines.md)
- [Röntgenbilder](./exploration-and-organization/x-rays.md)
- [Inhaltsüberprüfung](./exploration-and-organization/content-verification.md)

### Personen

- [Personenübersicht](./people-and-groups/start.md)
- [Kontoeinstellungen](./people-and-groups/account-settings.md)
- [Personen und Gruppen verwalten](./people-and-groups/managing.md)
- [Passwortkomplexität](./people-and-groups/changing-password-complexity.md)
- [Ablauf der Sitzung](./people-and-groups/changing-session-expiration.md)
- [Google-Anmeldung](./people-and-groups/google-sign-in.md)
- [LDAP](./people-and-groups/ldap.md)
- [API-Schlüssel](./people-and-groups/api-keys.md)

#### Paid SSO-Optionen

- [JWT-basierte Authentifizierung](./people-and-groups/authenticating-with-jwt.md)
- [SAML-basierte Authentifizierung](./people-and-groups/authenticating-with-saml.md)
- [SAML mit Auth0](./people-and-groups/saml-auth0.md)
- [SAML mit Microsoft Entra ID](./leute-und-gruppen/saml-azure.md)
- [SAML mit Google](./people-and-groups/saml-google.md)
- [SAML mit Keycloak](./people-and-groups/saml-keycloak.md)
- [SAML mit Okta](./people-and-groups/saml-okta.md)
- [Benutzerbereitstellung mit SCIM](./people-and-groups/user-provisioning.md)

### Erlaubnisse

- [Übersicht über Berechtigungen](./permissions/start.md)
- [Einführung in die Berechtigungen](./permissions/introduction.md)
- [Datenberechtigungen](./permissions/data.md)
- [Sammlungsberechtigungen](./permissions/collections.md)
- [Anwendungsberechtigungen](./permissions/application.md)
- [Daten-Sandkästen](./permissions/data-sandboxes.md)
- [Daten-Sandbox-Beispiele](./permissions/data-sandbox-examples.md)
- [Anschluss-Impersonation](./permissions/impersonation.md)
- [Datenbank-Routing](./permissions/database-routing.md)
- [Snippets-Ordner-Berechtigungen](./permissions/snippets.md)
- [Berechtigungen für Benachrichtigungen](./permissions/notifications.md)
- [Berechtigungen für die Einbettung konfigurieren](./permissions/embedding.md)

### Einbettung

- [Einbettungsübersicht](./embedding/start.md)
- [Einbettung Einführung](./embedding/introduction.md)
- [Interaktive Einbettung](./embedding/interactive-embedding.md)
- [Interaktive Einbettung - Schnellstart](./embedding/interactive-embedding-quick-start-guide.md)
- [Statische Einbettung](./embedding/static-embedding.md)
- [Parameter für statische Einbettungen](./embedding/static-embedding-parameters.md)

### Konfiguration

- [Konfigurationsübersicht](./configuring-metabase/start.md)
- [Metabase einrichten](./configuring-metabase/setting-up-metabase.md)
- [Allgemeine Einstellungen](./configuring-metabase/settings.md)
- [E-Mail](./konfigurierende-metabasis/email.md)
- [Slack](./konfigurierende-metabasis/slack.md)
- [Webhooks](./configuring-metabase/webhooks.md)
- [Umgebungsvariablen](./configuring-metabase/environment-variables.md)
- [Konfigurationsdatei](./configuring-metabase/config-file.md)
- [Metabase log configuration](./configuring-metabase/log-configuration.md)
- [Zeitzonen](./configuring-metabase/timezones.md)
- [Sprachen und Lokalisierung](./configuring-metabase/localization.md)
- [Erscheinungsbild](./configuring-metabase/appearance.md)
- [Zwischenspeicherung von Abfrageergebnissen](./configuring-metabase/caching.md)
- [Benutzerdefinierte Maps](./configuring-metabase/custom-maps.md)
- [Anpassen des Metabase Jetty-Webservers](./configuring-metabase/customizing-jetty-webserver.md)

### Werkzeuge

- [Überblick über die Werkzeuge](./usage-and-performance-tools/start.md)
- [Nutzungsanalyse](./usage-and-performance-tools/usage-analytics.md)
- [Verwaltungswerkzeuge](./usage-and-performance-tools/tools.md)

### Metabase Cloud

- [Dokumentation für Metabase Cloud und Store](./cloud/start.md)

### Metabase API

- [Metabase API Dokumentation](./api.html)
- [API-Anleitung](https://www.metabase.com/learn/metabase-basics/administration/administration-and-operation/metabase-api)

### Fehlersuche

- [Fehlersuchanleitung](./troubleshooting-guide/index.md)

### Handbuch für Entwickler

- [Entwicklerhandbuch](./developers-guide/start.md)

## Hilfe erhalten

### Fehlersuche

- [Anleitungen zur Fehlerbehebung](troubleshooting-guide/index.md)
- [Metabase forum](https://discourse.metabase.com/)
- [Konfigurieren der Protokollierung](./configuring-metabase/log-configuration.md)

### Tutorials und Leitfäden

[Learn Metabase] (https://www.metabase.com/learn) bietet eine Vielzahl von Artikeln über die Verwendung von Metabase, bewährte Datenpraktiken und mehr.

## Weitere Ressourcen

### [Diskussion](https://discourse.metabase.com)

Tauschen Sie sich aus und verbinden Sie sich mit anderen Metabasern.

### [Gemeinschaftsgeschichten](https://www.metabase.com/community)

Praktische Ratschläge aus unserer Gemeinschaft.

### [Metabase blog](https://www.metabase.com/blog)

Neuigkeiten, Aktualisierungen und Ideen.

### [Kunden](https://www.metabase.com/case-studies)

Echte Unternehmen, echte Daten, echte Geschichten.

### [Metabase Twitter](https://twitter.com/metabase)

Wir tweeten Sachen.

### [Quellcode-Repository auf GitHub](https://github.com/metabase/metabase)

Folgen Sie uns auf GitHub.

### [Liste der Veröffentlichungen](https://github.com/metabase/metabase/releases)

Eine Liste aller Metabase-Releases, sowohl der Enterprise Edition als auch der Open Source Edition.

### [Entwicklerhandbuch](./developers-guide/start.md)

Tragen Sie zum Metabase Open Source Projekt bei!

### [Daten- und Business Intelligence-Glossar](https://www.metabase.com/glossary)

Datenjargon erklärt.

### [Metabase Experts](https://www.metabase.com/partners/)

Wenn Sie weitere technische Ressourcen zum Einrichten Ihres Datenstapels mit Metabase benötigen, wenden Sie sich an einen [Metabase Expert](https://www.metabase.com/partners/).
<!-- Stoß 2 -->
