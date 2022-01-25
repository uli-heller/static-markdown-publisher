19 - Styling der Tabellen
=========================

[Zurück zur Übersicht][MAIN]

Ziel
----

Die Tabellen sollen hübscher aussehen:

- Farbiger Hintergrund für die Kopfzeile
- Etwas größerer Abstand bei der Kopfzeile
- Zebrastreifen
- Runde Ecken

Änderungen
----------

### Datei index.html

Ändern der ID des Mittelteils: pageid -> middle

### Datei index.md

Einfügen einer Tabelle zur optischen Kontrolle der Umsetzung.

### Datei stuttgart.css

Im Stylesheet "stuttgart.css" muß ich grob diese Änderungen vornehmen:

- pageid -> middle
- Diverse neue Stylevoraben für "middle"

Hier die Änderungen im Detail:

```diff
--------------------- step-19_styling-tables/stuttgart.css ---------------------
index 49a4859..2f6a66b 100644
@@ -50,13 +50,57 @@ body {
 }
 
 #header {
     font-size: xx-large;
     font-weight: bold;
 }
 
-#pageid {
+#middle {
     padding-top: var(--padding-top-bottom);
     padding-right: var(--padding-left-right);
     padding-bottom: var(--padding-top-bottom);
     padding-left: var(--padding-left-right);
 }
+
+#middle table {
+    border-collapse: collapse;
+}
+
+#middle th {
+    background: var(--background-color);
+    padding-top: var(--padding-top-bottom);
+    padding-right: var(--padding-left-right);
+    padding-bottom: var(--padding-top-bottom);
+    padding-left: var(--padding-left-right);
+}
+
+#middle th:first-child {
+    border-top-left-radius: 5px;
+}
+
+#middle th:last-child {
+    border-top-right-radius: 5px;
+}
+
+#middle tr {
+    /*border-bottom: solid 1px black;*/
+    padding-right: var(--padding-left-right);
+    padding-left: var(--padding-left-right);
+}
+
+#middle td {
+    /*border-bottom: solid 1px black;*/
+    padding-right: var(--padding-left-right);
+    padding-left: var(--padding-left-right);
+}
+
+#middle tr:nth-child(even) {
+    background-color: #f2f2f2;
+}
+
+#middle tr:last-child td:first-child {
+    border-bottom-left-radius: 5px;
+}
+
+#middle tr:last-child td:last-child {
+    border-bottom-right-radius: 5px;
+}
```

HTML-Dokument mit Javascript
----------------------------

Das [komplette Dokument][INDEXHTML] ist [hier][INDEXHTML] einsichtbar.

- [Ansicht via Github Pages][RESULT]
- [Ansicht via Dummy-HTTP-Server][LOCALHOST]

[MAIN]:      ../README.md
[BASE]:      ../step-18_styling-padding/index.html
[INDEXHTML]: index.html
[LOCALHOST]: http://localhost:8000
[RESULT]:    https://uli-heller.github.io/static-markdown-publisher/step-19_styling-tables/index.html
