---
Titel: Kennwörter
redirect_from:
- /docs/latest/operations-guide/changing-password-complexity
---


# Passwörter


Metabase kann die Authentifizierung per E-Mail und Passwort erlauben.


## Passwortkomplexität


Metabase bietet eine Reihe von Steuerelementen für Administratoren, die es vorziehen, die Passwortanforderungen für ihre Benutzerkonten zu erhöhen.


export MB_PASSWORT_COMPLEXITY=stark
export MB_PASSWORT_LÄNGE=10


Die obigen Einstellungen können unabhängig voneinander verwendet werden, es ist also kein Problem, nur die eine oder die andere zu verwenden. Standardmäßig verwendet Metabase Komplexität =`normal` und eine Passwortlänge von 6. Für die Auswahl der Komplexität stehen folgende Optionen zur Verfügung:


-`schwach` = keine Zeichenbeschränkungen
-normal" = mindestens 1 Ziffer
-stark" = mindestens 8 Zeichen, davon 2 Kleinbuchstaben, 2 Großbuchstaben, 1 Ziffer und 1 Sonderzeichen


Standardmäßig verhindert die Metabase auch, dass Benutzer Kennwörter festlegen, die in einer Liste gängiger Kennwörter enthalten sind (wie "qwerty123" und
"passw0rd"). Das Ändern der Komplexitätsanforderung auf`schwach` schaltet dieses Verhalten aus.


## Deaktivieren von Passwort-Logins


{% include plans-blockquote.html feature="Deaktivieren von Kennwortanmeldungen" %}


Bei Pro- und Enterprise-Tarifen können Sie verlangen, dass sich Personen mit SSO anmelden, indem Sie die Passwortauthentifizierung unter **Admin-Einstellungen** > **Authentifizierung** deaktivieren.

