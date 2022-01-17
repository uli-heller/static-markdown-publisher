11 - Bilder
===========

[Zurück zur Übersicht][MAIN]

Ausgangslage
------------

Das [HTML-Dokument vom vorigen Schritt][BASE] ist Grundlage.

Ziel
----

Ich möchte nun Bilder in die Markdown-Dateien einfügen,
und zwar sowohl im Hauptverzeichnis als auch in einem Unterverzeichnis.

Hierarchie von Markdown- und SVG-Dateien
----------------------------------------

- index.md
- stuttgart.svg
- subfolder/index.md
- subvolder/boy.svg

Handhabung der Links mit Pfadangaben
------------------------------------

Die Datei [index.html][INDEXHTML] muß wie folgt ergänzt und überarbeitet werden:

- Methode zur Ermittlung eines neuen relativen Links - "newRelativeLink()"
- Einbinden in die Image-Links

Hier die Unterschiede im Detail:

```diff
--- step-10_subfolders/index.html	2022-01-17 13:52:28.946374547 +0100
+++ step-11_images/index.html	2022-01-17 17:49:50.745328817 +0100
@@ -19,9 +19,14 @@
     const renderer = new marked.Renderer();
     const originalRendererLink = renderer.link.bind(renderer);
     renderer.link = (href, title, text) => {
-        href = newHash(href);
+        href = '#' + newRelativeLink(href);
         return originalRendererLink(href, title, text);
     };
+    const originalRendererImage = renderer.image.bind(renderer);
+    renderer.image = (href, title, text) => {
+        href = newRelativeLink(href);
+        return originalRendererImage(href, title, text);
+    };
 
     async function load(element, filename) {
         const contentFetcher = await fetch(filename, {cache: "no-store"});
@@ -102,17 +107,17 @@
     }
     
     /*
-     * newHash
-     * Creates a new hash for window.location based on
+     * newRelativeLink
+     * Creates a relative link for window.location based on
      * the current hash and the new link/filename
      *
      * Examples:
      *   hash            | link        -> result
-     *   '#/'            | 'readme.md' -> '#/readme.md'
-     *   '#'             | 'readme.md' -> '#/readme.md'
-     *   '#/sd/index.md' | 'readme.md' -> '#/sd/readme.md'
+     *   '#/'            | 'readme.md' -> '/readme.md'
+     *   '#'             | 'readme.md' -> '/readme.md'
+     *   '#/sd/index.md' | 'readme.md' -> '/sd/readme.md'
      */
-    function newHash (href) {
+    function newRelativeLink (href) {
         const oldFilename = hashToFilename(window.location.hash);
         const newFilename = href;
         var newHash = newFilename;
@@ -121,7 +126,7 @@
         } else {
             newHash = oldFilename.replace(/[^\/]*$/, '') + newFilename;
         }
-        return '#' + normalizePath(newHash);
+        return normalizePath(newHash);
     }
     
     function initPage () {
```

HTML-Dokument mit Javascript
----------------------------

Das [komplette Dokument][INDEXHTML] ist [hier][INDEXHTML] einsichtbar.

- [Ansicht via Github Pages][RESULT]
- [Ansicht via Dummy-HTTP-Server][LOCALHOST]

[MAIN]:      ../README.md
[BASE]:      ../step-10_subfolders/index.html
[INDEXHTML]: index.html
[LOCALHOST]: http://localhost:8000
[RESULT]:    https://uli-heller.github.io/static-markdown-publisher/step-11_images/index.html
[INDEXMD]:   index.md
