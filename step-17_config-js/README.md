17 - Konfigurationsdatei "config.js"
======================

[Zurück zur Übersicht][MAIN]

Ziel
----

Ich möchte die "spezifischen" Dinge externalisieren von
der Datei "index.html", also:

- Nachzuladende Dateien wie "header.md", "footer.md", usw
- Nachzuladende Stylesheets

Idealerweise enthält "index.html" danach nur noch die generell
notwendigen Dinge und alle spezifischen Dinge sind rausgeflogen!

Änderungen
----------

### Datei config.js

```javascript
const config = {
    additionalElements: [
        { filename: "header.md",    elementId: "topid" },
        { filename: "header-02.md", elementId: "topid" },
        { filename: "footer.md",    elementId: "bottomid" },
    ],
    stylesheets: [
	"stuttgart.css",
    ],
}
```

### Datei index.html

In der Datei "index.html" sind diese
Änderungen notwendig:

- Laden von "config.js" eingebaut
- Statisches Laden von "stuttgart.css" fliegt raus
- Stattdessen werden die in "config.js" hinterlegten "stylesheets"
  geladen
- Statisches Laden "additionalElements" fliegt raus
- Stattdessen werden die in "config.js" hinterlegten "additionalElements"
  geladen
- Neue Javascript-Methode zum Laden eines Stylesheets

Hier die Änderungen im Detail:

```diff
------------------------ step-17_config-js/index.html -------------------------
index 8edeb98..8807854 100644
@@ -1,20 +1,20 @@
 <!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01//EN" "http://www.w3.org/TR/html4/strict.dtd">
 <html>
   <head>
   </head>
-  <link rel="stylesheet" type="text/css" href="stuttgart.css">
   <body onload="initPage();" onhashchange="hashChanged();">
     <span id="topid"></span>
     <span id="pageid"></span>
     <span id="bottomid"></span>
   </body>
   <script src="https://cdn.jsdelivr.net/npm/marked/marked.min.js"></script>
   <link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/highlightjs/cdn-release@11.4.0/build/styles/default.min.css">
   <script src="https://cdn.jsdelivr.net/gh/highlightjs/cdn-release@11.4.0/build/highlight.min.js"></script>
   <!-- and it's easy to individually load additional languages -->
   <!--<script src="https://cdn.jsdelivr.net/gh/highlightjs/cdn-release@11.4.0/build/languages/go.min.js"></script>-->
+  <script src="config.js"></script>
   <script>
     function nodeScriptIs(node) {
        return node.tagName === 'SCRIPT';
     }
 
@@ -68,15 +68,10 @@
      */
     function isMarkdownUrl (href) {
         return href.endsWith('.md');
     }
 
-    const additionalElements = [
-        { filename: "header.md",    elementId: "topid" },
-        { filename: "header-02.md", elementId: "topid" },
-        { filename: "footer.md",    elementId: "bottomid" },
-    ];
     const renderer = new marked.Renderer();
     const originalRendererLink = renderer.link.bind(renderer);
     renderer.link = (href, title, text) => {
         if (isAbsoluteUrl(href)) {
             ;
@@ -239,10 +234,24 @@
         } else {
             newHash = dirname(oldFilename) + '/' + newFilename;
         }
         return normalizePath(newHash);
     }
+
+    function loadStylesheet (filename) {
+        const id = filenameToId(filename);
+	if (! document.getElementById(id)) {
+	    const head = document.getElementsByTagName('head')[0];
+	    const link = document.createElement('link');
+	    link.id = id;
+	    link.rel = 'stylesheet';
+	    link.type = 'text/css';
+	    link.href = filename;
+	    link.media = 'all';
+	    head.appendChild(link);
+	}
+    }
     
     function hashChanged () {
         initPage();
     }
 
@@ -251,11 +260,11 @@
         if (page) {
             var filename=hashToFilename(window.location.hash);
             window.location.hash = filenameToHash(filename);
             load(page, filename);
         }
-        additionalElements.forEach((ae) => {
+        config.additionalElements.forEach((ae) => {
             const element = document.getElementById(ae.elementId);
             if (element) {
                 const id = filenameToId(ae.filename)
                 if (! document.getElementById(id)) {
                     const newElement = document.createElement('div');
@@ -263,8 +272,11 @@
                     element.append(newElement)
                     load(newElement, ae.filename);
                 }
             }
         });
+	config.stylesheets.forEach((s) => {
+	    loadStylesheet(s);
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
[BASE]:      ../step-16_stuttgart-styling/index.html
[INDEXHTML]: index.html
[LOCALHOST]: http://localhost:8000
[RESULT]:    https://uli-heller.github.io/static-markdown-publisher/step-17_config-js/index.html
