
const config = {
    additionalElements: [
        { filename: "/header.md", elementId: "headermd", insertBeforeElementId: "topid" },
        { filename: "/navbar.md", elementId: "navbarmd", insertBeforeElementId: "topid",    isNavbar: true },
        { filename: "/footer.md", elementId: "footermd", insertBeforeElementId: "bottomid", isNavbar: true },
    ],
    stylesheets: [
	"/stuttgart.css",
    ],
    multiLanguage: true,
    navbarClass:   'navbar',
    indexHtml:     'index.html',
    indexMd:       'index.md',
    markdown:      [ '.md',   '.markdown' ],
    html:          [ '.html', '.htm' ],
    text:          [ '.txt' ],
}
