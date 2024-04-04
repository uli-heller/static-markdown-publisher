36 - Kontext, Unterordner und Links
===================================

[Zurück zur Übersicht][MAIN]

Dies ist eine Erweiterung von [29 -  Unterordner und Links](../step-29_subfolders-and-links/README.md).

Test
----

Kommandozeile:

```
python -m http.server 8000 -d .
```

Browser:
- [jahr-2024/monat-04](http://localhost:8000/jahr-2024/monat-04)
- [jahr-2024/original](http://localhost:8000/jahr-2024/original)

Probleme bei der Original-Version
---------------------------------

- Bild "Stuttgart" oben links wird nicht angezeigt - HTML-Link <img src="/stuttgart.svg">
- README.md unterhalb vom Bild "Stuttgart" wird nicht angezeigt
  ** Markdown-Link auf /README.md
  ** Übersetzt nach http://localhost:8000/README.md
  ** Besser wäre http://localhost:8000/jahr-2024/monat-04/README.md
- ...

Kopfzeile - Bild "Stuttgart"
----------------------------

Das Problem ist die HTML-Datei, die ich für die Kopfzeile verwende.
Deren Links wird nicht durch den Markdown-Parser erzeugt und
somit schaffen wir da keine Unabhängigkeit vom Kontext.

Idee: Geht es auch mit Markdown in "header.md"?

```diff
diff --git a/step-36-context-and-subfolders-and-links/jahr-2024/monat-04/config.js b/step-36-context-and-subfolders-and-links/jahr-2024/monat-04/config.js
index 7fe5e53..1e911e9 100644
--- a/step-36-context-and-subfolders-and-links/jahr-2024/monat-04/config.js
+++ b/step-36-context-and-subfolders-and-links/jahr-2024/monat-04/config.js
@@ -28,7 +28,7 @@ const config = {
     markdown:      [ '.md',   '.markdown' ],
     html:          [ '.html', '.htm' ],
     text:          [ '.txt' ],
-    timestamp:     '2024-03-29 07:00:02',
+    timestamp:     '2024-03-29 07:00:03',
 
     tabulatorOptions: {
         //height: "500px",         // Scrollbalken und "stehender" Tabellenkopf
diff --git a/step-36-context-and-subfolders-and-links/jahr-2024/monat-04/header.md b/step-36-context-and-subfolders-and-links/jahr-2024/monat-04/header.md
index c4f1e45..6c4850f 100644
--- a/step-36-context-and-subfolders-and-links/jahr-2024/monat-04/header.md
+++ b/step-36-context-and-subfolders-and-links/jahr-2024/monat-04/header.md
@@ -1,10 +1 @@
-<table>
-  <tr>
-    <td>
-      <img src="/stuttgart.svg" width="70" />
-    </td>
-    <td>
-      <div id="header">Stuttgart CMS</div>
-    </td>
-  </tr>
-</table>
+![stuttgart](stuttgart-70.svg) <div id="header">Stuttgart CMS</div>

diff --git a/step-36-context-and-subfolders-and-links/jahr-2024/monat-04/stuttgart.css b/step-36-context-and-subfolders-and-links/jahr-2024/monat-04/stuttgart.css
index 9fbe0b9..2c76287 100644
--- a/step-36-context-and-subfolders-and-links/jahr-2024/monat-04/stuttgart.css
+++ b/step-36-context-and-subfolders-and-links/jahr-2024/monat-04/stuttgart.css
@@ -13,6 +13,9 @@ body {
 }
 
 #headermd {
+    display:         flex;
+    align-items:     center;
+    justify-content: left;
     background: var(--background-color);
     color:      var(--foreground-color);
     padding-top: var(--padding-header);
@@ -21,6 +24,11 @@ body {
     padding-left: var(--padding-header);
 }
 
+#headermd p {
+    padding-right:  10px;
+    padding-top:    0px;
+    padding-bottom: 0px;
+}
 
 #navbarmd {
     top: 0;
```

[MAIN]:  ../README.md
