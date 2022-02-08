03 - Links in Tabellen
======================

Hier vorab alle Links in einer Liste:

- <http://dies-ist-ein-link>
- [Noch ein Link](http://noch-ein-link)
- [Ein dritter Link][3L]
- [Link auf GPX-Datei - 4][4L]
- [Link auf GPX-Datei - 5][5L]

[3L]: http://dritter-link
[4L]: 2022-02-04.gpx

Hier in einer Tabelle:

Laufende Nummer | Link
----------------|-----------
1               | <http://dies-ist-ein-link>
2               | [Noch ein Link](http://noch-ein-link)
3               | [Ein dritter Link][3L]
4               | [Link auf GPX-Datei][4L]
5               | [Link auf GPX-Datei][5L]

[5L]: 2022-02-05.gpx

[Reference-style links inside tables are broken since version 3](https://github.com/markedjs/marked/issues/2217)
