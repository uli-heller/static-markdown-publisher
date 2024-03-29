const config = {
    additionalElements: [
        { filename: "header.md", elementId: "headermd", insertBeforeElementId: "topid" },
        { filename: "navbar.md", elementId: "navbarmd", insertBeforeElementId: "topid",    isNavbar: true },
        { filename: "footer.md", elementId: "footermd", insertBeforeElementId: "bottomid", isNavbar: true },
    ],
    javascripts: [
        "prism-1.26.0.js",
        "tabulator-6.1.min.js",
    ],
    stylesheets: [
        "stuttgart.css",
        "prism-1.26.0.css",
        "tabulator-6.1.min.css",
    ],
    multiLanguage: false,
    navbarClass:   'navbar',
    indexHtml:     'index.html',
    indexMd:       'index.md',
    markdown:      [ '.md',   '.markdown' ],
    html:          [ '.html', '.htm' ],
    text:          [ '.txt' ],
    timestamp:     '2024-03-29 07:00:01',
}
