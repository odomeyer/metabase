---
Titel: Fehlerbehebung bei Verbindungs-Timeouts
---


# Fehlerbehebung bei Verbindungs-Timeouts


Wenn sich Ihre Abfragen aufhängen oder ein Timeout auftritt, könnte das Problem von Ihrer:


- [Datenbankverbindung](./db-connection.md)
- Lastverteiler
- Reverse-Proxy-Server (z. B. Nginx)
- Jetty
- Cloud-Dienst


## Ressourcen für allgemeine Einsätze


Die Behebung von Timeout-Problemen hängt von Ihrer spezifischen Einrichtung ab. Diese Ressourcen können helfen:


- [Jetty-Anschlüsse][configuring-jetty]
- [EC2-Fehlerbehebung][ec2-troubleshooting]
- [Elastic Load Balancing Verwaltung der Verbindungszeitüberschreitung][elb-timeout]
- [App Engine: Umgang mit DeadlineExceededErrors][app-engine-timeout]


## Stecken Sie immer noch fest?


Wenn Sie Ihr Problem nicht mit Hilfe der Anleitungen zur Fehlerbehebung lösen können:


- Suchen oder fragen Sie in der [Metabase-Community][Diskurs].
- Suchen Sie nach [bekannten Fehlern oder Einschränkungen][known-issues].

[app-engine-timeout]: https://cloud.google.com/appengine/articles/deadlineexceedederrors
[configuring-jetty]: https://jetty.org/docs/jetty/12/operations-guide/protocols/index.html
[discourse]: https://discourse.metabase.com/
[ec2-troubleshooting]: https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/TroubleshootingInstancesConnecting.html
[elb-timeout]: https://aws.amazon.com/blogs/aws/elb-idle-timeout-control/
[known-issues]: ./known-issues.md
