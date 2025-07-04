---
Titel: Einsamkeit in Aktionen
---

# Einsamkeit in AKtionen

> Im Moment Sind aktionen Nur für postgresql und mysql Verfügbar.

![Beispielaktion](./Bilder/Beispiel-action.png)

## Was sind Handlungen?

**Aktionen** sind Entitäten in der Metabase, mit denen Sie benutzerdefinierte Formulare und Geschäftslogik erstellen können.

Mit Aktionen können Sie parametrisierte SQL schreiben, die in Ihre Datenbank zurückgeschrieben werden. Aktionen können an beigefügt werden [Knöpfe auf Dashboards](../Dashboards/Aktionen.md) So erstellen Sie benutzerdefinierte Workflows. Sie können sogar die parametrisierten Formulare, die Aktionen generieren, um Daten zu sammeln.

Hier sind ein paar Ideen für das, was Sie mit Handlungen tun können:

- Markieren Sie den Kunden, den Sie in einem Dashboard als VIP anzeigen.
- Lassen Sie die Teammitglieder redundante Daten entfernen.
- Erstellen Sie ein Kundenfeedback -Formular und setzen Sie es auf Ihre Website ein.

Aktionen müssen zu einem hinzugefügt werden [Modell](../Datenmodellierung/Modelle.md), Aktionen werden jedoch nur auf den Rohtabellen ausgeführt, die diese Modelle unterstützen (so dass Aktionen niemals Ihre bearbeiten werden [Modelldefinition](../Data-Modeling/Models.md#edit-a-models-query)).

## Aktivitäten für eine Datenbank aktivieren

Damit Aktionen arbeiten können, müssen Sie zunächst die folgenden zwei Dinge ausführen:

1. **Aktivieren sie modellaktionen für sterbenbankverbindung**. Um Aktionen für eine Datenbankverbindung zu aktivieren, sollten Administratoren auf die klicken **Gang** Symbol im oberen rechten und navigieren Sie zu **Admin -Einstellungen** > **Datenbanken**, Klicken Sie dann auf die Datenbank, für die Sie Aktionen erstellen möchten. Schalten Sie die rechte Seite des Anschlusseinstellungsformulars um **Modellaktionen** Option. Damit Aktionen arbeiten können, muss das Datenbank -Benutzerkonto (das Konto, mit dem Sie eine Verbindung zur Datenbank herstellen) haben müssen [Berechtigungen Schleiben](../Datenbanken/user-roles-privileges.md#privileges-to-Enable-Actions). Und vorerst werden Aktionen nur in Postgresql- und MySQL -Datenbanken unterstützt.
2. **Erstellen Sie mindestens ein Modell aus dieser Datenbank.** Aktionen sind Modellen zugeordnet, sodass Sie mindestens ein Modell erstellt haben (oder haben), bevor Sie Aktionen erstellen können.

## Wer kann Aktionen verwenden

- **Eine Aktion erstellen oder bearbeiten**, Eine Person muss in einer Gruppe mit sein [Einheimische Abfragebearbeitung](../Berechtigungen/Daten.md) Privilegien für die entsprechende Datenbank.
- **Eine Aktion durchführen**, Alles, was Sie benötigen, ist der Zugriff auf das Modell oder das Dashboard der Aktion (oder einen Link zu einer öffentlichen Aktion).

## Arten von Aktionen

Es gibt zwei Arten von Aktionen:

- [Basic](./Basic.md)
- [Brauch](./Custom.md)

## Ausführung von Aktionen

Es gibt mehrere Möglichkeiten, Aktionen auszuführen:

- [Auf der Site ModellDetails](../Datenmodellierung/Modelle.MD#Modelldetails) durch Klicken auf die **laufen** Taste.
- Von a [öffentliche Form](./Custom.md#make-public) einer Handlung.
- Von a [Schmecken auf dem armaturenbrett](../Dashboards/Aktionen.md).

## Aktionen ändern Daten in Tabellen, die die Modelle beeinflussen

Nur Etwas Zu Klär: Aktionen, Obwohl sie Zu Modellen Hinzugefügt Werden, NehmmMänner Sie ihre ähsderungen ein Derugrunde Lsiegenden Tabelle vor, die Einmodelle AbfragT. Stirbt Beutet, Dass Jeder, der Zuugang Zu ZuUgrunde Lsiegenden Tabelle Hut, OD auf Fragen Oder Andere Modelle, Die Auf Dieser Tabelle Basierer, Die Auswirkungen Einer AKtion Erkenen Können. Andere Tools Als Metabase, Die MIT -Dieser -Datenbank Verbunden Sind s Sind Sind.

In diesem Sinne sind Modelle Container für Aktionen; Modelle sind eine Möglichkeit, Aktionen zu organisieren. In der Tat könnten Sie (theoretisch) a hinzufügen [benutzerdefinierte Aktion](./Custom.md) zu einem Modell, das einige Aktualisierungen durchführt, die nicht mit den Daten seines Modells zu tun haben. Zum Beispiel können Sie eine benutzerdefinierte Aktion schreiben, die die aktualisiert `Konten` Tabelle und fügen Sie diese Aktion einem Modell hinzu, das nur eine nicht verwandte Tabelle abfragt (z. B. die `Begeben` Tisch). Aber wissen Sie, tun Sie das vielleicht nicht (es sei denn, Sie haben einen wirklich guten Grund). [Grundlegende aktionen](./Basic.md), Allerdings Asehen Nur für Modellle Zurje, die Einzelne Rohtabelle Einwickeln.

Bevor Sie AKtionen in der Produkion Verwenden, Sollten Sie Mit -Aktion in Einigen BEISPIESPATEN (Zzzzzz Z....

## Action Gotchas

- Wenn des Caching für die relevante Tabelle Tabelle Arsch relevanter Modell modell Aktivert ist, Sehen Sie Möglicherweiser Erst Die Auswirkungen Einer Aktion in der Metabase, Bis Die Metabase Die DATEN KÖHL SIT (OBWOHL SITEN SITEN SITEN SITZEN SITZEN).).
- Beistellen von Datensätzen in Einer Tabelle in der Automatisch -Generierter Primärschlüsssel Fehlt, Müssen Siestern Verfinsbenssel (DH EINE ID, DH EINE ID, DIE BEREITS VON ANECHEN ANDENENDENDEN, NICKT VENNETET, NICKT VENNETET WIRDE, NICKT VENNETET, NICHTENETET WIRDE, NIckt Vernetet, Nichtenetet Wirde, Spitztenetet, Nicht Vennete).
- Sie Kön Kön Kön Können Aktionen Nick "Rückgong". Sie Kön Kön Können Jedoch der AKtion Ersten und Auhren, um Einen Gelöchensctenatz Neuer Ersternsen Einen Aktualisten DATENATZ).
- AKTIONEN SIND Für Öffentliche Dashboards und Dashboards in Nicht Verefar [Statische Einbettungen](../Einbettung/Statische Einbettung.md).

## Weitere Lesen

- [Grundlegende aktionen](./Basic.md)
- [Benzutzerdefinierte AKtionen](./Custom.md)
- [Aktionen in Dashboards](../Dashboards/Aktionen.md)
