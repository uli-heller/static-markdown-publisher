static-markdown-publisher
=========================

[English version (not yet available)](README-en.md)

Einleitung
----------

Ich bin ein ziemlich enthusiastischer Fan von [MDWIKI][MDWIKI].
Das Teil erlaubt mir, Markdown-Dateien zu erstellen und über einen
statischen Webserver zu veröffentlichen, wenn ich noch ein paar
zusätzliche Dateien dort ablege.

Leider wird [MDWIKI][MDWIKI] schon ewig nicht mehr weiterentwickelt
und mir persönlich ist es nicht gelungen, den Build-Prozess erfolgreich
durchzuspielen. Somit kann ich selbst da auch wenig zur Weiterentwicklung
beitragen.

Vor ein paar Wochen bin ich über ein ähnliches Projekt gestolpert:
[RAITO][RAITO]. Das funktioniert quasi genauso wie [MDWIKI][MDWIKI].
Es ist aber deutlich moderner und benötigt keinen Build-Prozess.
Leider ist die Lizenz von [RAITO][RAITO] unklar. Also kann ich
es auch nicht dauerhaft verwenden und muß was eigenes entwickeln.
Ich möchte die [Apache 2.0 License][LICENSE] verwenden, habe aber
noch nicht 100%ig geprüft, ob das rechtlich zulässig ist.

Eine [Tabelle der Lizenzen von Drittsoftware][LICENSE-OTHERS]
findet sich [hier][LICENSE-OTHERS].

Ziele
-----

Grob betrachtet möchte ich sowas ähnliches wie MDWIKI nachbauen, also

- ich erstelle ein paar Rahmendateien wie "index.html", "config.js" etc
- ... und dazu eine Reihe von MD-Dateien
- ... und all das kann auf einem Webserver hinterlegt und dann direkt
  per Browser gesichtet werden

Die Anzahl der Rahmendateien sollte sich dabei "in Grenzen" halten - maximal
10 Stück oder so. Der Inhalt und die Anzahl der MD-Dateien sollen komplett
variabel sein.

Abgrenzung zu "Static Site Generatoren"
---------------------------------------

![no-static-site-generator](images/no-static-site-generator.svg)


Implementierungs- und Aufbau-Schritte
-------------------------------------

* [Schritt 1 - Grundlegendes HTML-Dokument](step-01_basic-html/README.md)
* [Schritt 2 - HTML-Dokument mit Javascript](step-02_html-with-javascript/README.md)
* [Schritt 3 - Zusatzdaten von externer Datei](step-03_external-file/README.md)
* [Schritt 4 - Komplette Seite von externer Datei](step-04_complete-page/README.md)
* [Schritt 5 - Markdown](step-05_markdown/README.md)

Endergebnis
-----------

TBD

Test und Github-Pages
---------------------

"Normale" HTML-Dateien kann man
einfach direkt im Webbrowser sichten, bspw. mittels dem
Aufruf `firefox index.html`. Leider funktioniert
dies nicht, sobald zusätzliche Dateien nachgeladen werden sollen.

### Lokale Tests ohne externe Abhängigkeiten

- Dummy-HTTP-Server starten

    - `python -m http.server 8000 -d step-03_external-file`
    - `python3 -m http.server 8000 -d step-03_external-file`

- Browser starten mit [http://localhost:8000][LOCALHOST]

- Nachteil: Man muß den Dummy-HTTP-Server im Auge behalten

### Tests mittels Github-Pages

- Browser starten mit <https://uli-heller.github.io/static-markdown-publisher/step-03_external-file/index.html>
- Nachteile:
    - Geht nur mit Internet-Zugriff
    - Geht nur, wenn ich den Zweig "gh-pages" synchron zu "main" halte
    - Für Github-Forks oder bei Umzug des Repos laufen die Links in's Leere

[MDWIKI]: http://www.mdwiki.info/
[RAITO]: https://github.com/arnaudsm/raito/
[LICENSE]: LICENSE.md
[LICENSE-OTHERS]: LICENSE-OTHERS.md
[LOCALHOST]: http://localhost:8000
