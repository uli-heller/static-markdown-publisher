14 - Syntaxhervorhebung mit "highlight.js"
==========================================

[Zurück zur Übersicht][MAIN]

Ziel
----

Bei CodeBlöcken wie

<code><pre>
 \```javascript
 function hello () {
   alert("Hello!");
 }
 \```
</pre></code>


soll die Sprachsyntax hervorgehoben werden.

```javascript
 function hello () {
   alert("Hello!");
 }
```


Änderungen
----------

```diff
--- a/step-14_highlightjs/index.html
+++ b/step-14_highlightjs/index.html
@@ -9,6 +9,10 @@
     <span id="bottom-id"></span>
   </body>
   <script src="https://cdn.jsdelivr.net/npm/marked/marked.min.js"></script>
+  <link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/highlightjs/cdn-release@11.4.0/build/styles/default.min.css">
+  <script src="https://cdn.jsdelivr.net/gh/highlightjs/cdn-release@11.4.0/build/highlight.min.js"></script>
+  <!-- and it's easy to individually load additional languages -->
+  <!--<script src="https://cdn.jsdelivr.net/gh/highlightjs/cdn-release@11.4.0/build/languages/go.min.js"></script>-->
   <script>
     /*
      * isAbsoluteUrl
@@ -80,7 +84,13 @@
     async function load(element, filename) {
         const contentFetcher = await fetch(filename, {cache: "no-store"});
         const contentText = await contentFetcher.text();
-        element.innerHTML = marked.parse(contentText, { renderer: renderer });
+        element.innerHTML = marked.parse(contentText, {
+           renderer: renderer,
+           highlight: function(code, lang) {
+               const language = hljs.getLanguage(lang) ? lang : 'plaintext';
+               return hljs.highlight(code, { language }).value;
+           },
+       });
     }
 
     /*
```

Damit die Syntax-Hervorhebungen funktionieren, müssen wir

- highlight.js und das zugehörige Stylesheet von jsdelivr laden [siehe Dokumentation von highlight.js][HLJSD]
- den Marked-Parser erweitern um die Einbindung von hljs [siehe Dokumentation von marked.js][MJSD]

HTML-Dokument mit Javascript
----------------------------

Das [komplette Dokument][INDEXHTML] ist [hier][INDEXHTML] einsichtbar.

- [Ansicht via Github Pages][RESULT]
- [Ansicht via Dummy-HTTP-Server][LOCALHOST]

[MAIN]:      ../README.md
[BASE]:      ../step-13_enhanced-links/index.html
[INDEXHTML]: index.html
[LOCALHOST]: http://localhost:8000/smp/
[RESULT]:    https://uli-heller.github.io/static-markdown-publisher/step-14_highlightjs/index.html
[HLJSD]:     https://highlightjs.org/usage/#jsdelivr
[MJSD]:      https://marked.js.org/using_advanced
