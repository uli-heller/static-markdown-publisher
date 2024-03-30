const config = {
    additionalElements: [
        { filename: "header.md", elementId: "headermd", insertBeforeElementId: "topid" },
        { filename: "navbar.md", elementId: "navbarmd", insertBeforeElementId: "topid",    isNavbar: true },
        { filename: "footer.md", elementId: "footermd", insertBeforeElementId: "bottomid", isNavbar: true },
    ],
    javascripts: [
        "prism-1.29.0.js",
        "tabulator-6.1.min.js",    // Auskommentieren für HTML-Tabellen
    ],
    stylesheets: [
        "stuttgart.css",
        "prism-1.29.0.css",
        "tabulator-6.1.min.css",   // Auskommentieren für HTML-Tabellen
    ],
    multiLanguage: false,
    navbarClass:   'navbar',
    indexHtml:     'index.html',
    indexMd:       'index.md',
    markdown:      [ '.md',   '.markdown' ],
    html:          [ '.html', '.htm' ],
    text:          [ '.txt' ],
    timestamp:     '2024-03-29 07:00:02',

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
