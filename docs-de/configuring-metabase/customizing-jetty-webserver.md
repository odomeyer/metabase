---
Titel: Anpassung des Metabase Jetty Webservers
redirect_from:
- /docs/latest/operations-guide/customizing-jetty-webserver
---


# Anpassen des Metabase Jetty-Webservers


In den meisten Fällen gibt es keinen Grund, die Einstellungen für die Art und Weise zu ändern, wie Metabase den eingebetteten Jetty-Webserver zum Hosten der Anwendung ausführt. Wenn Sie jedoch HTTPS direkt mit Ihrem Metabase-Server ausführen möchten oder einen anderen Port benötigen, können Sie dies konfigurieren.


## Ausführen von Metabase auf einem anderen Port


Standardmäßig wird Metabase auf Port 3000 gestartet. Wenn Sie die Anwendung jedoch lieber auf einem anderen Port ausführen möchten, können Sie die folgende Umgebungsvariable setzen:


export MB_JETTY_PORT=12345
java --add-opens java.base/java.nio=ALL-UNNAMED -jar metabase.jar


In diesem Beispiel wird nach dem Start der Anwendung der Zugriff auf den Port "12345" statt auf den Standardport "3000" erfolgen.


## Überwachen einer bestimmten Netzwerkschnittstelle


Standardmäßig lauscht die Metabase auf ` localhost`. In manchen Produktionsumgebungen möchten Sie vielleicht eine andere Schnittstelle verwenden, was Sie mit der Umgebungsvariablen ` MB_JETTY_HOST` erreichen können:


export MB_JETTY_HOST=0.0.0.0
java --add-opens java.base/java.nio=ALL-UNNAMED -jar metabase.jar


## Verwendung von HTTPS mit Metabase


Wenn Sie über ein SSL-Zertifikat verfügen und die Metabase direkt über HTTPS mit ihrem Webserver ausführen möchten, können Sie die folgenden Umgebungsvariablen verwenden:


export MB_JETTY_SSL="true"
export MB_JETTY_SSL_PORT="8443"
export MB_JETTY_SSL_KEYSTORE="path/to/keystore.jks" # ersetzen Sie diesen Wert durch Ihren eigenen
export MB_JETTY_SSL_KEYSTORE_PASSWORD="storepass" # ersetzen Sie diesen Wert durch Ihren eigenen
java --add-opens java.base/java.nio=ALL-UNNAMED -jar metabase.jar


Stellen Sie sicher, dass Sie "path/to/keystore.jks" und "storepass" durch den richtigen Pfad und das richtige Passwort für Ihren [Java KeyStore](https://www.digitalocean.com/community/tutorials/java-keytool-essentials-working-with-java-keystores) ersetzen. Mit den obigen Einstellungen wird Metabase auf Port 8443 über HTTPS unter Verwendung des mitgelieferten Zertifikats ausgeführt.


Sie wissen nicht, wie Sie einen Java KeyStore selbst generieren können? Dies ist ein etwas fortgeschrittenes Thema, aber wenn Sie sich wie ein Frosch fühlen, können Sie mehr darüber lesen, wie man SSL in Jetty konfiguriert [in der eigenen Dokumentation](https://jetty.org/docs/jetty/12/operations-guide/keystore/index.html). Ansonsten ist es wahrscheinlich am einfachsten, die SSL-Terminierung außerhalb von Metabase zu handhaben.

