const openButton =
    document.querySelector("#openButton");

const intro =
    document.querySelector("#intro");

const letter =
    document.querySelector("#letter");

const envelope =
    document.querySelector("#envelope");

const continueButton =
    document.querySelector("#continueButton");

const question =
    document.querySelector("#question");

const yesButton =
    document.querySelector("#yesButton");

const noButton =
    document.querySelector("#noButton");

const yesResponse =
    document.querySelector("#yesResponse");

const noResponse =
    document.querySelector("#noResponse");



/* =========================
   INTRO → LETTER
========================= */

openButton.addEventListener(
    "click",
    function () {

        intro.classList.add(
            "fade-out"
        );


        setTimeout(
            function () {

                intro.classList.add(
                    "hidden"
                );

                letter.classList.remove(
                    "hidden"
                );

                letter.classList.add(
                    "fade-in"
                );

            },
            500
        );

    }
);



/* =========================
   OPEN ENVELOPE
========================= */

envelope.addEventListener(
    "click",
    function () {

        envelope.classList.add(
            "open"
        );

        letter.classList.add(
            "opened"
        );

    }
);



/* =========================
   LETTER → QUESTION
========================= */

continueButton.addEventListener(
    "click",
    function () {

        letter.classList.add(
            "fade-out"
        );


        setTimeout(
            function () {

                letter.classList.add(
                    "hidden"
                );

                question.classList.remove(
                    "hidden"
                );

                question.classList.add(
                    "fade-in"
                );

            },
            500
        );

    }
);



/* =========================
   YES
========================= */

yesButton.addEventListener(
    "click",
    function () {

        question.classList.add(
            "fade-out"
        );


        setTimeout(
            function () {

                question.classList.add(
                    "hidden"
                );

                yesResponse.classList.remove(
                    "hidden"
                );

                yesResponse.classList.add(
                    "fade-in"
                );

            },
            500
        );

    }
);



/* =========================
   NO
========================= */

noButton.addEventListener(
    "click",
    function () {

        question.classList.add(
            "fade-out"
        );


        setTimeout(
            function () {

                question.classList.add(
                    "hidden"
                );

                noResponse.classList.remove(
                    "hidden"
                );

                noResponse.classList.add(
                    "fade-in"
                );

            },
            500
        );

    }
);
