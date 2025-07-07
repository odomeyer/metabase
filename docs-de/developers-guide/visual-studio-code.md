---
Titel: Entwickeln mit Visual Studio Code
---


# Entwickeln mit Visual Studio Code


## Fehlersuche


Installieren Sie zunächst die folgende Erweiterung:


- [Debugger für Firefox](https://marketplace.visualstudio.com/items?itemName=firefox-devtools.vscode-firefox-debug)


Hinweis_: Der Debugger für Chrome ist veraltet. Sie können ihn getrost löschen, da Visual Studio Code jetzt über [einen gebündelten JavaScript-Debugger](https://github.com/microsoft/vscode-js-debug) verfügt, der die gleiche Funktionalität abdeckt.


Bevor Sie mit der Debugging-Sitzung beginnen, vergewissern Sie sich, dass Metabase erstellt und ausgeführt wird. Wählen Sie das Menü _Ansicht_, _Befehlspalette_, suchen Sie nach und wählen Sie _Tasks: Build Task ausführen_. Alternativ können Sie die entsprechende Tastenkombination "Strg+Umschalt+B" verwenden. Das eingebaute Terminal zeigt den Fortschritt an. Warten Sie einige Augenblicke, bis Webpack eine vollständige (100 %) Bündelung anzeigt.


Um mit dem Debuggen von Metabase zu beginnen, wechseln Sie in die Debug-Ansicht (Tastenkombination: `Strg+Umschalt+D`) und wählen Sie dann eine der beiden Startkonfigurationen aus dem Dropdown-Menü am oberen Rand:


- Debuggen mit Firefox, oder
- Debuggen mit Chrome


Starten Sie danach die Debugging-Sitzung, indem Sie Menü _Ausführen_, _Debugging starten_ (Tastaturkürzel: `F5`) wählen.


Für weitere Details lesen Sie bitte die komplette VS Code Dokumentation auf [Debugging](https://code.visualstudio.com/docs/editor/debugging).


## Docker-basierter Workflow


Diese Anleitung ermöglicht es Ihnen, mit [Visual Studio Code](https://code.visualstudio.com/) an der Metabase-Codebasis unter Windows, Linux oder macOS zu arbeiten, **ohne** die notwendigen Abhängigkeiten manuell zu installieren. Dies ist möglich, indem Docker-Container und die Remote Containers-Erweiterung von VS Code genutzt werden.


Für weitere Details folgen Sie bitte der vollständigen VS Code Anleitung zu [Developing inside a Container](https://code.visualstudio.com/docs/remote/containers).


Voraussetzungen:


- [Visual Studio Code](https://code.visualstudio.com/) (natürlich)
- [Docker](https://www.docker.com/)
- [Remote - Containers Erweiterung](https://marketplace.visualstudio.com/items?itemName=ms-vscode-remote.remote-containers) für VS Code


Wichtig_: Stellen Sie sicher, dass Docker ordnungsgemäß läuft und zum Herunterladen eines Images und zum Starten eines Containers verwendet werden kann, z.B. durch Ausführen:


```
$ docker run hello-world
```


Wenn alles gut geht, sollten Sie die folgende Meldung sehen:


```
Hallo von Docker!
Diese Meldung zeigt, dass Ihre Installation korrekt zu funktionieren scheint.
```


Die Schritte:


1. Metabase-Repository klonen


2. Starten Sie VS Code und öffnen Sie das geklonte Metabase-Repository.


3. Wählen Sie im Menü _Ansicht_ _Befehlspalette... _ und suchen Sie dann _Remote-Container: In Container neu öffnen_. (VS Code kann Sie auch auffordern, dies mit einem "In Container öffnen" Popup zu tun).
**Hinweis**: VS Code erstellt den Container zum ersten Mal und es kann einige Zeit dauern. Nachfolgende Ladevorgänge sollten viel schneller sein.


4. Verwenden Sie das Menü _Ansicht_, _Befehlspalette_, suchen Sie nach und wählen Sie _Tasks: Run Build Task_ (alternativ können Sie auch die Tastenkombination "Strg+Shift+B" verwenden).


5. Nach einer Weile (nachdem alle JavaScript- und Clojure-Abhängigkeiten vollständig heruntergeladen wurden), öffnen Sie localhost:3000 mit Ihrem Webbrowser.
