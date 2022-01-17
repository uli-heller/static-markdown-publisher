12 - /smp
=========

[Zurück zur Übersicht][MAIN]

Ziel
----

Ich möchte, dass die Webseiten unter einem Kontext-Pfad
abgerufen werden können. Also:

- bislang: http://localhost:8000/index.html#/index.md
- künftig: http://localhost:8000/smp/index.html#/index.md

Idealerweise muß dazu keinerlei Änderung an den
Webseiten gemacht werden, also eine "index.html"
ist in beiden Varianten einsetzbar.

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
