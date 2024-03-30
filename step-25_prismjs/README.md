25 - Syntaxhervorhebungen mit "prism.js"
========================================

[Zurück zur Übersicht][MAIN]

Ziel
----

Die Syntaxhervorhebungen mit "highlight.js"
funktionieren ganz gut. Allerdings soll ["prism.js"][PRISM]
einige Zusatzfunktionen haben und auch mehr
Formate unterstützen. Ich will das hier ausprobieren!

Änderungen
----------

Ursprünglich habe ich die CSS, die "prism.min.js" und den "prism-autoloader.min.js"
via CDN "jsdelivr" eingebunden. Ergebnis: Nur sehr wenige Sprachen sind unterstützt.

Danach habe ich auf der Download-Seite
alle Sprachen und Plugins aktiviert und
die beiden Dateien "prism-1.26.0.js" und ".css"
erstellt, heruntergeladen und eingebunden
in die "index.html".

```diff
--- a/step-25_prismjs/index.html
+++ b/step-25_prismjs/index.html
@@ -24,6 +24,15 @@
   <!-- mermaid.js -->
   <script type="text/javascript" src="https://cdn.jsdelivr.net/npm/mermaid/dist/mermaid.min.js"></script>
 
+
+  <!--
+  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/prismjs@1.26.0/themes/prism.min.css">
+  <script src="https://cdn.jsdelivr.net/npm/prismjs@1.26.0/components/prism-core.min.js"></script>
+  <script src="https://cdn.jsdelivr.net/npm/prismjs@1.26.0/plugins/autoloader/prism-autoloader.min.js"></script>
+  -->
+  <link rel="stylesheet" href="prism-1.26.0.css">
+  <script src="prism-1.26.0.js"></script>
+
   <script src="config.js"></script>
   <script>
     function nodeScriptIs(node) {
@@ -87,8 +96,8 @@
     renderer.code = (code, infostring, escaped) => {
         if (infostring === 'diff') {
             return Diff2Html.html(code);
-       } else if (infostring === 'mermaid') {
-           return '<div class="mermaid">' + code + '</div>';
+        } else if (infostring === 'mermaid') {
+            return '<div class="mermaid">' + code + '</div>';
         }
         return originalRendererCode(code, infostring, escaped);
     };
@@ -145,15 +154,20 @@
         element.innerHTML = marked.parse(contentText, {
             renderer: renderer,
             highlight: function(code, lang) {
-                const language = hljs.getLanguage(lang) ? lang : 'plaintext';
-                return hljs.highlight(code, { language }).value;
+                var language = Prism.languages[lang];
+                if (language) {
+                    return Prism.highlight(code, language, lang);
+                } else {
+                    language = hljs.getLanguage(lang) ? lang : 'plaintext';
+                    return hljs.highlight(code, { language }).value;
+                }
             },
         });
         nodeScriptReplace(element);
```

Probleme - Stand 2024-03-30
--------

### Offen

Keine offenen Probleme!

### Erledigt

#### Keine Syntax-Hervorhebung

Wie es aussieht, klappt die Syntax-Hervorhebung überhaupt nicht:

- "diff" geht - [diff.md](diff.md)
- Testdokument [code-blocks.md](code-blocks.md) enthält keine Hervorhebungen!

Mit der nachfolgenden Korrektur klappt es. Sie "repariert" den Einsatz von PrismJS und
richtet HighlightJS als Zusatzrenderer ein. Hier die Änderungen:

```diff
diff --git a/step-25_prismjs/index.html b/step-25_prismjs/index.html
index 00964f7..ce64fbd 100644
--- a/step-25_prismjs/index.html
+++ b/step-25_prismjs/index.html
@@ -93,11 +93,22 @@
 
     const renderer = new marked.Renderer();
     const originalRendererCode = renderer.code.bind(renderer);
+    var hljsLanguageRendererCalled = false; // set to true when language rendering via highlight.js is detected
+
     renderer.code = (code, infostring, escaped) => {
         if (infostring === 'diff') {
             return Diff2Html.html(code);
         } else if (infostring === 'mermaid') {
             return '<div class="mermaid">' + code + '</div>';
+        } else if (Prism.languages[infostring]) {
+            const newCode = Prism.highlight(code, Prism.languages[infostring]);
+            const langClass = `language-${infostring}`
+            return `<pre class="${langClass}"><code class="${langClass}">${newCode}</code></pre>`
+        } else if (hljs.getLanguage(infostring)) {
+            hljsLanguageRendererCalled = true;
+            const language = hljs.getLanguage(infostring) ? infostring : 'plaintext';
+            const newCode = hljs.highlight(code, { language }).value;
+            return `<pre><code>${newCode}</pre></code>`
         }
         return originalRendererCode(code, infostring, escaped);
     };
@@ -111,7 +122,6 @@
             location = location.replace(/#.*$/, '');
             location = location.slice(0, -pathname.length);
             href = location + href;
-            ;
         } else if (!isMarkdownUrl(href)) {
             ;
         } else {
@@ -153,21 +163,18 @@
         const contentText = await contentFetcher.text();
         element.innerHTML = marked.parse(contentText, {
             renderer: renderer,
-            highlight: function(code, lang) {
-                var language = Prism.languages[lang];
-                if (language) {
-                    return Prism.highlight(code, language, lang);
-                } else {
-                    language = hljs.getLanguage(lang) ? lang : 'plaintext';
-                    return hljs.highlight(code, { language }).value;
-                }
-            },
         });
         nodeScriptReplace(element);
         if (isNavbar) {
-            handleNavbar(element);
+          handleNavbar(element);
+        } else {
+          mermaid.init(undefined, ".mermaid");
+          if (hljsLanguageRendererCalled) {
+            //alert("h-a");
+            hljsLanguageRendererCalled = false;
+            hljs.highlightAll();
+          }
         }
-        mermaid.init(undefined, ".mermaid");
     }
 
     /*
```

[MAIN]:  ../README.md
[PRISM]: https://prismjs.com
