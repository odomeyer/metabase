---
Titel: Fehlersuche bei Datenberechtigungen
---


# Fehlersuche bei Datenberechtigungen


Wenn eine Person die falschen Zugriffsrechte auf die Daten hat, die von einer Frage oder Abfrage zurückgegeben werden, müssen Sie verschiedene Ebenen von [Datenberechtigungen][Datenberechtigungen] untersuchen, beginnend mit der granularsten.


### Zeilen- und Spaltenberechtigungen


- [troubleshooting-data-sandboxing] [troubleshooting-data-sandboxing].


### Native Abfrage (SQL) Berechtigungen


- [Eine Benutzergruppe kann nicht auf den SQL-Editor zugreifen][sql-access].
- [Eine Benutzergruppe mit SQL-Berechtigungen wird nicht durch ihre Daten-Sandbox eingeschränkt][sql-sandboxing].


### Tabellen- oder Schema-Berechtigungen


- [Eine Benutzergruppe hat den falschen Zugriff auf eine Tabelle oder ein Schema](#a-user-group-has-the-wrong-access-to-a-table-or-schema).
- [Eine Benutzergruppe kann Sammlungen einsehen, die eingeschränkte Daten enthalten](#a-user-group-can-view-collections-that-contain-restricted-data).
- [Eine Fehlermeldung "Zugriff verweigert" erhalten](#getting-a-permission-denied-error-message).
- [Überprüfen des Zugriffs einer Person auf eine Tabelle oder ein Schema](#checking-someones-access-to-a-table-or-schema).


## Eine Benutzergruppe kann nicht auf den SQL-Editor zugreifen


1. Stellen Sie sicher, dass die Skripte geladen werden, indem Sie Browsererweiterungen deaktivieren und den Browser aktualisieren.
2. Gehen Sie zu**Admin** >**Berechtigungen** und wählen Sie die entsprechende Gruppe aus.
3. Suchen Sie die Datenbank, für die Sie SQL-Zugriff gewähren möchten.
4. Wählen Sie in der Dropdown-Liste **Daten anzeigen** die Option **Kann anzeigen**.
5. Wählen Sie in der Dropdown-Liste **Abfragen erstellen** die Option **Query builder und native**.
6. [Prüfen, ob das Zugriffsproblem behoben ist](#checking-someones-access-to-a-table-or-schema).


Weitere Informationen über die verschiedenen Arten von Datenbankberechtigungen finden Sie im [Abschnitt über Datenzugriff][data-access] in unserer Dokumentation über Berechtigungen.


## Eine Benutzergruppe hat den falschen Zugriff auf eine Tabelle oder ein Schema


1. Gehen Sie zu **Admin** > **Personen** und prüfen Sie, ob die Person in [mehr als einer Gruppe mit widersprüchlichen Berechtigungen][Gruppenberechtigungen] ist.
2. Wenn die Person in mehreren Gruppen ist:
- Entfernen Sie die Person aus der Gruppe mit den umfassenderen Berechtigungen, oder
- Gehen Sie zu **Verwaltung** > **Berechtigungen** und ändern Sie die Berechtigungsart **Datenzugriff**.
3. [Prüfen, ob das Zugriffsproblem behoben ist](#checking-someones-access-to-a-table-or-schema).


**Erläuterung**


Wenn eine Person Mitglied in mehreren [Gruppen][Gruppen] ist, gewährt Metabase die _freizügigste_ Zugriffsebene für alle Gruppen, in denen sie Mitglied ist.


Wenn eine Person beispielsweise Mitglied in zwei Gruppen ist - eine, die den Zugriff "Kannanzeigen" auf eine Datenbank oder Tabelle gewährt, und eine andere, die den Zugriff "Gesperrt" auf diese Datenbank gewährt -, kann diese Person die Daten anzeigen.


Denken Sie daran, dass jeder ein Mitglied der Gruppe **Alle Benutzer** ist. Wir empfehlen Ihnen, der Gruppe**Alle Benutzer** die Berechtigungen zu entziehen und neue Gruppen zu erstellen, um selektiv Berechtigungen auf Ihre Datenquellen anzuwenden.


## Eine Benutzergruppe kann Sammlungen einsehen, die eingeschränkte Daten enthalten


{% include plans-blockquote.html %}


1. Gehen Sie zu**Admin** >**Berechtigungen** und wählen Sie die Benutzergruppe aus.
2. Wählen Sie die Datenbank oder Tabelle, die Sie einschränken möchten.
3. Setzen Sie die Berechtigung **Daten anzeigen** auf **Gesperrt** und klicken Sie auf **Speichern**.
4. [Prüfen, ob das Zugriffsproblem behoben ist](#checking-someones-access-to-a-table-or-schema).
