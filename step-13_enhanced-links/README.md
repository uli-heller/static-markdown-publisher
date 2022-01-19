13 - Diverse Link-Typen und Links zu externen Resourcen
=======================================================

[Zurück zur Übersicht][MAIN]

Ziel
----

Ich möchte, dass diverse Links funktionieren:

- relative Links haben wir schon ausführlich in den Vorgängerschritten getestet
- Host-relative Links - [/index.md](/README.md)
- Protokoll-relative Links - [//README.md](//README.md)
- Absolute Links - [https://github.com](https://github.com)
- Link zu Bilddatei (SVG) - [/stuttgart.svg](/stuttgart.svg)
- Link zu Bilddatei (PNG) - [/stuttgart.png](/stuttgart.png)

Ähnliches auch für Bilder:

- Bilder mit relativen Links haben wir schon ausführlich in den Vorgängerschritten getestet
- Bilder mit host-relativen Links - ![/stuttgart.png](/stuttgart.png)
- Bilder mit protokoll-relativen Links - ![//stuttgart.png](//stuttgart.png)
- Bilder mit absoluten Links - ![https://github.com](https://github.com)
- Link zu Bilddatei (SVG) - ![/stuttgart.svg](/stuttgart.svg)
- Link zu Bilddatei (PNG) - ![/stuttgart.png](/stuttgart.png)

Probleme
--------

### Absolute Links werden falsch umgesetzt

Typ              |Link/Image                  |Ergebnis
-----------------|----------------------------|--------
Absolut          |`[...](https://github.com)` |http://localhost:8000/#/https:/github.com

Hier die Änderungen für die Korrektur:

```diff
index afa40a0..9906a6d 100644
--- a/step-13_enhanced-links/index.html
+++ b/step-13_enhanced-links/index.html
@@ -10,6 +10,10 @@
   </body>
   <script src="https://cdn.jsdelivr.net/npm/marked/marked.min.js"></script>
   <script>
+    function isAbsoluteUrl (href) {
+        return href.indexOf('://') > 0;
+    }
+
     const additionalElements = [
         { filename: "header.md",    elementId: "top-id" },
         { filename: "header-02.md", elementId: "top-id" },
@@ -19,8 +23,10 @@
     const renderer = new marked.Renderer();
     const originalRendererLink = renderer.link.bind(renderer);
     renderer.link = (href, title, text) => {
-        const newFilename = newRelativeLink(href);
-        href = filenameToHash(newFilename);
+        if (! isAbsoluteUrl(href)) {
+            const newFilename = newRelativeLink(href);
+            href = filenameToHash(newFilename);
+        }
         return originalRendererLink(href, title, text);
     };
     const originalRendererImage = renderer.image.bind(renderer);
```

### Nicht-Markdown-Links werden falsch umgesetzt

Typ              |Link/Image                  |Ergebnis
-----------------|----------------------------|--------
Bilddatei (SVG)  |`[...](/stuttgart.svg)`     |http://localhost:8000/#/stuttgart.svg
Bilddatei (PNG)  |`[...](/stuttgart.png)`     |http://localhost:8000/#/stuttgart.png

Hier die Änderungen für die Korrektur:

```diff
--- a/step-13_enhanced-links/index.html
+++ b/step-13_enhanced-links/index.html
@@ -13,6 +13,9 @@
     function isAbsoluteUrl (href) {
         return href.indexOf('://') > 0;
     }
+    function isMarkdownUrl (href) {
+        return href.endsWith('.md');
+    }
 
     const additionalElements = [
         { filename: "header.md",    elementId: "top-id" },
@@ -23,7 +26,7 @@
     const renderer = new marked.Renderer();
     const originalRendererLink = renderer.link.bind(renderer);
     renderer.link = (href, title, text) => {
-        if (! isAbsoluteUrl(href)) {
+        if (! isAbsoluteUrl(href) && isMarkdownUrl(href)) {
             const newFilename = newRelativeLink(href);
             href = filenameToHash(newFilename);
         }
```

### Protokoll-relative Links werden falsch umgesetzt

Typ              |Link/Image                  |Ergebnis
-----------------|----------------------------|--------
Protokoll-relativ|`[...](//README.md)`          |http://localhost:8000/#/README.md

Hier die Änderungen für die Korrektur:

```diff
--- a/step-13_enhanced-links/index.html
+++ b/step-13_enhanced-links/index.html
@@ -10,9 +10,32 @@
+
+    /*
+     * isProtocolRelativeUrl
+     * Checks if we do have a protocol relative url starting with //
+     * - true ... we have a protocol relative url starting with //
+     * - false ... we don't have a protocol relative url
+     */
+    function isProtocolRelativeUrl (href) {
+       return href.startsWith('//');
+    }
+
@@ -26,7 +49,19 @@
     const renderer = new marked.Renderer();
     const originalRendererLink = renderer.link.bind(renderer);
     renderer.link = (href, title, text) => {
-        if (! isAbsoluteUrl(href) && isMarkdownUrl(href)) {
+        if (isAbsoluteUrl(href)) {
+            ;
+        } else if (isProtocolRelativeUrl(href)) {
+            const pathname = window.location.pathname;
+            var location = window.location.href;
+            location = location.replace(/#.*$/, '');
+            location = location.slice(0, -pathname.length);
+            href = location + href;
+            ;
+        } else if (!isMarkdownUrl(href)) {
+            ;
+        } else {
+            /* isMarkdownUrl */
             const newFilename = newRelativeLink(href);
             href = filenameToHash(newFilename);
         }
```

HTML-Dokument mit Javascript
----------------------------

Das [komplette Dokument][INDEXHTML] ist [hier][INDEXHTML] einsichtbar.

- [Ansicht via Github Pages][RESULT]
- [Ansicht via Dummy-HTTP-Server][LOCALHOST]

[MAIN]:      ../README.md
[BASE]:      ../step-12_smp/smp/index.html
[INDEXHTML]: index.html
[LOCALHOST]: http://localhost:8000/smp/
[RESULT]:    https://uli-heller.github.io/static-markdown-publisher/step-13_enhances-links/index.html
