const child = document.querySelectorAll(".child");
const Schild = document.querySelectorAll(".s-child");

function Handler(eve) {
    for (let i = 0; i < child.length; i++)
        child[i].className = child[i].className.replace(" active", "");
    eve.currentTarget.className += " active";
}

function Shandler(eve) {
    for (let i = 0; i < Schild.length; i++)
        Schild[i].className = Schild[i].className.replace(" s-active", "");
    eve.currentTarget.className += " s-active";
}