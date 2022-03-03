const config = {
    additionalElements: [
        { filename: "header.md", elementId: "headermd", insertBeforeElementId: "topid" },
        { filename: "navbar.md", elementId: "navbarmd", insertBeforeElementId: "topid",    isNavbar: true },
        { filename: "footer.md", elementId: "footermd", insertBeforeElementId: "bottomid", isNavbar: true },
    ],
    javascripts: [
//        "prism-1.26.0.js",
	"https://cdn.jsdelivr.net/npm/chart.js@3.7.1/dist/chart.min.js",
    ],
    stylesheets: [
        "stuttgart.css",
//        "prism-1.26.0.css",
    ],
    multiLanguage: true,
    navbarClass:   'navbar',
    indexHtml:     'index.html',
    indexMd:       'index.md',
    markdown:      [ '.md',   '.markdown' ],
    html:          [ '.html', '.htm' ],
    text:          [ '.txt' ],
    timestamp:     '2022-02-22 07:00:00',
}
