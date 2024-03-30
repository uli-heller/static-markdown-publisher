Aktualisierung von PRISM.JS
===========================

Bislang: 1.26.0

Vorbereitung
------------

Mit dem Browser auf die Seite: [PrismJS - Downloads](https://prismjs.com/download.html).
Dort dann:

- Alle Sprachen anwählen
- Alle Plugins anwählen

"Unten" erscheinen dann Skripte für den Download des JS- und des CSS-Teils.
Die "URL" sieht dann so aus: [PrismJS - Downloads - alle Sprachen und Plugins](https://prismjs.com/download.html#themes=prism&languages=markup+css+clike+javascript+abap+abnf+actionscript+ada+agda+al+antlr4+apacheconf+apex+apl+applescript+aql+arduino+arff+armasm+arturo+asciidoc+aspnet+asm6502+asmatmel+autohotkey+autoit+avisynth+avro-idl+awk+bash+basic+batch+bbcode+bbj+bicep+birb+bison+bnf+bqn+brainfuck+brightscript+bro+bsl+c+csharp+cpp+cfscript+chaiscript+cil+cilkc+cilkcpp+clojure+cmake+cobol+coffeescript+concurnas+csp+cooklang+coq+crystal+css-extras+csv+cue+cypher+d+dart+dataweave+dax+dhall+diff+django+dns-zone-file+docker+dot+ebnf+editorconfig+eiffel+ejs+elixir+elm+etlua+erb+erlang+excel-formula+fsharp+factor+false+firestore-security-rules+flow+fortran+ftl+gml+gap+gcode+gdscript+gedcom+gettext+gherkin+git+glsl+gn+linker-script+go+go-module+gradle+graphql+groovy+haml+handlebars+haskell+haxe+hcl+hlsl+hoon+http+hpkp+hsts+ichigojam+icon+icu-message-format+idris+ignore+inform7+ini+io+j+java+javadoc+javadoclike+javastacktrace+jexl+jolie+jq+jsdoc+js-extras+json+json5+jsonp+jsstacktrace+js-templates+julia+keepalived+keyman+kotlin+kumir+kusto+latex+latte+less+lilypond+liquid+lisp+livescript+llvm+log+lolcode+lua+magma+makefile+markdown+markup-templating+mata+matlab+maxscript+mel+mermaid+metafont+mizar+mongodb+monkey+moonscript+n1ql+n4js+nand2tetris-hdl+naniscript+nasm+neon+nevod+nginx+nim+nix+nsis+objectivec+ocaml+odin+opencl+openqasm+oz+parigp+parser+pascal+pascaligo+psl+pcaxis+peoplecode+perl+php+phpdoc+php-extras+plant-uml+plsql+powerquery+powershell+processing+prolog+promql+properties+protobuf+pug+puppet+pure+purebasic+purescript+python+qsharp+q+qml+qore+r+racket+cshtml+jsx+tsx+reason+regex+rego+renpy+rescript+rest+rip+roboconf+robotframework+ruby+rust+sas+sass+scss+scala+scheme+shell-session+smali+smalltalk+smarty+sml+solidity+solution-file+soy+sparql+splunk-spl+sqf+sql+squirrel+stan+stata+iecst+stylus+supercollider+swift+systemd+t4-templating+t4-cs+t4-vb+tap+tcl+tt2+textile+toml+tremor+turtle+twig+typescript+typoscript+unrealscript+uorazor+uri+v+vala+vbnet+velocity+verilog+vhdl+vim+visual-basic+warpscript+wasm+web-idl+wgsl+wiki+wolfram+wren+xeora+xml-doc+xojo+xquery+yaml+yang+zig&plugins=line-highlight+line-numbers+show-invisibles+autolinker+wpd+custom-class+file-highlight+show-language+jsonp-highlight+highlight-keywords+remove-initial-line-feed+inline-color+previewers+autoloader+keep-markup+command-line+unescaped-markup+normalize-whitespace+data-uri-highlight+toolbar+copy-to-clipboard+download-button+match-braces+diff-highlight+filter-highlight-all+treeview)

JS-Download
-----------

Skript kopiert von "Vorbereitung": [download-js.txt](download-js.txt)

Datei heruntergeladen von "Vorbereitung": [prism-1.29.0.js](prism-1.29.0.js)

CSS-Download
------------

Skript kopiert von "Vorbereitung": [download-js.txt](download-css.txt)

Datei heruntergeladen von "Vorbereitung": [prism-1.29.0.js](prism-1.29.0.css)

Anpassungen
-----------

``` diff
diff -ur original/config.js erweitert/config.js
--- original/config.js	2024-03-29 10:52:49.327284029 +0100
+++ erweitert/config.js	2024-03-30 07:17:06.609444326 +0100
@@ -5,12 +5,12 @@
         { filename: "footer.md", elementId: "footermd", insertBeforeElementId: "bottomid", isNavbar: true },
     ],
     javascripts: [
-        "prism-1.26.0.js",
+        "prism-1.29.0.js",
         "tabulator-6.1.min.js",    // Auskommentieren für HTML-Tabellen
     ],
     stylesheets: [
         "stuttgart.css",
-        "prism-1.26.0.css",
+        "prism-1.29.0.css",
         "tabulator-6.1.min.css",   // Auskommentieren für HTML-Tabellen
     ],
     multiLanguage: false,
Nur in original: prism-1.26.0.css.
Nur in original: prism-1.26.0.js.
Nur in erweitert: prism-1.29.0.css.
Nur in erweitert: prism-1.29.0.js.
```

Probleme - Stand 2024-03-30
--------

Wie es aussieht, klappt die Syntax-Hervorhebung überhaupt nicht:

- "diff" geht - [diff.md](diff.md)
- Testdokument [code-blocks.md](code-blocks.md) enthält keine Hervorhebungen!
