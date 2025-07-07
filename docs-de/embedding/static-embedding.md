---
Titel: Statische Einbettung
redirect_from:
- /docs/latest/embedding/signed-embedding
---


# Statische Einbettung


Auch bekannt als: eigenständige Einbettung, oder signierte Einbettung.


{% include shared/in-page-promo-embedding-workshop.html %}


Im Allgemeinen funktioniert das Einbetten, indem eine Metabase-URL in einem Iframe auf Ihrer Website angezeigt wird. Eine **statische Einbettung** (oder signierte Einbettung) ist ein iframe, der eine mit einem signierten JSON-Web-Token (JWT) gesicherte Metabase-URL lädt. Die Metabase lädt die URL nur, wenn die Anfrage ein JWT enthält, das mit dem zwischen Ihrer App und Ihrer Metabase geteilten Geheimnis signiert ist. Das JWT enthält auch einen Verweis auf die zu ladende Ressource, z. B. die Dashboard-ID, und alle Werte für gesperrte Parameter.


Sie können statische Einbettungen nicht mit [data sandboxes](../permissions/data-sandboxes.md), [drill-through](https://www.metabase.com/learn/metabase-basics/querying-and-dashboards/questions/drill-through) verwenden, und benutzerspezifische Daten werden nicht in [usage analytics](../usage-and-performance-tools/usage-analytics.md) erfasst, da signierte JWTs keine Benutzersitzungen (serverseitige Sitzungen) erzeugen. Diese Funktionen finden Sie unter [interactive embedding](./interactive-embedding.md).


Sie können jedoch Daten in statischen Einbettungen für bestimmte Personen oder Gruppen einschränken, indem Sie [locking parameters](./static-embedding-parameters.md#restricting-data-in-a-static-embed-with-locked-parameters).


## So funktioniert statische Einbettung


Wenn Sie interaktive Metabase-Filter in Ihrem Iframe einrichten möchten, muss Ihr Webserver jedes Mal, wenn ein Website-Besucher das Filter-Widget aktualisiert, Anfragen an Metabase stellen, um aktualisierte Daten zu erhalten.


Um aktualisierte Daten von der Metabase abzufragen, generiert Ihr Webserver eine neue Metabase [embedding URL](#adding-the-embedding-url-to-your-website). Wenn ein Website-Besucher beispielsweise den Wert "true" in ein [embedded filter widget](./static-embedding-parameters.md#adding-a-filter-widget-to-a-static-embed) eingibt, generiert Ihr Webserver eine neue Embedding-URL mit einem zusätzlichen Parameter:


```
your_metabase_embedding_url?filter=true
```


Um zu verhindern, dass Personen die Einbettungs-URL bearbeiten, um Zugang zu anderen Teilen Ihrer Metabase zu erhalten (z. B. durch Änderung des Parameters in "filter=company_secrets"), fügt Ihr Webserver der neuen Einbettungs-URL ein signiertes JWT hinzu:


```
ihre_metabase_embedding_url/ihre_signierte_jwt?filter=true
```


Der signierte JWT wird mit Ihrem [Metabase secret key](#regenerating-the-static-embedding-secret-key) generiert. Der geheime Schlüssel teilt der Metabase mit, dass die Anfrage nach gefilterten Daten vertrauenswürdig ist, sodass die Ergebnisse unter der neuen Einbettungs-URL sicher angezeigt werden können. Beachten Sie, dass dieser geheime Schlüssel für alle statischen Einbettungen gemeinsam genutzt wird, sodass jeder, der Zugriff auf diesen Schlüssel hat, auch Zugriff auf alle eingebetteten Artefakte hat.


Wenn Sie Diagramme mit zusätzlichen interaktiven Funktionen wie [Drill-Down](https://www.metabase.com/learn/metabase-basics/querying-and-dashboards/questions/drill-through) und [Self-Service Querying](../questions/query-builder/editor.md) einbetten möchten, lesen Sie [Interactive embedding](./interactive-embedding.md).


## Einschalten der Einbettungsfunktion in der Metabase


1. Gehen Sie zu **Einstellungen** > **Verwaltungseinstellungen** > **Einbettung**.
2. Aktivieren Sie das Kontrollkästchen **Einbettung aktivieren**.


## Eine Frage oder ein Dashboard einbetten


(./images/sharing-embed.png)[Freigabe-Schaltfläche zum Einbetten des Dashboards]


Um eine statische Einbettung zu erstellen:


1. Rufen Sie die Frage oder das Dashboard auf, das Sie in Ihre Website einbetten möchten.
