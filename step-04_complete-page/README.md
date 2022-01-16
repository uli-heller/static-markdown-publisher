04 - Komplette Seite von Datei laden
====================================

[Zurück zur Übersicht][MAIN]

Ausgangslage
------------

Das [HTML-Dokument vom vorigen Schritt][BASE] ist Grundlage.
Dort wird ein Textteil via Javascript in das Dokuemt
eigepflegt.

Ziel
----

Ich möchte das angezeigte Dokument komplett "selbst" laden.
Die Datei "index.html" enthält nur einen (unsichtbaren)
Rahmen und den Javascript-Code zum Laden des Rests.

HTML-Datei
----------

Ich lege eine [Zusatzdatei "page.html"][PAGEHTML] an mit dem Text, der
im Browser angezeigt werden soll:

```
<h1>Step 04 - Complete Page From File</h1>
<p>
  Everything shown is stored in an external file
  and loaded via javascript!
</p>
```

Komplette Seite laden
---------------------

Relativ zum vorigen Stand ändert sich nicht sonderlich viel:

- DOCTYPE korrigiert gemäß [Empfehlung von w3.org][DOCTYPE] ("Fleissarbeit", nicht notwendig)
- Die meisten HTML-Tags fliegen raus aus der [index.html][INDEXHTML]
- Übrig bleibt nur ein Platzhalter `<span>`
- Der Javascript-Code wird etwas überarbeitet
    - innerText -> innerHTML
    - greetings -> initPage
    - placeholder -> page

HTML-Dokument mit Javascript
----------------------------

Das [komplette Dokument][INDEXHTML] ist [hier][INDEXHTML] einsichtbar.

[Ansicht via Github Pages][RESULT]

---

# Step 04 - Complete Page From File

Everything shown is stored in an external file
and loaded via javascript!

[MAIN]: ../README.md
[BASE]: ../step-03_external-file/index.html
[INDEXHTML]: index.html
[LOCALHOST]: http://localhost:8000
[RESULT]: https://uli-heller.github.io/static-markdown-publisher/step-04_complete-page/index.html
[PAGEHTML]: page.html
[INDEXHTML]: index.html
[DOCTYPE]: https://www.w3.org/wiki/Choosing_the_right_doctype_for_your_HTML_documents
