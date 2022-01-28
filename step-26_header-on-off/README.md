26 - Haupt-Kopf aufblenden
==========================

[Zurück zur Übersicht][MAIN]

Ziel
----

Die Überschrift ganz oben nimmt etwas Platz weg.
Ich hätte gerne eine Möglichkeit, diesen Teil auszublenden!

Änderungen
----------

Geändert werden muß nur die Datei "navbar.md":

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

