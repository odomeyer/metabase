---
Titel: Embedded analytics SDK - Verwendung des SDK mit Next.js
---


# Embedded analytics SDK - Verwendung des SDK mit Next.js


{% include plans-blockquote.html feature="Embedded analytics SDK" sdk=true %}


{% include youtube.html id='UfL8okz36d0' %}


Einige Hinweise zur Verwendung des Embedded analytics SDK mit [Next.js](https://nextjs.org/). Das SDK wurde für Next.js 14 getestet, obwohl es auch mit anderen Versionen funktionieren kann.


## SDK-Komponenten mit Server Side Rendering (SSR) oder React Server Components


Zurzeit werden die SDK-Komponenten nur für das clientseitige Rendering unterstützt. Um die SDK-Komponenten mit serverseitigem Rendering oder mit React Server-Komponenten zu verwenden, können Sie entweder eine Kompatibilitätsschicht verwenden oder die Komponenten manuell umhüllen.


### Kompatibilitätsschicht für Server-seitiges Rendering (SSR) (EXPERIMENTAL)


Um SDK-Komponenten mit Next.js zu verwenden, bietet das SDK eine experimentelle Kompatibilitätsschicht, die [alle Komponenten mit dynamischen Importen umhüllt und SSR deaktiviert](https://nextjs.org/docs/pages/building-your-application/optimizing/lazy-loading#with-no-ssr). Um mit dem App-Router zu arbeiten, verwendet diese Kompatibilitätsschicht `use client`.


Um die Kompatibilitätsschicht zu verwenden, ändern Sie Ihre Importe von `@metabase/embedding-sdk-react` zu `@metabase/embedding-sdk-react/nextjs`.


Siehe eine [Beispiel-Next.js-Anwendung, die diese Kompatibilitätsschicht verwendet](https://github.com/metabase/metabase-nextjs-sdk-embedding-sample).


## Manuelles Wrapping der Komponenten


Wenn Sie das Laden der Komponenten anpassen möchten, können Sie Ihren eigenen Wrapper erstellen.


Erstellen Sie in Ihrer Anwendung ein "Metabase"-Verzeichnis und fügen Sie eine "EmbeddingSdkProvider.tsx" -Datei zu diesem Verzeichnis hinzu. Diese Datei wird den Provider mit der entsprechenden Konfiguration enthalten.


```tsx
{% include_file "{{ dirname }}/snippets/next-js/manual-wrapping-embedded-sdk-provider.tsx" snippet="example" %}
```


Als Nächstes fügen Sie eine Datei "index.tsx" in das Verzeichnis "metabase" ein. Diese Datei enthält die "use client" -Direktive und exportiert eine "lazy-loaded"-Version des "EmbeddingSdkProvider" mit deaktiviertem SSR.


```tsx
{% include_file "{{ dirname }}/snippets/next-js/manual-wrapping-entrypoint.tsx" snippet="example" %}
```


Sie können nun Komponenten wie folgt importieren:


```tsx
{% include_file "{{ dirname }}/snippets/next-js/manual-wrapping-usage.tsx" %}
```


## Handhabung der Authentifizierung


App Router und Pages Router haben unterschiedliche Möglichkeiten, API-Routen zu definieren. Wenn Sie Benutzer von Ihrem Server mit JWT authentifizieren möchten, können Sie die unten stehenden Anweisungen befolgen. Wenn Sie jedoch mit API-Schlüsseln für die lokale Entwicklung authentifizieren möchten, lesen Sie bitte [Lokale Authentifizierung mit API-Schlüsseln](./authentication.md#authenticating-locally-with-api-keys).


### App Router verwenden


Sie können einen Route-Handler erstellen, der Personen bei der Metabase anmeldet.


Erstellen Sie eine neue "route.ts" -Datei in Ihrem "app/*"-Verzeichnis, zum Beispiel "app/sso/metabase/route.ts", die einem Endpunkt unter "/sso/metabase" entspricht. Dieser Routehandler sollte ein JWT für den authentifizierten Benutzer generieren und das Token in einem JSON-Objekt mit der Form `{ jwt: string }` zurückgeben.
