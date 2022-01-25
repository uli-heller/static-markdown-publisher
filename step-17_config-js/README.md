17 - Konfigurationsdatei "config.js"
======================

[Zurück zur Übersicht][MAIN]

Ziel
----

Ich möchte, dass das Styling etwas überarbeitet wird:

- Stuttgart-Pferdchen oben links
- Daneben die Überschrift
- Darunter eine zweite Zeile, die später mal das Navigationsmenü aufnimmt
- Eine Fußzeile
- Alles in Gelb

Änderungen
----------

Hierfür sind diese Änderungen erforderlich:

- header.md: Neuer Inhalt: Logo und Text als Tabelle
- header-02.md: Neuer Inhalt - anzuzeigender Text
- footer.md: Neuer Inhalt - anzuzeigender Text
- footer-02.md: Gelöscht
- index.md: Neuer Inhalt - anzuzeigender Text
- stuttgart.svg: Neue Datei - Pferdchen

### smp.css - stuttgart.css

Umbenannt nach "stuttgart.css".

Inhalt:

```css
:root {
    --background-color:         #fcdb00;
    --foreground-color:         #000000;
    --lighter-background-color: #ffff66;
    --lighter-foreground-color: #111111;
}

body {
    font-family: Arial, Helvetica, sans-serif;
}

#headermd {
    background: var(--background-color);
    color:      var(--foreground-color);
}

#header02md {
    display:    flex;
    background: var(--lighter-background-color);
    color:      var(--lighter-foreground-color);
}

#header02md > p {
    margin: 0;
}

#footermd {
    display:    flex;
    background: var(--lighter-background-color);
    color:      var(--lighter-foreground-color);
}

#footermd > p {
    margin: 0;
}

#header {
    font-size: xx-large;
    font-weight: bold;
}
```

### index.html

- Stylesheet: stuttgart.css statt smp.css
- Minuszeichen aus den IDs der Seitenbereiche entfernt
- Laden von footer-02.md entfernt

Hier die Änderungen im Detail:

```diff
-------------------- step-16_stuttgart-styling/index.html ---------------------
index e958afc..a7d29ac 100644
@@ -1,16 +1,16 @@
 <!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01//EN" "http://www.w3.org/TR/html4/strict.dtd">
 <html>
   <head>
   </head>
-  <link rel="stylesheet" type="text/css" href="smp.css">
+  <link rel="stylesheet" type="text/css" href="smp.css?version=1">
   <body onload="initPage();" onhashchange="hashChanged();">
-    <span id="top-id"></span>
-    <span id="page-id"></span>
-    <span id="bottom-id"></span>
+    <span id="topid"></span>
+    <span id="pageid"></span>
+    <span id="bottomid"></span>
   </body>
   <script src="https://cdn.jsdelivr.net/npm/marked/marked.min.js"></script>
   <link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/highlightjs/cdn-release@11.4.0/build/styles/default.min.css">
   <script src="https://cdn.jsdelivr.net/gh/highlightjs/cdn-release@11.4.0/build/highlight.min.js"></script>
   <!-- and it's easy to individually load additional languages -->
   <!--<script src="https://cdn.jsdelivr.net/gh/highlightjs/cdn-release@11.4.0/build/languages/go.min.js"></script>-->
   <script>
@@ -67,18 +67,17 @@
      * - false ... the url doesn't point to a markdown file
      */
     function isMarkdownUrl (href) {
         return href.endsWith('.md');
     }
 
     const additionalElements = [
-        { filename: "header.md",    elementId: "top-id" },
-        { filename: "header-02.md", elementId: "top-id" },
-        { filename: "footer.md",    elementId: "bottom-id" },
-        { filename: "footer-02.md", elementId: "bottom-id" },
+        { filename: "header.md",    elementId: "topid" },
+        { filename: "header-02.md", elementId: "topid" },
+        { filename: "footer.md",    elementId: "bottomid" },
     ];
     const renderer = new marked.Renderer();
     const originalRendererLink = renderer.link.bind(renderer);
     renderer.link = (href, title, text) => {
         if (isAbsoluteUrl(href)) {
             ;
         } else if (isProtocolRelativeUrl(href)) {
@@ -244,15 +243,15 @@
     }
     
     function hashChanged () {
         initPage();
     }
 
     function initPage () {
-        const page = document.getElementById('page-id');
+        const page = document.getElementById('pageid');
         if (page) {
             var filename=hashToFilename(window.location.hash);
             window.location.hash = filenameToHash(filename);
             load(page, filename);
         }
```

HTML-Dokument mit Javascript
----------------------------

Das [komplette Dokument][INDEXHTML] ist [hier][INDEXHTML] einsichtbar.

- [Ansicht via Github Pages][RESULT]
- [Ansicht via Dummy-HTTP-Server][LOCALHOST]

[MAIN]:      ../README.md
[BASE]:      ../step-15_script-tag/index.html
[INDEXHTML]: index.html
[LOCALHOST]: http://localhost:8000
[RESULT]:    https://uli-heller.github.io/static-markdown-publisher/step-16_stuttgart-styling/index.html
