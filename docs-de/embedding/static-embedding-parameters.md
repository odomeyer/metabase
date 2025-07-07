---
Titel: Parameter für statische Einbettungen
Zusammenfassung: Verwendung von Parametern zur Anpassung von eingebetteten statischen Fragen und Dashboards.
redirect_from:
- /docs/latest/embedding/signed-embedding-parameters
---


# Parameter für statische Einbettungen


Auch bekannt als: Parameter für signierte Einbettungen, oder eigenständige Einbettungen.


Parameter sind Informationen, die zwischen Metabase und Ihrer Website über die [Einbettungs-URL](./static-embedding.md#adding-the-embedding-url-to-your-website) übergeben werden. Mit Hilfe von Parametern können Sie festlegen, wie die Metabase-Elemente innerhalb des Iframe auf Ihrer Website aussehen und sich verhalten sollen.


{% include shared/in-page-promo-embedding-workshop.html %}


## Arten von Parametern


Parameter können mit oder ohne Vorzeichen sein.


### Vorzeichenbehaftete Parameter


Signierte Parameter, wie Filternamen und -werte, müssen dem Servercode hinzugefügt werden.


- [Bearbeitbare Parameter](#adding-a-filter-widget-to-a-static-embed)
- [Gesperrte Parameter](#restricting-data-in-a-static-embed-with-locked-parameters)


### Unsignierte Parameter


Unsignierte Parameter, wie z. B. Einstellungen für das Erscheinungsbild, sollten direkt in das Attribut "src" des iframe eingefügt werden.


- [Standardwerte für bearbeitbare Parameter](#populating-an-embedded-filter-widget-with-a-default-value)
- [Sichtbarkeitseinstellungen für bearbeitbare Parameter](#hiding-filter-widgets-from-a-static-embed)
- [Erscheinungsbild-Einstellungen](#customizing-the-appearance-of-a-static-embed)


## Hinzufügen eines Filter-Widgets zu einer statischen Einbettung


Sie können **editierbare Parameter** verwenden, um [Filter-Widgets](https://www.metabase.com/glossary/filter-widget) zu eingebetteten Dashboards oder SQL-Fragen hinzuzufügen.


1. Gehen Sie zu Ihrer Dashboard- oder SQL-Frage. Stellen Sie sicher, dass Sie einen [Dashboard-Filter](../dashboards/filters.md) oder eine [SQL-Variable](../questions/native-editor/sql-parameters.md) eingerichtet haben.
2. Klicken Sie auf das **Freigabesymbol** > **Diesen Artikel in eine Anwendung einbetten**.
3. Unter **Parameter** finden Sie die Namen Ihrer Dashboard-Filter oder SQL-Variablen.
4. Wählen Sie **Bearbeitbar** für jeden Parameter, der ein Filter-Widget in Ihrer Einbettung erhalten soll.
5. Klicken Sie auf **Veröffentlichen**, um Ihre Änderungen zu speichern.
6. Fügen Sie den Code auf Ihrem Server hinzu oder aktualisieren Sie ihn, damit er [mit dem von der Metabase generierten Code übereinstimmt](./static-embedding.md#previewing-the-code-for-an-embed).


Editierbare Parameter sind dafür verantwortlich, dass Filterwerte aus dem eingebetteten Filter-Widget (das im Iframe angezeigt wird) an die Filter in Ihrem ursprünglichen Dashboard oder die SQL-Frage (in Ihrer Metabase) weitergegeben werden.


### Sie können die Parameter nicht deaktivieren, wenn die ursprüngliche Frage oder das Dashboard einen Wert erfordert.


Wenn der Filter auf einem Dashboard oder einer Frage auf [Always require a value](../dashboards/filters.md) eingestellt ist, können Sie den Parameter beim Einbetten nicht deaktivieren.


## Ein eingebettetes Filter-Widget mit einem Standardwert füllen


Wenn Sie einen Standardwert für Ihr [editierbares Filter-Widget](#adding-a-filter-widget-to-a-static-embed) festlegen möchten, können Sie diesen Standardwert an den entsprechenden Parameternamen im "src" -Attribut Ihres iframe übergeben:


```
ihre_einbettung_url?parameter_name=wert
```


Wenn Ihr eingebettetes Dashboard beispielsweise einen Filter hat, der mit einem editierbaren Parameter namens "Breakfast" verbunden ist, und Sie den Standardwert auf "Hash browns" setzen wollen:


```
your_embedding_url?breakfast=Hash_browns
```


Um Standardwerte für mehrere Filter festzulegen, trennen Sie diese mit Ampersands (&):
