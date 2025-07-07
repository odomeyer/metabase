---
Titel: Verschlüsselung der Datenbankverbindung
redirect_from:
- /docs/latest/operations-guide/encrypting-database-details-at-rest
---


# Verschlüsseln Ihrer Datenbankverbindung


Metabase speichert Verbindungsinformationen für die verschiedenen Datenbanken, die Sie in der [Metabase-Anwendungsdatenbank](https://www.metabase.com/glossary/application-database) hinzufügen. Um zu verhindern, dass böswillige Akteure auf diese Details zugreifen können, wenn sie sich Zugang zur Anwendungs-DB verschaffen, kann Metabase sie automatisch mit AES256 + SHA512 verschlüsseln, wenn sie gespeichert werden, und sie bei Bedarf sofort entschlüsseln.


## Erstellen eines Verschlüsselungsschlüssels


1. Generieren Sie einen geheimen Schlüssel, der mindestens 16 Zeichen lang ist (länger ist noch besser!). Wir empfehlen die Verwendung eines sicheren Zufallsschlüsselgenerators, z. B. `openssl`.
> Ohne diesen Schlüssel können Sie die Verbindungsdaten nicht entschlüsseln. Wenn Sie den Schlüssel verlieren (oder ändern), müssen Sie alle Verbindungsdetails, die mit diesem Schlüssel verschlüsselt wurden, in der Verwaltungskonsole zurücksetzen.
2. Setzen Sie Ihren geheimen Schlüssel als Umgebungsvariable `MB_ENCRYPTION_SECRET_KEY`. Bei selbst gehosteten [Pro- und Enterprise-Plänen](https://www.metabase.com/pricing/) können Sie dies auch über die [Konfigurationsdatei](../configuring-metabase/config-file.md) einstellen.


### Beispielbefehle zum Erstellen und Hinzufügen eines Schlüssels


1. Sie können ` openssl` benutzen, um einen kryptographisch sicheren, zufällig generierten 32-Zeichen-Schlüssel zu erzeugen.
```
openssl rand -base64 32
```
2. Kopieren Sie den Schlüssel in Ihre Zwischenablage. Er sollte in etwa so aussehen:
```
IYqrSi5QDthvFWe4/WdAxhnra5DZC3RKx3ZSrOJDKsM=
```
3. Setzen Sie den Schlüssel als Umgebungsvariable und starten Sie Metabase wie gewohnt.
```
MB_ENCRYPTION_SECRET_KEY="IYqrSi5QDthvFWe4/WdAxhnra5DZC3RKx3ZSrOJDKsM=" java --add-opens java.base/java.nio=ALL-UNNAMED -jar metabase.jar
```


Sobald Sie den Wert "MB_ENCRYPTION_SECRET_KEY" festgelegt haben, verschlüsselt und speichert Metabase automatisch die Verbindungsdetails für jede neue Datenbank, die Sie hinzufügen. Um bestehende Verbindungen zu verschlüsseln, siehe den nächsten Abschnitt.


## Verschlüsseln einer bestehenden Verbindung


Wenn Sie Datenbanken hinzugefügt haben, bevor Sie den Wert "MB_ENCRYPTION_SECRET_KEY" festgelegt haben, können Sie die Verbindungsdetails verschlüsseln, indem Sie zu jeder dieser Datenbanken in **Verwaltungseinstellungen** > **Datenbanken** gehen und auf die Schaltfläche **Speichern** klicken. Bestehende Datenbanken mit unverschlüsselten Details funktionieren weiterhin normal.


## Drehen eines Verschlüsselungsschlüssels


1. Wir empfehlen Ihnen, vor einer Schlüsselrotation ein [Backup](../installation-and-operation/backing-up-metabase-application-data.md) Ihrer Daten durchzuführen.
2. Beenden Sie die Ausführung Ihrer Metabase-Anwendung.
3. Führen Sie den CLI-Befehl "rotate-encryption-key" aus.
- Legen Sie den aktuellen Verschlüsselungsschlüssel als ` MB_ENCRYPTION_SECRET_KEY` fest.
- Setzen Sie den neuen Verschlüsselungscode als Parameter.


### Beispielbefehl zum Drehen eines Schlüssels


```
MB_ENCRYPTION_SECRET_KEY=Ihr-aktueller-Schlüssel java --add-opens java.base/java.nio=ALL-UNNAMED -jar metabase.jar rotate-encryption-key new-key
```


## Deaktivieren eines Verschlüsselungscodes


Um einen Verschlüsselungscode zu deaktivieren, befolgen Sie die Schritte zur [Rotation eines Verschlüsselungscodes](#rotating-an-encryption-key), verwenden Sie jedoch eine leere Zeichenfolge(`""`) als neuen Schlüssel.


### Beispielbefehl zum Deaktivieren eines Schlüssels


```
MB_ENCRYPTION_SECRET_KEY="your-current-key" java --add-opens java.base/java.nio=ALL-UNNAMED -jar metabase.jar rotate-encryption-key ""
