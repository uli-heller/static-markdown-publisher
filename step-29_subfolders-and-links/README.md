29 -  Unterordner und Links
===========================

[Zurück zur Übersicht][MAIN]

Ziel
----

Ich möchte, dass in den Unterordnern alle denkbaren Links funktionieren.

- [Markdown-Datei im Unterordner](subfolder/links.md)
- <a href="index.html#subfolder/links.md">Markdown-Datei im Unterordner (mit index.html)</a>
- <a href="#subfolder/links.md">Markdown-Datei im Unterordner (ohne index.html)</a>

Außerdem soll die Navigationsleiste funktionieren, auch wenn man im Unterverzeichnis
die Browser-Seite mittels F5-Refresh komplett neu lädt.

Dem ersten Eindruck nach sieht es vorab so aus:

Typ                        |Beispiel                            |Status
---------------------------|------------------------------------|------
Markdown-Link auf MD-Datei |`[MD-Datei](markdown.md)`           |OK    
Markdown-Link auf Bild     |`![Bild](image.png)`                |OK    
Markdown-Link auf TXT-Datei|`[TXT-Datei](text.txt)`             |KO    
HTML-Link auf MD-Datei     |`<a href="markdown.md">MD-Datei</a>`|KO    
HTML-Link auf Bild         |`<img src="image.png"></img>`       |KO    

Absehbar ist, dass wir Wandelmöglichkeiten brauchen zwischen

- Markdown-URLs, bspw. http://mydomain.org/path/index.html#/subfolder/links.md
- HTML-URLs, bspw. http://mydomain.org/path/subfolder/image.png

Diese Funktionen für die Wandlungen haben wir bereits:

- hashToFilename() ...
- filenameToHash() ...

Änderungen
----------

### Markdown-Link auf TXT-Datei

Der Markdown-Link auf eine Nicht-Markdown-Datei ist schnell korrigiert:

```diff
--- a/step-29_subfolders-and-links/index.html
+++ b/step-29_subfolders-and-links/index.html
@@ -113,7 +113,7 @@
             href = location + href;
             ;
         } else if (!isMarkdownUrl(href)) {
-            ;
+            href = newRelativeLink(href);
         } else {
             /* isMarkdownUrl */
             const newFilename = newRelativeLink(href);
```

### HTML-Links

Bei der Arbeit an den HTML-Links habe ich festgestellt, dass ich die Link-Handhabung grundlegend umstellen
muß, damit das funktionieren kann. Bei den Umstellungen habe ich zusätzlich dafür gesorgt, dass

- HTML-Seiten
- Text-Seiten

analog zu Markdown-Seiten mit Kopf- und Fußzeilen angezeigt werden.

[MAIN]:  ../README.md

