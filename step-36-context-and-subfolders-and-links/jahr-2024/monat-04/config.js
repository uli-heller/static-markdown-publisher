const config = {
    additionalElements: [
        { filename: "menu/header.md", elementId: "headermd", insertBeforeElementId: "topid" },
        { filename: "menu/navbar.md", elementId: "navbarmd", insertBeforeElementId: "topid",    isNavbar: true },
        { filename: "menu/footer.md", elementId: "footermd", insertBeforeElementId: "bottomid", isNavbar: true },
    ],
    javascripts: [
        "prism-1.29.0.js", // prism.js kann nicht von unpkg heruntergeladen werden wegen Plugins
        //"https://unpkg.com/prismjs/components/prism-core.min.js",
        //"https://unpkg.com/prismjs/plugins/autoloader/prism-autoloader.min.js",
        //"https://unpkg.com/prismjs@1.29.0/components/prism-core.min.js",
        //"https://unpkg.com/prismjs@1.29.0/plugins/autoloader/prism-autoloader.min.js",
        //"https://unpkg.com/tabulator-tables/dist/js/tabulator.min.js",
        //"https://unpkg.com/tabulator-tables@6.2.0/dist/css/tabulator.min.css",
    ],
    stylesheets: [
        "stuttgart.css",
        "prism-1.29.0.css", // prism.js kann nicht von unpkg heruntergeladen werden wegen Plugins
        //"https://unpkg.com/prismjs/themes/prism.css",
        //"https://unpkg.com/prismjs@1.29.0/themes/prism.css",
        //"https://unpkg.com/tabulator-tables/dist/css/tabulator.min.css",
        //"https://unpkg.com/tabulator-tables@6.2.0/dist/js/tabulator.min.js",
    ],
    multiLanguage: false,
    navbarClass:   'navbar',
    indexHtml:     'index.html',
    indexMd:       'index.md',
    markdown:      [ '.md',   '.markdown' ],
    html:          [ '.html', '.htm' ],
    text:          [ '.txt' ],
    timestamp:     '2024-03-29 07:00:03',

    tabulatorOptions: {
        //height: "500px",         // Scrollbalken und "stehender" Tabellenkopf
        layout: "fitDataStretch",  // Vermeidung von Leerspalte rechts
        columnDefaults: {
            formatter:    "html",  // funktionierende HTML-Links
            headerFilter: "input", // Filterzeile
        },
        movableColumns: true,      // Sortierung der Spalten änderbar
        movableRows: true,         // Sortierung der Zeilen änderbar
        //spreadsheet: true,
    },
}
