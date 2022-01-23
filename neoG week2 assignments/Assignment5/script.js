btn2 = document.querySelector(".button2");
badge4 = document.querySelector(".badge4");

badge4.style.visibility = "visible";

btn2.addEventListener("click", () => {
    if (badge4.style.visibility === "visible") {
        badge4.style.visibility = "hidden";
    } else {
        badge4.style.visibility = "visible";
    }
});