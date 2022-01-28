27 - Mehrsprachigkeit
=====================

[Zurück zur Übersicht][MAIN]

Ziel
----

Ich hätte gerne die Möglichkeit, die MD-Seiten
mehrsprachig zur Verfügung zu stellen, also:

- [README.md](README.md) ... Standardsprache
- [README_de.md](README_de.md) ... gleiches Dokument auf "Deutsch"
- [README_de-DE.md](README_de-DE.md) ... gleiches Dokument auf "Deutsch" für die Region "Deutschland"
- [README_de-AT.md](README_de-AT.md) ... gleiches Dokument auf "Deutsch" für die Region "Österreich"
- [README_de-CH.md](README_de-CH.md) ... gleiches Dokument auf "Deutsch" für die Region "Schweiz"
- [README_en.md](README_en.md) ... gleiches Dokument auf "Englisch"
- [README_fr.md](README_fr.md) ... gleiches Dokument auf "Französisch"

Im ersten Ansatz unterstütze ich nur "navigator.language"-Belegungen in diesem Format:

- xx-YY
- xx ... Sprache
- YY ... Region

Das ist eine ziemlich starke Vereinfachung und muß vermutlich bei Gelegenheit nochmal überarbeitet werden!

Änderungen
----------

Geändert werden muß nur die Datei "index.html":

- Link zum Ein/Ausblenden einfügen
- Javascript-Funktion zum Ein/Ausblenden einfügen

Hier die Änderungen im Detail:

```diff
--- a/step-26_header-on-off/navbar.md
+++ b/step-26_header-on-off/navbar.md
@@ -1,3 +1,4 @@
+- <a href="#" onclick="toggleTop(event);" id="show_hide">&Uarr;</a>
 - [README](README.md)
 - [index](index.md)
 - [Eins](eins.md)
@@ -7,3 +8,18 @@
 # Trenner
 
 - [Rechts](rechts.md)
+
+<script>
+ function toggleTop(e) {
+    var top=document.getElementById("headermd");
+    var show_hide=document.getElementById("show_hide");
+    if (top.style.display === "none") {
+        top.style.display = "block";
+        show_hide.innerHTML="&Uarr;"
+    } else {
+        top.style.display = "none";
+        show_hide.innerHTML="&Darr;"
+    }
+    e.preventDefault();
+  }
+</script>
```

[MAIN]:  ../README.md

