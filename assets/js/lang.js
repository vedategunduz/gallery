let currentLanguage = (localStorage.getItem("lang")) ? localStorage.getItem("lang") : "en";

changeLanguage(currentLanguage);

function changeLanguage(param) {
    localStorage.setItem("lang", param);
    fetch("assets/json/" + param + ".json")
        .then(response => {
            if (!response.ok) {
                throw new Error("Url bozuk!");
            }
            return response.json();
        })
        .then(data => {
            // Language
            // Skeleton
            document.getElementsByTagName("html")[0].setAttribute("lang", data.lang);
            document.getElementById("languageController").innerText = data.language + " " + (data.lang).toUpperCase();
            document.getElementById("themeModeController").innerText = (localStorage.getItem("darkMode")) ? data.theme_mode.dark : data.theme_mode.light;
            // Deskop Menu
            let deskopNavItems = document.querySelectorAll("#nav .nav-list li span");
            for (let i = 0; i < deskopNavItems.length; i++) {
                deskopNavItems[i].innerText = data.menu[i];
            }
            // Mobile Menu
            let mobileNavItems = document.querySelectorAll("#navMobile .nav-mobile-list li span");

            for (let i = 0; i < mobileNavItems.length; i++) {
                mobileNavItems[i].innerText = data.menu[i];
            }
            // Register Form els
        })
        .catch(error => {
            console.error(error);
        });
};