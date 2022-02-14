31 - Aktualisierungen bei der Konfigurationsdatei
=================================================

[Zurück zur Übersicht][MAIN]

Ziel
----

Bislang laden wir die Konfigurationsdatei "config.js"
statisch über ein `<script>`-Element in der "index.html".
Dies führt dazu, dass

- die Datei relativ selten geladen wird
- die Datei relativ aggressive zwischengespeichert wird im Browser-Cache
- Aktualisierungen an der Datei teilweise auch nach einem Browser-Neustart
  nicht greifen

In diesem Schritt möchte ich erreichen, dass die Datei
möglichst überhaupt nicht mehr im Browser-Cache
zwischengespeichert wird.

Änderungen
----------

Der Hauptteil der Initialisierung wird nun in eine asynchrone
Funktion ausgelagert. Dadurch kann ich

- am Beginn der Initialisierung die "config.js" neu laden
- dafür sorgen, dass sich die Initialisierung nie mehrfach überlagern kann
  (neue Initialisierung erst starten, wenn die alte abgearbeitet ist)

[MAIN]:  ../README.md

