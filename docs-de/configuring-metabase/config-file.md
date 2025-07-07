---


```
{% raw %}
passwort: "{{{ MetaPa$$123{{> }}}"
{% endraw %}
```


Beachten Sie die Anführungszeichen in `{% raw %}"{{{ MetaPa$$123{{> }}}"{% endraw %}`.


## Anfängliche Datenbanksynchronisation deaktivieren


Wenn Sie ein Datenmodell aus einem serialisierten Export laden, möchten Sie den Scheduler deaktivieren, damit die Metabase nicht versucht, eine Synchronisierung durchzuführen.


Um die anfängliche Datenbanksynchronisierung zu deaktivieren, können Sie "config-from-file-sync-database" zur Liste "settings" hinzufügen und den Wert auf "false" setzen. Die Einstellung "config-from-file-sync-database" muss _vor der Liste" databases" stehen, etwa so:


``yml
Version: 1
Konfig:
Einstellungen:
config-from-file-sync-databases: false
Datenbanken:
- name: meine-datenbank
Maschine: postgres
Einzelheiten: ...
```


## Einstellungen


In dieser Konfigurationsdatei können Sie _jede_ Admin-Einstellung angeben.


Im Allgemeinen entsprechen die Einstellungen, die Sie im Abschnitt "Einstellungen" dieser Konfigurationsdatei festlegen können, den [Umgebungsvariablen](./environment-variables.md), also sehen Sie sich diese an, um zu sehen, welche Einstellungen Sie in Ihrer Konfigurationsdatei verwenden können. Der tatsächliche Schlüssel, den Sie in die Konfigurationsdatei aufnehmen, unterscheidet sich geringfügig von dem Format, das für Umgebungsvariablen verwendet wird. Bei Umgebungsvariablen ist die Form in schreiendem Snake Case, mit einem vorangestellten`MB`:


``txt
MB_NAME_DER_VARIABLE
```


In der Konfigurationsdatei hingegen würde man das so übersetzen:


```txt
Name-der-Variable
```


Wenn Sie also zum Beispiel den "MB_EMAIL_FROM_NAME" in der Datei "config.yml" angeben wollen:


``yml
Version: 1
Konfig:
Einstellungen:
config-from-file-sync-databases: false
email-absender-name: Stampy von Mails-a-lot
Datenbanken:
- name: meine-datenbank
Motor: h2
Einzelheiten: ...
```


Sie können jedoch jede der Admin-Einstellungen mit der Konfigurationsdatei festlegen (eine Liste der Einstellungen finden Sie in der [config file template](./config-template.md)). Sie können auch die Liste der [Umgebungsvariablen](./environment-variables.md) durchsuchen, um zu sehen, was Sie konfigurieren können (beachten Sie jedoch, dass nicht alle Umgebungsvariablen über die Konfigurationsdatei gesetzt werden können).


## Laden einer neuen Metabase aus einer Konfigurationsdatei


Da das Laden aus einer Konfigurationsdatei ein Pro/Enterprise-Feature ist, müssen Sie bei neuen Installationen die Metabase mit einem Token versorgen, indem Sie die Umgebungsvariable "MB_PREMIUM_EMBEDDING_TOKEN" verwenden.


``sh
MB_PREMIUM_EMBEDDING_TOKEN="[Ihr Token]" java --add-opens java.base/java.nio=ALL-UNNAMED -jar metabase.jar
```


## Weitere Lektüre


- [Konfigurationsdatei-Vorlage](./config-template.md)
- [Umgebungsvariablen](./environment-variables.md)

