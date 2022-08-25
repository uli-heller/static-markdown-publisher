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

Deaktivieren von "prism.js"
---------------------------

Die Deaktivierung von "prism.js" erfolgt durch Modifikation von "config.js". Hier müssen
die beiden Referenzen auf "prism.js/css" gelöscht oder deaktiviert werden!

```diff
--- a/step-32_optional-prismjs/config.js
+++ b/step-32_optional-prismjs/config.js
@@ -5,11 +5,11 @@ const config = {
         { filename: "footer.md", elementId: "footermd", insertBeforeElementId: "bottomid", isNavbar: true },
     ],
     javascripts: [
-        "prism-1.26.0.js",
+//        "prism-1.26.0.js",
     ],
     stylesheets: [
         "stuttgart.css",
-        "prism-1.26.0.css",
+//        "prism-1.26.0.css",
     ],
     multiLanguage: true,
     navbarClass:   'navbar',
```

[MAIN]:  ../README.md
[STEP25-PRISMJS]: ../step-25_prismjs/README.md
[EXAMPLE]: index.md
