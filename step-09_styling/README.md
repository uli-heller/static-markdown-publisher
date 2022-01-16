08 - Kopf und Fuß
=================

[Zurück zur Übersicht][MAIN]

Ausgangslage
------------

Das [HTML-Dokument vom vorigen Schritt][BASE] ist Grundlage.
Dort werden potentiell mehrere Markdown-Datei via Javascript eingelesen,
Links zwischen den Markdown-Dateien funktionieren.

Ziel
----

Ober- und unterhalb der Markdown-Datei soll eine Kopf- und Fußzeile
angezeigt werden.

Markdown-Dateien
----------------

Ich lege zusätzliche Dateien an

- <header.md>
- <header-02.md>
- <footer.md>
- <footer-02.md>

Kopf- und Fußzeile einblenden
-----------------------------

Die Datei [index.html][INDEXHTML] muß wie folgt ergänzt und überarbeitet werden:

- Platzhalter für oben (top) und unten (bottom) einfügen
- Array mit Zusatzelementen: Name der Datei -> Platzhalter zum Einfügen
- Schleife über das Array: Datei laden, wandeln und einfügen

Hier die Unterschiede im Detail:

```diff
--- step-07_markdown-links/index.html	2022-01-16 23:08:11.333719626 +0100
+++ step-08_header-and-footer/index.html	2022-01-16 23:22:59.406544000 +0100
@@ -3,10 +3,18 @@
   <head>
   </head>
   <body onload="initPage();" onhashchange="hashChanged();">
+    <span id="top-id"></span>
     <span id="page-id"></span>
+    <span id="bottom-id"></span>
   </body>
   <script src="https://cdn.jsdelivr.net/npm/marked/marked.min.js"></script>
   <script>
+    const additionalElements = [
+	{ filename: "header.md",    elementId: "top-id" },
+	{ filename: "header-02.md", elementId: "top-id" },
+	{ filename: "footer.md",    elementId: "bottom-id" },
+	{ filename: "footer-02.md", elementId: "bottom-id" },
+    ];
     const renderer = new marked.Renderer();
     const originalRendererLink = renderer.link.bind(renderer);
     renderer.link = (href, title, text) => {
@@ -37,6 +45,17 @@
 	    }
 	    load(page, filename);
 	}
+	additionalElements.forEach((ae) => {
+	    const element = document.getElementById(ae.elementId);
+	    if (element) {
+		if (! document.getElementById(ae.filename)) {
+		    const newElement = document.createElement('div');
+		    newElement.id = ae.filename;
+		    element.append(newElement)
+		    load(newElement, ae.filename);
+		}
+	    }
+	});
     }
   </script>
 </html>
```

HTML-Dokument mit Javascript
----------------------------

Das [komplette Dokument][INDEXHTML] ist [hier][INDEXHTML] einsichtbar.

- [Ansicht via Github Pages][RESULT]
- [Ansicht via Dummy-HTTP-Server][LOCALHOST]

[MAIN]:      ../README.md
[BASE]:      ../step-07_markdown-links/index.html
[INDEXHTML]: index.html
[LOCALHOST]: http://localhost:8000
[RESULT]:    https://uli-heller.github.io/static-markdown-publisher/step-08_header-and-footer/index.html
[PAGEMD]:    page.md
[AOPMD]:     another-page.md
[INDEXMD]:   index.md
