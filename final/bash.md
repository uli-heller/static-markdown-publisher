# Markdown-Dokument mit Bash-Skript

Hier ein Markdowndokument mit etwas
Text und nachfolgend einem Bash-Skript:

```sh
#!/bin/bash
LOG=y

log () {
  test -n "${LOG}" && echo "$(date +%Y-%m-%s_%H:%M:%S) - " "$@"
}
```
