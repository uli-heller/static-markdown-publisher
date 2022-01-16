03 - Externe Datei laden
========================

[Zurück zur Übersicht][MAIN]

Ausgangslage
------------

Das [HTML-Dokument vom vorigen Schritt ][BASE] ist Grundlage.
Dort wird ein konstanter Text via Javascript in das Dokuemt
eigepflegt.

Ziel
----

Ich möchte ein HTML-Dokument haben, in welchem Teile
durch ein kleines Javascript-Programm dynamisch ersetzt
werden, wobei der Inhalt aus einer Datei geladen wird.

Einschränkungen
---------------

Die Dokumente von den vorangegangenen Schritten kann man
einfach direkt im Webbrowser sichten, bspw. mittels dem
Aufruf `firefox step-02_html-with-javascript`. Leider funktioniert
dies nicht, sobald zusätzliche Dateien nachgeladen werden sollen.

Ab diesem Schritt klappt die Sichtung nur noch mit
Dummy-HTTP-Server oder Github-Pages. Für Details: Siehe
[Übersichtsdokument][MAIN], ganz unten!

Zusatzdatei
-----------

Ich lege eine [Zusatzdatei "index.md"][INDEXMD] an mit dem Text, der
im Browser angezeigt werden soll:

```
greeting from "index.md"
```

Datei laden
-----------

Zum Laden der Datei wollen wir das FETCH-API verwenden.
Das ist ein asynchroner Mechanismus, wir können nicht
einfach "text = fetch()" aufrufen und dann mit "text"
weiterarbeiten. Stattdessen definieren wir Aktionen,
die nach der Ermittlung von "text" ausgeführt werden sollen,
in unserem Fall soll der Text des Elementes getauscht
werden:

```javascript
    async function load(element, filename) {
	const contentFetcher = await fetch(filename);
	const contentText = await contentFetcher.text();
        element.innerText = contentText;
    }

    function greetings () {
        const placeholder = document.getElementById('placeholder-id');
        if (placeholder) {
	    load(placeholder, 'index.md');
	}
    }
```


HTML-Dokument mit Javascript
----------------------------

Das [komplette Dokument][INDEXHTML] ist [hier][INDEXHTML] einsichtbar.

[Ansicht via Github Pages][RESULT]

---

# Step 03 - Headline

First paragraph. This is a paragraph of text!


Second paragraph with a greeting from "index.md"

[MAIN]: ../README.md
[BASE]: ../step-02_html-with-javascript/index.html
[INDEXHTML]: index.html
[INDEXMD]: index.md
[LOCALHOST]: http://localhost:8000
[RESULT]: https://uli-heller.github.io/static-markdown-publisher/step-02_html-with-javascript/index.html
