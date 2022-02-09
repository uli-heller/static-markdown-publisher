29 -  Unterordner und Links
===========================

[Zurück zur Übersicht][MAIN]

Ziel
----

Ich möchte, dass in den Unterordnern alle denkbaren Links funktionieren.

- [Markdown-Datei im Unterordner](subfolder/links.md)
- <a href="index.html#subfolder/links.md">Markdown-Datei im Unterordner (mit index.html)</a>
- <a href="#subfolder/links.md">Markdown-Datei im Unterordner (ohne index.html)</a>

Dem ersten Eindruck nach sieht es vorab so aus:

Typ | Beispiel | Status
----|---|---
Markdown-Link auf MD-Datei  | `[MD-Datei](markdown.md)` | OK
Markdown-Link auf Bild      | `![Bild](image.png)`      | OK
Markdown-Link auf TXT-Datei | `[TXT-Datei](text.txt)`   | KO
HTML-Link auf MD-Datei      | `<a href="markdown.md">MD-Datei</a>` | KO
HTML-Link auf Bild          | `<img src="image.png"></img>` | KO

Änderungen
----------

Geändert werden muß:

- in der Datei "config.js": Festlegen des Klassennamens
- in der Datei "index.html": Setzen des Klassennamens für die Navbar-Elemente
- in der Datei "stuttgart.css": Styling via Klassenname

[MAIN]:  ../README.md

