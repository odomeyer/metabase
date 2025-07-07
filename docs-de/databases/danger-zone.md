---
Titel: Gefahrenzone
Beschreibung: Im Abschnitt "Gefahrenzone" der Datenbankverbindungen können Sie Feldwerte verwerfen oder Datenbankverbindungen und alle damit verbundenen Inhalte entfernen.
---


# Gefahrenzone


Der Abschnitt "Gefahrenzone" der Datenbankverbindung ist der destruktive Abschnitt. Hier können Sie die Feldwerte für diese Datenbank verwerfen oder die Datenbank ganz entfernen.


Aber da Sie natürlich [Backups Ihrer Metabase-Anwendungsdatenbank](../installation-and-operation/backing-up-metabase-application-data.md) erstellen, ist das nicht _so_ destruktiv. Aber diese Änderungen sind in der Metabase dauerhaft. Die einzige Möglichkeit, Ihre Daten wiederherzustellen, ist die Wiederherstellung Ihrer Metabase-Anwendungsdatenbank aus einem Backup. Wenn Sie die [Metabase Cloud](https://www.metabase.com/cloud/) nutzen, werden die Backups für Sie durchgeführt.


So greifen Sie auf den Bereich "Gefahrenzone" für eine Datenbankverbindung zu:


1. Klicken Sie auf das Symbol **Zahnrad** oben rechts in der Metabase.
2. Gehen Sie zu **Admin-Einstellungen** > **Datenbanken**.
3. Suchen Sie die Datenbank, die Sie ändern möchten, und klicken Sie sie an.
4. Blättern Sie auf der Einstellungsseite der Datenbank nach unten, um den Abschnitt "Gefahrenzone" zu finden.


## Gespeicherte Feldwerte verwerfen


Mit dieser Option können Sie alle gespeicherten Feldwerte löschen, die während [syncs and fingerprinting](./sync-scan.md) gesammelt wurden. Dies löscht die zwischengespeicherten Informationen über die Felder Ihrer Datenbank, hat aber keinen Einfluss auf die tatsächlichen Datenbankdaten oder Verbindungseinstellungen.


## Diese Datenbank entfernen


> Wenn Sie versuchen, von einer Entwicklungs-DB auf eine Produktions-DB zu migrieren, müssen Sie dies nicht tun. Sie können einfach
> Ihre Verbindungsdetails bearbeiten.


Dadurch wird die Datenbank _Verbindung_ gelöscht (nicht Ihre Datenbank und deren Daten). Durch das Löschen der Verbindung werden aber auch alle Fragen, Modelle, Metriken und Segmente gelöscht. Sie müssen eine Reihe von Kästchen ankreuzen, damit Sie überhaupt wissen, was Sie tun.


Diese Aktion ist in der Metabase unumkehrbar. Wenn Sie versehentlich eine Datenbankverbindung löschen, können Sie Ihre Daten nur wiederherstellen, indem Sie Ihre Metabase aus der letzten [Sicherung Ihrer Anwendungsdatenbank](../installation-and-operation/backing-up-metabase-application-data.md) wiederherstellen.

