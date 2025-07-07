---
Titel: Fragen oder Dashboards können nicht gespeichert werden, oder es wird eine leere Seite angezeigt
---


# Fragen oder Dashboards können nicht gespeichert werden, oder es wird eine leere Seite angezeigt


Wenn der Versuch, eine Frage oder ein Dashboard zu speichern, manchmal fehlschlägt oder Metabase nur eine leere Seite lädt, liegt das Problem möglicherweise an der Verwendung eines Proxys. Ein Proxy kann auch andere Funktionen wie eine Web Application Firewall (WAF), eine Inhaltsoptimierung oder einen Cache enthalten. Beispiele für Proxys, von denen bekannt ist, dass sie Probleme mit Metabase verursachen, sind:


- Rocket Loader und WAF von Cloudflare
- WAF von Azure
- PageSpeed-Modul für Apache
- Einige Antiviren-Browsererweiterungen oder Add-ons


## Speichern von Fragen oder Dashboards schlägt fehl


Wenn das Speichern von Fragen oder Dashboards fehlschlägt und auf der Schaltfläche Speichern die Meldung "Speichern fehlgeschlagen" angezeigt wird oder Sie die Fehlermeldung "Sie haben leider keine Berechtigung, das zu sehen" erhalten, liegt das Problem möglicherweise bei einer WAF wie Cloudflare oder Azure.


- Wenn das Speichern fehlschlägt, überprüfen Sie die Registerkarte "Konsole" in den Entwicklertools Ihres Browsers auf etwaige Fehler.
- Sie sollten auch die Registerkarte "Netzwerk" in den Entwicklertools Ihres Browsers überprüfen, um die Netzwerkanforderung anzuzeigen. Normalerweise schlägt sie mit dem Fehlercode 403 fehl, was bedeutet, dass der Fehler von der WAF und nicht von der Metabase stammt.


Wenn Sie auf die Anfrage klicken, werden weitere Informationen angezeigt, und ein Blick auf die Kopfzeilen gibt in der Regel Aufschluss darüber, woher die Anfrage stammt.


Einige WAFs verfügen über einen dynamischen Schutz, was bedeutet, dass das Problem möglicherweise erst nach einem Upgrade der Metabase auftritt und nach ein paar Tagen verschwindet.


Die Lösung besteht darin, die WAF für Metabase zu deaktivieren. Einige Dienste zeigen an, welche Regeln ausgelöst wurden, so dass es möglicherweise ausreicht, diese Regeln zu deaktivieren.


## Anzeige einer leeren Seite anstelle der Metabase-Oberfläche


Wenn die Metabase eine leere Seite anstelle der Benutzeroberfläche anzeigt, liegt das Problem in der Regel an der Inhaltsoptimierung wie PageSpeed oder dem Rocket Loader von Cloudflare.


- Überprüfen Sie die Registerkarte "Konsole" in den Entwicklertools Ihres Browsers auf Fehler, die die Content Security Policy (CSP) betreffen.
- Prüfen Sie, ob Metabase den HTML-Code liefern konnte, indem Sie mit der rechten Maustaste auf die leere Seite klicken und "Seitenquelle anzeigen" wählen. Es sieht vielleicht wie Kauderwelsch aus, aber in der Nähe von Zeile 25 sollte "<title>Metabase</title>" stehen.


Die Lösung besteht darin, die Inhaltsoptimierung für die Metabase zu deaktivieren.

