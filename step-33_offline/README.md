33 - Offline-Darstellung
========================

[Zurück zur Übersicht][MAIN]

Ziel
----

Bislang funktioniert die Anzeige nur, wenn
Zugriff auf's Internet möglich ist, weil wir
Basismodule aus dem Internet nachladen.
Ziel dieses Schrittes ist eine Variante, die
komplett offline funktioniert.

Hier eine [Testseite][EXAMPLE].

Erster Ansatz - config.js
-------------------------

Idee: Alle Javascript-Dateien und CSS-Dateien
werden in der "config.js" angegeben und über einen
einheitlichen Mechanismus nachgeladen analog
zu "prism.js".

Stand 2022-08-25 klappt das nicht, weil die Variable
"marked" definiert sein muß bevor "config.js" verarbeitet
werden kann. Wir brechen ab und untersuchen die Sache
eventuell später mal im Detail!

```diff
diff --git a/step-33_offline/config.js b/step-33_offline/config.js
index 2fc29f1..3032376 100644
--- a/step-33_offline/config.js
+++ b/step-33_offline/config.js
@@ -6,10 +6,16 @@ const config = {
     ],
     javascripts: [
         "prism-1.26.0.js",
+        "https://cdn.jsdelivr.net/npm/marked/marked.min.js",
+        "https://cdn.jsdelivr.net/gh/highlightjs/cdn-release@11.4.0/build/highlight.min.js",
+        "https://cdn.jsdelivr.net/npm/diff2html/bundles/js/diff2html.min.js",
+        "https://cdn.jsdelivr.net/npm/mermaid/dist/mermaid.min.js"
     ],
     stylesheets: [
         "stuttgart.css",
         "prism-1.26.0.css",
+        "https://cdn.jsdelivr.net/gh/highlightjs/cdn-release@11.4.0/build/styles/default.min.css",
+        "https://cdn.jsdelivr.net/npm/diff2html/bundles/css/diff2html.min.css",
     ],
     multiLanguage: true,
     navbarClass:   'navbar',
```

Zweiter Ansatz - Anpassungsskript
---------------------------------

Im zweiten Ansatz erstelle ich das Anpassungsskript [create-offline.sh](create-offline.sh).
Dieses:

- Ermittelt alle JS-URLs und alle CSS-URLs
- Lädt die URLs herunter in das Unterverzeichnis "offline"
- Ändert die "index.html" so ab, dass die heruntergeladenen Varianten verwendet werden
  und speichert die gänderte Datei im selben Unterverzeichnis
- Kopiert den Rest auch in das Unterverzeichnis

Danach steht im Unterverzeichnis "offline" eine Variante zur Verfügung, die ohne
Internetverbindung funktioniert!

[MAIN]:  ../README.md
[STEP25-PRISMJS]: ../step-25_prismjs/README.md
[EXAMPLE]: index.md
