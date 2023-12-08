// ! Açılır menü kodları
// Açılır menü butonları
let dropdownButtons = document.getElementsByClassName("dropdown-btn");
for (let i = 0; i < dropdownButtons.length; i++) {
    dropdownButtons[i].addEventListener("click", function () {
        // Menü butonlarının hedef listeleri
        let dropdownButton = this;
        let targetDropdownMenu = document.getElementById(this.dataset.target);
        // Hedeflenmiş listleri göster
        targetDropdownMenu.classList.toggle("show");
        // Tıklama Kontrolü
        window.onclick = function (e) {
            // Açılır menü butonuna tıklanmış mı?
            if (!(e.target == dropdownButton)) {
                // Evet -> Tıklanan butonun sınıfında dropdown-list-item var mı?
                if (!(e.target.getAttribute("class") == "dropdown-list-item")) {
                    // Açılır menü listeleri
                    let dropdownList = document.getElementsByClassName("dropdown-list");
                    for (let i = 0; i < dropdownList.length; i++) {
                        dropdownList[i].classList.remove("show");
                    }
                }
            }
        }
    });
}
// ! Tema Kontrol
// body, tema kontrol butonu.
let body = document.getElementsByTagName("body")[0];
let modeControllerButton = document.getElementById("themeModeController");
// Tema kontrol butonuna tıklandı mı?
modeControllerButton.addEventListener("click", function () {
    // Evet -> Tıklandıktan sonra localStorage("darkMode") var mı?
    if (localStorage.getItem("darkMode")) {
        // Evet
        body.classList.remove("dark-mode");
        localStorage.removeItem("darkMode");
        switch (localStorage.getItem("lang")) {
            case "tr":
                modeControllerButton.innerText = "Açık Tema";
                break;
            case "en":
                modeControllerButton.innerText = "Light Mode";
                break;
            case "de":
                break;
        }
    } else {
        body.classList.add("dark-mode");
        localStorage.setItem("darkMode", "on");
        switch (localStorage.getItem("lang")) {
            case "tr":
                modeControllerButton.innerText = "Koyu Tema";
                break;
            case "en":
                modeControllerButton.innerText = "Dark Mode";
                break;
            case "de":
                break;
        }
    }
});
// Load
window.onload = function () {
    if (localStorage.getItem("darkMode")) {
        body.classList.add("dark-mode");

        switch (localStorage.getItem("lang")) {
            case "tr":
                modeControllerButton.innerText = "Koyu Tema";
                break;
            case "en":
                modeControllerButton.innerText = "Dark Mode";
                break;
            case "de":
                break;
        }
    } else {
        switch (localStorage.getItem("lang")) {
            case "tr":
                modeControllerButton.innerText = "Açık Tema";
                break;
            case "en":
                modeControllerButton.innerText = "Light Mode";
                break;
            case "de":
                break;
        }
    }
}
// Open buttons
let openButtons = document.getElementsByClassName("open");
let overflowController = 0;

for (let i = 0; i < openButtons.length; i++) {
    openButtons[i].addEventListener("click", function () {
        overflowController++;
        document.getElementById(this.dataset.target).classList.add("show");
        if (document.getElementById(this.dataset.target).dataset.animateRotation == "leftToRight") {
            document.getElementById(this.dataset.target).style.left = 0;
            document.getElementsByTagName("body")[0].style.overflowY = "hidden";
        }
    });
}
// Close buttons
let closeButtons = document.getElementsByClassName("close");

for (let i = 0; i < closeButtons.length; i++) {
    closeButtons[i].addEventListener("click", function () {
        document.getElementById(this.dataset.target).classList.remove("show");
        if (document.getElementById(this.dataset.target).dataset.animateRotation == "leftToRight") {
            document.getElementById(this.dataset.target).style.left = "-100%";
            if (overflowController == 1) {
                document.getElementsByTagName("body")[0].style.overflowY = "auto";
            }
            overflowController--;
        }
    });
}
// Loader
window.addEventListener("load", function () {
    if (document.getElementById("loader").classList.contains("show")) {
        document.getElementsByTagName("body")[0].style.overflowY = "hidden";
    }
    document.getElementById("loader").classList.remove("show");
    document.getElementsByTagName("body")[0].style.overflowY = "auto";
});