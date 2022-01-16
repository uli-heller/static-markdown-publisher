07 - Markdown Links
===================

[Zurück zur Übersicht][MAIN]

Ausgangslage
------------

Das [HTML-Dokument vom vorigen Schritt][BASE] ist Grundlage.
Dort werden potentiell mehrere Markdown-Datei via Javascript eingelesen.
Die gewünschte Markdown-Datei gibt man an via "#(datei).md" in der URL.

Ziel
----

Ich möchte die Möglichkeit haben, mehrere verschiedene Markdown-Dateien
anzuzeigen inklusive funktionierenden Links zwischen diesen!

Markdown-Datei
--------------

Ich lege eine [Zusatzdatei "index.md"][INDEXMD] an mit
Links auf alle anderen Dateien:

```
# Step 07 - index.md

* First markdown file: [page.md](page.md)
* Second markdown file: [another-page.md](another-page.md)
```

Links zwischen Markdown-Dateien
-------------------------------

Die Datei [index.html][INDEXHTML] muß wie folgt ergänzt und überarbeitet werden:

- Als Standard-Datei laden wir "index.md", falls kein Dateiname angegeben ist
- Wir definieren einen eigenen Renderer für Marked.js, der die Links in solche mittels "Hash" umformt
    - index.md -> #index.md
    - page.md -> #page.md
    - another-page.md -> #another-page.md
- Wir schalten das Caching für das Laden der MD-Dateien ab (streng genommen nicht notwendig)
- Wir sorgen über einen "hashChange"-Handler dafür, dass die Seite neu geladen wird, wenn sich die Hash-Links ändern

Hier die Unterschiede im Detail:

```diff
--- step-06_multi-markdown/index.html	2022-01-16 19:34:38.283320807 +0100
+++ step-07_markdown-links/index.html	2022-01-16 20:27:55.538188223 +0100
@@ -2,27 +2,38 @@
 <html>
   <head>
   </head>
-  <body onload="initPage();">
+  <body onload="initPage();" onhashchange="hashChanged();">
     <span id="page-id"></span>
   </body>
   <script src="https://cdn.jsdelivr.net/npm/marked/marked.min.js"></script>
   <script>
+    const renderer = new marked.Renderer();
+    const originalRendererLink = renderer.link.bind(renderer);
+    renderer.link = (href, title, text) => {
+        href = "#" + href;
+        return originalRendererLink(href, title, text);
+    };
+
     async function load(element, filename) {
-	const contentFetcher = await fetch(filename);
+	const contentFetcher = await fetch(filename, {cache: "no-store"});
 	const contentText = await contentFetcher.text();
-        element.innerHTML = marked.parse(contentText);
+        element.innerHTML = marked.parse(contentText, { renderer: renderer });
     }
 
     function removeHash (windowLocationHash) {
 	return windowLocationHash.replace(/^#/, "");
     }
 
+    function hashChanged () {
+	initPage();
+    }
+
     function initPage () {
         const page = document.getElementById('page-id');
         if (page) {
 	    var filename=removeHash(window.location.hash);
 	    if (! filename) {
-		filename = 'page.md';
+		filename = 'index.md';
 	    }
 	    load(page, filename);
 	}
```

HTML-Dokument mit Javascript
----------------------------

Das [komplette Dokument][INDEXHTML] ist [hier][INDEXHTML] einsichtbar.

- [Ansicht via Github Pages][RESULT]
- [Ansicht via Dummy-HTTP-Server][LOCALHOST]

---

# Step 07 - index.md

* First markdown file: [page.md](page.md)
* Second markdown file: [another-page.md](another-page.md)

---

# Step 07 - Markdown

Everything shown is stored in an external file
and loaded via javascript and transformed from
markdown to html!

1. Load the "index.html"
2. Load the "page.md"
3. Transform to html
4. Show html

---

# Step 07 - Another Markdown File

* First markdown file: page.md
* Second markdown file: another-page.md


[MAIN]:      ../README.md
[BASE]:      ../step-06_multi-markdown/index.html
[INDEXHTML]: index.html
[LOCALHOST]: http://localhost:8000
[RESULT]:    https://uli-heller.github.io/static-markdown-publisher/step-07_markdown-links/index.html
[PAGEMD]:    page.md
[AOPMD]:     another-page.md
[INDEXMD]:   index.md
