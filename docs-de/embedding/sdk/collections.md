---
Titel: Embedded analytics SDK - Sammlungen
---


# Embedded analytics SDK - Sammlungen


{% include plans-blockquote.html feature="Embedded analytics SDK" sdk=true %}


## Einbetten eines Sammlungsbrowsers


Sie können den Sammlungsbrowser der Metabase einbetten, so dass Benutzer von Ihrer Anwendung aus Elemente in Ihrer Metabase erkunden können.


### `CollectionBrowser`


#### API-Referenz
- [Komponente](./api/SammlungsBrowser.html)
- [Requisiten](./api/SammlungsBrowserProps.html)


#### Beispiel


```tsx
{% include_file "{{ dirname }}/snippets/collections/collection-browser.tsx" %}
```


#### Requisiten


{% include_file "{{ dirname }}/api/snippets/CollectionBrowserProps.md" snippet="properties" %}


## Verstecken Sie die Sammlungsauswahl und geben Sie die Sammlung an, in der Sie die Daten speichern möchten.


Bei statischen Fragen legen Sie eine bestimmte Sammlung als die Sammlung fest, in der die Benutzer Elemente speichern können, so dass sie sich nicht um die Auswahl einer Sammlung kümmern müssen. Um eine Sammlung fest zu kodieren:


1. Setze `isSaveEnabled` auf true.
2. Legen Sie "targetCollection" auf die Sammlungs-ID fest, in der die Benutzer Elemente speichern sollen.


Weitere Optionen finden Sie unter [Question props](./questions.md).

