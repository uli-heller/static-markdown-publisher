index.md wird doppelt geladen
=============================

Tritt zumindest auf bei "step-15_script-tag":

```shell
$ python3 -m http.server 8000 -d step-15_script-tag/
Serving HTTP on 0.0.0.0 port 8000 (http://0.0.0.0:8000/) ...
# Browser: http://localhost:8000
127.0.0.1 - - [24/Jan/2022 21:26:46] "GET / HTTP/1.1" 304 -
127.0.0.1 - - [24/Jan/2022 21:26:46] "GET /smp.css HTTP/1.1" 304 -
127.0.0.1 - - [24/Jan/2022 21:26:46] "GET /index.md HTTP/1.1" 200 -
127.0.0.1 - - [24/Jan/2022 21:26:46] "GET /header-02.md HTTP/1.1" 200 -
127.0.0.1 - - [24/Jan/2022 21:26:46] "GET /header.md HTTP/1.1" 200 -
127.0.0.1 - - [24/Jan/2022 21:26:46] "GET /footer.md HTTP/1.1" 200 -
127.0.0.1 - - [24/Jan/2022 21:26:46] "GET /footer-02.md HTTP/1.1" 200 -
127.0.0.1 - - [24/Jan/2022 21:26:46] "GET /index.md HTTP/1.1" 200 -
```

Man sieht, dass nach dem Browser-Zugriff auf <http://localhost:8000>
die Datei "index.md" zweimal angefordert wird!
