---
Titel: Internationalisierung
---


# Internationalisierung


Wir sind eine Anwendung mit vielen Benutzern auf der ganzen Welt. Damit sie Metabase in ihrer eigenen Sprache verwenden können, markieren wir alle unsere Strings als i18n.


## Kurzanleitung


Wenn Sie neue Zeichenfolgen hinzufügen müssen (versuchen Sie, mit dem Hinzufügen von Kopien vorsichtig zu sein), gehen Sie wie folgt vor:


1. Tag Strings im Frontend mit `t` und `jt` ES6 Template Literale (siehe mehr Details in https://ttag.js.org/):


```javascript
const someString = t`Hallo ${Name}!`;
const someJSX = <div>{jt`Hallo ${name}`}</div>;
```


und im Backend mit ` trs` (um die Sprache der Seite zu verwenden) oder ` tru` (um die Sprache des aktuellen Benutzers zu verwenden):


``clojure
(trs "Hallo {0}!" name)
```


## Übersetzungsfehler oder fehlende Zeichenfolgen


Wenn Sie fehlerhafte oder fehlende Zeichenfolgen für Ihre Sprache feststellen, besuchen Sie bitte unser [Crowdin-Projekt](https://crowdin.com/project/metabase-i18n) und reichen Sie Ihre Korrekturen dort ein.


## Backend-Übersetzungsleitfaden


Die Metabase ermöglicht Übersetzungen in viele Sprachen. Eine maßgebliche Liste ist in `resources/locales.clj` zu finden.


## Die Metabase-Seite


Metabase befasst sich mit der Lokalisierung in zwei verschiedene Gebietsschemata: die Übersetzung in das Gebietsschema des Servers und die Übersetzung in das Gebietsschema des Benutzers. Der Unterschied besteht im Wesentlichen darin, ob dies auf dem Server protokolliert oder über die Leitung an den Benutzer zurückgesendet wird.


Um eine Zeichenkette für den Server zu übersetzen, verwenden Sie `metabase.util.i18n/trs` und für das Gebietsschema des Benutzers verwenden Sie das ähnliche `metabase.util.i18n/tru`. Denken Sie an ` tr-server` und ` tr-user`.


### Wie es funktioniert


Auf einer hohen Ebene wird die zu übersetzende Zeichenkette als Nachschlageschlüssel in einer Map von source-string -> localized-string behandelt. Diese übersetzte Zeichenkette wird wie folgt verwendet:


,,clojure


;; aus der Quelle von `translate` in `metabase.util.i18n`


(.format (MessageFormat. looked-up-string) (to-array args))


```


Alles andere ist weitgehend Buchhaltung. Dies verwendet die Klasse [java.text.MessageFormat](https://docs.oracle.com/javase/7/docs/api/java/text/MessageFormat.html) zum Einfügen von Format-Args.


Die Funktionen ` trs` und ` tru` erzeugen Instanzen von zwei Datensätzen, ` SiteLocalizedString` bzw. ` UserLocalizedString` mit Überschreibungen der Methode ` toString`. Diese Methode sucht nach dem aktuellen Gebietsschema (Benutzer oder Standort), sucht die zu übersetzende Zeichenkette nach der zugehörigen übersetzten Zeichenkette und ruft dann die Methode `.format` für das ` MessageFormat` auf.


### Die Zuordnungen von der Quelle zur übersetzten Zeichenkette


In einem Schritt unseres Erstellungsprozesses wird für jede von uns unterstützte Sprachumgebung eine edn-Datei erstellt, die den Quelltext in eine übersetzte Zeichenfolge umwandelt. Diese befinden sich in ` resources/i18n`. Wenn Sie diese Dateien nicht haben, können Sie ` bin/build-translation-resources` ausführen, um sie zu erzeugen.


Wir haben viele Mitwirkende, die uns helfen, einen Korpus von übersetzten Zeichenketten in viele verschiedene Sprachen zu erhalten. Wir verwenden [Crowdin](https://crowdin.com/project/metabase-i18n), um eine maßgebliche Liste zu führen. Wir exportieren daraus "po" -Dateien, die im Wesentlichen ein Wörterbuch von der Quelle zur übersetzten Zeichenfolge darstellen. Als Teil unseres Build-Prozesses formatieren wir diese Dateien als edn-Dateien, also als Zuordnungen vom Quelltext zur übersetzten Zeichenkette, für jedes Gebietsschema.


### Args formatieren


Neben String-Literalen wollen wir auch Strings übersetzen, in deren Mitte Argumente eingefügt sind. Wir verwenden die Syntax der bereits erwähnten Klasse [java.text.MessageFormat](https://docs.oracle.com/javase/7/docs/api/java/text/MessageFormat.html). Dies sind null-indizierte Args der Form `{0}`, `{1}`.
