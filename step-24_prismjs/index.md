# 24 - Prism.js

Dies ist eine Markdown-Datei
mit einem Block von Dateiunterschieden:

```sh
#!/bin/bash
LOG=y

log () {
  test -n "${LOG}" && echo "$(date +%Y-%m-%s_%H:%M:%S) - " "$@"
}
```
