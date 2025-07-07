---
Titel: Eingebettete Analytik SDK - Konfiguration
---


# Eingebettetes Analyse-SDK - Konfiguration


{% include plans-blockquote.html feature="Embedded analytics SDK" sdk=true %}


## Übergabe eines Konfigurationsobjekts an `MetabaseProvider`


Um das SDK in Ihrer Anwendung zu verwenden, müssen Sie die Komponente "MetabaseProvider" importieren und ihr ein "authConfig"-Objekt übergeben.


### `MetabaseProvider`


Eine Komponente, die das SDK konfiguriert und den Kontext und das Thema des Metabase SDK bereitstellt.


#### API-Referenz


- [Komponente](./api/MetabaseProvider.html)
- [Requisiten](./api/MetabaseProviderProps.html)


#### Beispiel


````Typescript
{% include_file "{{ dirname }}/snippets/config/config-base.tsx" %}
```


#### Requisiten


{% include_file "{{ dirname }}/api/snippets/MetabaseProviderProps.md" snippet="properties" %}


## Globale Ereignishandler


Sie können auf Ereignisse hören, indem Sie die Eigenschaft ` eventHandlers` für ` MetabaseProvider` definieren.


### `SdkEventHandlersConfig`


Akzeptiert ein Objekt, bei dem jeder Schlüssel ein Ereignistyp und der entsprechende Wert die Ereignisbehandlungsfunktion ist.


#### API-Referenz


- [Typ](./api/SdkEventHandlersConfig.html)


#### Beispiel
````Typescript
{% include_file "{{ dirname }}/snippets/config/config-with-event-handlers.tsx" snippet="example" %}
```


#### Requisiten


{% include_file "{{ dirname }}/api/snippets/SdkEventHandlersConfig.md" snippet="properties" %}


## Metabase-Komponenten neu laden


Wenn Sie eine Metabase-Komponente neu laden müssen, z. B. weil Ihre Benutzer Ihre Anwendungsdaten ändern und diese Daten zum Rendern einer Frage in der Metabase verwendet werden. Wenn Sie diese Frage einbetten und die Metabase zwingen wollen, die Frage neu zu laden, um die neuesten Daten anzuzeigen, können Sie dies tun, indem Sie die Eigenschaft"key" verwenden, um das Neuladen einer Komponente zu erzwingen.


````Typescript
{% include_file "{{ dirname }}/snippets/config/reload-metabase-provider.tsx" snippet="example" %}
```

