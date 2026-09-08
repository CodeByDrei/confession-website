let musicPlayer = null;
let musicRequested = false;

let userName = "";


// =========================
// YOUTUBE MUSIC PLAYER
// =========================

function onYouTubeIframeAPIReady() {

    musicPlayer = new YT.Player("musicPlayer", {

        events: {

            onReady: function () {

                musicPlayer.setVolume(25);

                if (musicRequested) {
                    musicPlayer.playVideo();
                }

            }

        }

    });

}


const openButton = document.querySelector("#openButton");

const intro = document.querySelector("#intro");
const letter = document.querySelector("#letter");

const envelope = document.querySelector("#envelope");

const continueButton = document.querySelector("#continueButton");

const nameScreen = document.querySelector("#nameScreen");
const nameInput = document.querySelector("#nameInput");
const nameContinueButton = document.querySelector("#nameContinueButton");
const nameStatus = document.querySelector("#nameStatus");

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
// INTRO → LETTER + MUSIC
// =========================

openButton.addEventListener("click", function () {

    musicRequested = true;

    if (
        musicPlayer &&
        typeof musicPlayer.playVideo === "function"
    ) {
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
// LETTER → NAME
// =========================

continueButton.addEventListener("click", function () {

    letter.classList.add("fade-out");

    setTimeout(function () {

        letter.classList.add("hidden");

        nameScreen.classList.remove("hidden");

        nameScreen.classList.add("fade-in");

        nameInput.focus();

    }, 500);

});


// =========================
// NAME → QUESTION
// =========================

nameContinueButton.addEventListener("click", function () {

    const enteredName = nameInput.value.trim();


    if (enteredName === "") {

        nameStatus.textContent =
            "You gotta tell me your name first 😭";

        nameInput.focus();

        return;
    }


    userName = enteredName;

    nameScreen.classList.add("fade-out");

    setTimeout(function () {

        nameScreen.classList.add("hidden");

        question.classList.remove("hidden");

        question.classList.add("fade-in");

    }, 500);

});


// =========================
// ALLOW ENTER ON NAME
// =========================

nameInput.addEventListener("keydown", function (event) {

    if (event.key === "Enter") {

        event.preventDefault();

        nameContinueButton.click();

    }

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
// ADD NAME TO FORM
// =========================

function addNameToForm(form) {

    let existingName = form.querySelector(
        'input[name="name"]'
    );


    if (!existingName) {

        existingName = document.createElement("input");

        existingName.type = "hidden";

        existingName.name = "name";

        form.appendChild(existingName);

    }


    existingName.value = userName;

}


// =========================
// YES FORM
// =========================

yesForm.addEventListener("submit", async function (event) {

    event.preventDefault();

    yesSubmit.disabled = true;
    yesSubmit.textContent = "Sending... 💌";

    yesStatus.textContent = "";


    addNameToForm(yesForm);


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


    addNameToForm(noForm);


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
