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
            isSecureContext
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

            if (document.getElementById("pageRegister")) {
                // login
                document.getElementById("login_head").innerText = data.form_els.login.login;
                document.getElementById("login_email").setAttribute("placeholder", data.form_els.login.email);
                document.getElementById("login_password").setAttribute("placeholder", data.form_els.login.password);
                document.getElementById("login_remember_text").innerText = data.form_els.login.remember_me;
                document.querySelector("#login_forgot_password span").innerText = data.form_els.login.forgot_password;
                document.querySelector("#login_member_yet span").innerText = data.form_els.login.not_a_remember_yet;
                document.getElementById("login_button").innerText = data.form_els.login.login;
                // sign up
                document.getElementById("sign_up_head").innerText = data.form_els.sign_up.sign_up;
                document.getElementById("sign_up_username").setAttribute("placeholder", data.form_els.sign_up.username);
                document.getElementById("sign_up_password").setAttribute("placeholder", data.form_els.sign_up.password);
                document.getElementById("sign_up_repeat_password").setAttribute("placeholder", data.form_els.sign_up.repeat_password);
                document.getElementById("sign_up_button").innerText = data.form_els.sign_up.sign_up;
                document.querySelector("#sign_up_already_a_member span").innerText = data.form_els.sign_up.already_a_member;
            }
        })
        .catch(error => {
            console.error(error);
        });
};