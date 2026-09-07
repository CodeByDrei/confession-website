const button = document.querySelector("#openButton");

const intro = document.querySelector("#intro");

const letter = document.querySelector("#letter");

const envelope = document.querySelector("#envelope");


/* =========================
   OPEN FIRST SCREEN
========================= */

button.addEventListener("click", function() {

    intro.classList.add("fade-out");


    setTimeout(function() {

        intro.classList.add("hidden");

        letter.classList.remove("hidden");

        letter.classList.add("fade-in");

    }, 500);

});


/* =========================
   OPEN ENVELOPE
========================= */

envelope.addEventListener("click", function() {

    /* Prevent clicking again */
    if (envelope.classList.contains("open")) {
        return;
    }


    /* Open envelope */
    envelope.classList.add("open");

    letter.classList.add("opened");

});
