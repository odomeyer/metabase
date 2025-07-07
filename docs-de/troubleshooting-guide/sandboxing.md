---
Titel: Fehlerbehebung beim Sandbox-Zugriff auf Zeilen und Spalten
---


# Fehlerbehebung beim Sandbox-Zugriff auf Zeilen und Spalten


[Sandboxing-Daten][sandboxing-your-data] gibt einigen Personen nur Zugriff auf eine Teilmenge der Daten. (Der Begriff leitet sich von der Praxis ab, Kinder in einen Sandkasten zu stecken, damit sie sicher spielen können.) Um Sandboxing zu implementieren, führt Metabase eine Abfrage aus, die Zeilen filtert und/oder eine Teilmenge von Spalten aus einer Tabelle auswählt, die auf[den Berechtigungen der Person] basiert; die Abfrage der Person wird dann auf dem Ergebnis der ursprünglichen Abfrage ausgeführt (d. h. sie wird auf den Sandboxing-Daten ausgeführt).


Diese Artikel helfen Ihnen zu verstehen, wie Sandboxing funktioniert:


- [Data Sandboxing: Festlegen von Berechtigungen auf Zeilenebene][row-permissions].
- [Erweitertes Daten-Sandboxing: Beschränkung des Zugriffs auf Spalten][column-permissions].


Wenn Sie ein anderes Datenzugriffsproblem haben, siehe [verwandte Probleme](#do-you-have-a-different-problem).


## Leute können **Zeilen** in einer Tabelle nicht sehen , die sie __ sehen könnensollten


### Filtert eine Sandbox Zeilen nach einem Benutzerattribut?


**Ursache:** Eine Sandbox verwendet Benutzerattribute, um Zeilen zu filtern.


**Zu ergreifende Maßnahmen:**


Dies ist das erwartete Verhalten: Die Verwendung eines Benutzerattributs zum Filtern von Zeilen für eine Sandbox-Tabelle ist die Funktionsweise von Sandboxing. Wenn Sie abernicht wollen, dass Metabase diese Zeilen filtert, müssen Sie entweder:


- Entfernen Sie die Sandbox (was jedem, der Zugriff auf die Tabelle hat, vollen Zugriff auf alle Zeilen gewähren würde). Gehen Sie zu **Admin** > **Berechtigungen**, und ändern Sie die Zugriffsebene für die Tabelle.
- Fügen Sie die Person zu einer Gruppe hinzu (oder erstellen Sie eine Gruppe) mit anderen Berechtigungen für die Tabelle. Siehe [Guide to data permissions][data-permissions].


## Personen können **Zeilen** sehen , die sie _nicht_ sehen sollen


Es gibt mehrere Gründe, warum Personen Zeilen sehen können, die sie nicht sehen sollen.


### Sind diese Personen auch in Gruppen mit der Berechtigung, die gesamte Tabelle zu sehen?


**Ursache:** Die Personen sind in Gruppen mit der Berechtigung, die Tabelle anzuzeigen, und können daher alle Zeilen sehen, nicht nur die Sandbox-Zeilen.


**Zu ergreifende Schritte:**


Überprüfen Sie für die betreffende Person, zu welchen Gruppen sie gehört. Hat eine der Gruppen Zugriff auf die Tabelle, die Sie in den Sandkasten stellen wollen? Wenn ja, entfernen Sie sie aus dieser Gruppe. Denken Sie daran, dass jeder ein Mitglied der Gruppe "Alle Benutzer" ist. Deshalb empfehlen wir Ihnen, der Gruppe "Alle Benutzer" die Berechtigungen zu entziehen und neue Gruppen zu erstellen, um die Berechtigungen selektiv auf Ihre Datenquellen anzuwenden.


### Ist die Frage über die statische Einbettung oder die öffentliche Freigabe verfügbar?


**Grundlegende Ursache**: Die Frage ist öffentlich. [Öffentliche Fragen][public-sharing], auch solche, die [Static embedding][static-embedding] verwenden, können nicht in eine Sandbox gesperrt werden. Wenn jemand die Frage anschaut, ohne sich in der Metabase anzumelden, fehlen der Metabase die Benutzerattribute oder Gruppeninformationen zum Filtern der Daten, so dass alle Ergebnisse angezeigt werden.


**Zu ergreifende Maßnahmen**:


Sie sollten _die_ öffentliche Freigabevermeiden, wenn Sie Daten in eine Sandbox stellen. Siehe [public-sharing][public-sharing].


### Ist die Frage in SQL geschrieben?


**Grundursache**. Personen mit SQL-Zugriff auf eine Datenbank können nicht in eine Sandbox gesperrt werden. Sie haben genauso viel Zugriff auf die Datenbank wie das Benutzerkonto, das für die Verbindung zwischen Metabase und der Datenbank verwendet wird. Selbst wenn Sie Tabellen in der Metabase ausblenden, kann jemand mit SQL-Zugriff auf eine Datenbank diese Tabellen abfragen. Das bedeutet auch, dass SQL-Fragen nicht in einer Sandbox untergebracht werden können. Sandboxing gilt ausschließlich für Fragen, die im Query Builder zusammengestellt werden (obwohl Sie eine SQL-Frage verwenden können, um eine Sandbox zu erstellen, z. B. um eine Ergebnismenge einer Tabelle zu erstellen, die einige Spalten ausschließt)
.


**Zu unternehmende Schritte**


- Versuchen Sie nicht, eine in SQL geschriebene Frage in den Sandkasten zu stellen, denn das ist nicht möglich.


- Wenn Sie einen Sandbox-Zugriff wünschen, sollten Sie die Person nicht zu einer Gruppe mit SQL-Zugriff auf die Tabelle hinzufügen (oder zu einer anderen Gruppe, die mehr Zugriffsrechte auf die Tabelle hat, um genau zu sein).


- Wenn Sie der Person zwar SQL-Zugriff gewähren, aber dennoch einschränken möchten, was die Person sehen kann, müssen Sie die Berechtigungen in Ihrer Datenbank einrichten und diese Datenbank über das Benutzerkonto mit dem eingeschränkten Zugriff verbinden. Sie können dieselbe Datenbank mehrmals mit Metabase verbinden, jeweils mit unterschiedlichen Zugriffsebenen, und verschiedene Verbindungen für verschiedene Gruppen freigeben. Aber auch hier werden Sie nicht in der Lage sein, die Daten von einer Person mit SQL-Zugriff in die Sandbox zu stellen.


### Ruft die Frage Daten aus einer Nicht-SQL-Datenquelle ab?


**Ursache:** Daten-Sandboxen unterstützen keine Nicht-SQL-Datenbanken.


**Zu ergreifende Maßnahmen:**


Hier können Sie nicht viel tun: Wenn Sie Daten in einer Sandbox speichern müssen, [können Sie diese Datenbanken nicht verwenden][unsupported-databases].


### Wenn Sie Single Sign-on (SSO) verwenden, sind die Benutzerattribute korrekt?


**Hauptursache**: Wenn sich Personen mit SSO anmelden, aber die erwarteten Attribute nicht gespeichert und verfügbar gemacht werden, verweigert Sandboxing den Zugriff.
- [Ich kann meine Tabellen nicht sehen][cant-see-tables].---
Titel: Fehlerbehebung beim Sandbox-Zugriff auf Zeilen und Spalten
---

# Fehlerbehebung beim Sandbox-Zugriff auf Zeilen und Spalten

[Sandboxing-Daten][sandboxing-your-data] gibt einigen Personen nur Zugriff auf eine Teilmenge der Daten. (Der Begriff leitet sich von der Praxis ab, Kinder in einen Sandkasten zu stecken, damit sie sicher spielen können.) Um Sandboxing zu implementieren, führt Metabase eine Abfrage aus, die Zeilen filtert und/oder eine Teilmenge von Spalten aus einer Tabelle auswählt, die auf[den Berechtigungen der Person] basiert; die Abfrage der Person wird dann auf dem Ergebnis der ursprünglichen Abfrage ausgeführt (d. h. sie wird auf den Sandboxing-Daten ausgeführt).

Diese Artikel helfen Ihnen zu verstehen, wie Sandboxing funktioniert:

- [Data Sandboxing: Festlegen von Berechtigungen auf Zeilenebene][row-permissions].
- [Erweitertes Daten-Sandboxing: Beschränkung des Zugriffs auf Spalten][column-permissions].

Wenn Sie ein anderes Datenzugriffsproblem haben, siehe [verwandte Probleme](#do-you-have-a-different-problem).

## Leute können **Zeilen** in einer Tabelle  nicht sehen , die sie __ sehen könnensollten

### Filtert eine Sandbox Zeilen nach einem Benutzerattribut?

**Ursache:** Eine Sandbox verwendet Benutzerattribute, um Zeilen zu filtern.

**Zu ergreifende Maßnahmen:**

Dies ist das erwartete Verhalten: Die Verwendung eines Benutzerattributs zum Filtern von Zeilen für eine Sandbox-Tabelle ist die Funktionsweise von Sandboxing. Wenn Sie abernicht wollen, dass Metabase diese Zeilen filtert, müssen Sie entweder:

-  Entfernen Sie die Sandbox (was jedem, der Zugriff auf die Tabelle hat, vollen Zugriff auf alle Zeilen gewähren würde). Gehen Sie zu **Admin** > **Berechtigungen**, und ändern Sie die Zugriffsebene für die Tabelle.
-  Fügen Sie die Person zu einer Gruppe hinzu (oder erstellen Sie eine Gruppe) mit anderen Berechtigungen für die Tabelle. Siehe [Guide to data permissions][data-permissions].

## Personen können **Zeilen** sehen , die sie _nicht_ sehen sollen

Es gibt mehrere Gründe, warum Personen Zeilen sehen können, die sie nicht sehen sollen.

### Sind diese Personen auch in Gruppen mit der Berechtigung, die gesamte Tabelle zu sehen?

**Ursache:** Die Personen sind in Gruppen mit der Berechtigung, die Tabelle anzuzeigen, und können daher alle Zeilen sehen, nicht nur die Sandbox-Zeilen.

**Zu ergreifende Schritte:**

Überprüfen Sie für die betreffende Person, zu welchen Gruppen sie gehört. Hat eine der Gruppen Zugriff auf die Tabelle, die Sie in den Sandkasten stellen wollen? Wenn ja, entfernen Sie sie aus dieser Gruppe. Denken Sie daran, dass jeder ein Mitglied der Gruppe "Alle Benutzer" ist. Deshalb empfehlen wir Ihnen, der Gruppe "Alle Benutzer" die Berechtigungen zu entziehen und neue Gruppen zu erstellen, um die Berechtigungen selektiv auf Ihre Datenquellen anzuwenden.

### Ist die Frage über die statische Einbettung oder die öffentliche Freigabe verfügbar?

**Grundlegende Ursache**: Die Frage ist öffentlich. [Öffentliche Fragen][public-sharing], auch solche, die [Static embedding][static-embedding] verwenden, können nicht in eine Sandbox gesperrt werden. Wenn jemand die Frage anschaut, ohne sich in der Metabase anzumelden, fehlen der Metabase die Benutzerattribute oder Gruppeninformationen zum Filtern der Daten, so dass alle Ergebnisse angezeigt werden.

**Zu ergreifende Maßnahmen**:

Sie sollten _die_ öffentliche Freigabevermeiden, wenn Sie Daten in eine Sandbox stellen. Siehe [public-sharing][public-sharing].

### Ist die Frage in SQL geschrieben?

**Grundursache**. Personen mit SQL-Zugriff auf eine Datenbank können nicht in eine Sandbox gesperrt werden. Sie haben genauso viel Zugriff auf die Datenbank wie das Benutzerkonto, das für die Verbindung zwischen Metabase und der Datenbank verwendet wird. Selbst wenn Sie Tabellen in der Metabase ausblenden, kann jemand mit SQL-Zugriff auf eine Datenbank diese Tabellen abfragen. Das bedeutet auch, dass SQL-Fragen nicht in einer Sandbox untergebracht werden können. Sandboxing gilt ausschließlich für Fragen, die im Query Builder zusammengestellt werden (obwohl Sie eine SQL-Frage verwenden können, um eine Sandbox zu erstellen, z. B. um eine Ergebnismenge einer Tabelle zu erstellen, die einige Spalten ausschließt)
.

**Zu unternehmende Schritte**

- Versuchen  Sie nicht, eine in SQL geschriebene Frage in den Sandkasten zu stellen, denn das ist nicht möglich.

-  Wenn Sie einen Sandbox-Zugriff wünschen, sollten Sie die Person nicht zu einer Gruppe mit SQL-Zugriff auf die Tabelle hinzufügen (oder zu einer anderen Gruppe, die mehr Zugriffsrechte auf die Tabelle hat, um genau zu sein).

-  Wenn Sie der Person zwar SQL-Zugriff gewähren, aber dennoch einschränken möchten, was die Person sehen kann, müssen Sie die Berechtigungen in Ihrer Datenbank einrichten und diese Datenbank über das Benutzerkonto mit dem eingeschränkten Zugriff verbinden. Sie können dieselbe Datenbank mehrmals mit Metabase verbinden, jeweils mit unterschiedlichen Zugriffsebenen, und verschiedene Verbindungen für verschiedene Gruppen freigeben. Aber auch hier werden Sie nicht in der Lage sein, die Daten von einer Person mit SQL-Zugriff in die Sandbox zu stellen.

### Ruft die Frage Daten aus einer Nicht-SQL-Datenquelle ab?

**Ursache:** Daten-Sandboxen unterstützen keine Nicht-SQL-Datenbanken.

**Zu ergreifende Maßnahmen:**

Hier können Sie nicht viel tun: Wenn Sie Daten in einer Sandbox speichern müssen, [können Sie diese Datenbanken nicht verwenden][unsupported-databases].

### Wenn Sie Single Sign-on (SSO) verwenden, sind die Benutzerattribute korrekt?

**Hauptursache**: Wenn sich Personen mit SSO anmelden, aber die erwarteten Attribute nicht gespeichert und verfügbar gemacht werden, verweigert Sandboxing den Zugriff.
- [Ich kann meine Tabellen nicht sehen][cant-see-tables].

[authenticating-with-saml]: ../people-and-groups/authenticating-with-saml.md
[cant-see-tables]: cant-see-tables.md
[column-permissions]: https://www.metabase.com/learn/metabase-basics/administration/permissions/data-sandboxing-column-permissions
[data-model]: ../data-modeling/metadata-editing.md
[data-permissions]: https://www.metabase.com/learn/metabase-basics/administration/permissions/data-permissions
[groups]: ../people-and-groups/managing.md#groups
[jwt-auth]: ../people-and-groups/authenticating-with-jwt.md
[locked-parameters]: https://www.metabase.com/learn/metabase-basics/embedding/charts-and-dashboards#hide-or-lock-parameters-to-restrict-what-data-is-shown
[permissions]: https://www.metabase.com/learn/metabase-basics/administration/permissions/data-permissions
[public-sharing]: ../embedding/public-links.md
[row-permissions]: https://www.metabase.com/learn/metabase-basics/administration/permissions/data-sandboxing-row-permissions
[sandboxing-your-data]: ../permissions/data-sandboxes.md
[static-embedding]: https://www.metabase.com/learn/metabase-basics/embedding/charts-and-dashboards#enable-embedding-in-other-applications
[sandbox-limitations]: ../permissions/data-sandboxes.md#limitations
[troubleshooting-permissions]: ./permissions.md
[unsupported-databases]: ../permissions/data-sandboxes.md#limitations
