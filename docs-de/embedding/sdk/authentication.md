---
Titel: SDK für eingebettete Analytik - Authentifizierung
---


# Embedded analytics SDK - Authentifizierung


{% include plans-blockquote.html feature="Embedded analytics SDK" sdk=true %}


Um das SDK in der Produktion zu verwenden, müssen Sie die Authentifizierung mit SSO einrichten.


Wenn Sie lokal entwickeln, können Sie auch die Authentifizierung mit [API-Schlüsseln](#authenticating-locally-with-api-keys) einrichten.


## Einrichten von JWT SSO


Um JWT SSO einzurichten, benötigen Sie [eine Metabase Pro- oder Enterprise-Lizenz](https://www.metabase.com/pricing/) (Wenn Sie keine Lizenz haben, lesen Sie [diesen Schnellstart](./quickstart.md))


Hier ist ein Überblick über die wichtigsten Punkte:


1. [Aktivieren Sie JWT SSO in Ihrer Metabase](#1-enable-jwt-sso-in-your-metabase)
2. [Fügen Sie einen neuen Endpunkt zu Ihrem Backend hinzu, um die Authentifizierung zu handhaben](#2-add-a-new-endpoint-to-your-backend-to-handle-authentication)
3. [Verkabelung des SDK in Ihrem Frontend mit Ihrem neuen Endpunkt](#3-wire-the-sdk-in-your-frontend-to-your-new-endpoint)


### 1. Aktivieren Sie JWT SSO in Ihrer Metabase


1. Konfigurieren Sie JWT, indem Sie zu **Admin-Einstellungen** > **Einstellungen** > **Authentifizierung** gehen und auf **Einrichtung** klicken.
2. Geben Sie den JWT-Identitätsanbieter-URI ein, z. B. "http://localhost:9090/sso/metabase". Dies ist ein neuer Endpunkt, den Sie in Ihrem Backend hinzufügen werden, um die Authentifizierung zu handhaben.
3. Erzeugen Sie einen Schlüssel und kopieren Sie ihn in Ihre Zwischenablage.


### 2. Fügen Sie einen neuen Endpunkt zu Ihrem Backend hinzu, um die Authentifizierung zu handhaben


Sie müssen eine Bibliothek zu Ihrem Backend hinzufügen, um Ihre JSON-Web-Token zu signieren.


Für Node.js empfehlen wir jsonwebtoken:


```
npm install jsonwebtoken --save
```


Als Nächstes richten Sie einen Endpunkt in Ihrem Backend ein (z. B. "/sso/metabase"), der Ihr gemeinsames Metabase-JWT-Geheimnis verwendet, um ein JWT für den authentifizierten Benutzer zu generieren. **Dieser Endpunkt muss ein JSON-Objekt mit einer "jwt" -Eigenschaftzurückgeben , die das signierte JWT enthält.** Beispiel: "{ "jwt": "your-signed-jwt" }`.


Dieser Beispielcode für Node.js richtet einen Endpunkt mit Express ein:


```js
{% include_file "{{ dirname }}/snippets/authentication/express-server.ts" %}
```


Beispiel mit Next.js App Router:


````typescript
{% include_file "{{ dirname }}/snippets/next-js/app-router-authentication-api-route.ts" %}
```


Beispiel mit Next.js Pages Router:


````typescript
{% include_file "{{ dirname }}/snippets/next-js/pages-router-authentication-api-route.ts" %}
```


#### Handhabung von interaktiven und SDK-Einbettungen mit demselben Endpunkt


Wenn Sie einen bestehenden Backend-Endpunkt für die interaktive Einbettung konfiguriert haben und denselben Endpunkt für die SDK-Einbettung verwenden möchten, können Sie zwischen den Anfragen unterscheiden, indem Sie nach dem Abfrageparameter "response=json" suchen, den das SDK zu seinen Anfragen hinzufügt.
