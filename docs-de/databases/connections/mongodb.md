---
Titel: MongoDB
redirect_from:
- /docs/latest/administration-guide/databases/mongodb
---


# MongoDB


Um eine Datenbankverbindung hinzuzufügen, klicken Sie auf das **Zahnradsymbol** oben rechts und navigieren Sie zu **Verwaltungseinstellungen** > **Datenbanken** > **Datenbank hinzufügen**.


## Unterstützte Versionen


Metabase unterstützt die älteste unterstützte Version von MongoDB bis zur neuesten stabilen Version. Siehe [MongoDB Software Lifecycle Schedules](https://www.mongodb.com/legal/support-policy/lifecycles).


## Verbindung zu MongoDB herstellen


Es gibt zwei Möglichkeiten, sich mit MongoDB zu verbinden:


1. Verwenden Sie die [Metabase-Felder zur Eingabe Ihrer Verbindungsdaten](#using-metabase-fields).
2. Einfügen des [Verbindungsstrings](#using-a-connection-string).


### Verwendung von Metabase-Feldern


Die Standardmethode für die Verbindung zu MongoDB besteht darin, die Verbindungsdetails in die von Metabase bereitgestellten Felder einzutragen:


- Host
- Name der Datenbank
- Anschluss
- Benutzername
- Kennwort
- Authentifizierungsdatenbank (optional)
- Zusätzliche Optionen für die Verbindungszeichenfolge (optional)


Sie haben auch die Möglichkeit, **eine sichere Verbindung (SSL)**zu verwenden. Aktivieren Sie SSL und fügen Sie den Inhalt der SSL-Zertifikatskette des Servers in das Textfeld ein. Diese Option ist nur für diese Verbindungsmethode verfügbar (d.h. Sie können kein Zertifikat einfügen, wenn Sie eine Verbindung mit einer Verbindungszeichenfolge herstellen).


### Erweiterte Einstellungen für die direkte Verbindung


- **DNS SRV bei der Verbindung verwenden** Die Verwendung dieser Option erfordert, dass der angegebene Host ein FQDN ist. Wenn Sie eine Verbindung zu einem Atlas-Cluster herstellen, müssen Sie diese Option möglicherweise aktivieren. Wenn Sie nicht wissen, was das bedeutet, lassen Sie diese Option deaktiviert.


### Verwendung einer Verbindungszeichenfolge


Wenn Sie eine Verbindung zu MongoDB über eine [Verbindungszeichenfolge](https://docs.mongodb.com/manual/reference/connection-string/) herstellen möchten, klicken Sie auf **Verbindungszeichenfolge einfügen**. Die Metabase-Benutzeroberfläche wird mit einem Feld zum Einfügen des Verbindungsstrings aktualisiert.


Die Metabase unterstützt derzeit NICHT die folgenden Parameter für die Verbindungszeichenfolge:


-`tlsCertificateKeyFile`
- `tlsCertificateKeyFilePassword`
-`tlsCAFile`


Wenn Sie ein Zertifikat verwenden müssen, stellen Sie die Verbindung über die [Standardmethode](# using-metabase-fields) her und aktivieren Sie **Use a secure connection (SSL)**.


### Gemeinsame Einstellungen für beide Verbindungsoptionen


- **Einen SSH-Tunnel verwenden**: Auf einige Datenbankinstallationen kann nur über einen SSH-Bastion-Host zugegriffen werden. Diese Option bietet auch eine zusätzliche Sicherheitsebene, wenn kein VPN verfügbar ist. Die Aktivierung dieser Option ist in der Regel langsamer als eine Direktverbindung.
- **Abfragen bei einfacher Exploration wiederholen**: Wenn diese Option aktiviert ist, führt Metabase automatisch Abfragen aus, wenn Benutzer bei der Anzeige einer Tabelle oder eines Diagramms mit den Schaltflächen "Zusammenfassen" und "Filtern" einfache Erkundungen vornehmen. Sie können diese Einstellung deaktivieren, wenn die Abfrage dieser Datenbank langsam ist. Diese Einstellung hat keine Auswirkungen auf Drill-Throughs oder SQL-Abfragen.
-Wählen Sie, wann Synchronisationen und Scans stattfinden**: Siehe [syncs and scans](../sync-scan.md#choose-when-syncs-and-scans-happen).
- **Regelmäßig Refingerprint-Tabellen**: Mit dieser Einstellung - die standardmäßig deaktiviert ist - kann Metabase während der Synchronisierung nach zusätzlichen Feldwerten suchen, was ein intelligenteres Verhalten ermöglicht, z. B. eine verbesserte automatische Einteilung in Balkendiagrammen.
