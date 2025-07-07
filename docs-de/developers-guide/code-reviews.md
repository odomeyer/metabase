---
Titel: "Code-Überprüfungen"
redirect_from:
- /docs/latest/code-reviews
---


# Code-Reviews


Das übergeordnete Ziel einer Codeüberprüfung ist es, als Sicherheitsnetz für andere Personen in unserem Team zu dienen und ihnen zu helfen, besseren Code zu schreiben, und nicht, sie oder ihren Code zu beurteilen. Im Zweifelsfall gehen Sie davon aus, dass sie gute Absichten haben und seien Sie nett.


## Ziele


- Bugs aufspüren
- Nicht offensichtliche Konsequenzen eines Ansatzes aufdecken - wird dieser PR künftige Codes schwieriger zu sichern oder fehlerhafter machen.
- In Situationen, in denen Dinge kodiert wurden, ohne dass darüber gesprochen wurde, dient ein Code-Review als Sanity-Check, um sicherzustellen, dass ein korrekter Ansatz verfolgt wird
- Aufzeigen von Implikationen des PR für Teile der Metabase, die von einem PR nicht berührt werden
- Weisen Sie auf Stellen hin, an denen ein guter Ansatz oder Stil verwendet wurde. Code Reviews sind kein Hassfest. Wenn ein PR nicht völlig schrecklich ist, sollte es eine gleiche Anzahl von guten und schlechten Punkten geben, die angesprochen werden.


## Denkweise bei einer Codeüberprüfung


Ihr primäres Ziel als Prüfer ist es, als Sicherheitsnetz zu dienen und zu verhindern, dass schlechter Code zusammengeführt wird. Die Definition von "schlecht" ist höchst subjektiv, kontextabhängig und wird sich mit der Zeit und der Reife des Produkts ändern.


Wenn Sie eindeutige Fehler finden, nehmen Sie sich die Zeit, zu notieren, warum Sie sie für Fehler halten.


Wenn Sie Stellen sehen, an denen Sie mit einem Ansatz nicht einverstanden sind, sagen Sie es. Nehmen Sie sich aber auch die Zeit, um zu verstehen, warum der Autor eine bestimmte Entscheidung getroffen hat. Sie sollten davon ausgehen, dass die Autorin oder der Autor eine gute Entscheidung getroffen hat, die auf ihrem oder seinem Wissen in diesem Moment beruht. Wahrscheinlich haben Sie einen anderen Wissensstand und sehen andere Ergebnisse. Setzen Sie sich mit diesen auseinander. Sie sehen vielleicht Dinge, die Sie nicht sehen, und umgekehrt.


Suchen Sie nach Tricks, Techniken oder Redewendungen, die Sie sich abgucken können. Ihre Teamkollegen sind kluge Leute. Wahrscheinlich haben sie Tricks, von denen Sie lernen können. Lassen Sie sie das unbedingt wissen.


## Denkweise bei einer Code-Überprüfung


Der Prüfer tut Ihnen einen Gefallen. Sie sind dazu da, Ihnen zu helfen, die bestmögliche Arbeit zu leisten. Die Besten der Besten haben Trainer, Redakteure und Mentoren. Ihre Code-Reviewer sollten Ihnen auf dieselbe Weise helfen. In Situationen, in denen sie erfahrener sind, kann dies ein direktes Mentoring sein. In Situationen, in denen sie jünger sind, haben sie einen frischen Blick, der Sie vielleicht dazu bringt, tief verwurzelte Annahmen zu hinterfragen.


Wenn ein Gutachter mit einem von Ihnen gewählten Ansatz nicht einverstanden ist, versuchen Sie zu verstehen, warum. Sie wissen vielleicht Dinge oder sehen Konsequenzen, die Sie nicht gesehen haben. Auch wenn sie sich vielleicht nicht so viele Gedanken über das spezifische Thema der PR gemacht haben wie Sie, denken sie wahrscheinlich auch über die Auswirkungen der PR auf Bereiche nach, denen Sie vielleicht keine Aufmerksamkeit schenken.


Wenn jemand Ihrer PR ein deutliches :-1: verpasst, seien Sie besonders geduldig. Gehen Sie der Frage nach, warum die PR ihrer Meinung nach fehlerhaft ist. Gehen Sie an das Gespräch mit der Absicht heran, die PR zu verbessern und nicht Ihren Ansatz zu verteidigen. Sie bekommen keine Punkte dafür, dass Sie ein besserer Debattierer sind, aber Sie bekommen Punkte dafür, dass Sie einen besseren Code und ein besseres Produkt liefern, unabhängig davon, woher die Inspiration oder die Ideen stammen.


## Prozess


- Jeder PR von signifikanter Komplexität muss von mindestens einem anderen Ingenieur im Team (oder @salsakran) :+1:'d werden, um zusammengeführt zu werden
- Fügen Sie Personen, die Ihrer Meinung nach Ihren PR prüfen sollten, zu den PR-Empfängern hinzu. Der Prüfer kann sich selbst entfernen, sobald er den PR geprüft hat oder entschieden hat, dass er nicht der geeignete Prüfer ist.
- Code, der Auswirkungen auf die Arbeit anderer Ingenieure hat, sollte von diesen überprüft werden.
- Ein:+1: ist der Standard "Ich bin damit einverstanden"
- Ein:+0: (das habe ich mir ausgedacht) ist "Ich bin nicht begeistert davon, aber wenn andere Leute "+1" sagen, kann es zusammengeführt werden
- Ein:-1: ist ein hartes Veto. Dies sollte sparsam bei alltäglichen PRs eingesetzt werden, und nur bei Dingen, die Tests vermissen lassen, eklatante Verstöße gegen einen Styleguide, oder Annahmen brechen, von denen ein anderer Teil der Codebasis abhängt.
- Wenn Sie einen wichtigen Zweig herausschneiden, ohne das Design zu besprechen, oder die Auswirkungen mit anderen Ingenieuren zu besprechen, deren Arbeit davon betroffen sein könnte, sollten Sie mit einem :-1: rechnen, und sich nicht darauf versteifen, kontroverse Abschnitte zu überarbeiten.
- Jeder PR, der eine :-1: hat, kann NICHT zusammengeführt werden, bis das Problem gelöst ist.
- Der Besitzer des PR und die Person, die ein :-1: abgibt, sollten die Differenzen in der Herangehensweise klären.
- Wenn es zu einer Pattsituation kommt, gibt @salsakran eine entscheidende Stimme ab. Patt-Situationen sollten selten sein.


Beachten Sie, dass diese :+1:, :+0: und :-1: explizit in einem Kommentar angegeben werden sollten, und nicht als Reaktion auf die Hauptbeschreibung des PR auf github. Eine Änderung von :-1: zu :+1: sollte ebenfalls explizit in einem Kommentar angegeben werden.


## Zeitplan


- PRs für Probleme mit hoher Priorität sollten einem Code-Review unterzogen werden, sobald sie verfügbar sind.
- PRs für Probleme in einem Meilenstein können ein paar Tage warten.
- Wenn es keine :+1:'s für einen PR gibt, liegt es in der Verantwortung des Erstellers des PRs, sich mit anderen in Verbindung zu setzen und ihren Code überprüfen zu lassen. Um es noch einmal zu wiederholen: Ein PR muss mit :+1: versehen werden, um zusammengeführt zu werden, und wenn er nicht überprüft wurde, liegt es in der Verantwortung des Erstellers des PR, einen Überprüfer aufzutreiben.
- Wenn es eine :-1: + keine klare Lösung gibt, sollten sowohl der Ersteller des PRs als auch der :-1: Wähler eine Stunde in den nächsten ein oder zwei Tagen einplanen, um das Problem zu diskutieren und zu planen, wie es gelöst werden kann.
