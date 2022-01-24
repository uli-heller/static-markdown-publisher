15 - Script-Tag in Markdown-Dateien
===================================

[Zurück zur Übersicht][MAIN]

Ziel
----

Ich würde gerne in nachgeladenen Dateien
einzelne Javascript-Fragmente hinterlegen.

Also beispielsweise:

```markdown
# Markdown-Datei

Dies ist eine Markdown-Datei
mit ein wenig Text!

<script>
setTimeout(function() { alert("Mein Alarm!"); }, 10000);
</script>
```

Änderungen
----------

```diff
--- a/step-15_script-tag/index.html
+++ b/step-15_script-tag/index.html
@@ -14,6 +14,32 @@
   <!-- and it's easy to individually load additional languages -->
   <!--<script src="https://cdn.jsdelivr.net/gh/highlightjs/cdn-release@11.4.0/build/languages/go.min.js"></script>-->
   <script>
+    function nodeScriptIs(node) {
+       return node.tagName === 'SCRIPT';
+    }
+
+    function nodeScriptClone(node) {
+        var script  = document.createElement("script");
+        script.text = node.innerHTML;
+        var i = -1, attrs = node.attributes, attr;
+        while ( ++i < attrs.length ) {
+            script.setAttribute( (attr = attrs[i]).name, attr.value );
+        }
+        return script;
+    }
+
+    function nodeScriptReplace(node) {
+        if ( nodeScriptIs(node) === true ) {
+            node.parentNode.replaceChild( nodeScriptClone(node) , node );
+        } else {
+            var i = -1, children = node.childNodes;
+            while ( ++i < children.length ) {
+                nodeScriptReplace( children[i] );
+            }
+        }
+        return node;
+    }
+
     /*
      * isAbsoluteUrl
      * Checks if the url contains something like XXX://
@@ -85,12 +111,13 @@
                 return hljs.highlight(code, { language }).value;
             },
         });
+        nodeScriptReplace(element);
     }
 
     /*
```

Damit die Script-Tags funktionieren, müssen wir

- alle Skript-Tags finden
- daraus neue Elemente erzeugen vom Typ "script"
- deren Attribute etc wie ursprünglich angegeben setzen
- diese dann in's Dokument einfügen

HTML-Dokument mit Javascript
----------------------------

Das [komplette Dokument][INDEXHTML] ist [hier][INDEXHTML] einsichtbar.

- [Ansicht via Github Pages][RESULT]
- [Ansicht via Dummy-HTTP-Server][LOCALHOST]

[MAIN]:      ../README.md
[BASE]:      ../step-14_highlightjs/index.html
[INDEXHTML]: index.html
[LOCALHOST]: http://localhost:8000
[RESULT]:    https://uli-heller.github.io/static-markdown-publisher/step-15_script-tag/index.html
