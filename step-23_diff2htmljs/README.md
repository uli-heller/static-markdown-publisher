23 - Hübschere DIFFs
====================

[Zurück zur Übersicht][MAIN]

Ziel
----

Die Darstellung von Dateiunterschieden via "highlight.js"
ist sehr schlicht. Im Wesentlichen werden die eingefügten
Zeilen grün und die gelöschten Zeilen rot angezeigt.

[Diff2Html] kann das viel besser!

Änderungen
----------

Grob sind diese Änderungen erforderlich in "index.html":

- Diff2Html.min.js laden und auch das zugehörige Stylesheet
- codeRenderer erweitern um Aufruf von Diff2Html

Hier die Änderungen im Detail:

```diff
diff --git a/step-23_diff2htmljs/index.html b/step-23_diff2htmljs/index.html
index 5f193f9..44014ca 100644
--- a/step-23_diff2htmljs/index.html
+++ b/step-23_diff2htmljs/index.html
@@ -12,6 +12,15 @@
   <script src="https://cdn.jsdelivr.net/gh/highlightjs/cdn-release@11.4.0/build/highlight.min.js"></script>
   <!-- and it's easy to individually load additional languages -->
   <!--<script src="https://cdn.jsdelivr.net/gh/highlightjs/cdn-release@11.4.0/build/languages/go.min.js"></script>-->
+
+  <!-- diff2html files -->
+  <!--
+  <link rel="stylesheet" type="text/css" href="https://cdn.jsdelivr.net/npm/diff2html/dist/diff2html.min.css">
+  <script type="text/javascript" src="https://cdn.jsdelivr.net/npm/diff2html/dist/diff2html.min.js"></script>
+  -->
+  <link rel="stylesheet" type="text/css" href="https://cdn.jsdelivr.net/npm/diff2html/bundles/css/diff2html.min.css">
+  <script type="text/javascript" src="https://cdn.jsdelivr.net/npm/diff2html/bundles/js/diff2html.min.js"></script>
+
   <script src="config.js"></script>
   <script>
     function nodeScriptIs(node) {
@@ -71,6 +80,13 @@
     }
 
     const renderer = new marked.Renderer();
+    const originalRendererCode = renderer.code.bind(renderer);
+    renderer.code = (code, infostring, escaped) => {
+        if (infostring === 'diff') {
+            return Diff2Html.html(code);
+        }
+        return originalRendererCode(code, infostring, escaped);
+    };
     const originalRendererLink = renderer.link.bind(renderer);
     renderer.link = (href, title, text) => {
         if (isAbsoluteUrl(href)) {
```

[MAIN]:      ../README.md
[DIFF2HTML]: https://github.com/rtfpessoa/diff2html
