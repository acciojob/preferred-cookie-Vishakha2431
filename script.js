let fontsize = document.getElementById("fontsize");
let fontcolor = document.getElementById("fontcolor");
let form = document.querySelector("form");

form.addEventListener("submit", (e) => {

    e.preventDefault();

    // SAVE COOKIES
    document.cookie = `fontsize=${fontsize.value}`;
    document.cookie = `fontcolor=${fontcolor.value}`;

    // APPLY STYLES
    document.body.style.fontSize = fontsize.value + "px";
    document.body.style.color = fontcolor.value;
});

window.addEventListener("DOMContentLoaded", () => {

    let cookies = document.cookie.split(";");

    cookies.forEach((cookie) => {

        let [key, value] = cookie.trim().split("=");

        if (key === "fontsize") {

            document.body.style.fontSize = value + "px";

            fontsize.value = value;
        }

        if (key === "fontcolor") {

            document.body.style.color = value;

            fontcolor.value = value;
        }
    });
});