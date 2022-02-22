32 - Optionale Syntaxhervorhebung mit "prism.js"
================================================

[Zurück zur Übersicht][MAIN]

Ziel
----

Seit [Schritt 25 - Syntaxhervorhebung mit "prism.js"][STEP25-PRISMJS]
ist "prism.js" fest eingebunden in die "index.html".
Ziel dieses Schrittes ist es, optional auf "prism.js" verzichten
zu können.

Hier eine [Testseite][EXAMPLE].

Änderungen
----------

### config.js

Neuer Parameter "javascripts": Hier werden Javascript-Dateien
aufgelistet, die anfangs geladen und ausgeführt werden.
"config.js" wird automatisch hinzugefügt. "prism-1.26.0.js"
muß geladen werden.

Erweitern des Parameters "stylesheets": "prism-1.26.0.css"
muß geladen werden.

### index.html

- Initialisierung: Laden und ausführen von "javascripts".
- Syntaxhervorhebung: "Prism" prüfen und verwenden, falls vorhanden.

[MAIN]:  ../README.md
[STEP25-PRISMJS]: ../step-25_prismjs/README.md
[EXAMPLE]: index.md
