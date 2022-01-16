04 - Komplette Seite von Datei laden
====================================

[Zurück zur Übersicht][MAIN]

Ausgangslage
------------

Das [HTML-Dokument vom vorigen Schritt][BASE] ist Grundlage.
Dort wird ein Textteil via Javascript in das Dokuemt
eigepflegt.

Ziel
----

Ich möchte das angezeigte Dokument komplett "selbst" laden.
Die Datei "index.html" enthält nur einen (unsichtbaren)
Rahmen und den Javascript-Code zum Laden des Rests.

HTML-Datei
----------

Ich lege eine [Zusatzdatei "page.html"][PAGEHTML] an mit dem Text, der
im Browser angezeigt werden soll:

```
<h1>Step 04 - Complete Page From File</h1>
<p>
  Everything shown is stored in an external file
  and loaded via javascript!
</p>
```

Komplette Seite laden
---------------------

Relativ zum vorigen Stand ändert sich nicht sonderlich viel:

- DOCTYPE korrigiert gemäß [Empfehlung von w3.org][DOCTYPE] ("Fleissarbeit", nicht notwendig)
- Die meisten HTML-Tags fliegen raus aus der [index.html][INDEXHTML]
- Übrig bleibt nur ein Platzhalter `<span>`
- Der Javascript-Code wird etwas überarbeitet
    - innerText -> innerHTML
    - greetings -> initPage
    - placeholder -> page

Hier die Änderungen im Detail:

```diff
--- step-03_external-file/index.html	2022-01-16 16:36:02.872054768 +0100
+++ step-04_complete-page/index.html	2022-01-16 16:36:02.872054768 +0100
@@ -1,25 +1,21 @@
-<!DOCTYPE html>
+<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01//EN" "http://www.w3.org/TR/html4/strict.dtd">
 <html>
   <head>
   </head>
-  <body onload="greetings();">
-    <h1>Step 03 - Headline</h1>
-    <p>First paragraph. This is a paragraph of text!</p>
-    <p>
-      Second paragraph with a <span id="placeholder-id">placeholder</span>
-    </p>
+  <body onload="initPage();">
+    <span id="page-id"></span>
   </body>
   <script>
     async function load(element, filename) {
 	const contentFetcher = await fetch(filename);
 	const contentText = await contentFetcher.text();
-        element.innerText = contentText;
+        element.innerHTML = contentText;
     }
     
-    function greetings () {
-        const placeholder = document.getElementById('placeholder-id');
-        if (placeholder) {
-	    load(placeholder, 'index.md');
+    function initPage () {
+        const page = document.getElementById('page-id');
+        if (page) {
+	    load(page, 'page.html');
 	}
     }
   </script>
```

HTML-Dokument mit Javascript
----------------------------

Das [komplette Dokument][INDEXHTML] ist [hier][INDEXHTML] einsichtbar.

[Ansicht via Github Pages][RESULT]

---

# Step 04 - Complete Page From File

Everything shown is stored in an external file
and loaded via javascript!

[MAIN]: ../README.md
[BASE]: ../step-03_external-file/index.html
[INDEXHTML]: index.html
[LOCALHOST]: http://localhost:8000
[RESULT]: https://uli-heller.github.io/static-markdown-publisher/step-04_complete-page/index.html
[PAGEHTML]: page.html
[INDEXHTML]: index.html
[DOCTYPE]: https://www.w3.org/wiki/Choosing_the_right_doctype_for_your_HTML_documents
