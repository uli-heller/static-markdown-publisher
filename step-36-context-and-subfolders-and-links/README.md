36 - Kontext, Unterordner und Links
===================================

[Zurück zur Übersicht][MAIN]

Dies ist eine Erweiterung von [29 -  Unterordner und Links](../step-29_subfolders-and-links/README.md).

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

- Bild "Stuttgart" oben links wird nicht angezeigt - HTML-Link <img src="/stuttgart.svg">
- README.md unterhalb vom Bild "Stuttgart" wird nicht angezeigt
  ** Markdown-Link auf /README.md
  ** Übersetzt nach http://localhost:8000/README.md
  ** Besser wäre http://localhost:8000/jahr-2024/monat-04/README.md
- ...

[MAIN]:  ../README.md
