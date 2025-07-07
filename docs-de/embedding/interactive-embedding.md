---
Titel: Interaktive Einbettung
redirect_from:
- /docs/latest/enterprise-guide/full-app-embedding
- /docs/latest/einbetten/full-app-einbetten
---


# Interaktive Einbettung


{% include plans-blockquote.html feature="Interaktive Einbettung" convert_pro_link_to_embbedding=true %}


{% include shared/in-page-promo-embedding-workshop.html %}


**Interaktive Einbettung** ist das, was Sie wollen, wenn Sie [Multi-Tenant, Self-Service-Analytics](https://www.metabase.com/learn/metabase-basics/embedding/multi-tenant-self-service-analytics) anbieten wollen.


Die interaktive Einbettung ist die einzige Art der Einbettung, die mit Ihren [Berechtigungen](../permissions/introduction.md) und [SSO](../people-and-groups/start.md#authentication) zusammenarbeitet, um den Benutzern die richtige Zugriffsebene für [Abfragen](https://www.metabase.com/glossary/query_builder) und [Drilldown](https://www.metabase.com/learn/metabase-basics/querying-and-dashboards/questions/drill-through) in Ihren Daten zu geben.


## Interaktive Einbettungsdemo


Um ein Gefühl dafür zu bekommen, was Sie mit der interaktiven Einbettung tun können, sehen Sie sich unsere [interactive embedding demo](https://www.metabase.com/embedding-demo) an.


Um den Query Builder in Aktion zu sehen, klicken Sie auf **Berichte** > **+ Neu** > **Frage**.


## Schnellstart


Sehen Sie sich den [Interactive embedding quick start](./interactive-embedding-quick-start-guide.md) an.


## Voraussetzungen für die interaktive Einbettung


1. Vergewissern Sie sich, dass Sie ein [Lizenz-Token](../installation-and-operation/activating-the-enterprise-edition.md) für einen [Pro- oder Enterprise-Plan](https://store.metabase.com/checkout/login-details) besitzen.
2. Organisieren Sie Personen in Metabase [groups](../people-and-groups/start.md).
3. Richten Sie [Rechte](../permissions/introduction.md) für jede Gruppe ein.
4. Richten Sie [SSO](../people-and-groups/start.md#authentication) ein, um automatisch Berechtigungen anzuwenden und Personen bei der Anmeldung die richtigen Daten anzuzeigen. Im Allgemeinen **empfehlen wir die Verwendung von [SSO mit JWT](../people-and-groups/authenticating-with-jwt.md)**.


Wenn Sie es mit einer [Multi-Tenant](https://www.metabase.com/learn/metabase-basics/embedding/multi-tenant-self-service-analytics) Situation zu tun haben, lesen Sie unsere Empfehlungen für [Konfigurieren von Berechtigungen für verschiedene Kundenschemata](../permissions/embedding.md).


Wenn Ihre Anwendung lokal ausgeführt wird und Sie die Pro-Cloud-Version verwenden oder Metabase und Ihre Anwendung in verschiedenen Domänen hosten, müssen Sie die Session-Cookie-Samesite-Option Ihrer Metabase-Umgebung auf "none" setzen.


## Aktivieren der interaktiven Einbettung in Metabase


1. Gehen Sie zu **Einstellungen** > **Verwaltungseinstellungen** > **Einbettung**.
2. Klicken Sie auf **Aktivieren**.
3. Klicken Sie auf **Interaktive Einbettung**.
4. Fügen Sie unter **Authorized origins** die URL der Website oder Webanwendung hinzu, in die Sie Metabase einbetten möchten (z. B. "https://*.example.com").


## Einrichten der Einbettung auf Ihrer Website


1. Erstellen Sie einen iframe mit einem "src" -Attribut, das auf:
- die [URL](#pointing-an-iframe-to-a-metabase-url) der einzubettenden Metabase-Seite, oder
- ein [Authentifizierungsendpunkt](#pointing-an-iframe-to-an-authentication-endpoint), der auf Ihre Metabase-URL umleitet.
2. Optional: Je nach der Art und Weise, wie Ihre Webanwendung eingerichtet ist, setzen Sie [Umgebungsvariablen](../configuring-metabase/environment-variables.md) auf:
- [Fügen Sie Ihr Lizenz-Token hinzu](../configuring-metabase/environment-variables.md#mb_premium_embedding_token).
- [Metabase in eine andere Domäne einbetten](#embedding-metabase-in-a-different-domain).
