---
Titel: Fehlerbehebung bei der Einrichtung der SAML-Authentifizierung
---


# Fehlersuche bei der Einrichtung der SAML-Authentifizierung


{% include plans-blockquote.html feature="SAML-Authentifizierung" %}


Einige häufige Probleme bei der Einrichtung von SAML.


## Unterstützt Ihre Anwendung SAML?


Überprüfen Sie, ob die Anwendung, die Sie in Ihrem IdP erstellt haben, SAML unterstützt. Manchmal werden während des Erstellungsprozesses der Anwendung andere Optionen angezeigt.


## Ist die Aussteller- oder Entitäts-ID korrekt?


Nachdem Sie das Authentifizierungsformular mit Ihrem Identitätsanbieter ausgefüllt haben, kehren Sie zur Metabase zurück, aber es tritt ein Fehler auf. Um den Fehler zu sehen, gehen Sie zu **Admin-Einstellungen** > **Fehlerbehebung** > **Protokolle**. Es wird ein Fehler angezeigt, der in etwa lautet:**Falsche Antwort <Ausgeber\>**.


**Grundursache**: Ihre Emittenten- oder Entitäts-ID ist falsch.


**Zu ergreifende Maßnahmen**:


1. Sie sollten eine XML-Datei mit Metadaten von Ihrem Identitätsanbieter erhalten haben. Öffnen Sie diese Metadaten-Datei und suchen Sie nach der richtigen Aussteller- oder Entitäts-ID. Diese ID ist ein eindeutiger Bezeichner für den Identitätsanbieter. Je nach Anbieter sieht die Issuer- oder Entity-ID in der Regel etwa so aus:
```
http://www.example.com/141xkex604w0Q5PN724v
```
2. Kopieren Sie die Emittenten- oder Entitäts-ID aus der XML-Datei.
3. Gehen Sie zu Metabase und wählen Sie**Admin-Einstellungen** >**Einstellungen** >**Authentifizierung** >**SAML**. Geben Sie die ID des Ausstellers oder der Entität in das Feld**SAML Identity Provider Issuer** ein.


## Ist der Wert des SAML-Identitätsanbieter-Zertifikats korrekt?


Nachdem Sie das Authentifizierungsformular mit Ihrem Identitätsanbieter ausgefüllt haben, kehren Sie zur Metabase zurück, aber es wird ein Fehler ausgegeben. Gehen Sie zu**Admin-Einstellungen** >**Fehlerbehebung** >**Protokolle**. Sie werden eine Fehlermeldung sehen, die ungefähr so lautet:**Ungültiger Behauptungsfehler <Aussteller\>**.


**Wurzelursache**: Der von Ihnen eingegebene Zertifikatswert ist falsch.


**Durchzuführende Schritte**:


1. Gehen Sie zur Metabase und wählen Sie**Admin-Einstellungen** >**Einstellungen** >**Authentifizierung** >**SAML**. Überprüfen Sie, ob das Zertifikat, das Sie in das Feld**Zertifikat des SAML-Identitätsanbieters** eingegeben haben, mit dem Zertifikat in der XML-Datei übereinstimmt, die Sie von Ihrem Identitätsanbieter erhalten haben.


- Je nach Anbieter müssen Sie möglicherweise die XML-Datei herunterladen, sie in einem Texteditor öffnen und dann den Inhalt des Zertifikats kopieren und in das Feld**SAML-Identitätsanbieter-Zertifikat** in der Metabase einfügen.


- Beachten Sie, dass Ihr Zertifikatstext Kopf- und Fußzeilenkommentare enthalten kann, die wie `-----BEGIN CERTIFICATE-----` und `-----END CERTIFICATE-----` aussehen. Diese Kommentare sollten beim Einfügen des Zertifikatstextes in die Metabase berücksichtigt werden.


## Ist die SSO-URL korrekt?


Vergewissern Sie sich, dass die Single Sign On-URL (oder eine gleichwertige URL), die Sie auf der Website Ihres SAML-Anbieters eingeben, die Endung "/auth/sso" enthält. Wenn Sie z. B. möchten, dass Ihre Benutzer bei "https://metabase.mycompany.com" landen, sollte die vollständige URL "https://metabase.mycompany.com/auth/sso" lauten.


## Bei der Suche nach dem privaten Schlüssel wurde eine Null gefunden.


Dieser Fehler tritt nur auf, wenn Sie**Signierte SSO-Anfragen** verwenden. Das heißt, Sie haben in der Metabase die Felder im Konfigurationsabschnitt unter**Admin-Einstellungen** >**Einstellungen** >**Authentifizierung** >**SAML** >**Signierte SSO-Anfragen** ausgefüllt. Diese Felder sind:


-**SAML Keystore Path**: der absolute Pfad zur Keystore-Datei, die zum Signieren von SAML-Anfragen verwendet werden soll.
-SAML Keystore Password**: das Passwort zum Öffnen des Keystore.
-**SAML Keystore Alias**: der Alias für den Schlüssel, den die Metabase zum Signieren von SAML-Anfragen verwenden soll.


**Hauptursache**: Dem Zertifikat in der Keystore-Datei fehlt ein privater Schlüssel.


**Durchzuführende Schritte**:


1. Fügen Sie ein Zertifikat mit einem privaten Schlüssel zu Ihrem Keystore hinzu.


## Überprüfen, ob SAML korrekt funktioniert


Rufen Sie Ihre Metabase-Anmeldeseite auf. Wenn SAML korrekt funktioniert, sollten Sie [eine einzelne Schaltfläche zur Anmeldung](https://www.metabase.com/glossary/sso) bei Ihrem Identitätsanbieter (IdP) sehen. Sobald Sie authentifiziert sind, sollten Sie automatisch zur Metabase-Startseite weitergeleitet werden.


## Stecken Sie immer noch fest?


Wenn Sie Ihr Problem nicht mit Hilfe der Anleitungen zur Fehlerbehebung lösen können:


- Suchen oder fragen Sie die [Metabase-Community](https://discourse.metabase.com/).
- Suchen Sie nach [bekannten Fehlern oder Einschränkungen](./known-issues.md).

---
Titel: Fehlerbehebung bei der Einrichtung der SAML-Authentifizierung
---

# Fehlersuche bei der Einrichtung der SAML-Authentifizierung

{% include plans-blockquote.html feature="SAML-Authentifizierung" %}

Einige häufige Probleme bei der Einrichtung von SAML.

## Unterstützt Ihre Anwendung SAML?

Überprüfen Sie, ob die Anwendung, die Sie in Ihrem IdP erstellt haben, SAML unterstützt. Manchmal werden während des Erstellungsprozesses der Anwendung andere Optionen angezeigt.

## Ist die Aussteller- oder Entitäts-ID korrekt?

Nachdem Sie das Authentifizierungsformular mit Ihrem Identitätsanbieter ausgefüllt haben, kehren Sie zur Metabase zurück, aber es tritt ein Fehler auf. Um den Fehler zu sehen, gehen Sie zu **Admin-Einstellungen** > **Fehlerbehebung** > **Protokolle**. Es wird ein Fehler angezeigt, der in etwa lautet:**Falsche Antwort <Ausgeber\>**.

**Grundursache**: Ihre Emittenten- oder Entitäts-ID ist falsch.

**Zu ergreifende Maßnahmen**:

1. Sie sollten eine XML-Datei mit Metadaten von Ihrem Identitätsanbieter erhalten haben. Öffnen Sie diese Metadaten-Datei und suchen Sie nach der richtigen Aussteller- oder Entitäts-ID. Diese ID ist ein eindeutiger Bezeichner für den Identitätsanbieter. Je nach Anbieter sieht die Issuer- oder Entity-ID in der Regel etwa so aus:
```
http://www.example.com/141xkex604w0Q5PN724v
```
2. Kopieren Sie die Emittenten- oder Entitäts-ID aus der XML-Datei.
3. Gehen Sie zu Metabase und wählen Sie**Admin-Einstellungen** >**Einstellungen** >**Authentifizierung** >**SAML**. Geben Sie die ID des Ausstellers oder der Entität in das Feld**SAML Identity Provider Issuer** ein.

## Ist der Wert des SAML-Identitätsanbieter-Zertifikats korrekt?

Nachdem Sie das Authentifizierungsformular mit Ihrem Identitätsanbieter ausgefüllt haben, kehren Sie zur Metabase zurück, aber es wird ein Fehler ausgegeben. Gehen Sie zu**Admin-Einstellungen** >**Fehlerbehebung** >**Protokolle**. Sie werden eine Fehlermeldung sehen, die ungefähr so lautet:**Ungültiger Behauptungsfehler <Aussteller\>**.

**Wurzelursache**: Der von Ihnen eingegebene Zertifikatswert ist falsch.

**Durchzuführende Schritte**:

1. Gehen Sie zur Metabase und wählen Sie**Admin-Einstellungen** >**Einstellungen** >**Authentifizierung** >**SAML**. Überprüfen Sie, ob das Zertifikat, das Sie in das Feld**Zertifikat des SAML-Identitätsanbieters** eingegeben haben, mit dem Zertifikat in der XML-Datei übereinstimmt, die Sie von Ihrem Identitätsanbieter erhalten haben.

-  Je nach Anbieter müssen Sie möglicherweise die XML-Datei herunterladen, sie in einem Texteditor öffnen und dann den Inhalt des Zertifikats kopieren und in das Feld**SAML-Identitätsanbieter-Zertifikat** in der Metabase einfügen.

-  Beachten Sie, dass Ihr Zertifikatstext Kopf- und Fußzeilenkommentare enthalten kann, die wie `-----BEGIN CERTIFICATE-----` und `-----END CERTIFICATE-----` aussehen. Diese Kommentare sollten beim Einfügen des Zertifikatstextes in die Metabase berücksichtigt werden.

## Ist die SSO-URL korrekt?

Vergewissern Sie sich, dass die Single Sign On-URL (oder eine gleichwertige URL), die Sie auf der Website Ihres SAML-Anbieters eingeben, die Endung "/auth/sso" enthält. Wenn Sie z. B. möchten, dass Ihre Benutzer bei "https://metabase.mycompany.com" landen, sollte die vollständige URL "https://metabase.mycompany.com/auth/sso" lauten.

## Bei der Suche nach dem privaten Schlüssel wurde eine Null gefunden.

Dieser Fehler tritt nur auf, wenn Sie**Signierte SSO-Anfragen** verwenden. Das heißt, Sie haben in der Metabase die Felder im Konfigurationsabschnitt unter**Admin-Einstellungen** >**Einstellungen** >**Authentifizierung** >**SAML** >**Signierte SSO-Anfragen** ausgefüllt. Diese Felder sind:

-**SAML Keystore Path**: der absolute Pfad zur Keystore-Datei, die zum Signieren von SAML-Anfragen verwendet werden soll.
-SAML Keystore Password**: das Passwort zum Öffnen des Keystore.
-**SAML Keystore Alias**: der Alias für den Schlüssel, den die Metabase zum Signieren von SAML-Anfragen verwenden soll.

**Hauptursache**: Dem Zertifikat in der Keystore-Datei fehlt ein privater Schlüssel.

**Durchzuführende Schritte**:

1. Fügen Sie ein Zertifikat mit einem privaten Schlüssel zu Ihrem Keystore hinzu.

## Überprüfen, ob SAML korrekt funktioniert

Rufen Sie Ihre Metabase-Anmeldeseite auf. Wenn SAML korrekt funktioniert, sollten Sie [eine einzelne Schaltfläche zur Anmeldung](https://www.metabase.com/glossary/sso) bei Ihrem Identitätsanbieter (IdP) sehen. Sobald Sie authentifiziert sind, sollten Sie automatisch zur Metabase-Startseite weitergeleitet werden.

## Stecken Sie immer noch fest?

Wenn Sie Ihr Problem nicht mit Hilfe der Anleitungen zur Fehlerbehebung lösen können:

-  Suchen oder fragen Sie die [Metabase-Community](https://discourse.metabase.com/).
-  Suchen Sie nach [bekannten Fehlern oder Einschränkungen](./known-issues.md).
