const TWITTER_USERNAME = "ccjkz11";
const GITHUB_USERNAME = "pent0";
const SOCIAL_FOOTER_ID = "social_footer";

function show_social_info() {
    footer = document.getElementById(SOCIAL_FOOTER_ID);

    if (footer == null) {
        footer = document.createElement('div');
        footer.id = SOCIAL_FOOTER_ID;
        footer.className = "footer";

        document.getElementsByTagName("body").item(0).appendChild(footer);
    }

    social_infos = [
        {
            "username": GITHUB_USERNAME,
            "baselink": "https://github.com/",
            "icon": "github_icon.jpg"
        },
        {
            "username": TWITTER_USERNAME,
            "baselink": "https://twitter.com/",
            "icon": "twitter_icon.png"
        }
    ];
	
    social_infos.forEach(item => {
        ref_link = document.createElement("a");
        ref_link.href = item["baselink"] + item["username"];
        ref_link.target = "_blank";

        icon_elem = document.createElement("img");
        icon_elem.className = "icon";
        icon_elem.src = "assets\\" + item["icon"];

        ref_link.appendChild(icon_elem);
        footer.appendChild(ref_link);
    });
}

show_social_info();