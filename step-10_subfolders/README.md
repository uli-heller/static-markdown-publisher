09 - Styling
============

[Zurück zur Übersicht][MAIN]

Ausgangslage
------------

Das [HTML-Dokument vom vorigen Schritt][BASE] ist Grundlage.
Dort werden potentiell mehrere Markdown-Datei via Javascript eingelesen,
Links zwischen den Markdown-Dateien funktionieren.

Ziel
----

Die Kopf- und Fußzeilen sollen mit einem eigenen Erscheinungsbild
(=Styling) versehen werden!

CSS-Datei
---------

Ich lege die CSS-Datei [smp.css](smp.css) neu an:

```css
:root {
    --top-background-color:    #224422;
    --top-02-background-color: #447744;
    --top-foreground-color:    #ffffff;
    --top-02-foreground-color: #dddddd;
    --bottom-background-color:    var(--top-background-color);
    --bottom-02-background-color: var(--top-02-background-color);
    --bottom-foreground-color:    var(--top-foreground-color);
    --bottom-02-foreground-color: var(--top-02-foreground-color);
}

#headermd {
    background: var(--top-background-color);
    color:      var(--top-foreground-color);
}

#header02md {
    background: var(--top-02-background-color);
    color:      var(--top-02-foreground-color);
}

#footermd {
    background: var(--bottom-background-color);
    color:      var(--bottom-foreground-color);
}

#footer02md {
    background: var(--bottom-02-background-color);
    color:      var(--bottom-02-foreground-color);
}
```

Hinweis: Ich bin kein CSS-Profi! Wahrscheinlich kann
man die CSS-Datei deutlich eleganter aufbauen!

Kopf- und Fußzeile einfärben
----------------------------

Die Datei [index.html][INDEXHTML] muß wie folgt ergänzt und überarbeitet werden:

- CSS-Datei einbinden
- Gültige ID für die Elemente der Kopf- und Fußzeilen vergeben
    - keine Punkte
    - keine Minuszeichen

Hier die Unterschiede im Detail:

```diff
--- step-08_header-and-footer/index.html	2022-01-16 23:26:53.581523299 +0100
+++ step-09_styling/index.html	2022-01-16 23:53:59.098341015 +0100
@@ -2,6 +2,7 @@
 <html>
   <head>
   </head>
+  <link rel="stylesheet" type="text/css" href="smp.css">
   <body onload="initPage();" onhashchange="hashChanged();">
     <span id="top-id"></span>
     <span id="page-id"></span>
@@ -36,6 +37,10 @@
         initPage();
     }
 
+    function filenameToId (filename) {
+	return filename.replaceAll(/[.-]/g, '');
+    }
+    
     function initPage () {
         const page = document.getElementById('page-id');
         if (page) {
@@ -48,9 +53,10 @@
         additionalElements.forEach((ae) => {
             const element = document.getElementById(ae.elementId);
             if (element) {
-                if (! document.getElementById(ae.filename)) {
+		const id = filenameToId(ae.filename)
+                if (! document.getElementById(id)) {
                     const newElement = document.createElement('div');
-                    newElement.id = ae.filename;
+                    newElement.id = id;
                     element.append(newElement)
                     load(newElement, ae.filename);
                 }
```

HTML-Dokument mit Javascript
----------------------------

Das [komplette Dokument][INDEXHTML] ist [hier][INDEXHTML] einsichtbar.

- [Ansicht via Github Pages][RESULT]
- [Ansicht via Dummy-HTTP-Server][LOCALHOST]

[MAIN]:      ../README.md
[BASE]:      ../step-08_header-and-footer/index.html
[INDEXHTML]: index.html
[LOCALHOST]: http://localhost:8000
[RESULT]:    https://uli-heller.github.io/static-markdown-publisher/step-09_styling/index.html
[PAGEMD]:    page.md
[AOPMD]:     another-page.md
[INDEXMD]:   index.md
