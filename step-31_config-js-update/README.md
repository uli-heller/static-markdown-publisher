30 - Initialseite
=================

[Zurück zur Übersicht][MAIN]

Ziel
----

Ich habe festgestellt, dass es Probleme gibt, wenn wir über URLs wie

- <http://localhost:8000>
- möglicherweise noch mehr

auf die Seiten zugreifen. Ziel dieses Schrittes ist die Korrektur dieser Probleme.

Probleme und Lösungen
---------------------

### index.html

Vorbereitungen:

- Starte den Python-Server: `python3 -m http.server 8000 -d step-30_welcome-page/`
- Greife mittels Browser zu auf <http://localhost:8000>

Problem:

- Statt "index.md" wird "index.html" angezeigt

Lösung:

```diff
--- a/step-30_welcome-page/index.html
+++ b/step-30_welcome-page/index.html
@@ -383,6 +383,12 @@
 
     function initPage () {
         mySite.currentUrl = Site.nonHashUrl(new URL(window.location));
+        //if (mySite.currentUrl.pathname.endsWith('/')) {
+        //    mySite.currentUrl.pathname += mySite.config.indexHtml;
+        //}
+        if (!mySite.currentUrl.hash) {
+            mySite.currentUrl.hash = mySite.config.indexMd;
+        }
         const base = document.getElementById('base');
         if (base) {
             base.href = mySite.currentUrl;
```

### Unterordner

Vorbereitungen:

- Lege ein temporäres Verzeichnis an: `mkdir x`
- Lege einen Symlink an: `ln -s ../step-30_welcome-page x/y`
- Starte den Python-Server: `python3 -m http.server 8000 -d x/`
- Greife mittels Browser zu auf <http://localhost:8000/y>
- Stoppe den Python-Server
- Lösche das temporäre Verzeichnis: `rm -rf x`

Problem:

- Die "index.md" wird korrekt angezeigt, die Kopf- und Fußzeilen fehlen!

Lösung:

- Anpassung 1: In "config.js" geben wir die Resourcen ohne führenden Schrägstrich an
- Anpassung 2: Spezielle Ladefunktionen für Resourcen aus config.js einführen in "index.html"

[MAIN]:  ../README.md

