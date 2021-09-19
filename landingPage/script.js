let button = document.getElementById("icon");
let enlaces = document.getElementById("enlaces");
let counter = 0;

button.addEventListener("click", (e) => {

    e.preventDefault();
    if (counter == 0) {
        enlaces.className = ("enlaces one");
        counter = 1;
    } else {
        enlaces.classList.remove();
        enlaces.className = ("enlaces two");
        counter = 0;
    }
});