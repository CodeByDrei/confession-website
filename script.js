const button = document.querySelector("#openButton");
const intro = document.querySelector("#intro");
const letter = document.querySelector("#letter");

button.addEventListener("click", function() {
    intro.classList.add("fade-out");

    setTimeout(function() {
        intro.classList.add("hidden");
        letter.classList.remove("hidden");
        letter.classList.add("fade-in");
    }, 500);
});
