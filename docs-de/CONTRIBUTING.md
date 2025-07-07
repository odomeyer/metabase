---


### A ) Identifizierung von Produktanforderungen aus der Community


Wir suchen aktiv nach Ideen für neue Funktionen, die von unserer Community, unserer Benutzerbasis und unserer eigenen internen Verwendung der Metabase kommen. Wir konzentrieren uns auf das zugrundeliegende _Problem_ oder _Bedürfnis_ und nicht auf Anfragen für spezifische Funktionen. Während manchmal vorgeschlagene Funktionen wie gewünscht gebaut werden, stellen wir oft fest, dass sie Änderungen an bestehenden Funktionen beinhalten, und vielleicht eine völlig andere Lösung für das zugrunde liegende Problem. Diese werden typischerweise in einer Reihe von Themen gesammelt und mit [Proposal](https://github.com/metabase/metabase/labels/.Proposal)


### B ) Synthetisierung dieser Bedürfnisse in eine konkrete Funktion


In der Regel fassen wir eine Gruppe von Fragen oder Vorschlägen zu einem neuen Funktionskonzept zusammen. In der Regel erstellen wir ein Arbeitsdokument, in dem alle "offenen Fragen" zu dem, was die Funktion tun und vor allem nicht tun soll, gesammelt werden. Wir unterhalten uns mit unseren Nutzern, führen vielleicht ausführliche Interviews durch und versuchen generell, die Funktion genau zu definieren. Wenn eine Funktion Zeit braucht, um diskutiert und definiert zu werden, wird sie mit [Proposal/Being Discussed](https://github.com/metabase/metabase/labels/.Proposal%2FBeing%20Discussed) gekennzeichnet, um anzuzeigen, dass sie noch aktiv diskutiert wird.


### C ) Entwurf der Funktion


Sobald eine Funktion definiert ist, wird sie normalerweise von einem Produktdesigner übernommen. Hier werden Low-Fi-Mocks erstellt, Feedback von unseren Nutzern und der Community eingeholt und iteriert.


Sobald die wichtigsten UX-Flows festgelegt sind, wird ein visuelles Hi-Fidelity-Design erstellt.


Funktionen, die für das Design bereit sind, werden mit [Design Needed](https://github.com/metabase/metabase/labels/.Design%20Needed) gekennzeichnet. Sobald ein Feature ein einigermaßen vollständiges visuelles Design hat, sollte es mit [Help Wanted](https://github.com/metabase/metabase/labels/.Help%20Wanted) gekennzeichnet werden.


### D ) Erstellen der Funktion


Sobald eine Funktion mit [Help Wanted](https://github.com/metabase/metabase/labels/.Help%20Wanted) gekennzeichnet ist, gilt sie als bereit für die Erstellung. Ein Mitglied des Kernteams (oder du, der du so unglaublich hilfreich bist) kann mit der Arbeit daran beginnen.


Wenn Sie etwas bauen, das die Benutzer in der Metabase sehen werden, lesen Sie bitte den Style Guide (zu finden unter `https://storybook.metabase.com`), um zu erfahren, wie und wann verschiedene Metabase UI-Elemente zu verwenden sind.


Sobald eine oder mehrere Personen mit der Arbeit an einem Feature begonnen haben, sollte es als [In Progress](https://github.com/metabase/metabase/labels/.In%20Progress) markiert werden. Sobald es einen Zweig + etwas Code gibt, wird ein Pull Request eröffnet, der mit der Funktion + allen Problemen, die zur Information der Funktion zusammengezogen wurden, verbunden ist.


### E ) Überprüfung und Zusammenführung


Alle PRs, die mehr als eine unbedeutende Änderung beinhalten, sollten überprüft werden. Siehe unseren [Code Review Process](./developers-guide/code-reviews.md).


Wenn alles gut geht, wird das Feature kodiert, verifiziert und dann wird der Pull Request zusammengeführt! Herzlichen Glückwunsch an alle.


Wenn in der Pull-Anfrage Tests fehlen, Probleme mit dem Code-Stil oder spezifische architektonische Probleme bestehen, sollten diese vor dem Zusammenführen behoben werden. Wir haben einen sehr hohen Anspruch an die Code- und Produktqualität und es ist wichtig, dass diese auch in Zukunft beibehalten wird, also haben Sie bitte Geduld mit uns.


## Wie Sie helfen können


Der erste Schritt besteht darin, sich mit dem Produkt Metabase vertraut zu machen und sich zurechtzufinden. Wenn Sie es bereits bei der Arbeit verwenden, ist das großartig! Wenn nicht, [laden Sie Metabase](https://www.metabase.com/start/oss/)herunter und spielen Sie damit herum. Lesen Sie die Dokumentationen und bekommen Sie ein Gefühl für die Funktionsweise des Produkts.


Hier sind einige Möglichkeiten, wie Sie helfen können, in der Reihenfolge der zunehmenden Koordination + Interaktion mit uns:


### Helfen Sie bei der Identifizierung von Bedürfnissen und Problemen, die Metabase lösen kann


Wenn Sie helfen wollen, probieren Sie Metabase aus. Verwenden Sie sie in Ihrem Unternehmen und berichten Sie uns, was Ihnen gefällt, was Ihnen nicht gefällt und auf welche Probleme Sie stoßen. Helfen Sie uns, Ihr Datenmodell, die erforderlichen Metriken und die üblichen Nutzungsmuster so gut wie möglich zu verstehen. Diese Informationen wirken sich direkt auf die Qualität des Produkts aus. Je mehr Sie uns über die Art Ihrer Probleme erzählen, desto besser können wir sie lösen.


### Helfen Sie uns bei der Triage und der Unterstützung anderer Benutzer


Verbringen Sie Zeit auf discourse.metabase.com und bei neuen Problemen und versuchen Sie, die gemeldeten Fehler zu reproduzieren. Helfen Sie den Leuten, die Probleme mit ihren Datenbanken haben, bei denen Sie sich auskennen, aus. Wer weiß, vielleicht können sie Ihnen in Zukunft bei etwas helfen.


Es ist hilfreich, wenn Sie unseren [Priorisierungsrahmen](https://github.com/metabase/metabase/wiki/Bug-Prioritization) verstehen, wenn Sie antworten.


### Erzählen Sie Ihren Freunden


Informieren Sie Ihre Freunde über Metabase. Gründen Sie eine Benutzergruppe in Ihrer Nähe. (http://twitter.com/metabase). Bloggen Sie darüber, wie Sie Metabase verwenden, und teilen Sie Ihre Erfahrungen.


### Bugs beheben


Nach unserer Definition sind "Bugs" Situationen, in denen das Programm nicht das tut, was es nach dem Entwurf oder der Spezifikation tun sollte. Diese sind in der Regel auf Probleme beschränkt, für die es ein klar definiertes korrektes Verhalten gibt. Es ist in der Regel sicher, sich eines dieser Probleme zu schnappen, es zu beheben, und einen PR (mit Tests!) einzureichen. Diese werden ohne großes Drama zusammengeführt, es sei denn, der PR berührt eine Menge Code. Seien Sie nicht beleidigt, wenn wir Sie bitten, kleine Änderungen vorzunehmen oder weitere Tests hinzuzufügen. Wir sind ein bisschen zwanghaft, was die Codeabdeckung und den Kodierungsstil angeht.


### Hilfe bei der Dokumentation


Es gibt viele Dokumentationen, was bedeutet, dass es schwierig ist, sie auf dem neuesten Stand zu halten. Wenn Sie Ungereimtheiten, Fehler oder veraltete Informationen bemerken, helfen Sie uns bitte, sie aktuell zu halten!


Beachten Sie, dass **wir zur Zeit keine Übersetzungen für die Dokumentation akzeptieren können**. Wir unterstützen [In-App-Übersetzungen](./configuring-metabase/localization.md) und unterstützen nur Sprachen, die zu 100% abgedeckt sind. Aber 1) ist der In-App-Text um Größenordnungen kürzer als unsere Dokumente, 2) ändert er sich langsamer, und 3) haben wir eine Menge Leute, die uns helfen. Möglicherweise werden wir in Zukunft mehrsprachige Dokumentationen unterstützen, aber im Moment müssen wir unsere Ressourcen auf die Verbesserung unserer bestehenden Dokumentation konzentrieren (und sie erweitern, um alle neuen Funktionen zu berücksichtigen, die wir hinzufügen).


### Arbeit an Funktionen


Einige Funktionen, z.B. Datenbanktreiber, haben keine benutzerorientierten Pixel. Sie eignen sich hervorragend für den Einstieg in die Mitarbeit, da sie nicht so viel Kommunikation, Diskussionen über Kompromisse und Prozesse im Allgemeinen erfordern.


In Situationen, in denen ein Entwurf bereits fertiggestellt wurde, können wir immer Hilfe gebrauchen. Melden Sie sich bei einer Pull-Anfrage oder einem Problem und bieten Sie Ihre Hilfe an.


Generell ist jedes Thema in [Help Wanted](https://github.com/metabase/metabase/labels/.Help%20Wanted) Freiwild.


### #YOLO EINFACH EINEN PR EINREICHEN


Wenn Ihnen etwas wirklich Cooles einfällt und Sie es mit uns teilen wollen, reichen Sie einfach einen PR ein. Wenn es den oben genannten Prozess nicht durchlaufen hat, werden wir es wahrscheinlich nicht zusammenführen, aber wenn es überzeugend ist, sind wir mehr als bereit, Ihnen durch Code-Reviews, Design-Reviews und allgemeines Erbsenzählertum zu helfen, damit es in den Rest unserer Codebasis passt.

---

### A ) Identifizierung von Produktanforderungen aus der Community

Wir suchen aktiv nach Ideen für neue Funktionen, die von unserer Community, unserer Benutzerbasis und unserer eigenen internen Verwendung der Metabase kommen. Wir konzentrieren uns auf das zugrundeliegende _Problem_ oder _Bedürfnis_ und nicht auf Anfragen für spezifische Funktionen. Während manchmal vorgeschlagene Funktionen wie gewünscht gebaut werden, stellen wir oft fest, dass sie Änderungen an bestehenden Funktionen beinhalten, und vielleicht eine völlig andere Lösung für das zugrunde liegende Problem. Diese werden typischerweise in einer Reihe von Themen gesammelt und mit [Proposal](https://github.com/metabase/metabase/labels/.Proposal)

### B ) Synthetisierung dieser Bedürfnisse in eine konkrete Funktion

In der Regel fassen wir eine Gruppe von Fragen oder Vorschlägen zu einem neuen Funktionskonzept zusammen. In der Regel erstellen wir ein Arbeitsdokument, in dem alle "offenen Fragen" zu dem, was die Funktion tun und vor allem nicht tun soll, gesammelt werden. Wir unterhalten uns mit unseren Nutzern, führen vielleicht ausführliche Interviews durch und versuchen generell, die Funktion genau zu definieren. Wenn eine Funktion Zeit braucht, um diskutiert und definiert zu werden, wird sie mit [Proposal/Being Discussed](https://github.com/metabase/metabase/labels/.Proposal%2FBeing%20Discussed) gekennzeichnet, um anzuzeigen, dass sie noch aktiv diskutiert wird.

###  C ) Entwurf der Funktion

Sobald eine Funktion definiert ist, wird sie normalerweise von einem Produktdesigner übernommen. Hier werden Low-Fi-Mocks erstellt, Feedback von unseren Nutzern und der Community eingeholt und iteriert.

Sobald die wichtigsten UX-Flows festgelegt sind, wird ein visuelles Hi-Fidelity-Design erstellt.

Funktionen, die für das Design bereit sind, werden mit [Design Needed](https://github.com/metabase/metabase/labels/.Design%20Needed) gekennzeichnet. Sobald ein Feature ein einigermaßen vollständiges visuelles Design hat, sollte es mit [Help Wanted](https://github.com/metabase/metabase/labels/.Help%20Wanted) gekennzeichnet werden.

### D ) Erstellen der Funktion

Sobald eine Funktion mit [Help Wanted](https://github.com/metabase/metabase/labels/.Help%20Wanted) gekennzeichnet ist, gilt sie als bereit für die Erstellung. Ein Mitglied des Kernteams (oder du, der du so unglaublich hilfreich bist) kann mit der Arbeit daran beginnen.

Wenn Sie etwas bauen, das die Benutzer in der Metabase sehen werden, lesen Sie bitte den Style Guide (zu finden unter `https://storybook.metabase.com`), um zu erfahren, wie und wann verschiedene Metabase UI-Elemente zu verwenden sind.

Sobald eine oder mehrere Personen mit der Arbeit an einem Feature begonnen haben, sollte es als [In Progress](https://github.com/metabase/metabase/labels/.In%20Progress) markiert werden. Sobald es einen Zweig + etwas Code gibt, wird ein Pull Request eröffnet, der mit der Funktion + allen Problemen, die zur Information der Funktion zusammengezogen wurden, verbunden ist.

### E ) Überprüfung und Zusammenführung

Alle PRs, die mehr als eine unbedeutende Änderung beinhalten, sollten überprüft werden. Siehe unseren [Code Review Process](./developers-guide/code-reviews.md).

Wenn alles gut geht, wird das Feature kodiert, verifiziert und dann wird der Pull Request zusammengeführt! Herzlichen Glückwunsch an alle.

Wenn in der Pull-Anfrage Tests fehlen, Probleme mit dem Code-Stil oder spezifische architektonische Probleme bestehen, sollten diese vor dem Zusammenführen behoben werden. Wir haben einen sehr hohen Anspruch an die Code- und Produktqualität und es ist wichtig, dass diese auch in Zukunft beibehalten wird, also haben Sie bitte Geduld mit uns.

## Wie Sie helfen können

Der erste Schritt besteht darin, sich mit dem Produkt Metabase vertraut zu machen und sich zurechtzufinden. Wenn Sie es bereits bei der Arbeit verwenden, ist das großartig! Wenn nicht, [laden Sie Metabase](https://www.metabase.com/start/oss/)herunter und spielen Sie damit herum. Lesen Sie die Dokumentationen und bekommen Sie ein Gefühl für die Funktionsweise des Produkts.

Hier sind einige Möglichkeiten, wie Sie helfen können, in der Reihenfolge der zunehmenden Koordination + Interaktion mit uns:

### Helfen Sie bei der Identifizierung von Bedürfnissen und Problemen, die Metabase lösen kann

Wenn Sie helfen wollen, probieren Sie Metabase aus. Verwenden Sie sie in Ihrem Unternehmen und berichten Sie uns, was Ihnen gefällt, was Ihnen nicht gefällt und auf welche Probleme Sie stoßen. Helfen Sie uns, Ihr Datenmodell, die erforderlichen Metriken und die üblichen Nutzungsmuster so gut wie möglich zu verstehen. Diese Informationen wirken sich direkt auf die Qualität des Produkts aus. Je mehr Sie uns über die Art Ihrer Probleme erzählen, desto besser können wir sie lösen.

### Helfen Sie uns bei der Triage und der Unterstützung anderer Benutzer

Verbringen Sie Zeit auf discourse.metabase.com und bei neuen Problemen und versuchen Sie, die gemeldeten Fehler zu reproduzieren. Helfen Sie den Leuten, die Probleme mit ihren Datenbanken haben, bei denen Sie sich auskennen, aus. Wer weiß, vielleicht können sie Ihnen in Zukunft bei etwas helfen.

Es ist hilfreich, wenn Sie unseren [Priorisierungsrahmen](https://github.com/metabase/metabase/wiki/Bug-Prioritization) verstehen, wenn Sie antworten.

### Erzählen Sie Ihren Freunden

Informieren Sie Ihre Freunde über Metabase. Gründen Sie eine Benutzergruppe in Ihrer Nähe. (http://twitter.com/metabase). Bloggen Sie darüber, wie Sie Metabase verwenden, und teilen Sie Ihre Erfahrungen.

### Bugs beheben

Nach unserer Definition sind "Bugs" Situationen, in denen das Programm nicht das tut, was es nach dem Entwurf oder der Spezifikation tun sollte. Diese sind in der Regel auf Probleme beschränkt, für die es ein klar definiertes korrektes Verhalten gibt. Es ist in der Regel sicher, sich eines dieser Probleme zu schnappen, es zu beheben, und einen PR (mit Tests!) einzureichen. Diese werden ohne großes Drama zusammengeführt, es sei denn, der PR berührt eine Menge Code. Seien Sie nicht beleidigt, wenn wir Sie bitten, kleine Änderungen vorzunehmen oder weitere Tests hinzuzufügen. Wir sind ein bisschen zwanghaft, was die Codeabdeckung und den Kodierungsstil angeht.

### Hilfe bei der Dokumentation

Es gibt viele Dokumentationen, was bedeutet, dass es schwierig ist, sie auf dem neuesten Stand zu halten. Wenn Sie Ungereimtheiten, Fehler oder veraltete Informationen bemerken, helfen Sie uns bitte, sie aktuell zu halten!

Beachten Sie, dass **wir zur Zeit keine Übersetzungen für die Dokumentation akzeptieren können**. Wir unterstützen [In-App-Übersetzungen](./configuring-metabase/localization.md) und unterstützen nur Sprachen, die zu 100% abgedeckt sind. Aber 1) ist der In-App-Text um Größenordnungen kürzer als unsere Dokumente, 2) ändert er sich langsamer, und 3) haben wir eine Menge Leute, die uns helfen. Möglicherweise werden wir in Zukunft mehrsprachige Dokumentationen unterstützen, aber im Moment müssen wir unsere Ressourcen auf die Verbesserung unserer bestehenden Dokumentation konzentrieren (und sie erweitern, um alle neuen Funktionen zu berücksichtigen, die wir hinzufügen).

### Arbeit an Funktionen

Einige Funktionen, z.B. Datenbanktreiber, haben keine benutzerorientierten Pixel. Sie eignen sich hervorragend für den Einstieg in die Mitarbeit, da sie nicht so viel Kommunikation, Diskussionen über Kompromisse und Prozesse im Allgemeinen erfordern.

In Situationen, in denen ein Entwurf bereits fertiggestellt wurde, können wir immer Hilfe gebrauchen. Melden Sie sich bei einer Pull-Anfrage oder einem Problem und bieten Sie Ihre Hilfe an.

Generell ist jedes Thema in [Help Wanted](https://github.com/metabase/metabase/labels/.Help%20Wanted) Freiwild.

### #YOLO EINFACH EINEN PR EINREICHEN

Wenn Ihnen etwas wirklich Cooles einfällt und Sie es mit uns teilen wollen, reichen Sie einfach einen PR ein. Wenn es den oben genannten Prozess nicht durchlaufen hat, werden wir es wahrscheinlich nicht zusammenführen, aber wenn es überzeugend ist, sind wir mehr als bereit, Ihnen durch Code-Reviews, Design-Reviews und allgemeines Erbsenzählertum zu helfen, damit es in den Rest unserer Codebasis passt.
