36 - Kontext, Unterordner und Links
===================================

[Zurück zur Übersicht][MAIN]

Dies ist eine Erweiterung von [29 -  Unterordner und Links](../step-29_subfolders-and-links/README.md).
Die grundlegende Fragestellung lautet: Wie sollen die Markdown-Links für "unsere" Dokumente funktionieren?

Zielsetzung:

- Links funkionieren im SMP
- Links funktionieren im Quellrepo (Github, Gitea, Gitlab)

Damit "beide" funktionieren, dürfen wir nur relative Links verwenden!
Sobald absolute Links in's Spiel kommen, funktioniert "irgendwas" nicht mehr!
Klar: Links in HTML-Dateien (oder HTML-Fragmenten in MD-Dateien) sind "speziell".
Sie sollten vermieden werden!

Grob muß gelten:

- "Alle" MD-Dateien verwenden "relative" Links
- Auch "navbar.md" und "footer.md" verwenden relative Links
- Bei der Anzeige eines Dokumentes innerhalb vom SMP
  - Links im Bereich des Hauptdokumentes werden relativ zum Hauptdokument "aufgelöst"
  - Links im Bereich von "navbar.md" und "footer.md" werden relativ zu ihrem Dateinamen "aufgelöst"

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

- Kopfzeile - Bild "Stuttgart" oben links wird nicht angezeigt - HTML-Link <img src="/stuttgart.svg">
- Für die Navigationsleiste verwende ich absolute Links wie "/README.md", damit sie auch in Unterverzeichnissen
  funktionieren, also bspw. für [diesen Link](TBD)
  - Leider funktionieren sie dann nicht mehr beim Ansehen im Gitea/Github/Gitlab-Repo
  - Besser wäre generell die Verwendung von relativen Links ("/README.md" -> "README.md")
  - Für Navbar-Elemente sollten diese dann immer relativ zum Navbar-MD aufgelöst werden
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
