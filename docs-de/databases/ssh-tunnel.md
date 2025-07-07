---
Titel: SSH-Tunneling
redirect_from:
- /docs/latest/administration-guide/ssh-tunnel-fuer-datenbank-verbindungen
---


# SSH-Tunneling


Metabase kann eine Verbindung zu einigen Datenbanken herstellen, indem zunächst eine Verbindung zu einem Server zwischen Metabase und einem Data Warehouse hergestellt wird und dann eine Verbindung zum Data Warehouse über diese Verbindung als Brücke hergestellt wird. Dies ermöglicht die Verbindung zu einigen Data Warehouses in Situationen, in denen die Verwendung von Metabase ansonsten nicht möglich wäre.


## Wann wird SSH-Tunneling verwendet?


Im Allgemeinen gibt es zwei grundlegende Anwendungsfälle für einen SSH-Tunnel:


- Wenn eine direkte Verbindung unmöglich ist.
- Wenn eine direkte Verbindung aufgrund von Sicherheitsrichtlinien verboten ist.


Wenn sich ein Data Warehouse innerhalb einer Unternehmensumgebung befindet, werden direkte Verbindungen manchmal durch Sicherheitseinrichtungen wie Firewalls und Intrusion Prevention Systeme blockiert. Bastion-Hosts bieten die Möglichkeit, sich zunächst mit einem Computer am Rande des geschützten Netzwerks zu verbinden und dann von diesem Bastion-Host-Computer aus eine zweite Verbindung zum Data Warehouse innerhalb des internen Netzwerks herzustellen, wobei diese beiden Verbindungen im Wesentlichen zusammengefügt werden. Mithilfe der SSH-Tunneling-Funktion kann Metabase diesen Prozess automatisieren.


> [Metabase Cloud](https://www.metabase.com/cloud/) unterstützt derzeit keine VPN-Verbindungen zu Datenbanken. Um eine Verbindung zu Datenbanken in privaten Netzwerken herzustellen, können Sie stattdessen SSH-Tunneling verwenden.


## So verwenden Sie SSH-Tunneling


Wenn Sie eine Verbindung über einen Bastion-Host herstellen:


- Beantworten Sie den Parameter "Use an SSH-tunnel for database connections" mit "yes".
- Geben Sie in den Parameter "Host" den Hostnamen für das Data Warehouse ein, wie er von innerhalb des Netzwerks gesehen wird.
- Geben Sie in den Parameter "Port" den Port des Data Warehouse ein, wie er von innerhalb des Netzes gesehen wird.
- Geben Sie den externen Namen des Bastion-Hosts von außerhalb des Netzes (oder wo immer Sie sich befinden) in den Parameter "SSH tunnel host" ein.
- Geben Sie den SSH-Port, den Sie von außerhalb des Netzes sehen, in den Parameter "SSH-Tunnelport" ein. In der Regel ist dies 22, unabhängig davon, mit welchem Data Warehouse Sie sich verbinden.


Für die Authentifizierung haben Sie zwei Möglichkeiten:


- **Mit einem Benutzernamen und einem Passwort:**


- Geben Sie in die Felder "SSH-Tunnel-Benutzername" und "SSH-Tunnel-Passwort" den Benutzernamen und das Passwort ein, mit denen Sie sich beim Bastion-Host anmelden.


-SSH-Schlüssel verwenden (PKI-Authentifizierung):**


- Wählen Sie SSH-Schlüssel für die Option "SSH-Authentifizierung".
- Fügen Sie den Inhalt Ihres privaten SSH-Schlüssels in das Feld "SSH-Schlüssel" ein.
- Wenn Ihr Schlüssel eine Passphrase hat, geben Sie diese in das Feld "Passphrase für den privaten SSH-Schlüssel" ein.


Wenn Sie keine Verbindung herstellen können, testen Sie Ihre SSH-Zugangsdaten, indem Sie sich mit ssh direkt mit dem SSH-Server/Bastion Host verbinden:


```
ssh <SSH-Tunnel-Benutzername>@<SSH-Tunnel-Host> -p <SSH-Tunnel-Port>
```


Ein weiterer häufiger Fall, in dem direkte Verbindungen nicht möglich sind, ist die Verbindung zu einem Data Warehouse, das nur lokal zugänglich ist und keine Fernverbindungen zulässt. In diesem Fall öffnen Sie eine SSH-Verbindung zum Data Warehouse und verbinden sich von dort aus wieder mit demselben Computer.


- Beantworten Sie den Parameter "Use an SSH-tunnel for database connections" mit "yes".
- Geben Sie "localhost" in den Parameter "Host" ein. Dies ist der Name des Servers.
- Geben Sie in den Parameter "Port" denselben Wert ein, den Sie verwenden würden, wenn Sie sich direkt am Data Warehouse-Host-System befinden würden.
- Geben Sie in den Parameter "SSH-Tunnel-Host" den externen Namen des Data Warehouse ein, wie er von außerhalb des Netzes (oder wo immer Sie sich befinden) gesehen wird.
- Geben Sie in den Parameter "SSH-Tunnelport" den SSH-Port ein, den Sie von außerhalb des Netzes sehen. In der Regel ist dies 22, unabhängig davon, mit welchem Data Warehouse Sie sich verbinden.
- Wählen Sie Ihre Authentifizierungsmethode wie oben beschrieben (Benutzername und Passwort oder SSH-Schlüssel).


Wenn Sie Probleme bei der Verbindung haben, überprüfen Sie den SSH-Host-Port und das Passwort, indem Sie sich manuell mit ssh oder PuTTY auf älteren Windows-Systemen verbinden.
