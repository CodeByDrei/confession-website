const openButton = document.querySelector("#openButton");

const intro = document.querySelector("#intro");
const letter = document.querySelector("#letter");

const envelope = document.querySelector("#envelope");

const continueButton = document.querySelector("#continueButton");

const question = document.querySelector("#question");

const yesButton = document.querySelector("#yesButton");
const noButton = document.querySelector("#noButton");

const yesResponse = document.querySelector("#yesResponse");
const noResponse = document.querySelector("#noResponse");

const yesForm = document.querySelector("#yesForm");
const noForm = document.querySelector("#noForm");

const yesSubmit = document.querySelector("#yesSubmit");
const noSubmit = document.querySelector("#noSubmit");

const yesStatus = document.querySelector("#yesStatus");
const noStatus = document.querySelector("#noStatus");


// =========================
// MUSIC
// =========================

let musicPlayer;

function onYouTubeIframeAPIReady() {

    musicPlayer = new YT.Player("musicPlayer", {

        events: {

            onReady: function () {

                console.log("Music player ready.");

            }

        }

    });

}


// =========================
// INTRO → LETTER
// =========================

openButton.addEventListener("click", function () {

    // Start music when the user clicks Open
    if (musicPlayer) {
        musicPlayer.playVideo();
    }


    intro.classList.add("fade-out");


    setTimeout(function () {

        intro.classList.add("hidden");

        letter.classList.remove("hidden");

        letter.classList.add("fade-in");

    }, 500);

});


// =========================
// OPEN ENVELOPE
// =========================

envelope.addEventListener("click", function () {

    if (envelope.classList.contains("open")) {
        return;
    }

    envelope.classList.add("open");

    letter.classList.add("opened");

});


// =========================
// LETTER → QUESTION
// =========================

continueButton.addEventListener("click", function () {

    letter.classList.add("fade-out");


    setTimeout(function () {

        letter.classList.add("hidden");

        question.classList.remove("hidden");

        question.classList.add("fade-in");

    }, 500);

});


// =========================
// YES
// =========================

yesButton.addEventListener("click", function () {

    question.classList.add("fade-out");


    setTimeout(function () {

        question.classList.add("hidden");

        yesResponse.classList.remove("hidden");

        yesResponse.classList.add("fade-in");

    }, 500);

});


// =========================
// NO
// =========================

noButton.addEventListener("click", function () {

    question.classList.add("fade-out");


    setTimeout(function () {

        question.classList.add("hidden");

        noResponse.classList.remove("hidden");

        noResponse.classList.add("fade-in");

    }, 500);

});


// =========================
// YES FORM
// =========================

yesForm.addEventListener("submit", async function (event) {

    event.preventDefault();

    yesSubmit.disabled = true;
    yesSubmit.textContent = "Sending... 💌";

    yesStatus.textContent = "";


    const formData = new FormData(yesForm);


    try {

        const response = await fetch(
            yesForm.action,
            {
                method: "POST",
                body: formData,
                headers: {
                    "Accept": "application/json"
                }
            }
        );


        if (response.ok) {

            yesStatus.textContent =
                "Sent! 💗 Thank you for being honest.";

            yesForm.reset();

            yesSubmit.textContent = "Sent 💌";

        } else {

            yesStatus.textContent =
                "Something went wrong. Try again 😭";

            yesSubmit.disabled = false;
            yesSubmit.textContent = "Send 💌";

        }

    } catch (error) {

        yesStatus.textContent =
            "Couldn't send it. Check your internet connection.";

        yesSubmit.disabled = false;
        yesSubmit.textContent = "Send 💌";

    }

});


// =========================
// NO FORM
// =========================

noForm.addEventListener("submit", async function (event) {

    event.preventDefault();

    noSubmit.disabled = true;
    noSubmit.textContent = "Sending... 💌";

    noStatus.textContent = "";


    const formData = new FormData(noForm);


    try {

        const response = await fetch(
            noForm.action,
            {
                method: "POST",
                body: formData,
                headers: {
                    "Accept": "application/json"
                }
            }
        );


        if (response.ok) {

            noStatus.textContent =
                "Sent. Thank you for being honest. 💗";

            noForm.reset();

            noSubmit.textContent = "Sent 💌";

        } else {

            noStatus.textContent =
                "Something went wrong. Try again 😭";

            noSubmit.disabled = false;
            noSubmit.textContent = "Send 💌";

        }

    } catch (error) {

        noStatus.textContent =
            "Couldn't send it. Check your internet connection.";

        noSubmit.disabled = false;
        noSubmit.textContent = "Send 💌";

    }

});
