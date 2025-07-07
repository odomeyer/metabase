---
Titel: "Metabase config file template"
---


# Vorlage für die Konfigurationsdatei der Metabase


Sie können die folgende Vorlage für die Konfigurationsdatei erzeugen, indem Sie in das oberste Metabase-Verzeichnis wechseln und den Befehl


```
clojure -M:doc:ee config-template
```


Die Vorlage listet beispielhaft die Abschnitte`Datenbank`,`Benutzer` und`Einstellungen` für die [Konfigurationsdatei](./config-file.md) auf.


``yaml
# Eine Konfigurationsdatei-Vorlage für Metabase.
# Sie müssen die Abschnitte `users` und `databases` aktualisieren (oder entfernen).
# Die Einstellungen in `settings` enthalten Standardwerte. Wir empfehlen das Entfernen
Einstellungen, die Sie nicht setzen, # zu entfernen oder auszukommentieren.
# Um eine env var zu verwenden, können Sie einen Template-String verwenden: "{{ env YOUR_ENV_VAR }}"
# Beachten Sie die Anführungszeichen, die die env var-Vorlage umschließen.
# Mehr über die Konfigurationsdatei finden Sie unter:
# https://www.metabase.com/docs/latest/configuring-metabase/config-file
# Mehr zu den einzelnen Einstellungen finden Sie hier:
# https://www.metabase.com/docs/latest/configuring-metabase/environment-variables
Version: 1
Konfig:
Benutzer:
- first_name: Vorname
nach_name: Person
Kennwort: metabot1
E-Mail: first@example.com
- vor_name: Normal
nach_name: Person
Kennwort: metabot1
E-Mail: normal@example.com
- vor_name: Verwalter
nach_name: Person
Kennwort: metabot1
is_superuser: wahr
E-Mail: admin@example.com
Datenbanken:
- Name: Beispiel PostgreSQL
Maschine: postgres
Einzelheiten:
Rechner: postgres-data
port: 5432
Benutzer: metabase
Kennwort: metasample123
dbname: Beispiel
- Name: Beispiel-MySQL
Motor: mysql
Einzelheiten:
Rechner: mysql-data
port: 3306
Benutzer: metabase
Kennwort: metasample123
dbname: Beispiel
api-keys:
- name: Admin-API-Schlüssel
Gruppe: admin
Ersteller: first@example.com
Schlüssel: mb_firsttestapikey123
- Name: Alle Benutzer API-Schlüssel
Gruppe: Alle Benutzer
Ersteller: first@example.com
Schlüssel: mb_secondtestapikey456
Einstellungen:
admin-email: null
