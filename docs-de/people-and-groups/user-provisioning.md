---
Titel: Benutzerbereitstellung mit SCIM
---


# Benutzerbereitstellung mit SCIM


{% include plans-blockquote.html feature="User provisioning with SCIM" %}


Die Metabase unterstützt das User Provisioning über das System for Cross-Domain Identity Management (SCIM) Protokoll. Zusätzlich zu Single Sign-on (SSO) können Sie das Benutzer-Provisioning in der Metabase mit SCIM einrichten, um:


- **Entkopplung von Authentifizierung und Provisioning**. Auch wenn sich jeder mit SSO authentifizieren kann, möchten Sie vielleicht, dass nur bestimmte Personen ein Konto in der Metabase erstellen können.
-Unterstützung der Deprovisionierung von Benutzerkonten**. Wenn Sie jemanden aus Ihrem SSO deaktivieren, kann SCIM Metabase mitteilen, dass das Metabase-Konto ebenfalls deaktiviert werden soll.


> Zurzeit unterstützt Metabase offiziell SCIM für [Okta](https://help.okta.com/en-us/content/topics/apps/apps_app_integration_wizard_scim.htm?cshid=ext_Apps_App_Integration_Wizard-scim) und [Microsoft Entra ID](https://learn.microsoft.com/en-us/entra/identity/app-provisioning/configure-automatic-user-provisioning-portal). Andere SCIM-Anbieter funktionieren möglicherweise, aber wir haben sie nicht getestet. Wenn Sie Probleme mit einem anderen Identitätsanbieter haben,wenden Sie sich bitte [an uns](https://www.metabase.com/help-premium).


## Einrichten der Benutzerbereitstellung


(/images/user-provisioning.png)[Einrichten der Benutzerbereitstellung mit SCIM in der Metabase]


So richten Sie das Benutzer-Provisioning ein. Klicken Sie auf das Einstellungssymbol **Zahnrad** oben rechts und navigieren Sie zu **Verwaltungseinstellungen** > **Einstellungen**> **Authentifizierung**.


Klicken Sie auf die Registerkarte**Benutzerbereitstellung**.


## Benutzerbereitstellung über SCIM


Um das Benutzer-Provisioning mit SCIM einzurichten, klicken Sie auf den Kippschalter, um es zu aktivieren. Metabase teilt Ihnen die SCIM-Endpunkt-URL und das SCIM-Token mit, die Sie mit Ihrem Identitätsanbieter teilen müssen.


> Wenn Sie zuvor die Benutzerbereitstellung mit SAML eingerichtet haben, schaltet Metabase diese Einstellung aus und verwendet stattdessen die SCIM-Einrichtung.


## SCIM-Endpunkt-URL


Der SCIM-Endpunkt lautet "/api/ee/scim/v2". Ihre URL sieht also etwa so aus:


```
https://metabase.example.com/api/ee/scim/v2
```


Ersetzen Sie den Hostnamen durch den Hostnamen Ihrer Metabase.


Geben Sie diese Endpunkt-URL für Ihren Identitätsanbieter frei.


## SCIM-Token


Kopieren Sie den Token und speichern Sie ihn an einem sicheren Ort. Aus Sicherheitsgründen kann die Metabase Ihnen das Token nicht mehr anzeigen. Sie können das Token jedoch neu generieren, aber Sie müssen Ihren Identitätsanbieter über das neue Token informieren.


## SCIM mit Okta


Sobald Sie SCIM in der Metabase aktiviert und Ihre SCIM-Endpunkt-URL und Ihr SCIM-Token erhalten haben, folgen Sie den Anweisungen für [Einrichten von SCIM in Okta](https://help.okta.com/en-us/content/topics/apps/apps_app_integration_wizard_scim.htm?cshid=ext_Apps_App_Integration_Wizard-scim).


Mit Okta unterstützt Metabase die Bereitstellung von Benutzern und Gruppen; Gruppen werden in Metabase erstellt und aufgefüllt.


HINWEIS: Der Authentifizierungsmodus, den Sie einstellen müssen, ist "HTTP Header".


## SCIM mit Microsoft Entra ID


Sobald Sie SCIM in der Metabase aktiviert und die SCIM-Endpunkt-URL und das SCIM-Token erhalten haben, folgen Sie den Anweisungen für [Einrichten von SCIM in Microsoft Entra ID](https://learn.microsoft.com/en-us/entra/identity/app-provisioning/configure-automatic-user-provisioning-portal).


Mit Microsoft Entra ID unterstützt die Metabase nur das Provisioning von Benutzern (Gruppen werden nicht erstellt oder aufgefüllt).


## Benachrichtigung von Administratoren über neue Benutzer, die über SSO bereitgestellt wurden


Wenn Sie für die Bereitstellung von Benutzerkonten nicht SCIM verwenden, können Sie optional festlegen, dass die Metabase eine E-Mail an Administratoren sendet, wenn sich jemand zum ersten Mal über SSO bei der Metabase anmeldet (wodurch ein Metabase-Konto erstellt wird). Für diese Einstellung ist es nicht erforderlich, SCIM einzurichten.
