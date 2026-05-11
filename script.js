let fontsize = document.getElementById("fontsize");
let fontcolor = document.getElementById("fontcolor");

// SAVE COOKIES
function savePreferences() {

    document.cookie = `fontsize=${fontsize.value}`;

    document.cookie = `fontcolor=${fontcolor.value}`;
}

// LOAD COOKIES
document.addEventListener("DOMContentLoaded", () => {

    let cookies = document.cookie.split(";");

    cookies.forEach((cookie) => {

        let [key, value] = cookie.trim().split("=");

        if (key === "fontsize") {

            fontsize.value = value;
        }

        if (key === "fontcolor") {

            fontcolor.value = value;
        }
    });
});