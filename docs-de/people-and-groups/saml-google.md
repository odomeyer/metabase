---
Titel: SAML mit Google
redirect_from:
- /docs/latest/enterprise-guide/saml-google
---


# SAML mit Google


{% include plans-blockquote.html feature="Google SAML-Authentifizierung" %}


1. Richten Sie eine [benutzerdefinierte SAML-App](https://support.google.com/a/answer/6087519) in Ihrer [Google-Administrationskonsole](https://admin.google.com) ein.
2. Wenn Sie den Anweisungen von Google folgen, müssen Sie:


- [Informationen über Google für die Metabase speichern](#saving-google-idp-info-for-metabase).
- [Google-Informationen für die Metabase bereitstellen](#filling-out-the-metabase-saml-form).
- [Metabasis-Informationen für Google bereitstellen ](#filling-out-service-provider-details).
- [Einrichten von Attribut-Zuordnungen in Google](#setting-up-attribute-mappings).


Siehe [Authentifizierung mit SAML](./authenticating-with-saml.md) für allgemeine SAML Informationen.


## Google IdP-Informationen für die Metabase speichern


Auf der Seite **Google Identity Provider Details**:


1. Laden Sie die **IdP-Metadaten** herunter.
2. Kopieren Sie die **SSO-URL**.
3. Herunterladen des **Zertifikats**.


## Ausfüllen des Metabase SAML-Formulars


1. Suchen Sie in Ihren Google **IdP-Metadaten** den **Aussteller**.
- Der**Aussteller** sieht wie folgt aus: `https://accounts.google.com/o/saml2/`.
2. Gehen Sie zu Ihrem Metabase SAML-Formular(**Admin-Einstellungen** > **Authentifizierung** > **SAML**).
3. Tragen Sie den **Aussteller** in das Feld **SAML Identity Provider Issuer** der Metabase ein.
4. Geben Sie die **SSO-URL** in das Feld **SAML Identity Provider URL** der Metabase ein.
5. Fügen Sie das **Zertifikat** in das Feld **SAML Identity Provider Certificate** der Metabase ein.


- Achten Sie darauf, dass alle Kopf- und Fußzeilen-Kommentare (z. B. "---BEGIN CERTIFICATE---") enthalten sind.


## Ausfüllen der Details zum Dienstanbieter


Auf der Seite**Dienstanbieterdetails**:


1. Geben Sie in das Feld Google **ACS URL** die Metabase **URL ein, an die der IdP weiterleiten soll.
2. Geben Sie den**SAML-Anwendungsnamen** der Metabasis in das Feld**Entitäts-ID** von Google ein.
- Der**SAML-Anwendungsname** kann jeder beliebige Wert sein (z. B. "yourcompany-metabase").
3. **Start URL** und **Signierte Antwort** sind optionale Felder.


## Einrichten von Attribut-Zuordnungen


Auf der Seite**Attribut-Zuordnungen** müssen Sie "Vorname", "Nachname" und "E-Mail" als Attribute hinzufügen, damit Google sie während der Authentifizierung an die Metabase weitergeben kann.


Beispiel: So fügen Sie das Attribut "Vorname" hinzu:


1. Klicken Sie auf **Weitere Zuordnung hinzufügen**.
2. Wählen Sie unter **Google Directory-Attribute **Grundlegende Informationen** > **Vorname** als Feldname für das Attribut.
3. Gehen Sie zu Ihrem Metabase SAML-Formular und suchen Sie nach **SAML-Attribute** > **Attribut "Vorname des Benutzers" **.
- Das Attribut sieht wie folgt aus: `http://schemas.xmlsoap.org/ws/2005/05/identity/claims/givenname`.
4. Fügen Sie dasAttribut **Vorname des Nutzers** unter Ihren Google **App-Attributen** ein.
5. Wiederholen Sie die Schritte 1-3 für die Attribute "Nachname" und "E-Mail".


## Einrichten der Gruppenmitgliedschaft synchronisieren


1. Richten Sie in Google Admin ein mehrwertiges [benutzerdefiniertes Nutzerattribut](https://support.google.com/a/answer/6208725?hl=en#zippy=%2Cadd-a-new-custom-attribute) für Ihre Nutzer ein (empfohlen, wenn Sie mehrere SAML-App-Berechtigungen in Google verwalten oder keine bestehenden Google-Gruppen haben, die mit Ihren gewünschten Metabase-Gruppen übereinstimmen) ODER [Zuordnung zu bestehenden Google-Gruppen](https://support.google.com/a/answer/11143403?hl=en).
