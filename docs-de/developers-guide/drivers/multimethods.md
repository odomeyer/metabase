---
Titel: Implementierung von Multimethoden für Ihren Treiber
---


# Implementieren von Multimethoden für Ihren Treiber


Durch die Implementierung von Multimethoden können Sie den vorhandenen Treibercode von Metabase nutzen, indem Sie diese Methoden für Ihre spezielle Datenbank erweitern.


Konzentrieren wir uns zunächst auf die Haupttreiberdatei für unseren Fox Pro '98 `src/metabase/driver/foxpro98.clj`. Werfen Sie einen Blick auf diesen Beispielcode:


```clj
;; Definieren Sie einen Namespace für den Treiber
(ns com.mycompany.metabase.driver.foxpro98
(:require [metabase.driver :as driver]))


;; Können Sie hier eine andere Methode als Beispiel einfügen?
(defmethod treiber/display-name :foxpro98 [_]
"Visual FoxPro '98")
```


Gehen wir die einzelnen Codeblöcke durch.


## Treiber-Namensraeume


```
;; Definieren Sie einen Namespace für den Treiber
(ns com.mycompany.metabase.driver.foxpro98
(:require [metabase.driver :as driver]))
```


### Jeder Metabase-Treiber lebt in seinem eigenen Namensraum.


In diesem Fall ist der Namespace`com.mycompany.metabase.driver.foxpro98`.
Alle Metabase-Kerntreiber befinden sich in den Namespaces "metabase.driver.<Name-geht-hier>". Es ist wahrscheinlich am besten, Namen zu verwenden, die den [Java package naming conventions](https://en.wikipedia.org/wiki/Java_package#Package_naming_conventions) folgen.


### Viele Treiber sind in zusätzliche Namensräume aufgeteilt.


Besonders bei größeren Treibern. In der Regel verfügt ein Treiber über einen Namespace "query-processor" (z. B. "com.mycompany.metabase.driver.foxpro98.query-processor"), der die Logik für die Konvertierung von MBQL-Abfragen (Abfragen, die mit dem grafischen Abfragegenerator von Metabase erstellt wurden) in native Abfragen (wie SQL) enthält. Der Abfrageprozessor ist oft der komplizierteste Teil eines Treibers, so dass es einfacher ist, diese Logik getrennt zu halten. Einige Treiber haben auch einen separaten ` sync`-Namensraum, der Implementierungen für Methoden enthält, die von der [Datenbank-Synchronisation] der Metabase verwendet werden(../../databases/sync-scan.md).


## Treiberinitialisierung


Alle Treiber können zusätzlichen Code enthalten, der einmal (und nur einmal) mit `metabase.driver/initialize!` ausgeführt wird, wenn Metabase den Treiber initialisiert, d.h. bevor der Treiber zum ersten Mal eine Verbindung zu einer Datenbank herstellt. (Tatsächlich verwendet Metabase `metabase.driver/initialize!`, um den Treiber langsam zu laden.) Es gibt nur wenige Fälle, in denen Sie `metabase.driver/initialize` verwenden sollten, z.B. bei der Zuweisung von Ressourcen oder beim Setzen bestimmter Systemeigenschaften.


## `metabase.driver` multimethods


Der [`metabase.driver` Namespace](https://github.com/metabase/metabase/blob/master/src/metabase/driver.clj) definiert eine Reihe von [multimethods](https://clojure.org/reference/multimethods), und die Treiber bieten Implementierungen für diese, wie in unserem Beispiel:


```clj
(defmethod treiber/display-name :foxpro98 [_]
"Visual FoxPro '98")
```


Die vier oben beschriebenen Hauptmerkmale eines Metabase-Treibers werden alle durch Multimethoden implementiert. Diese Methoden reagieren auf das Schlüsselwort des Treibers, in unserem Fall `:foxpro98`. Tatsächlich ist ein Metabase-Treiber nichts anderes als ein Schlüsselwort! Es gibt keine Klassen oder Objekte zu sehen - nur ein einziges Schlüsselwort.
