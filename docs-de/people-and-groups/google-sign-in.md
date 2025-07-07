---
Titel: Google Anmeldung
redirect_from:
- /docs/latest/administration-guide/10-single-sign-on
- /docs/latest/leute-und-gruppen/google-und-ldap
---


# Google Sign-In


Wenn Sie [Google Sign-In](https://developers.google.com/identity/sign-in/web/sign-in) für Single Sign-On (SSO) aktivieren, kann sich Ihr Team mit einem Klick anmelden, anstatt E-Mail und Passwort zu verwenden. SSO kann auch verwendet werden, um Personen die Möglichkeit zu geben, Metabase-Konten zu erstellen, ohne dass ein Administrator jede Person manuell hinzufügen muss. SSO-Optionen finden Sie unter **Einstellungen** > **Admin-Einstellungen** > **Authentifizierung**.


Wenn Sie Personen mit [SAML][saml-docs] oder [JWT][jwt-docs] authentifizieren möchten, können Sie dies mit [Pro und Enterprise](https://www.metabase.com/pricing/) von Metabase tun.


## Aktivieren von Google Sign-In


Google Sign-In ist eine gute Option für SSO, wenn:


- Ihr Team verwendet bereits Google Workspace, oder
- Sie möchten die 2-Schritt- oder Multi-Faktor-Authentifizierung (2FA oder MFA) von Google verwenden, um Ihre Metabase zu sichern.


## Holen Sie sich Ihre Client-ID von der Google-Entwicklerkonsole.


Damit sich Ihr Team bei Google anmelden kann, müssen Sie zunächst eine Anwendung über die [Entwicklerkonsole] von Google erstellen(https://console.developers.google.com/projectselector2/apis/library).


Als Nächstes müssen Sie Autorisierungsdaten erstellen und [eine Google API-Client-ID erhalten](https://developers.google.com/identity/gsi/web/guides/get-google-api-clientid):


- Geben Sie im Abschnitt "Authorized JavaScript origins" den URI Ihrer Metabase-Instanz an.
- Lassen Sie den Abschnitt "Authorized Redirect URIs" leer.
- Kopieren Sie Ihre Client-ID, die Sie bei der Einrichtung der Google-Anmeldung in die Metabase einfügen werden.


## Einrichten von Google Sign-in in Metabase


Sobald Sie Ihre Google API `Client ID` (mit der Endung `.apps.googleusercontent.com`) haben, besuchen Sie Ihre Metabase und:


1. Klicken Sie auf das Symbol Einstellungen **Zahnrad** oben rechts.
2. Wählen Sie **Admin-Einstellungen**.
3. Klicken Sie auf der Registerkarte **Einstellungen** auf **Authentifizierung**.
4. Klicken Sie auf der Karte **Mit Google anmelden** auf **Einrichten**.
5. Fügen Sie in das Feld **Client ID** Ihre Google API Client ID ein.


## Erstellen von Metabase-Konten mit Google Sign-in


> Bei [bezahlten Tarifen](https://www.metabase.com/pricing/) werden Sie [für jedes aktive Konto](../cloud/how-billing-works.md#what-counts-as-a-user-account) belastet.


Wenn die E-Mail-Adressen der Google-Kontoinhaber von einer bestimmten Domain stammen und Sie ihnen erlauben möchten, sich selbst anzumelden, können Sie diese Domain in das Feld **Domain** eingeben.


Nach der Einrichtung können sich bestehende Metabase-Nutzer, die mit einem Google-Konto angemeldet sind, das mit der E-Mail-Adresse übereinstimmt, die sie zur Einrichtung ihres Metabase-Kontos verwendet haben, mit einem Klick anmelden.


Beachten Sie, dass Metabase-Konten , die_ mit Google Sign-Inerstellt wurden, keine Passwörter haben; sie müssen Google verwenden, um sich bei Metabase anzumelden.


## Mehrere Domains für Google Sign-in


{% include plans-blockquote.html feature="Mehrere Domains für die Google-Anmeldung" %}


Wenn Sie einen [pro](https://www.metabase.com/product/pro) oder [Enterprise](https://www.metabase.com/product/enterprise) Plan haben, können Sie mehrere Domains aus demselben Google-Arbeitsbereich im Feld **Domain** angeben, getrennt durch ein Komma. Beispiel:`meinunternehmen.com,beispiel.com.br,anderedomain.co.uk`.


## Synchronisierung von Nutzerattributen mit Google


Nutzerattribute können nicht mit dem normalen Google Sign-In synchronisiert werden. Um Nutzerattribute zu synchronisieren, müssen Sie stattdessen [Google SAML][google-saml-docs] oder [JWT][jwt-docs] einrichten.
