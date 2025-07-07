---
Titel: Metabase sendet keine E-Mail
---


# Metabase sendet keine E-Mails


Sie haben Metabase angewiesen, E-Mail-Benachrichtigungen zu senden, aber:


- Die Benachrichtigungen kommen nicht an.


Versuchen Sie zunächst, eine Test-E-Mail zu senden, um das Problem einzugrenzen, bevor Sie weitere Schritte zur Fehlerbehebung unternehmen.


## Können Sie erfolgreich eine Test-E-Mail senden?


**Ursache:** Host, Port, E-Mail-Adresse oder Kennwort wurden möglicherweise falsch eingerichtet, oder Host und Port des E-Mail-Servers wurden falsch eingerichtet.


**Zu unternehmende Schritte:**


1. Navigieren Sie zum **Admin Panel** und klicken Sie in der linken Seitenleiste auf **E-Mail**.
2. Vergewissern Sie sich, dass Ihr Host, Ihr Port, Ihre E-Mail-Adresse und Ihr Passwort korrekt eingegeben wurden. Wenn ja, klicken Sie auf**Änderungen speichern**. Wenn Ihre Änderungen erfolgreich gespeichert wurden, wird die Option**Test-E-Mail senden** angezeigt.
3. Klicken Sie auf **Test-E-Mail senden**. Die Test-E-Mail wird an die mit Ihrem Metabase-Konto verbundene Adresse gesendet.
4. Überprüfen Sie, ob die E-Mail an Ihr Konto zugestellt wurde.
5. Wenn die Nachricht nicht gesendet wird oder eine Fehlermeldung in der Metabase angezeigt wird, versuchen Sie, dieselben Kontoanmeldeinformationen in einem anderen E-Mail-Programm zu verwenden, und prüfen Sie, ob sie funktionieren. Sehen Sie sich die Protokolle für detailliertere Fehler an, indem Sie zu **Fehlerbehebung** navigieren und in der linken Seitenleiste auf **Protokolle** klicken.


## Sendet der Mailserver die Nachricht tatsächlich?


**Ursache:** Einige E-Mail-Zustelldienste haben sehr spezifische Regeln für gültige "Absender"-Adressen oder verfügen über Testmodi, die die Zustellung einschränken.


**Zu unternehmende Schritte:**


1. Vergewissern Sie sich, dass Ihr Zustelldienst den Versand von E-Mails an die gewünschte Domäne zulässt. (Wie Sie das genau machen, hängt von dem Zustelldienst ab, mit dem Sie sich verbinden).
2. Vergewissern Sie sich, dass Sie die "Absender"-Adresse, die Sie für die Metabase verwenden, auf die Whitelist gesetzt haben.
3. Überprüfen Sie die Protokolle des Mailservers auf eventuelle Fehlermeldungen.
4. Wenn Sie Zugriff auf die ausgehende Warteschlange Ihres E-Mail-Zustelldienstes oder ein Dashboard haben, überprüfen Sie auch dieses auf Fehler.


## Wird die E-Mail gesendet, kommt aber nicht an?


**Ursache:** Die Nachricht wird korrekt gesendet, aber nicht empfangen (zumindest nicht dort, wo Sie es erwarten).


**Zu unternehmende Schritte:**


1. Prüfen Sie, ob die an andere Konten gesendeten E-Mails ankommen, z. B. ob die Kollegen ihre Benachrichtigungen erhalten?
2. Wenn ja, überprüfen Sie Ihren Spam-Ordner, alle Weiterleitungsregeln, die Sie eingerichtet haben, usw.
3. Prüfen Sie, ob Sie denselben E-Mail-Anbieter verwenden wie die Personen, die ihre Nachrichten erhalten. Wenn nicht, könnte das Problem bei den Zustellbarkeitsregeln liegen - prüfen Sie, ob Sie Ihre E-Mails mit [DomainKeys Identified Mail][dkim] (DKIM) signieren.


[bugs]:. /bugs.md
[dkim]: https://en.wikipedia.org/wiki/DomainKeys_Identified_Mail
[office-365-bug]: https://github.com/metabase/metabase/issues/4272

