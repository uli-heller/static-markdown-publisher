Notizen
=======

- Mermaid: https://mermaid-js.github.io/mermaid/#/usage?id=example-of-a-marked-renderer
- Git: `git filter-branch --tree-filter 'if [ -d step-06_multi-markdown.md ]; then mv step-06_multi-markdown.md step-06_multi-markdown; fi' HEAD`
- Javascript - Sprache
  navigator.languages
  ? navigator.languages[0]
  : (navigator.language || navigator.userLanguage)
- Directory listings - ohne index.md
  http://localhost:8000/index.html#subfolder/
- https://www.npmjs.com/package/marked-extended-tables ... mehrzeilige Header und mehrspaltige Felder
- https://github.com/markedjs/marked/issues/545 ... Inhaltsverzeichnis
- https://www.azureblue.io/how-to-properly-style-a-markdown-table/ ... Renderer für Tabellen
- Vereinheitlichung der Renderer
  - async function load
  - weiter "oben" gibt es nochmal Renderer
