27 - Mehrsprachigkeit
=====================

[Zurück zur Übersicht][MAIN]

Ziel
----

Ich hätte gerne die Möglichkeit, die MD-Seiten
mehrsprachig zur Verfügung zu stellen, also:

- [README.md](README.md) ... Standardsprache
- README_de.md ... gleiches Dokument auf "Deutsch"
- README_de-DE.md ... gleiches Dokument auf "Deutsch" für die Region "Deutschland"
- [README_de-AT.md](README_de-AT.md) ... gleiches Dokument auf "Deutsch" für die Region "Österreich"
- [README_de-CH.md](README_de-CH.md) ... gleiches Dokument auf "Deutsch" für die Region "Schweiz"
- [README_en.md](README_en.md) ... gleiches Dokument auf "Englisch"
- [README_fr.md](README_fr.md) ... gleiches Dokument auf "Französisch"

Im ersten Ansatz unterstütze ich nur "navigator.language"-Belegungen in diesem Format:

- xx-YY
- xx ... Sprache
- YY ... Region

Das ist eine ziemlich starke Vereinfachung und muß vermutlich bei Gelegenheit nochmal überarbeitet werden!

Änderungen
----------

Geändert werden muß nur die Datei "index.html":

- Erstellen einer Funktion, die für eine MD-Datei alle denkbaren Sprachvarianten erzeugt
- Verpacken des Ladens der MD-Datei in eine Schleife, bei der alle Varianten durchprobiert werden
- Fehlgeschlagene Ladeversuche sorgen für Zeitverlust sowie Fehlermeldungen in der Browser-Konsole
  (die Fehlermeldungen werden auch mit `catch` und/oder `Promise.reject` nicht unterdrückt)
- Die Unterstützung der Mehtsprachigkeit ist konfigurierbar via "config.js"

Hier die Änderungen im Detail:

```diff
--- index.html
+++ index.html
@@ -146,13 +146,22 @@
             clear.classList.add("clear");
             navbarElement.appendChild(clear);
         }
     }
 
+    async function fetchFile(filename) {
+        var contentFetcher;
+        for (const newFilename of languageFilenames(filename)) {
+            contentFetcher = await fetch(newFilename, {cache: "no-store"});
+            if (contentFetcher.ok) {
+                return contentFetcher.text();
+            }
+        }
+    }
+    
     async function load(element, filename, isNavbar) {
-        const contentFetcher = await fetch(filename, {cache: "no-store"});
-        const contentText = await contentFetcher.text();
+        const contentText = await fetchFile(filename);
         element.innerHTML = marked.parse(contentText, {
             renderer: renderer,
             highlight: function(code, lang) {
                 var language = Prism.languages[lang];
                 if (language) {
@@ -268,10 +277,48 @@
         var nPathname = normalizePath(dirname(window.location.pathname));
         var nFilename = normalizePath(filename);
         return '#'+filename.replace(nPathname, '');
     }
 
+    function languageFilenames (filename) {
+        var result = [];
+        if (! filename.endsWith('.md')) {
+            result.push(filename);
+        } else {
+            const navigatorLanguageRegion = navigator.language;
+            const navigatorLanguage = navigatorLanguageRegion.slice(0,2);
+            var basename = filename.slice(0, -3);
+            const languageRegions = basename.match(/_[a-z][a-z]-[A-Z][A-Z]$/);
+            if (languageRegions) {
+                const languageRegion = languageRegions[0];
+                basename = basename.slice(0, -languageRegion.length);
+                result.push(filename);
+                //result.push(basename + languageRegion + '.md');
+                result.push(basename + languageRegion.slice(0,3) + '.md');
+                result.push(basename + '_' + navigatorLanguageRegion  + '.md');
+                result.push(basename + '_' + navigatorLanguage  + '.md');
+                result.push(basename + '.md');
+            } else {
+                const languages = basename.match(/_[a-z][a-z]$/);
+                if (languages) {
+                    const language = languages[0];
+                    basename = basename.slice(0, -language.length);
+                    result.push(filename);
+                    result.push(basename + '_' + navigatorLanguageRegion  + '.md');
+                    result.push(basename + '_' + navigatorLanguage  + '.md');
+                    result.push(basename + '.md');
+                } else {
+                    result.push(basename + '_' + navigatorLanguageRegion  + '.md');
+                    result.push(basename + '_' + navigatorLanguage  + '.md');
+                    //result.push(basename + '.md');
+                    result.push(filename);
+                }
+            }
+        }
+        return result;
+    }
+
     /*
      * newRelativeLink
      * Creates a relative link for window.location based on
      * the current hash and the new link/filename
      *
```

[MAIN]:  ../README.md

