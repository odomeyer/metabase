---
Titel: Datenreferenz
redirect_from:
- /docs/latest/user-guide/12-data-model-reference
- /docs/aktuell/fragen/native-editor/datenmodell-referenz
---


# Datenreferenz


Sie können die Datenreferenz öffnen über:


- Die Metabase-Seitenleiste > **Durchsuchen** > **Datenbanken** > **Erfahren Sie mehr über unsere Daten**.
- Bewegen Sie den Mauszeiger über eine Tabelle im Datenbrowser und klicken Sie auf das angezeigte Buchsymbol.
- Das native/SQL > **Buch** Symbol.


## Datenreferenz durchsuchen


Die Datenreferenz ist eine Sammlung von Seiten, die nach Datenbank und dann nach Tabellen in dieser Datenbank geordnet sind (dieselbe Struktur, die Sie für die [Datenauswahl](../questions/query-builder/editor.md#picking-data) verwenden). Der Abschnitt Datenreferenz ist ein guter Ort, um Informationen über die [Datentypen](https://www.metabase.com/learn/grow-your-data-skills/data-fundamentals/data-types-overview) der Spalten in Ihren Daten zu finden.


## Datenreferenz im nativen Editor


Manchmal vergisst man beim Schreiben einer Abfrage die genauen Namen der verschiedenen Tabellen oder Spalten oder welche Tabelle was enthält. In diesem Fall ist die **Datenreferenz** sehr nützlich.


Um das Datenreferenz-Panel im nativen/SQL-Editor aufzurufen, klicken Sie auf das Symbol für das offene Buch.


In diesem Bereich werden alle Datenbanken, auf die Sie Zugriff haben, sowie die [Modelle](../data-modeling/models.md) und Tabellen und die darin enthaltenen Felder aufgelistet.


[Datenreferenz-Seitenleiste](./images/DataReference.png)


Klicken Sie auf das Modell oder die Tabelle, die Sie näher betrachten möchten, um eine Beschreibung und eine Liste aller Spalten anzuzeigen. Jede Tabelle oder Spalte enthält nur dann eine Beschreibung, wenn Ihr Administrator etwas in den Abschnitt Tabellenmetadaten im Admin Panel geschrieben hat.


Wenn Sie auf eine Spalte klicken, die Sie interessiert, sehen Sie eine Beschreibung ihres Inhalts sowie eine Liste von Beispielwerten für Spalten, die keine große Anzahl unterschiedlicher Werte haben.


## Verbindungen


In der Datenreferenz-Seitenleiste finden Sie unter**Verbindungen** eine Liste der Tabellenbeziehungen (definiert durch [Fremdschlüssel](https://www.metabase.com/glossary/foreign-key)).


Wenn eine Fremdschlüsselbeziehung in Ihrer Datenbank existiert, aber nicht in Ihrer Metabase angezeigt wird, muss Ihr Metabase-Administrator Ihre [Metabase Table Metadata](../data-modeling/metadata-editing.md) aktualisieren.

