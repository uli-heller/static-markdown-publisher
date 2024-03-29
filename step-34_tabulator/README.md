Tabulator
=========

Mit [Tabulator](https://tabulator.info) möchte ich
die Darstellung und Handhabung von Tabellen verbessern.

## Ausgangspunkt

Kopie von [final](../final) nach "step-33",
abgespeichert unter [original](original).

## Tabulator

### 6.1.0

```
<link href="https://unpkg.com/tabulator-tables@6.1.0/dist/css/tabulator.min.css" rel="stylesheet">
<script type="text/javascript" src="https://unpkg.com/tabulator-tables@6.1.0/dist/js/tabulator.min.js"></script>
```

### Aktuellste

```
<link href="https://unpkg.com/tabulator-tables/dist/css/tabulator.min.css" rel="stylesheet">
<script type="text/javascript" src="https://unpkg.com/tabulator-tables/dist/js/tabulator.min.js"></script>
```

### Herunterladen

```
wget https://unpkg.com/tabulator-tables@6.1.0/dist/css/tabulator.min.css
wget https://unpkg.com/tabulator-tables@6.1.0/dist/js/tabulator.min.js
```

Umbenennen nach

- tabulator-6.1.min.css
- tabulator-6.1.min.js

## Einbauen

### index.html

```diff
diff -ur original/index.html erweitert/index.html
--- original/index.html	2024-03-27 07:50:14.914022862 +0100
+++ erweitert/index.html	2024-03-29 10:45:45.921304165 +0100
@@ -25,6 +25,12 @@
   <!-- mermaid.js -->
   <script type="text/javascript" src="https://cdn.jsdelivr.net/npm/mermaid/dist/mermaid.min.js"></script>
 
+  <!-- tabulator -->
+  <!--
+  <link href="https://unpkg.com/tabulator-tables/dist/css/tabulator.min.css" rel="stylesheet">
+  <script type="text/javascript" src="https://unpkg.com/tabulator-tables/dist/js/tabulator.min.js"></script>
+  -->
+
   <script id="configjs" src="config.js?timestamp=20220222070000"></script>
 
   <script>
@@ -260,6 +266,17 @@
         const url = new URL(href, mySite.currentUrl.href);
         return originalRendererImage(url.href, title, text);
     };
+    //const originalRendererTable = renderer.table.bind(renderer);
+    renderer.table = (header, body) => {
+        //const replaced_header = header.replace(/<th/g, '<th scope="col"')
+        var table = `
+          <table class="markdown-table">
+            <thead>${header}</thead>
+            <tbody>${body}</tbody>
+          </table>
+        `
+        return table
+    }
 
     function handleNavbar (navbarElement) {
         if (!navbarElement.classList.contains(config.navbarClass)) {
@@ -439,10 +456,19 @@
         config.stylesheets.forEach((s) => {
             loadConfigJsStylesheet(s);
         });
-        Promise.all(mySite.promises);
+        Promise.allSettled(mySite.promises).then((values) => {
+            if (typeof Tabulator !== 'undefined') {
+		const tables = document.getElementsByClassName("markdown-table");
+		var n=0;
+		while (n < tables.length) {
+		    new Tabulator(tables[n], config.tabulatorOptions,);
+		    ++n;
+		}
+	    }
+	});
         mySite.promises = [];
         mySite.initInProgress = false;
-    }
+    } // initPageAsync
 
     function hashChanged () {
         initPage();
```

### config.js

```diff
diff -ur original/config.js erweitert/config.js
--- original/config.js	2024-03-27 07:50:14.914022862 +0100
+++ erweitert/config.js	2024-03-29 10:28:50.007747910 +0100
@@ -6,10 +6,12 @@
     ],
     javascripts: [
         "prism-1.26.0.js",
+        "tabulator-6.1.min.js",    // Auskommentieren für HTML-Tabellen
     ],
     stylesheets: [
         "stuttgart.css",
         "prism-1.26.0.css",
+        "tabulator-6.1.min.css",   // Auskommentieren für HTML-Tabellen
     ],
     multiLanguage: false,
     navbarClass:   'navbar',
@@ -18,5 +20,17 @@
     markdown:      [ '.md',   '.markdown' ],
     html:          [ '.html', '.htm' ],
     text:          [ '.txt' ],
-    timestamp:     '2022-02-22 07:00:01',
+    timestamp:     '2024-03-29 07:00:02',
+
+    tabulatorOptions: {
+	//height: "500px",         // Scrollbalken und "stehender" Tabellenkopf
+	layout: "fitDataStretch",  // Vermeidung von Leerspalte rechts
+	columnDefaults: {
+	    formatter:    "html",  // funktionierende HTML-Links
+	    headerFilter: "input", // Filterzeile
+	},
+	movableColumns: true,      // Sortierung der Spalten änderbar
+	movableRows: true,         // Sortierung der Zeilen änderbar
+	//spreadsheet: true,
+    },
 }
```

## Hinweise


Vermutlich wird die Art und Weise des Einbaus künftig noch überarbeitet:

- Insbesondere hätte ich gerne alle Renderer vereinheitlicht!
- Außerdem würde ich gerne auf die Trennung zwischen Renderer mit Markierung "markdown-table"
  und Konstruktor-Aufruf verzichten

Im Moment ist die Lösung "gut genug".

## Links

- [Tabulator - Optionen beim Anlegen](https://tabulator.info/docs/6.1/options)
