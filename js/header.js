var BAKED_OPTIONS = [
    {
        "name": "Home",
        "link": "index.html"
    },
    {
        "name": "Portfolio",
        "link": "https://github.com/pent0/"
    },
    {
        "name": "About",
        "link": "about.html"
    }
]

function add_menu_option(name, link) {
    link_elem = document.createElement("a");

    link_elem.href = link;
    link_elem.text = name;
    link_elem.className = "option-button";

    header_elem = document.getElementById("header");
    if (header_elem == null) {
        header_elem = document.createElement("div");
        header_elem.className = "header";
        header_elem.id = "header";

        document.appendChild(header_elem);
    }

    header_elem.insertBefore(link_elem, header_elem.firstChild);
}

function add_baked_menu_options() {
    BAKED_OPTIONS.forEach(item => {
        add_menu_option(item["name"], item["link"])
    });
}

add_baked_menu_options();