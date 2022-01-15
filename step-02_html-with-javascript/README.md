02 - HTML-Dokument mit Javascript
================================

[Zurück zur Übersicht][MAIN]

Ausgangslage
------------

Das einfache HTML-Dokument von Schritt 1 sieht so aus:

```html
<!DOCTYPE html>
<html>
  <head>
  </head>
  <body>
    <h1>Headline</h1>
    <p>Paragraph. This is a paragraph of text!</p>
  </body>
</html>
```

Ziel
----

Ich möchte ein HTML-Dokument haben, in welchem Teile
durch ein kleines Javascript-Programm dynamisch ersetzt
werden.

Platzhalter
-----------

Zunächst führe ich einen Platzhalter ein, der
später dann ersetzt wird:

```diff
diff --git a/step-02_html-with-javascript/index.html b/step-02_html-with-javascript/index.html
index 3597455..fe87776 100644
--- a/step-02_html-with-javascript/index.html
+++ b/step-02_html-with-javascript/index.html
@@ -4,6 +4,9 @@
   </head>
   <body>
     <h1>Headline</h1>
-    <p>Paragraph. This is a paragraph of text!</p>
+    <p>First paragraph. This is a paragraph of text!</p>
+    <p>
+      Second paragraph with a <span id="placeholder">placeholder</span>
+    </p>
   </body>
 </html>
```


[LMGTFY]: https://lmgtfy.app/?q=basic+html+file