---
Titel: SAML mit Keycloak
redirect_from:
- /docs/latest/enterprise-guide/saml-keycloak
---


# SAML mit Keycloak


Keycloak ist eine Open-Source-Plattform, die als Benutzerverzeichnis verwendet werden kann, um Benutzerdaten zu speichern und gleichzeitig als IdP für Single Sign-On zu fungieren.


1. [SAML in Keycloak einrichten](#working-in-the-keycloak-console) (der Identitätsanbieter).
2. [SAML in der Metabase einrichten](./authenticating-with-saml.md#enabling-saml-authentication-in-metabase) (der Dienstanbieter).


Weitere Informationen finden Sie in unserer Anleitung zur [Authentifizierung mit SAML](./authenticating-with-saml.md).


## Arbeiten in der Keycloak-Konsole


1. Gehen Sie zur Keycloak-Administrationskonsole und melden Sie sich als Administrator an.
2. Erstellen Sie einen Benutzer unter **Verwalten** > **Benutzer**. Sie müssen die Felder mit einer E-Mail, einem Vornamen und einem Nachnamen ausfüllen.
3. Sobald Sie mindestens einen Benutzer erstellt haben, werden oben auf der Seite**Benutzer** Navigationsregisterkarten angezeigt. Gehen Sie zu**Anmeldeinformationen**, um das Passwort für Ihren Benutzer festzulegen.
- Deaktivieren Sie das Kontrollkästchen**Temporär**.
- Klicken Sie auf**Passwort festlegen**, um Ihre Änderungen zu speichern.
4. Erstellen Sie einen neuen SSO-Client unter **Verwalten** > **Clients** > **Erstellen**


-**Client-ID**: Geben Sie "metabase" in Kleinbuchstaben ein.
- **Client-Typ**: Wählen Sie "SAML" aus der Dropdown-Liste.
- Klicken Sie auf**Weiter**.
-**Gültige URIs für die Umleitung**: Die URL, unter der Sie Ihre Metabase-Instanz hosten, gefolgt von einem Schrägstrich (/) und einem Sternchen (*). Wenn Sie die Metabase zum Beispiel lokal unter "http://localhost:3000" hosten, lautet die URL "http://localhost:3000/".
- **Home-URL**: Gehen Sie in Ihrer Metabase zu**Admin-Einstellungen** >**Authentifizierung** >**SAML**. Sie finden Ihre Home-URL im Feld**URL, zu der der IdP zurückleiten soll**.
- Klicken Sie auf**Speichern**.


5) (Optional, aber in Testumgebungen empfohlen) Deaktivieren Sie die Schlüsselsignierung für den SSO-Client. Siehe [Einstellungen für das Signieren von SSO-Anfragen](./authenticating-with-saml.md#settings-for-signing-sso-requests-optional).


- Klicken Sie auf die Registerkarte**Schlüssel**.
-**Client-Signatur erforderlich:** Aus.


6. Ordnen Sie Benutzerattribute aus der Metabase dem SSO-Client zu.
- Klicken Sie auf die Registerkarte **Client-Bereiche**.
- Klicken Sie auf`Metabasis-dediziert`.
- Klicken Sie auf **Vordefinierte Mapper hinzufügen**.
- [Attribute von Benutzern in Keycloak auf Metabase abbilden](#mapping-attributes-from-users-in-keycloak-to-metabase).
7. Konfigurieren Sie den Dienstanbieter (Metabase) unter**Konfigurieren** >**Realm-Einstellungen**.
- Wählen Sie unter**Endpunkte** die Option "SAML 2.0 Identity Provider Metadata".
- Eine XML-Datei wird in einer neuen Registerkarte geöffnet.
- Bewahren Sie diese als Referenz auf, wir werden sie im nächsten Abschnitt zur Konfiguration der Metabase verwenden.


## Mapping der Felder von Keycloak auf Metabase


1. Gehen Sie zu Ihrer Metabase **Admin-Einstellungen** > **Authentifizierung** > **SAML**.
2. Aus der XML-Datei von Schritt 7 oben:
- **SAML Identity Provider URL**: Fügen Sie die URL ein, die direkt nach der folgenden Zeichenfolge erscheint: `Binding="urn:oasis:names:tc:SAML:2.0:bindings:HTTP-POST" Location=`
- **SAML Identity Provider Issuer**: Fügen Sie die URL ein, die direkt nach `entityID=` erscheint.
- **SAML Identity Provider Zertifikat**: Geben Sie die lange Zeichenfolge ein, die nach dem Tag "<X509Certificate>" erscheint. Seien Sie vorsichtig bei der Eingabe dieser Zeichenfolge: Wenn Buchstaben oder Sonderzeichen hinzugefügt oder weggelassen werden, wird die Einrichtung nicht funktionieren.
- **SAML-Anwendungsname**: `Metabase`
3. Klicken Sie auf **Änderungen speichern**.
4. Vergewissern Sie sich, dass **SAML-Authentifizierung** oben auf der Seite auf **EIN** gesetzt ist.
