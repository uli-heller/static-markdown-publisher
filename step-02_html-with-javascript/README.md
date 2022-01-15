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
+      Second paragraph with a <span id="placeholder-id">placeholder</span>
+    </p>
   </body>
 </html>
```

Der Platzhalter ist dieser Teil: `<span id="placeholder-id">placeholder</span>`.

Javascript
----------

Jetzt kommt noch ein wenig Javascript hinzu, welches den Platzhalter
mit Text "placeholder" ersetzt durch den Text "greeting from javascript":

```diff
diff --git a/step-02_html-with-javascript/index.html b/step-02_html-with-javascript/index.html
index fe87776..3a6151f 100644
--- a/step-02_html-with-javascript/index.html
+++ b/step-02_html-with-javascript/index.html
@@ -2,11 +2,16 @@
 <html>
   <head>
   </head>
-  <body>
+  <body onload="greetings();">
     <h1>Headline</h1>
     <p>First paragraph. This is a paragraph of text!</p>
     <p>
       Second paragraph with a <span id="placeholder-id">placeholder</span>
     </p>
   </body>
+  <script>
+    function greetings () {
+       document.getElementById('placeholder-id').innerText = 'greeting from javascript';
+    }
+  </script>
 </html>
```

Ich füge eine Javascript-Funktion hinzu, die im geladenen Dokument nach einem Element
mit der ID "placeholder-id" sucht und dort den Text ersetzt durch "greeting from javascript".
Die Funktion registriere ich zuvor im HTML-Dokument, damit sie nach dem Laden ausgeführt
wird.

HTML-Dokument mit Javascript
----------------------------

Das [komplette Dokument][RESULT] ist [hier][RESULT] einsichtbar.
Dargestellt wird es wie nachfolgend gezeigt!

---

# Headline

First paragraph. This is a paragraph of text!</p>


Second paragraph with a greeting from javascript

[MAIN]: ../README.md
[RESULT]: index.html

