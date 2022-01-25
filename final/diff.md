DIFF
----

Dies ist ein Markdown-Dokument mit einem Codeblock,
der eine Ausgabe des Kommandos `diff` enthält:

```diff
-- step-18_styling-padding/index.html	2022-01-25 16:52:03.055826071 +0100
+++ step-19_styling-tables/index.html	2022-01-25 19:22:46.959745472 +0100
@@ -4,7 +4,7 @@
   </head>
   <body onload="initPage();" onhashchange="hashChanged();">
     <div id="topid"></div>
-    <div id="pageid"></div>
+    <div id="middle"></div>
     <div id="bottomid"></div>
   </body>
   <script src="https://cdn.jsdelivr.net/npm/marked/marked.min.js"></script>
@@ -256,11 +256,11 @@
     }
 
     function initPage () {
-        const page = document.getElementById('pageid');
-        if (page) {
+        const middle = document.getElementById('middle');
+        if (middle) {
             var filename=hashToFilename(window.location.hash);
             window.location.hash = filenameToHash(filename);
-            load(page, filename);
+            load(middle, filename);
         }
         config.additionalElements.forEach((ae) => {
             const element = document.getElementById(ae.elementId);
```
