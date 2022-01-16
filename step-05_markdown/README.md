05 - Markdown
=============

[Zurück zur Übersicht][MAIN]

Ausgangslage
------------

Das [HTML-Dokument vom vorigen Schritt][BASE] ist Grundlage.
Dort wird die komplette angezeigte Seite via Javascript eingelesen.

Ziel
----

Ich möchte statt der HTML-Datei eine Markdown-Datei laden,
diese in HTML wandeln und dann anzeigen.

Markdown-Datei
--------------

Ich lege eine [Zusatzdatei "page.md"][PAGEMD] an mit dem Text, der
im Browser angezeigt werden soll:

```
# Step 05 - Markdown

Everything shown is stored in an external file
and loaded via javascript and transformed from
markdown to html!

1. Load the "index.html"
2. Load the "page.md"
3. Transform to html
4. Show html
```

Markdown laden und anzeigen
---------------------------

Relativ zum vorigen Stand ändert sich nicht sonderlich viel:

- Markdown-Parser "marked.min.js" laden
- Inhalt der geladenen Datei mittels "marked.parse()" wandeln von Markdown nach HTML

Hier die Änderungen im Detail:

```diff
--- step-04_complete-page/index.html	2022-01-16 16:36:02.872054768 +0100
+++ step-05_markdown/index.html	2022-01-16 16:36:02.872054768 +0100
@@ -5,17 +5,18 @@
   <body onload="initPage();">
     <span id="page-id"></span>
   </body>
+  <script src="https://cdn.jsdelivr.net/npm/marked/marked.min.js"></script>
   <script>
     async function load(element, filename) {
 	const contentFetcher = await fetch(filename);
 	const contentText = await contentFetcher.text();
-        element.innerHTML = contentText;
+        element.innerHTML = marked.parse(contentText);
     }
     
     function initPage () {
         const page = document.getElementById('page-id');
         if (page) {
-	    load(page, 'page.html');
+	    load(page, 'page.md');
 	}
     }
   </script>
```

HTML-Dokument mit Javascript
----------------------------

Das [komplette Dokument][INDEXHTML] ist [hier][INDEXHTML] einsichtbar.

[Ansicht via Github Pages][RESULT]

---

# Step 05 - Markdown


Everything shown is stored in an external file
and loaded via javascript and transformed from
markdown to html!

1. Load the "index.html"
2. Load the "page.md"
3. Transform to html
4. Show html

[MAIN]: ../README.md
[BASE]: ../step-04_complete-page/index.html
[INDEXHTML]: index.html
[LOCALHOST]: http://localhost:8000
[RESULT]: https://uli-heller.github.io/static-markdown-publisher/step-05_markdown/index.html
[PAGEMD]: page.md

