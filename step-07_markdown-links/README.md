06 - Multi Markdown
====================

[Zurück zur Übersicht][MAIN]

Ausgangslage
------------

Das [HTML-Dokument vom vorigen Schritt][BASE] ist Grundlage.
Dort wird die komplette angezeigte Seite als Markdown-Datei via Javascript eingelesen.

Ziel
----

Ich möchte die Möglichkeit haben, mehrere verschiedene Markdown-Dateien
anzuzeigen.

Markdown-Datei
--------------

Ich lege eine [Zusatzdatei "another-page.md"][AOPMD] an mit dem Text, der
im Browser angezeigt werden soll:

```
# Step 06 - Another Markdown File

* First markdown file: page.md
* Second markdown file: another-page.md
```

Mehrere Markdown-Dateien laden und anzeigen
-------------------------------------------

Relativ zum vorigen Stand ändert sich nicht sonderlich viel:

- Der Name der zu ladenden Markdown-Datei wird ermittelt via `window.location.hash`; von diesem Namen entfernen wir noch den führenden Hash
- Falls dort kein Name gefunden wird, so nehmen wir den bisherigen Namen "page.md"

Hier die Unterschiede im Detail:

```diff
diff --git a/step-06_multi-markdown.md/index.html b/step-06_multi-markdown.md/index.html
index 5dc1ef9..e7c1b22 100644
--- a/step-06_multi-markdown.md/index.html
+++ b/step-06_multi-markdown.md/index.html
@@ -12,11 +12,19 @@
        const contentText = await contentFetcher.text();
         element.innerHTML = marked.parse(contentText);
     }
+
+    function removeHash (windowLocationHash) {
+       return windowLocationHash.replace(/^#/, "");
+    }
     
     function initPage () {
         const page = document.getElementById('page-id');
         if (page) {
-           load(page, 'page.md');
+           var filename=removeHash(window.location.hash);
+           if (! filename) {
+               filename = 'page.md';
+           }
+           load(page, filename);
        }
```

HTML-Dokument mit Javascript
----------------------------

Das [komplette Dokument][INDEXHTML] ist [hier][INDEXHTML] einsichtbar.

- [Ansicht via Github Pages][RESULT]
- [Ansicht via Github Pages - Datei 1][RESULT-1]
- [Ansicht via Github Pages - Datei 2][RESULT-2]
- [Ansicht via Dummy-HTTP-Server][LOCALHOST]
- [Ansicht via Dummy-HTTP-Server - Datei 1][LOCALHOST-1]
- [Ansicht via Dummy-HTTP-Server - Datei 2][LOCALHOST-2]

---

# Step 06 - Markdown

Everything shown is stored in an external file
and loaded via javascript and transformed from
markdown to html!

1. Load the "index.html"
2. Load the "page.md"
3. Transform to html
4. Show html

---

# Step 06 - Another Markdown File

* First markdown file: page.md
* Second markdown file: another-page.md


[MAIN]:      ../README.md
[BASE]:      ../step-05_markdown/index.html
[INDEXHTML]: index.html
[LOCALHOST]: http://localhost:8000
[LOCALHOST-1]: http://localhost:8000/#page.md
[LOCALHOST-2]: http://localhost:8000/#another-page.md
[RESULT]:    https://uli-heller.github.io/static-markdown-publisher/step-06_multi-markdown/index.html
[RESULT-1]:  https://uli-heller.github.io/static-markdown-publisher/step-06_multi-markdown/index.html#page.md
[RESULT-2]:  https://uli-heller.github.io/static-markdown-publisher/step-06_multi-markdown/index.html#another-page.md
[PAGEMD]:    page.md
[AOPMD]:     another-page.md
