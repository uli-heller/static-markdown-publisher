05 - Markdown
=============

[Zurück zur Übersicht][MAIN]

Ausgangslage
------------

Das [HTML-Dokument vom vorigen Schritt][BASE] ist Grundlage.
Dort wird die komplette angezeigte Seite via Javascript eingelesen.

Ziel
----

Ich möchte statt der HTML-Datei eine Markdown-Datei laden,
diese in HTML wandeln und dann anzeigen.

Markdown-Datei
--------------

Ich lege eine [Zusatzdatei "page.md"][PAGEMD] an mit dem Text, der
im Browser angezeigt werden soll:

```
# Step 05 - Markdown

Everything shown is stored in an external file
and loaded via javascript and transformed from
markdown to html!

1. Load the "index.html"
2. Load the "page.md"
3. Transform to html
4. Show html
```

Markdown laden und anzeigen
---------------------------

Relativ zum vorigen Stand ändert sich nicht sonderlich viel:

- Markdown-Parser "marked.min.js" laden
- Inhalt der geladenen Datei mittels "marked.parse()" wandeln von Markdown nach HTML

HTML-Dokument mit Javascript
----------------------------

Das [komplette Dokument][INDEXHTML] ist [hier][INDEXHTML] einsichtbar.

[Ansicht via Github Pages][RESULT]

---

# Step 05 - Markdown


Everything shown is stored in an external file
and loaded via javascript and transformed from
markdown to html!

1. Load the "index.html"
2. Load the "page.md"
3. Transform to html
4. Show html

[MAIN]: ../README.md
[BASE]: ../step-04_complete-page/index.html
[INDEXHTML]: index.html
[LOCALHOST]: http://localhost:8000
[RESULT]: https://uli-heller.github.io/static-markdown-publisher/step-05_markdown/index.html
[PAGEMD]: page.md

