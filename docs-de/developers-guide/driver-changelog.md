---
Titel: Änderungsprotokoll der Treiberschnittstelle
---


# Changelog der Treiberschnittstelle


## Metabase 0.56.0


- Hinzufügen der Test-Multimethode `tx/track-dataset` für gemeinsam genutzte Cloud-DBs, um geladene Datensätze für eine effizientere gemeinsame Nutzung zu verfolgen.


- Join Alias Escaping wurde überarbeitet; beim Kompilieren von MBQL für einen Join verwenden Sie bitte
metabase.driver-api.core/qp.add.alias` anstelle von `:join-alias`. (Dies ist vor allem dann relevant, wenn Sie eine eigene
metabase.driver.sql.query-processor/join->honeysql`-Implementierung haben.)


Join-Aliase sind standardmäßig nicht mehr global eindeutig, sondern nur noch innerhalb einer bestimmten Ebene einer Abfrage. Wenn Sie
global eindeutige Join-Aliase benötigen, können Sie die neue Option "{:globally-unique-join-aliases? true}" an
driver-api/add-alias-info` übergeben.


Beachten Sie auch, dass ` driver-api/add-alias-info` nur zusätzliche Schlüssel zu Feldreferenzen und Join-Maps hinzufügt, und nicht
vorhandene Schlüssel wie `:alias`, `:join-alias`, oder `:name` ersetzt; stellen Sie sicher, dass Sie `driver-api/qp.add.alias` verwenden,
driver-api/qp.add.source-table`, bzw. `driver-api/qp.add.source-alias`.


## Metabase 0.55.0


- Hinzufügen der Multi-Methode "->date", mit der der Treiber steuern kann, wie Strings und temporale Typen in Datumswerte umgewandelt werden.


- Hinzufügen der Multi-Methode "date-dbtype", die es dem Treiber ermöglicht zu kontrollieren, in welche Typen Datumsangaben umgewandelt werden.


- Erweitern Sie `date()` um eine DateTime (oder DB-Äquivalent) zusätzlich zu einem ISO-String zu akzeptieren. Wenn eine DateTime übergeben wird, wird sie auf ein Datum abgeschnitten.


- Funktion `:expressions/datetime` für Treiber hinzugefügt, die die Konvertierung von iso-Strings in Datumszeiten unterstützen


- Funktion `:expression-literals` für Treiber hinzugefügt, die Ausdrücke unterstützen, die aus einem einzelnen String, einer Zahl oder einem booleschen Literalwert bestehen.


- Hinzugefügt wurde ein Merkmal `:multi-level-schema` für Treiber, die hierarchische Ebenen zwischen Datenbank und Schema unterstützen. Wie z.B. der Katalog von Databricks. Standardeinstellung ist false.


- Es wurde die Multi-Methode ` adjust-schema-qualification` hinzugefügt, die es den Treibern erlaubt, Tabellenschemata zu qualifizieren oder zu dequalifizieren, basierend auf der Aktivierung oder Deaktivierung der Multi-Level-Schema-Unterstützung. Treiber müssen möglicherweise `sql.qp/->honeysql [driver ::h2x/identifier]` implementieren, um voll qualifizierte Schemata korrekt zu zitieren.


- Die Multi-Methode ` float-dbtype` wurde hinzugefügt, die den Namen des Float-Typs zurückgibt, auf den wir für Coercion-Strategien und die Funktion `float()` für benutzerdefinierte Ausdrücke coercen.


- Es wurde eine Funktion `:expressions/float` für Treiber hinzugefügt, die das Casting von Text in Fließkommazahlen unterstützen.


- Hinzufügung der Multi-Methode "integer-dbtype", die es dem Treiber ermöglicht, zu kontrollieren, in welchen Typ Ganzzahlen umgewandelt werden.


- Der "metabase.upload" -Namensraum wurde durch "metabase.upload.core" ersetzt, aber die Schlüsselwörter für den Upload-Typ, z. B.
`:metabase.upload/varchar-255` bleiben unverändert. Stellen Sie sicher, dass Sie keine `::` Schlüsselwörter innerhalb von Methoden wie
`metabase.driver/upload-type->database-type` oder `metabase.driver/allowed-promotions` -- stellen Sie sicher, dass Sie
`:metabase.upload/varchar-255` und nicht etwas wie `::upload/varchar-255`.


- Hinzufügen der Multi-Methode `metabase.driver.sql.parameters.substitution/time-grouping->replacement-snippet-info`. Dies ist effektiv `->replacement-snippet-info` für die neue native Abfragezeitgruppierungsfunktion, ist aber eine eigene separate Multimethode, da sie einen zusätzlichen Parameter benötigt.
- Der `metabase.models.secret` Namespace wurde durch `metabase.secrets.core` ersetzt; wenn Sie ihn verwendet haben, aktualisieren Sie bitte
aktualisieren Sie bitte Ihre Verwendungen.


- Der Namespace `metabase.public-settings` wurde entfernt und die Einstellungen wurden in die entsprechenden Module verschoben, z.B.
site-uuid" befindet sich jetzt in "metabase.system.core". Wenn Sie diesen Namespace verwendet haben, aktualisieren Sie bitte Ihren Code
entsprechend. Sie sollten in der Lage sein, die richtige Einstellung zu finden, indem Sie sich ansehen, wie diese Einstellungen in unseren Erstanbietern verwendet werden
