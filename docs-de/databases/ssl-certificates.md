---
Titel: SSL-Zertifikat
redirect_from:
- /docs/latest/administration-guide/secure-database-connections-with-ssl-certificates
---


# SSL-Zertifikat


Wenn Sie Ihre Metabase Cloud oder eine selbst gehostete Instanz mit einer Datenbank verbinden möchten, können Sie die Verbindung mit Hilfe der Secure Socket Layer (SSL)-Verschlüsselung mit einem Zertifikat sichern.


Warum Sie das tun sollten:


- Sie verwenden Metabase Cloud und möchten die Identität des Data Warehouse sicherstellen, mit dem Sie sich verbinden (z. B. PostgreSQL, MySQL).
- Sie hosten Metabase selbst und möchten die Identität eines Data Warehouse sicherstellen, das von einem externen Anbieter gehostet wird. Sie können diese Methode auch verwenden, um sicherzustellen, dass Sie bei der Verbindung mit Ihrer Anwendungsdatenbank die strengsten Verbindungsparameter verwenden.


Wenn Sie Metabase Cloud verwenden, wird die Anwendungsdatenbank für Sie verwaltet, sodass Sie nur die Verbindungen zu Data Warehouses sichern müssen, die Sie Ihrer Metabase hinzufügen.


## Voraussetzungen


Eine Datenbank, die eine JDBC-Verbindung zulässt, da Sie einen Verbindungsstring verwenden müssen, um das zu verwendende Zertifikat anzugeben.


## Schritt 1: Laden Sie das Stammzertifikat von Ihrem Anbieter herunter.


Wenn Sie Metabase über einen Docker-Container ausführen, sollten Sie bereits über die Zertifikate für AWS und Azure verfügen.


Sie finden die Zertifikate im Verzeichnis "/app/certs/" im Docker-Image von Metabase:


- AWS RDS: "/app/certs/rds-combined-ca-bundle.pem".
- Azure Zertifikat: `/app/certs/DigiCertGlobalRootG2.crt.pem`


Wenn Sie ein anderes Zertifikat benötigen, können Sie Ihr eigenes Docker-Image erstellen. Besuchen Sie die Seite Ihres externen Anbieters für Ihre Datenbank und finden Sie einen Link zum Herunterladen des Stammzertifikats für die Verbindung mit Ihrer Datenbank.


## Schritt 2: Speichern Sie das Zertifikat


**Selbst gehostet**


Speichern Sie das heruntergeladene Zertifikat in demselben Verzeichnis, in dem Sie auch die Datei metabase.jar aufbewahren. Technisch gesehen können Sie das Zertifikat an einem beliebigen Ort speichern, aber es empfiehlt sich, es im gleichen Verzeichnis wie die Datei metabase.jar zu speichern. Sie geben den Pfad des Zertifikats in Ihrer Verbindungszeichenfolge an.


**Metabase Cloud**


Sie müssen zuerst [Schritt 3: Fügen Sie Ihre Datenbank hinzu](#step-3-add-your-database) ausführen.


Danach können Sie zu**Admin** >**Datenbanken** gehen und Ihre Datenbank auswählen. Suchen Sie den Abschnitt**SSL-Client-Zertifikat** und klicken Sie auf**Datei auswählen**, um Ihr heruntergeladenes Zertifikat hochzuladen.


## Schritt 3: Fügen Sie Ihre Datenbank hinzu


Nehmen wir an, Sie möchten eine Verbindung zu einer PostgreSQL-Datenbank sichern. Folgen Sie den Anweisungen in der App, um die Datenbank hinzuzufügen. Weitere Informationen zum Einrichten einer Datenbankverbindung finden Sie in unseren Dokumenten für [Hinzufügen einer Datenbank](./connecting.md).


## Schritt 4: Aktivieren Sie die Option "Sichere Verbindung (SSL) verwenden".


Wenn Ihre Datenbank eine JDBC-Verbindung unterstützt, stellt Ihnen Metabase ein Feld zur Verfügung, in das Sie zusätzliche Parameter für Ihre Verbindungszeichenfolge eingeben können. Metabase verwendet die Parameter im Verbindungsstring, um eine sichere Verbindung herzustellen.


## Schritt 5: Hinzufügen zusätzlicher Optionen für die Verbindungszeichenfolge


Sie müssen den Speicherort des Zertifikats auf dem Server angeben, auf dem die Metabase läuft.


Wenn Sie sich zum Beispiel mit einer PostgreSQL-Datenbank verbinden, müssen Sie zwei Parameter hinzufügen:


-sslmode". Sie können die vollständige Liste der Optionen in der [PostgreSQL-Dokumentation](https://jdbc.postgresql.org/documentation/ssl/#configuring-the-client) einsehen. Wir empfehlen Ihnen, ` verify-full` zu verwenden; es ist am sichersten und der Overhead ist minimal.
-sslrootcert`. Hier geben Sie den Dateipfad für das Zertifikat an.
