---
Titel: Entwicklung der Metabase mit Emacs
---


# Entwicklung der Metabase mit Emacs


.dir-locals.el enthält Emacs Lisp, das `clojure-mode` mitteilt, wie Metabase-Makros einzurücken sind und welche Argumente docstrings sind. Wann immer diese Datei aktualisiert wird,
Emacs wird Sie fragen, ob der Code sicher geladen werden kann. Sie können `!` antworten, um ihn als sicher zu speichern.


Standardmäßig fügt Emacs diesen Code als Anpassung am Ende Ihrer `init.el` ein.
Sie werden Emacs wahrscheinlich sagen wollen, dass er Anpassungen in einer anderen Datei speichern soll. Fügen Sie das Folgende zu Ihrer `init.el` hinzu:


````emacs-lisp
(setq custom-file (concat user-emacs-directory ".custom.el")) ; Customize anweisen, Anpassungen in ~/.emacs.d/.custom.el zu speichern
(ignore-errors ; lade Anpassungen aus ~/.emacs.d/.custom.el
(load-file custom-file))
```

