---
Titel: "Daten und Feldtypen"
redirect_from:
- /docs/latest/users-guide/field-types
summary: "Metabase verwendet sowohl Daten- als auch semantische Typen, um zu verstehen, wie man seine Daten formatiert und visualisiert."
---


# Daten- und Feldtypen


Die Metabase unterscheidet zwischen zwei Arten von Spaltenmetadaten: Datentypen und Feldtypen.


- [**Datentypen**](#data-types) sind der zugrundeliegende Spaltentyp, wie er in Ihrer Datenbank definiert ist, z.B.`Datum` oder`Text`. Metabase liest die Datentypen während des [Datenbank-Sync-Prozesses](../databases/sync-scan.md).
- [**Semantische Typen**](#semantic-types), auch **Feldtypen** genannt, sind Bezeichnungen, die beschreiben, wie die Daten zu interpretieren sind. Wenn Sie beispielsweise eine Spalte mit dem Datentyp "Text" haben, in der Sie E-Mails speichern, können Sie einen semantischen Typ "E-Mail" hinzufügen, damit andere Personen (und Metabase) wissen, welche Art von Text in der Spalte gespeichert wird.


Daten- und semantische Typen bestimmen, wie Metabase die Daten formatiert, welche Diagramme verfügbar sind, wie die Filter funktionieren und andere Funktionen.


## Datentypen


Datentypen sind die zugrunde liegenden Spaltentypen, wie sie in Ihrer Datenbank definiert sind. Metabase liest die Datentypen während des [Datenbank-Sync-Prozesses](../databases/sync-scan.md). Da Metabase eine Verbindung zu vielen verschiedenen Datenbanken herstellt, verwendet es unter der Haube eine eigene Typenhierarchie, so dass es z. B. Datumsfelder in so unterschiedlichen Datenbanken wie PostgreSQL und MongoDB verarbeiten kann.


Die wichtigsten Datentypen in Metabase:


| Datentyp | Beispiel-Datenbanktypen |
| ---------- | ------------------------------------------- |
| Numerisch | `INTEGER`, `FLOAT` |
| Zeitlich | ` DATE`, ` TIMESTAMP` |
| Text | ` VARCHAR`, ` TEXT` |
| Textartig | MongoDB ` BSONID`, Postgres ` Enum` |
| Boolean | Boolean |
| Sammlung | `JSON`, BigQuery `RECORD`, MongoDB `Object` |


Metabase unterstützt derzeit keine Array-Typen. Bei Spalten, die Arrays enthalten, können Sie nur nach **Ist leer** oder **Ist nicht leer** filtern.


Bei einigen Feldern können Sie Metabase anweisen, [das Feld in einen anderen Datentyp umzuwandeln](#editing-data-and-semantic-types) (z. B. einen Texttyp in einen Datumstyp ändern).


## Semantische Typen


Man kann sich semantische Typen so vorstellen, dass sie einem Feld eine zusätzliche Note verleihen, um die Bedeutung zu vermitteln und [zusätzliche Funktionen] zu ermöglichen(#what-data-and-semantic-types-enable). Die verfügbaren semantischen Typen hängen von den zugrunde liegenden Datentypen ab.


### Semantische Typen für beliebige Felder


-Entitätsschlüssel** Wird verwendet, um anzugeben, dass das Feld jede Zeile eindeutig identifiziert. Das kann eine Produkt-ID, eine Seriennummer usw. sein.


-Fremdschlüssel** Wird verwendet, um auf einen Entitätsschlüssel einer anderen Tabelle zu verweisen, um Daten aus verschiedenen Tabellen, die miteinander in Beziehung stehen, zu verbinden. In einer Tabelle "Produkte" könnten Sie beispielsweise ein Feld "Kunden-ID" haben, das auf eine Tabelle "Kunden" verweist, in der die Kunden-ID der Entitätsschlüssel ist. Wenn Sie [verknüpfte Filter auf Dashboards](../dashboards/linked-filters.md) verwenden möchten, müssen Sie Fremdschlüsselbeziehungen einrichten.


### Semantische Typen für numerische Felder


- Menge
- Punktzahl
- Prozentsatz
- Finanziell
- Währung
- Rabatt
- Einkommen
- Standort
- Breitengrad
- Längengrad
- Kategorie


### Semantische Typen für zeitliche Felder


- Datum der Erstellung
- Uhrzeit der Erstellung
- Zeitstempel der Erstellung
- Datum des Beitritts
- Uhrzeit des Beitritts
- Zeitstempel des Beitritts
- Geburtstag


### Semantische Typen für Textfelder


- Name der Entität
- E-Mail
- URL
- Bild-URL
- Avatar-URL
- Kategorie
- Bezeichnung
- Titel
- Beschreibung
- Produkt
- Quelle
- Standort
- Stadt
- Staat
- Land
- Postleitzahl


### Semantische Typen für Sammelfelder


- Feld, das JSON enthält.


Siehe [Arbeiten mit JSON](./json-unfolding.md).


## Bearbeiten von Daten und semantischen Typen


Administratoren und Personen mit der [Berechtigung zur Verwaltung von Tabellenmetadaten](../permissions/data.md#manage-table-metadata-permissions) können in der Registerkarte Tabellenmetadaten der Admin-Einstellungen Datentypen zuweisen und semantische Typen bearbeiten.---
Titel: "Daten und Feldtypen"
redirect_from:
- /docs/latest/users-guide/field-types 
summary: "Metabase verwendet sowohl Daten- als auch semantische Typen, um zu verstehen, wie man seine Daten formatiert und visualisiert."
---

# Daten- und Feldtypen

Die Metabase unterscheidet zwischen zwei Arten von Spaltenmetadaten: Datentypen und Feldtypen.

- [**Datentypen**](#data-types) sind der zugrundeliegende Spaltentyp, wie er in Ihrer Datenbank definiert ist, z.B.`Datum` oder`Text`. Metabase liest die Datentypen während des [Datenbank-Sync-Prozesses](../databases/sync-scan.md).
- [**Semantische Typen**](#semantic-types), auch **Feldtypen** genannt, sind Bezeichnungen, die beschreiben, wie die Daten zu interpretieren sind. Wenn Sie beispielsweise eine Spalte mit dem Datentyp "Text" haben, in der Sie E-Mails speichern, können Sie einen semantischen Typ "E-Mail" hinzufügen, damit andere Personen (und Metabase) wissen, welche Art von Text in der Spalte gespeichert wird.

Daten- und semantische Typen bestimmen, wie Metabase die Daten formatiert, welche Diagramme verfügbar sind, wie die Filter funktionieren und andere Funktionen.

## Datentypen

Datentypen sind die zugrunde liegenden Spaltentypen, wie sie in Ihrer Datenbank definiert sind. Metabase liest die Datentypen während des [Datenbank-Sync-Prozesses](../databases/sync-scan.md). Da Metabase eine Verbindung zu vielen verschiedenen Datenbanken herstellt, verwendet es unter der Haube eine eigene Typenhierarchie, so dass es z. B. Datumsfelder in so unterschiedlichen Datenbanken wie PostgreSQL und MongoDB verarbeiten kann.

Die wichtigsten Datentypen in Metabase:

| Datentyp | Beispiel-Datenbanktypen |
| ---------- | ------------------------------------------- |
| Numerisch | `INTEGER`, `FLOAT` |
| Zeitlich | ` DATE`, ` TIMESTAMP` |
| Text | ` VARCHAR`, ` TEXT` |
| Textartig | MongoDB ` BSONID`, Postgres ` Enum` |
| Boolean | Boolean |
| Sammlung | `JSON`, BigQuery `RECORD`, MongoDB `Object` |

Metabase unterstützt derzeit keine Array-Typen. Bei Spalten, die Arrays enthalten, können Sie nur nach **Ist leer** oder **Ist nicht leer** filtern.

Bei einigen Feldern können Sie Metabase anweisen, [das Feld in einen anderen Datentyp umzuwandeln](#editing-data-and-semantic-types) (z. B. einen Texttyp in einen Datumstyp ändern).

## Semantische Typen

Man kann sich semantische Typen so vorstellen, dass sie einem Feld eine zusätzliche Note verleihen, um die Bedeutung zu vermitteln und [zusätzliche Funktionen] zu ermöglichen(#what-data-and-semantic-types-enable). Die verfügbaren semantischen Typen hängen von den zugrunde liegenden Datentypen ab.

### Semantische Typen für beliebige Felder

-Entitätsschlüssel** Wird verwendet, um anzugeben, dass das Feld jede Zeile eindeutig identifiziert. Das kann eine Produkt-ID, eine Seriennummer usw. sein.

-Fremdschlüssel** Wird verwendet, um auf einen Entitätsschlüssel einer anderen Tabelle zu verweisen, um Daten aus verschiedenen Tabellen, die miteinander in Beziehung stehen, zu verbinden. In einer Tabelle "Produkte" könnten Sie beispielsweise ein Feld "Kunden-ID" haben, das auf eine Tabelle "Kunden" verweist, in der die Kunden-ID der Entitätsschlüssel ist. Wenn Sie [verknüpfte Filter auf Dashboards](../dashboards/linked-filters.md) verwenden möchten, müssen Sie Fremdschlüsselbeziehungen einrichten.

### Semantische Typen für numerische Felder

-  Menge 
-  Punktzahl 
-  Prozentsatz 
-  Finanziell 
-  Währung 
-  Rabatt 
-  Einkommen 
-  Standort 
-  Breitengrad 
-  Längengrad 
-  Kategorie 

### Semantische Typen für zeitliche Felder

- Datum der  Erstellung 
- Uhrzeit der  Erstellung 
- Zeitstempel der  Erstellung 
- Datum des  Beitritts 
- Uhrzeit des  Beitritts 
- Zeitstempel des  Beitritts 
-  Geburtstag 

### Semantische Typen für Textfelder

- Name der  Entität 
-  E-Mail 
-  URL 
-  Bild-URL 
-  Avatar-URL 
-  Kategorie 
-  Bezeichnung 
-  Titel 
-  Beschreibung 
-  Produkt 
-  Quelle 
-  Standort 
-  Stadt 
-  Staat 
-  Land 
-  Postleitzahl 

### Semantische Typen für Sammelfelder

-  Feld, das JSON enthält.

Siehe [Arbeiten mit JSON](./json-unfolding.md).

## Bearbeiten von Daten und semantischen Typen

Administratoren und Personen mit der [Berechtigung zur Verwaltung von Tabellenmetadaten](../permissions/data.md#manage-table-metadata-permissions) können in der Registerkarte Tabellenmetadaten der Admin-Einstellungen Datentypen zuweisen und semantische Typen bearbeiten.

