24 - Syntaxhervorhebungen mit "prism.js"
========================================

[Zurück zur Übersicht][MAIN]

Ziel
----

Die Syntaxhervorhebungen mit "highlight.js"
funktionieren ganz gut. Allerdings soll ["prism.js"][PRISM]
einige Zusatzfunktionen haben und auch mehr
Formate unterstützen. Ich will das hier ausprobieren!

Änderungen
----------

Ursprünglich habe ich die CSS, die "prism.min.js" und den "prism-autoloader.min.js"
via CDN "jsdelivr" eingebunden. Ergebnis: Nur sehr wenige Sprachen sind unterstützt.

Danach habe ich auf der Download-Seite
alle Sprachen und Plugins aktiviert und
die beiden Dateien "prism-1.26.0.js" und ".css"
erstellt, heruntergeladen und eingebunden
in die "index.html".

[MAIN]:  ../README.md
[PRISM]: https://prismjs.com
