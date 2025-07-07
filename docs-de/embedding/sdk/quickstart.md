---
Titel: SDK für eingebettete Analytik - Schnellstart
Beschreibung: "Dieser Leitfaden zeigt Ihnen, wie Sie das Embedded Analytics SDK in Ihrer Anwendung mit Ihrer Metabase einrichten."
---


# Embedded analytics SDK - Schnellstart


Diese Anleitung zeigt Ihnen, wie Sie das Embedded Analytics SDK in Ihrer Anwendung mit Ihrer Metabase unter Verwendung von API-Schlüsseln einrichten.


Diese Einrichtung:


- Dient nur zur Evaluierung (damit Sie sehen können, wie das SDK funktioniert).
- Funktioniert bei der Entwicklung Ihrer Anwendung nur auf localhost (obwohl Ihre Metabase nicht lokal ausgeführt werden muss).
- Funktioniert sowohl mit der Enterprise- als auch mit der Open Source-Edition von Metabase, sowohl selbst gehostet als auch in der Metabase Cloud.


Wenn Sie das SDK in der Produktion verwenden möchten, müssen Sie jedoch auch die [JWT SSO-Authentifizierung einrichten](./authentication.md), wofür ein [Pro](https://store.metabase.com/checkout/embedding) oder [Enterprise-Plan](https://www.metabase.com/pricing/) erforderlich ist. Um JWT SSO zu aktivieren, wenn Sie Metabase selbst hosten, müssen Sie das Enterprise Edition Docker-Image oder JAR ausführen und [Ihre Lizenz aktivieren](../../installation-and-operation/activating-the-enterprise-edition.md).


## Voraussetzungen


- [Metabase](https://github.com/metabase/metabase/releases) Version 52 oder höher (OSS oder EE). Siehe [Installieren von Metabase](../../installation-and-operation/installing-metabase.md).
- Eine Anwendung, die React 17 oder 18 verwendet. (Sie können auch die [React-Beispielanwendung](https://github.com/metabase/metabase-nodejs-react-sdk-embedding-sample/tree/{{page.version | remove: "v0."}}-stable))


Wenn Sie _noch keine_ Metabase haben, sehen Sie sich die [Quickstart CLI](./quickstart-cli.md) an.


Wenn Sie_keinen_ eigenen Anwendungscode verwenden wollen, schauen Sie sich unseren [quickstart with a sample app](./quickstart-with-sample-app.md) an.


## Überblick


Um ein Dashboard mit dem SDK in Ihre Anwendung einzubinden, müssen Sie Folgendes tun


1. [Aktivieren Sie das SDK in der Metabase](#1-enable-the-sdk-in-metabase)
2. [Einen API-Schlüssel in der Metabase erstellen](#2-create-an-api-key-in-metabase)
3. [Installieren Sie das SDK in Ihrer Anwendung](#3-install-the-sdk-in-your-app)
4. [SDK-Komponenten in Ihre Anwendung einbetten](#4-embed-sdk-components-in-your-app)
5. [Betrachten Sie Ihr eingebettetes Metabase Dashboard](#5-view-your-embedded-metabase-dashboard)


## 1. Aktivieren Sie das SDK in Metabase


Klicken Sie in Metabase auf das Zahnradsymbol oben rechts und navigieren Sie zu **Admin Settings > Settings > Embedding** und aktivieren Sie das Embedded analytics SDK.


## 2. Erstellen Sie einen API-Schlüssel in der Metabase


Navigieren Sie auf der Registerkarte Einstellungen des Administrators zum Abschnitt**Authentifizierung** in der Seitenleiste und klicken Sie auf die Registerkarte**API-Schlüssel**. [Erstellen Sie einen neuen API-Schlüssel](../../people-and-groups/api-keys.md).


- Schlüsselname: "Embedded analytics SDK" (damit der Schlüssel leicht zu identifizieren ist).
- Gruppe: Wählen Sie "Admin" (da dies nur für lokale Tests gedacht ist).


## 3. Installieren Sie das SDK in Ihrer Anwendung


Bei der Installation des NPM-Pakets ist es wichtig, das npm dist-Tag zu verwenden, das der Hauptversion Ihrer Metabase entspricht. Wenn Ihre Metabase beispielsweise Version 1.53.x ist, müssen Sie ` 53-stable` verwenden. Siehe [SDK-Versionierung](./version.md).
