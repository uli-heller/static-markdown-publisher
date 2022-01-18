13 - Diverse Link-Typen und Links zu externen Resourcen
=======================================================

[Zurück zur Übersicht][MAIN]

Ziel
----

Ich möchte, dass diverse Links funktionieren:

- relative Links haben wir schon ausführlich in den Vorgängerschritten getestet
- Host-relative Links - [/index.md](/index.md)
- Protokoll-relative Links - [//bert.md](//bert.md)
- Absolute Links - [https://github.com](https://github.com)
- Link zu Bilddatei (SVG) - [/stuttgart.svg](/stuttgart.svg)
- Link zu Bilddatei (PNG) - [/stuttgart.png](/stuttgart.png)

Ähnliches auch für Bilder:

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

### Links werden völlig falsch umgesetzt

Typ              |Link/Image                  |Ergebnis
-----------------|----------------------------|--------
Host-relativ     |`[...](/index.md)`          |http://localhost:8000/#/index.md     
Protokoll-relativ|`[...](//bert.md)`          |http://localhost:8000/#/bert.md
Absolut          |`[...](https://github.com)` |http://localhost:8000/#/https:/github.com
Bilddatei (SVG)  |`[...](/stuttgart.svg)`     |http://localhost:8000/#/stuttgart.svg
Bilddatei (PNG)  |`[...](/stuttgart.png)`     |http://localhost:8000/#/stuttgart.png

Hier die Änderungen für die Korrektur:

```diff
```

Änderungen
----------

Grundsätzlich müssen wir unterscheiden zwischen

- Hash = der Wert, der in der Adresszeile hinter dem Zeichen '#' steht
- Dateiname = der Pfad, unter dem die zu ladende Datei zu finden ist

Hier ein paar Beispiele:

Adresszeile                                    | Hash       | Filename
-----------------------------------------------|------------|---------
http://localhost:8000/index.html#/index.md     | #/index.md | /index.md
http://localhost:8000/smp/index.html#/index.md | #/index.md | /smp/index.md

Hier die Unterschiede im Detail:

```diff
--- step-11_images/index.html	2022-01-17 18:55:42.832194512 +0100
+++ step-12_smp/smp/index.html	2022-01-17 22:30:23.243167461 +0100
@@ -53,6 +53,10 @@
         return filename.replaceAll(/[.-]/g, '');
     }

+    function dirname (path) {
+	return path.replace(/\/[^\/]*$/, '');
+    }
+
     /*
      * hashToFilename
      * Transforms the hash value to a filename
@@ -74,9 +78,15 @@
         if (! filename.startsWith('/')) {
             filename = '/' + filename;
         }
-        return filename;
+        return normalizePath(dirname(window.location.pathname) + filename);
     }
 
+    function filenameToHash (filename) {
+	var nPathname = normalizePath(dirname(window.location.pathname));
+	var nFilename = normalizePath(filename);
+	return '#'+filename.replace(nPathname, '');
+    }
+
     /*
      * normalizePath
      * Removes various unwanted parts from a path
@@ -133,7 +143,7 @@
         const page = document.getElementById('page-id');
         if (page) {
             var filename=hashToFilename(window.location.hash);
-            window.location.hash = "#" + filename;
+            window.location.hash = filenameToHash(filename);
             load(page, filename);
         }
         additionalElements.forEach((ae) => {
```

Probleme
--------

### Link auf "subfolder/index.md" klappt nicht

```
127.0.0.1 - - [18/Jan/2022 11:08:11] "GET /smp/smp/subfolder/index.md HTTP/1.1" 404 -
```

Korrigiert mit dieser Änderung:

```diff
--- a/step-12_smp/smp/index.html
+++ b/step-12_smp/smp/index.html
@@ -19,7 +19,8 @@
     const renderer = new marked.Renderer();
     const originalRendererLink = renderer.link.bind(renderer);
     renderer.link = (href, title, text) => {
-        href = '#' + newRelativeLink(href);
+        const newFilename = newRelativeLink(href);
+        href = filenameToHash(newFilename);
         return originalRendererLink(href, title, text);
     };
     const originalRendererImage = renderer.image.bind(renderer);
@@ -152,7 +153,7 @@
         if (newFilename.startsWith('/')) {
             newHash = newFilename;
         } else {
-            newHash = oldFilename.replace(/[^\/]*$/, '') + newFilename;
+            newHash = dirname(oldFilename) + '/' + newFilename;
         }
         return normalizePath(newHash);
     }
```

HTML-Dokument mit Javascript
----------------------------

Das [komplette Dokument][INDEXHTML] ist [hier][INDEXHTML] einsichtbar.

- [Ansicht via Github Pages][RESULT]
- [Ansicht via Dummy-HTTP-Server][LOCALHOST]

[MAIN]:      ../README.md
[BASE]:      ../step-11_images/index.html
[INDEXHTML]: index.html
[LOCALHOST]: http://localhost:8000/smp/
[RESULT]:    https://uli-heller.github.io/static-markdown-publisher/step-12_smp/smp/index.html
[INDEXMD]:   index.md
