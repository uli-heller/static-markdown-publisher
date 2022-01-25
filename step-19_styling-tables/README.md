18 - Styling der Randabstände
=============================

[Zurück zur Übersicht][MAIN]

Ziel
----

Bislang waren die Schriften innerhalb der Kopf- und Fußzeilen
jeweils relativ nahe an den Rändern. Im Rahmen dieses Schrittes
möchte ich das etwas "gefälliger" gestalten!

Änderungen
----------

### Datei stuttgart.css

Im Stylesheet "stuttgart.css" muß ich grob diese Änderungen vornehmen:

- Variablen definieren für die Einrückungen
- Einrückungen für ID "headermd" (=für Datei "header.md") festlegen
- Einrückungen für ID "header02md" (=für Datei "header-02.md") festlegen
- Einrückungen für ID "footermd" (=für Datei "footer.md") festlegen
- Einrückungen für ID "pageid" (=Hauptteil) festlegen

Hier die Änderungen im Detail:

```diff
------------------- step-18_styling-padding/stuttgart.css --------------------
index fbc7bbb..49a4859 100644
@@ -1,40 +1,62 @@
 :root {
     --background-color:         #fcdb00;
     --foreground-color:         #000000;
     --lighter-background-color: #ffff66;
     --lighter-foreground-color: #111111;
+    --padding-header:           1em;
+    --padding-left-right:       1em;
+    --padding-top-bottom:       0.5em;
 }
 
 body {
     font-family: Arial, Helvetica, sans-serif;
 }
 
 #headermd {
     background: var(--background-color);
     color:      var(--foreground-color);
+    padding-top: var(--padding-header);
+    padding-right: var(--padding-header);
+    padding-bottom: var(--padding-header);
+    padding-left: var(--padding-header);
 }
 
 #header02md {
     display:    flex;
     background: var(--lighter-background-color);
     color:      var(--lighter-foreground-color);
+    padding-top: var(--padding-top-bottom);
+    padding-right: var(--padding-left-right);
+    padding-bottom: var(--padding-top-bottom);
+    padding-left: var(--padding-left-right);
 }
 
 #header02md > p {
     margin: 0;
 }
 
 #footermd {
     display:    flex;
     background: var(--lighter-background-color);
     color:      var(--lighter-foreground-color);
+    padding-top: var(--padding-top-bottom);
+    padding-right: var(--padding-left-right);
+    padding-bottom: var(--padding-top-bottom);
+    padding-left: var(--padding-left-right);
 }
 
 #footermd > p {
     margin: 0;
 }
 
 #header {
     font-size: xx-large;
     font-weight: bold;
 }
+
+#pageid {
+    padding-top: var(--padding-top-bottom);
+    padding-right: var(--padding-left-right);
+    padding-bottom: var(--padding-top-bottom);
+    padding-left: var(--padding-left-right);
+}
```

### Datei index.html

In der Datei "index.html" muß ich im Wesentlichen die SPAN-Tags durch DIV-Tags ersetzen,
damit das Setzen der Abstände klappt. Hier die Änderungen im Detail:

```diff
--------------------- step-18_styling-padding/index.html ----------------------
index 8807854..17708e5 100644
@@ -1,13 +1,13 @@
 <!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01//EN" "http://www.w3.org/TR/html4/strict.dtd">
 <html>
   <head>
   </head>
   <body onload="initPage();" onhashchange="hashChanged();">
-    <span id="topid"></span>
-    <span id="pageid"></span>
-    <span id="bottomid"></span>
+    <div id="topid"></div>
+    <div id="pageid"></div>
+    <div id="bottomid"></div>
   </body>
   <script src="https://cdn.jsdelivr.net/npm/marked/marked.min.js"></script>
   <link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/highlightjs/cdn-release@11.4.0/build/styles/default.min.css">
```

HTML-Dokument mit Javascript
----------------------------

Das [komplette Dokument][INDEXHTML] ist [hier][INDEXHTML] einsichtbar.

- [Ansicht via Github Pages][RESULT]
- [Ansicht via Dummy-HTTP-Server][LOCALHOST]

[MAIN]:      ../README.md
[BASE]:      ../step-17_config-js/index.html
[INDEXHTML]: index.html
[LOCALHOST]: http://localhost:8000
[RESULT]:    https://uli-heller.github.io/static-markdown-publisher/step-18_styling-padding/index.html
