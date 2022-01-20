const changeMode = document.querySelector(".change-mode");
const container = document.querySelector(".hero-container");




container.style.backgroundColor = "white";

function handler() {
    if (container.style.backgroundColor === "white") {
        container.style.backgroundColor = "black";
        container.style.color = "white";
    } else {
        container.style.color = "black";
        container.style.backgroundColor = "white";
    }
}


changeMode.addEventListener("click", handler)