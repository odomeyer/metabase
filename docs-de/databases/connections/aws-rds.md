---
Titel: "Verbindung zu AWS's Relational Database Service (RDS)"
redirect_from:
- /docs/latest/administration-guide/databases/aws-rds
---


# Verbindung mit dem Relationalen Datenbankdienst (RDS) von AWS


RDS bietet mehrere Datenbanken, die Metabase offiziell unterstützt, darunter PostgreSQL, MySQL, MariaDB, Oracle und SQL Server.


Hier erfahren Sie, wie Sie Verbindungsinformationen für Datenbanken auf Amazons RDS erhalten:


1. Gehen Sie zu Ihrer AWS Management Console.
- Brauchen Sie Hilfe, um diese zu finden? Besuchen Sie `https://**My_AWS_Account_ID**.signin.aws.amazon.com/console`. Achten Sie jedoch darauf, dass Sie Ihre eigene AWS-Konto-ID eingeben!
2. Gehen Sie zu **Datenbank** > **RDS** > **Instanzen**.
3. Wählen Sie die Datenbank aus, die Sie mit Metabase verbinden möchten.
4. Holen Sie sich die Informationen, die Sie benötigen, um die Metabase mit Ihrem RDS zu verbinden:
- **Hostname**. Dieser wird als Endpunkt-Parameter aufgeführt.
- **Anschluss**. Suchen Sie den Port-Parameter unter Sicherheit und Netzwerk.
- **Benutzername**. Diesen finden Sie unter Konfigurationsdetails.
- **Datenbankname**. Diesen finden Sie unter Konfigurationsdetails.
- **Passwort**. Fragen Sie Ihren Datenbankadministrator nach dem Passwort.


## Datenbank-Routing


Siehe [Database routing](../../permissions/database-routing.md).

