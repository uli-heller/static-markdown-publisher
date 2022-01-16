04 - Komplette Seite von Datei laden
====================================

[Zurück zur Übersicht][MAIN]

Ausgangslage
------------

Das [HTML-Dokument vom vorigen Schritt ][BASE] ist Grundlage.
Dort wird ein Textteil via Javascript in das Dokuemt
eigepflegt.

Ziel
----

Ich möchte ein HTML-Dokument haben, in welchem Teile
durch ein kleines Javascript-Programm dynamisch ersetzt
werden, wobei der Inhalt aus einer Datei geladen wird.

Einschränkungen
---------------

Die Dokuemente von den vorangegangenen Schritten kann man
einfach direkt im Webbrowser sichten, bspw. mittels dem
Aufruf `firefox step-02_html-with-javascript`. Leider funktioniert
dies nicht, sobald zusätzliche Dateien nachgeladen werden sollen.

Tests erfolgen deshalb wie folgt:

- Dummy-HTTP-Server starten

    - `python -m http.server 8000 -d step-03_external-file`
    - `python3 -m http.server 8000 -d step-03_external-file`

- Browser starten mit [http://localhost:8000][LOCALHOST]

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

Das [komplette Dokument][RESULT] ist [hier][RESULT] einsichtbar.

---

# Headline

First paragraph. This is a paragraph of text!</p>


Second paragraph with a greeting from "index.md"

[MAIN]: ../README.md
[BASE]: ../step-03_external-file/index.html
[RESULT]: index.html
[LOCALHOST]: http://localhost:8000
[INDEXMD]: index.md

[DOCTYPE]: https://www.w3.org/wiki/Choosing_the_right_doctype_for_your_HTML_documents
