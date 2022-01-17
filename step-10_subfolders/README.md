10 - Unterordner
================

[Zurück zur Übersicht][MAIN]

Ausgangslage
------------

Das [HTML-Dokument vom vorigen Schritt][BASE] ist Grundlage.
Dort werden potentiell mehrere Markdown-Datei via Javascript eingelesen,
Links zwischen den Markdown-Dateien funktionieren und Kopf- und
Fußzeilen haben ein eigenes Erscheinungsbild.

Ziel
----

Die Verwendung von Unterordnern soll möglich sein, also:

- Link vom Standard-Ordner in den Unterordner
- Link von einer Markdown-Datei im Unterordner zu einer anderen
- Link vom Unterordner in den übergeordneten Ordner
- Link vom Unterordner in den Standard-Ordner

Hierarchie von Markdown-Dateien
-------------------------------

- [subfolder/another-page.md](subfolder/another-page.md)
- [subfolder/page.md](subfolder/page.md)
- [subfolder/index.md](subfolder/index.md)
- [subfolder/deepfolder/another-page.md](subfolder/deepfolder/another-page.md)
- [subfolder/deepfolder/page.md](subfolder/deepfolder/page.md)
- [subfolder/deepfolder/index.md](subfolder/deepfolder/index.md)

Handhabung der Links mit Pfadangaben
------------------------------------

Die Datei [index.html][INDEXHTML] muß wie folgt ergänzt und überarbeitet werden:

- Links relativ zum aktuellen Link - "newHash()"
- Hash nach Dateiname wandeln - "hashToFilename()"
- Bereinigen des Links/Pfads - "normalizePath()"

Hier die Unterschiede im Detail:

```diff
--- step-09_styling/index.html  2022-01-17 09:50:49.521101364 +0100
+++ step-10_subfolders/index.html       2022-01-17 13:52:28.946374547 +0100
@@ -19,7 +19,7 @@
     const renderer = new marked.Renderer();
     const originalRendererLink = renderer.link.bind(renderer);
     renderer.link = (href, title, text) => {
-        href = "#" + href;
+        href = newHash(href);
         return originalRendererLink(href, title, text);
     };
 
@@ -37,23 +37,104 @@
+
+    /*
+     * hashToFilename
+     * Transforms the hash value to a filename
+     *
+     * Examples:
+     *   '#/index.md'          -> /index.md
+     *   '#index.md'           -> /index.md
+     *   ''                    -> /index.md
+     *   '#/page.md'           -> /page.md
+     *   '#/subfolder/page.md' -> /subfolder/page.md
+     */
+    function hashToFilename (hash) {
+        var filename = removeHash(hash);
+        if (! filename) {
+            filename = '/index.md';
+        } else if (filename.endsWith('/')) {
+            filename = filename + 'index.md';
+        }
+        if (! filename.startsWith('/')) {
+            filename = '/' + filename;
+        }
+        return filename;
+    }
+
+    /*
+     * normalizePath
+     * Removes various unwanted parts from a path
+     *
+     * Examples
+     *  x//y   -> x/y
+     *  /a/../ -> /
+     *  /a/..  -> /
+     *  /../   -> /
+     *  /..    -> /
+     *  //a/b  -> /a/b
+     */
+    function normalizePath (path) {
+        var this_path = '';
+        var next_path = path;
+        while (this_path != next_path) {
+            this_path = next_path;
+            next_path = next_path.replace('//', '/');
+            next_path = next_path.replace('/./', '/');
+            next_path = next_path.replace(/\/[^\/]+\/\.\.\//, '/');
+            next_path = next_path.replace(/\/[^\/]+\/\.\.$/, '/');
+            next_path = next_path.replace('/../', '/');
+            next_path = next_path.replace('/..', '/');
+            next_path = next_path.replace('../', '/');
+            next_path = next_path.replace('..', '/');
+        }
+        return next_path;
+    }
+
+    /*
+     * newHash
+     * Creates a new hash for window.location based on
+     * the current hash and the new link/filename
+     *
+     * Examples:
+     *   hash            | link        -> result
+     *   '#/'            | 'readme.md' -> '#/readme.md'
+     *   '#'             | 'readme.md' -> '#/readme.md'
+     *   '#/sd/index.md' | 'readme.md' -> '#/sd/readme.md'
+     */
+    function newHash (href) {
+        const oldFilename = hashToFilename(window.location.hash);
+        const newFilename = href;
+        var newHash = newFilename;
+        if (newFilename.startsWith('/')) {
+            newHash = newFilename;
+        } else {
+            newHash = oldFilename.replace(/[^\/]*$/, '') + newFilename;
+        }
+        return '#' + normalizePath(newHash);
     }

     function initPage () {
         const page = document.getElementById('page-id');
         if (page) {
-            var filename=removeHash(window.location.hash);
-            if (! filename) {
-                filename = 'index.md';
-            }
+            var filename=hashToFilename(window.location.hash);
+            window.location.hash = "#" + filename;
             load(page, filename);
         }
```

HTML-Dokument mit Javascript
----------------------------

Das [komplette Dokument][INDEXHTML] ist [hier][INDEXHTML] einsichtbar.

- [Ansicht via Github Pages][RESULT]
- [Ansicht via Dummy-HTTP-Server][LOCALHOST]

[MAIN]:      ../README.md
[BASE]:      ../step-09_styling/index.html
[INDEXHTML]: index.html
[LOCALHOST]: http://localhost:8000
[RESULT]:    https://uli-heller.github.io/static-markdown-publisher/step-10_subfolders/index.html
[PAGEMD]:    page.md
[AOPMD]:     another-page.md
[INDEXMD]:   index.md
