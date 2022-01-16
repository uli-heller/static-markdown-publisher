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

Ich lege zusätzliche Dateien an ["header.md"][HEADERMD]
und ["footer.md"][FOOTERMD].

Kopf- und Fußzeile einblenden
-----------------------------

Die Datei [index.html][INDEXHTML] muß wie folgt ergänzt und überarbeitet werden:

- TBD

Hier die Unterschiede im Detail:

```diff
diff --git a/step-08_header-and-footer/index.html b/step-08_header-and-footer/index.html
index 8add719..74dd00b 100644
--- a/step-08_header-and-footer/index.html
+++ b/step-08_header-and-footer/index.html
@@ -3,10 +3,16 @@
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
+       { filename: "header.md", elementId: "top-id" },
+       { filename: "footer.md", elementId: "bottom-id" },
+    ];
     const renderer = new marked.Renderer();
     const originalRendererLink = renderer.link.bind(renderer);
     renderer.link = (href, title, text) => {
@@ -37,6 +43,13 @@
            }
            load(page, filename);
        }
+       additionalElements.forEach((ae) => {
+           const element = document.getElementById(ae.elementId);
+           if (element) {
+               load(element, ae.filename);
+           }
+           return true;
+       });
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
[HEADERMD]:  header.md
[FOOTERMD]:  footer.md
