---
Titel: Sprachen und Lokalisierung
redirect_from:
- /docs/latest/administration-guide/localization
---


# Sprachen und Lokalisierung


Mit den**Lokalisierungseinstellungen** können Sie globale Standardeinstellungen für Ihre Metabase-Instanz festlegen. Die**Lokalisierung** finden Sie unter**Admin-Einstellungen** >**Einstellungen**.


## Standardsprache


Hier können Sie die Standardsprache (auch "Instanzsprache" genannt) für die Benutzeroberfläche der Metabase, das System [emails](./email.md), [dashboard subscriptions](../dashboards/subscriptions.md) und [alerts](../questions/alerts.md) festlegen. Personen können in ihren eigenen [Kontoeinstellungen](../people-and-groups/account-settings.md) eine andere Sprache wählen.


## Unterstützte Sprachen


Dank unserer großartigen Benutzergemeinschaft wurde Metabase in viele verschiedene Sprachen übersetzt. Aufgrund der [Art und Weise, wie wir Übersetzungen sammeln](#translations), können bei größeren Veröffentlichungen je nach Übersetzungsabdeckung Sprachen hinzugefügt oder entfernt werden.


Unterstützte Sprachen sind:


| Sprache | Code |
| ---------------------- | ------- |
| Englisch | "en" |
| Albanisch | ` sq` |
| Arabisch | "ar" |
| Arabisch (Saudi-Arabien) | ` ar-SA` |
| Bulgarisch | "bg" |
| Katalanisch | "ca" |
| Chinesisch (Hongkong) | "zh-HK" |
| Chinesisch (Vereinfacht) | "zh-CN" |
| Chinesisch (Taiwanesisch) | ` zh-TW` |
| Tschechisch | "cs" |
| Niederländisch | "nl" |
| Farsi/Persisch | "fa" |
| Finnisch | "fi" |
| Französisch | "fr" |
| Deutsch | ` de` |
| Hebräisch | ` er` |
| Ungarisch | "hu" |
| Indonesisch | "id" |
| Italienisch | "it" |
| Japanisch | "ja" |
| Koreanisch | "ko" |
| Lettisch | "lv" |
| Malaiisch | "ms" |
| Norwegisch Bokmål | ` nb` |
| Polnisch | "pl" |
| Portugiesisch (Brasilianisch) | ` pt-BR` |
| Russisch | "ru" |
| Serbisch | "sr" |
| Slowakisch | "sk" |
| Spanisch | "es" |
| Schwedisch | ` sv` |
| Türkisch | "tr" |
| Ukrainisch | "uk" |
| Vietnamesisch | "vi" |


Die Gebietsschema-Codes sind relevant für die Einstellung der Sprache in [statischen Einbettungen](../embedding/static-embedding-parameters.md#setting-the-language-for-a-static-embed).


> Während Metabase Sprachen unterstützt, die von rechts nach links gelesen werden, ist die Metabase-Benutzeroberfläche auf Sprachen ausgelegt, die von links nach rechts gelesen werden.


## Übersetzungen


Unsere Community trägt zur Übersetzung von Metabase auf unserem [Crowdin-Projekt](https://crowdin.com/project/metabase-i18n) bei. Wenn Sie dazu beitragen möchten, dass Metabase in einer Sprache verfügbar ist, die Sie fließend beherrschen, freuen wir uns über Ihre Hilfe!


Damit eine neue Sprache in die Metabase aufgenommen werden kann, muss sie 100 % erreichen. Sobald dies der Fall ist, wird sie in der nächsten Haupt- oder Nebenversion von Metabase aufgenommen. Alle _vorhandenen_ Sprachen in Metabase _müssen zu 100 %_erhalten bleiben, um auch in der nächsten _Hauptversion_ von Metabase enthalten zu sein. Diese Regel stellt sicher, dass niemand bei der Verwendung von Metabase auf einen verwirrenden Mischmasch aus Englisch und einer anderen Sprache stößt.


Wir wissen, dass dies eine hohe Messlatte ist. Deshalb verpflichten wir uns, vor jeder größeren Veröffentlichung sicherzustellen, dass alle Ergänzungen oder Änderungen am Text des Produkts mindestens 10 Kalendertage vor der Veröffentlichung abgeschlossen sind.
