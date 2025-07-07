---
Titel: Ablauf der Sitzung
redirect_from:
- /docs/latest/operations-guide/changing-session-expiration
---


# Ablauf der Sitzung


Standardmäßig sind Metabase-Sitzungen zwei Wochen nach der letzten Authentifizierung eines Benutzers (z. B. durch Eingabe von E-Mail-Adresse/Passwort oder über einen SSO-Anbieter) gültig. Selbst wenn Sie beispielsweise Ihre Metabase-Instanz täglich besuchen, müssen Sie sich alle zwei Wochen erneut anmelden.


## Sitzungsalter


Das Sitzungsalter ist die maximale Zeit, die eine Person in der Metabase eingeloggt bleibt (auch wenn die Person den Browser schließt).


Sie können die Umgebungsvariable [`MAX_SESSION_AGE`](../configuring-metabase/environment-variables.md#max_session_age) setzen:


```
# Ablauf der Sitzung auf 24 Stunden ändern
MAX_SESSION_AGE=1440 java --add-opens java.base/java.nio=ALL-UNNAMED -jar metabase.jar
```


oder setzen Sie die Java-Systemeigenschaft:


```
java -DMAX_SESSION_AGE=1440 -jar metabase.jar
```


MAX_SESSION_AGE ist in Minuten angegeben.


## Sitzungszeitüberschreitung


{% include plans-blockquote.html feature="Session timeout" %}


Der Sitzungs-Timeout ist die maximale Zeit, die eine Person inaktiv sein kann (z. B. wenn jemand die Metabase in einem längst vergessenen Browser-Tab geöffnet lässt).


Sie können diese Einstellung über**Admin** >**Authentifizierung** umschalten oder die Umgebungsvariable [`MB_SESSION_TIMEOUT`](../configuring-metabase/environment-variables.md#mb_session_timeout) setzen.


Die Sitzungszeitüberschreitung ist standardmäßig null. Sie können eine Sitzungszeitüberschreitung verwenden, um Personen früher abzumelden als das maximale [Sitzungsalter](#session-age).


## Sitzungs-Cookies


Metabase unterstützt auch die Verwendung von [Sitzungscookies](https://developer.mozilla.org/en-US/docs/Web/HTTP/Cookies#Session_cookies), was bedeutet, dass Benutzer nur so lange authentifiziert bleiben, bis sie ihren Browser schließen. Dies kann für jeden Benutzer aktiviert werden, indem das Kontrollkästchen "Remember me" bei der Anmeldung deaktiviert wird. Sobald der Benutzer seinen Browser schließt, muss er sich beim nächsten Besuch der Metabase erneut anmelden. Selbst wenn Sie Ihren Browser für immer geöffnet lassen, müssen Sie sich nach zwei Wochen oder nach dem von Ihnen konfigurierten Ablaufdatum der Sitzung erneut authentifizieren.


Mit der Umgebungsvariablen oder der Java-Systemeigenschaft "MB_SESSION_COOKIES" können Sie Metabase anweisen, immer Sitzungscookies zu verwenden:


```
MB_SESSION_COOKIES=true java --add-opens java.base/java.nio=ALL-UNNAMED -jar metabase.jar
```


Wenn Sie diese Umgebungsvariable setzen, wird das Verhalten der "Remember me"-Checkbox außer Kraft gesetzt und die Verwendung von Session-Cookies für alle Benutzer erzwungen.


Beachten Sie, dass Browser die "Sitzungswiederherstellung" verwenden können, was bedeutet, dass sie die vorherige Sitzung automatisch wiederherstellen, wenn sie erneut geöffnet werden. In diesem Fall verhält sich der Browser so, als wäre er nie geschlossen worden; Sitzungscookies verhalten sich dann wie permanente Cookies. Bei Browsern, die diese Funktion unterstützen, ist dieses Verhalten normalerweise konfigurierbar.

