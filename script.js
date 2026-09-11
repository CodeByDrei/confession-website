// =========================
// AUDIO SYSTEM
// =========================

let audioContext = null;

function initAudio() {

    if (!audioContext) {

        const AudioContext =
            window.AudioContext ||
            window.webkitAudioContext;

        if (!AudioContext) {
            return;
        }

        audioContext = new AudioContext();

    }

    if (audioContext.state === "suspended") {
        audioContext.resume();
    }

}


// =========================
// BUTTON CLICK SOUND
// =========================

function playClickSound() {

    if (!audioContext) return;

    const oscillator =
        audioContext.createOscillator();

    const gain =
        audioContext.createGain();

    oscillator.type = "sine";

    oscillator.frequency.setValueAtTime(
        700,
        audioContext.currentTime
    );

    oscillator.frequency.exponentialRampToValueAtTime(
        420,
        audioContext.currentTime + 0.07
    );

    gain.gain.setValueAtTime(
        0.08,
        audioContext.currentTime
    );

    gain.gain.exponentialRampToValueAtTime(
        0.001,
        audioContext.currentTime + 0.07
    );

    oscillator.connect(gain);

    gain.connect(
        audioContext.destination
    );

    oscillator.start();

    oscillator.stop(
        audioContext.currentTime + 0.07
    );

}


// =========================
// TYPEWRITER SOUND
// =========================

function playTypewriterSound() {

    if (!audioContext) return;

    const oscillator =
        audioContext.createOscillator();

    const gain =
        audioContext.createGain();

    oscillator.type = "square";

    oscillator.frequency.setValueAtTime(
        900 + Math.random() * 250,
        audioContext.currentTime
    );

    gain.gain.setValueAtTime(
        0.025,
        audioContext.currentTime
    );

    gain.gain.exponentialRampToValueAtTime(
        0.001,
        audioContext.currentTime + 0.04
    );

    oscillator.connect(gain);

    gain.connect(
        audioContext.destination
    );

    oscillator.start();

    oscillator.stop(
        audioContext.currentTime + 0.04
    );

}


// =========================
// DEEP BACKSPACE / DELETE SOUND
// =========================

function playDeleteSound() {

    if (!audioContext) return;

    const oscillator =
        audioContext.createOscillator();

    const gain =
        audioContext.createGain();

    oscillator.type = "square";

    oscillator.frequency.setValueAtTime(
        320,
        audioContext.currentTime
    );

    oscillator.frequency.exponentialRampToValueAtTime(
        150,
        audioContext.currentTime + 0.055
    );

    gain.gain.setValueAtTime(
        0.035,
        audioContext.currentTime
    );

    gain.gain.exponentialRampToValueAtTime(
        0.001,
        audioContext.currentTime + 0.055
    );

    oscillator.connect(gain);

    gain.connect(
        audioContext.destination
    );

    oscillator.start();

    oscillator.stop(
        audioContext.currentTime + 0.055
    );

}


// =========================
// PAPER / ENVELOPE SOUND
// =========================

function playPaperSound() {

    if (!audioContext) return;

    const oscillator =
        audioContext.createOscillator();

    const gain =
        audioContext.createGain();

    oscillator.type = "triangle";

    oscillator.frequency.setValueAtTime(
        180,
        audioContext.currentTime
    );

    oscillator.frequency.exponentialRampToValueAtTime(
        70,
        audioContext.currentTime + 0.4
    );

    gain.gain.setValueAtTime(
        0.035,
        audioContext.currentTime
    );

    gain.gain.exponentialRampToValueAtTime(
        0.001,
        audioContext.currentTime + 0.4
    );

    oscillator.connect(gain);

    gain.connect(
        audioContext.destination
    );

    oscillator.start();

    oscillator.stop(
        audioContext.currentTime + 0.4
    );

}


// =========================
// SEND SOUND
// =========================

function playSendSound() {

    if (!audioContext) return;

    const oscillator =
        audioContext.createOscillator();

    const gain =
        audioContext.createGain();

    oscillator.type = "sine";

    oscillator.frequency.setValueAtTime(
        500,
        audioContext.currentTime
    );

    oscillator.frequency.exponentialRampToValueAtTime(
        900,
        audioContext.currentTime + 0.15
    );

    oscillator.frequency.exponentialRampToValueAtTime(
        1200,
        audioContext.currentTime + 0.35
    );

    gain.gain.setValueAtTime(
        0.06,
        audioContext.currentTime
    );

    gain.gain.exponentialRampToValueAtTime(
        0.001,
        audioContext.currentTime + 0.35
    );

    oscillator.connect(gain);

    gain.connect(
        audioContext.destination
    );

    oscillator.start();

    oscillator.stop(
        audioContext.currentTime + 0.35
    );

}


// =========================
// FINISH SOUND
// =========================

function playFinishSound() {

    if (!audioContext) return;

    const notes = [
        523.25,
        659.25,
        783.99
    ];

    notes.forEach(
        function (frequency, index) {

            const oscillator =
                audioContext.createOscillator();

            const gain =
                audioContext.createGain();

            const startTime =
                audioContext.currentTime +
                index * 0.12;

            oscillator.type = "sine";

            oscillator.frequency.setValueAtTime(
                frequency,
                startTime
            );

            gain.gain.setValueAtTime(
                0,
                startTime
            );

            gain.gain.linearRampToValueAtTime(
                0.06,
                startTime + 0.03
            );

            gain.gain.exponentialRampToValueAtTime(
                0.001,
                startTime + 0.5
            );

            oscillator.connect(gain);

            gain.connect(
                audioContext.destination
            );

            oscillator.start(startTime);

            oscillator.stop(
                startTime + 0.5
            );

        }
    );

}


// =========================
// YOUTUBE MUSIC
// =========================

let musicPlayer = null;
let musicRequested = false;
let musicStarted = false;


function onYouTubeIframeAPIReady() {

    musicPlayer = new YT.Player(
        "musicPlayer",
        {

            playerVars: {
                playsinline: 1,
                rel: 0
            },

            events: {

                onReady: function () {

                    musicPlayer.setVolume(5);

                    if (musicRequested) {

                        musicPlayer.playVideo();

                        musicStarted = true;

                    }

                }

            }

        }
    );

}


// =========================
// ELEMENTS
// =========================

const accountHome =
    document.querySelector("#accountHome");

const createAccountButton =
    document.querySelector("#createAccountButton");

const loginButton =
    document.querySelector("#loginButton");

const guestButton =
    document.querySelector("#guestButton");

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

const previousButton =
    document.querySelector("#previousButton");

const yesButton =
    document.querySelector("#yesButton");

const noButton =
    document.querySelector("#noButton");

const yesResponse =
    document.querySelector("#yesResponse");

const noResponse =
    document.querySelector("#noResponse");

const yesForm =
    document.querySelector("#yesForm");

const noForm =
    document.querySelector("#noForm");

const yesSubmit =
    document.querySelector("#yesSubmit");

const noSubmit =
    document.querySelector("#noSubmit");

const yesSkip =
    document.querySelector("#yesSkip");

const noSkip =
    document.querySelector("#noSkip");

const yesName =
    document.querySelector("#yesName");

const noName =
    document.querySelector("#noName");

const yesReason =
    document.querySelector("#yesReason");

const noReason =
    document.querySelector("#noReason");

const yesStatus =
    document.querySelector("#yesStatus");

const noStatus =
    document.querySelector("#noStatus");

const yesBack =
    document.querySelector("#yesBack");

const noBack =
    document.querySelector("#noBack");

const finish =
    document.querySelector("#finish");


// =========================
// ACCOUNT HOME → GUEST
// =========================

guestButton.addEventListener(
    "click",
    function () {

        initAudio();

        playClickSound();

        accountHome.classList.add("fade-out");

        setTimeout(
            function () {

                accountHome.classList.add("hidden");

                intro.classList.remove("hidden");

                intro.classList.add("fade-in");

            },
            500
        );

    }
);


// =========================
// CREATE ACCOUNT
// =========================

createAccountButton.addEventListener(
    "click",
    function () {

        initAudio();

        playClickSound();

        alert(
            "Account creation coming next! 🚀"
        );

    }
);


// =========================
// LOG IN
// =========================

loginButton.addEventListener(
    "click",
    function () {

        initAudio();

        playClickSound();

        alert(
            "Login coming next! 🚀"
        );

    }
);


// =========================
// INTRO → LETTER + MUSIC
// =========================

openButton.addEventListener(
    "click",
    function () {

        initAudio();

        playClickSound();

        musicRequested = true;

        if (
            musicPlayer &&
            typeof musicPlayer.playVideo === "function"
        ) {

            musicPlayer.setVolume(5);

            musicPlayer.playVideo();

            musicStarted = true;

        }

        intro.classList.add("fade-out");

        setTimeout(
            function () {

                intro.classList.add("hidden");

                letter.classList.remove("hidden");

                letter.classList.add("fade-in");

            },
            500
        );

    }
);


// =========================
// OPEN ENVELOPE
// =========================

envelope.addEventListener(
    "click",
    function () {

        initAudio();

        if (
            envelope.classList.contains("open")
        ) {
            return;
        }

        envelope.classList.add("open");

        letter.classList.add("opened");

        playPaperSound();

    }
);


// =========================
// LETTER → QUESTION
// =========================

continueButton.addEventListener(
    "click",
    function () {

        initAudio();

        playClickSound();

        letter.classList.add("fade-out");

        setTimeout(
            function () {

                letter.classList.add("hidden");

                question.classList.remove("hidden");

                question.classList.add("fade-in");

            },
            500
        );

    }
);


// =========================
// QUESTION → LETTER
// =========================

previousButton.addEventListener(
    "click",
    function () {

        initAudio();

        playClickSound();

        question.classList.add("fade-out");

        setTimeout(
            function () {

                question.classList.add("hidden");

                question.classList.remove("fade-out");

                letter.classList.remove("hidden");

                letter.classList.remove("fade-out");

                letter.classList.add("fade-in");

            },
            500
        );

    }
);


// =========================
// YES
// =========================

yesButton.addEventListener(
    "click",
    function () {

        initAudio();

        playClickSound();

        question.classList.add("fade-out");

        setTimeout(
            function () {

                question.classList.add("hidden");

                yesResponse.classList.remove("hidden");

                yesResponse.classList.add("fade-in");

                updateSubmitButton(
                    yesName,
                    yesReason,
                    yesSubmit,
                    yesSkip
                );

            },
            500
        );

    }
);


// =========================
// NO
// =========================

noButton.addEventListener(
    "click",
    function () {

        initAudio();

        playClickSound();

        question.classList.add("fade-out");

        setTimeout(
            function () {

                question.classList.add("hidden");

                noResponse.classList.remove("hidden");

                noResponse.classList.add("fade-in");

                updateSubmitButton(
                    noName,
                    noReason,
                    noSubmit,
                    noSkip
                );

            },
            500
        );

    }
);


// =========================
// RESPONSE → QUESTION
// =========================

function goBackToQuestion(responseScreen) {

    initAudio();

    playClickSound();

    responseScreen.classList.add("fade-out");

    setTimeout(
        function () {

            responseScreen.classList.add("hidden");

            responseScreen.classList.remove("fade-out");

            question.classList.remove("hidden");

            question.classList.add("fade-in");

        },
        500
    );

}


yesBack.addEventListener(
    "click",
    function () {

        goBackToQuestion(yesResponse);

    }
);


noBack.addEventListener(
    "click",
    function () {

        goBackToQuestion(noResponse);

    }
);


// =========================
// SHOW FINISH SCREEN
// =========================

function showFinishScreen() {

    yesResponse.classList.add("fade-out");

    noResponse.classList.add("fade-out");

    setTimeout(
        function () {

            yesResponse.classList.add("hidden");

            noResponse.classList.add("hidden");

            finish.classList.remove("hidden");

            finish.classList.add("fade-in");

            playFinishSound();

        },
        500
    );

}


// =========================
// YES FORM SUBMIT
// =========================

yesForm.addEventListener(
    "submit",
    async function (event) {

        event.preventDefault();

        initAudio();

        playSendSound();

        yesSubmit.disabled = true;

        yesSkip.disabled = true;

        yesSubmit.textContent =
            "Sending... 💌";

        yesStatus.textContent = "";

        const formData =
            new FormData(yesForm);

        try {

            const response =
                await fetch(
                    yesForm.action,
                    {
                        method: "POST",

                        body: formData,

                        headers: {
                            "Accept":
                                "application/json"
                        }
                    }
                );

            if (response.ok) {

                yesStatus.textContent =
                    "Sent! 💗 Thank you for being honest.";

                yesForm.reset();

                yesSubmit.disabled = true;

                yesSkip.disabled = true;

                yesSubmit.textContent =
                    "Sent 💌";

                setTimeout(
                    showFinishScreen,
                    1000
                );

            } else {

                yesStatus.textContent =
                    "Something went wrong. Try again 😭";

                updateSubmitButton(
                    yesName,
                    yesReason,
                    yesSubmit,
                    yesSkip
                );

            }

        } catch (error) {

            yesStatus.textContent =
                "Couldn't send it. Check your internet connection.";

            updateSubmitButton(
                yesName,
                yesReason,
                yesSubmit,
                yesSkip
            );

        }

    }
);


// =========================
// NO FORM SUBMIT
// =========================

noForm.addEventListener(
    "submit",
    async function (event) {

        event.preventDefault();

        initAudio();

        playSendSound();

        noSubmit.disabled = true;

        noSkip.disabled = true;

        noSubmit.textContent =
            "Sending... 💌";

        noStatus.textContent = "";

        const formData =
            new FormData(noForm);

        try {

            const response =
                await fetch(
                    noForm.action,
                    {
                        method: "POST",

                        body: formData,

                        headers: {
                            "Accept":
                                "application/json"
                        }
                    }
                );

            if (response.ok) {

                noStatus.textContent =
                    "Sent. Thank you for being honest. 💗";

                noForm.reset();

                noSubmit.disabled = true;

                noSkip.disabled = true;

                noSubmit.textContent =
                    "Sent 💌";

                setTimeout(
                    showFinishScreen,
                    1000
                );

            } else {

                noStatus.textContent =
                    "Something went wrong. Try again 😭";

                updateSubmitButton(
                    noName,
                    noReason,
                    noSubmit,
                    noSkip
                );

            }

        } catch (error) {

            noStatus.textContent =
                "Couldn't send it. Check your internet connection.";

            updateSubmitButton(
                noName,
                noReason,
                noSubmit,
                noSkip
            );

        }

    }
);


// =========================
// SKIP YES
// =========================

yesSkip.addEventListener(
    "click",
    async function () {

        initAudio();

        playClickSound();

        yesSkip.disabled = true;

        yesSubmit.disabled = true;

        yesSkip.textContent =
            "Saving...";

        const formData =
            new FormData();

        formData.append(
            "response",
            "YES 💕"
        );

        formData.append(
            "name",
            ""
        );

        formData.append(
            "reason",
            ""
        );

        try {

            const response =
                await fetch(
                    yesForm.action,
                    {
                        method: "POST",

                        body: formData,

                        headers: {
                            "Accept":
                                "application/json"
                        }
                    }
                );

            if (response.ok) {

                showFinishScreen();

            } else {

                yesSkip.disabled = false;

                updateSubmitButton(
                    yesName,
                    yesReason,
                    yesSubmit,
                    yesSkip
                );

                yesSkip.textContent =
                    "Skip →";

            }

        } catch (error) {

            yesSkip.disabled = false;

            updateSubmitButton(
                yesName,
                yesReason,
                yesSubmit,
                yesSkip
            );

            yesSkip.textContent =
                "Skip →";

        }

    }
);


// =========================
// SKIP NO
// =========================

noSkip.addEventListener(
    "click",
    async function () {

        initAudio();

        playClickSound();

        noSkip.disabled = true;

        noSubmit.disabled = true;

        noSkip.textContent =
            "Saving...";

        const formData =
            new FormData();

        formData.append(
            "response",
            "NO 🥲"
        );

        formData.append(
            "name",
            ""
        );

        formData.append(
            "reason",
            ""
        );

        try {

            const response =
                await fetch(
                    noForm.action,
                    {
                        method: "POST",

                        body: formData,

                        headers: {
                            "Accept":
                                "application/json"
                        }
                    }
                );

            if (response.ok) {

                showFinishScreen();

            } else {

                noSkip.disabled = false;

                updateSubmitButton(
                    noName,
                    noReason,
                    noSubmit,
                    noSkip
                );

                noSkip.textContent =
                    "Skip →";

            }

        } catch (error) {

            noSkip.disabled = false;

            updateSubmitButton(
                noName,
                noReason,
                noSubmit,
                noSkip
            );

            noSkip.textContent =
                "Skip →";

        }

    }
);


// =========================
// SEND + SKIP BUTTON STATE
// =========================

function updateSubmitButton(
    nameInput,
    textarea,
    submitButton,
    skipButton
) {

    const hasName =
        nameInput.value.trim().length > 0;

    const hasText =
        textarea.value.trim().length > 0;

    submitButton.disabled =
        !(hasName && hasText);

    skipButton.disabled =
        hasName || hasText;

}


// =========================
// TYPEWRITER + DELETE SOUND
// =========================

let lastTypeSoundTime = 0;


function handleTyping(event) {

    const now = Date.now();

    if (
        event.inputType &&
        event.inputType.startsWith("delete")
    ) {

        if (
            now - lastTypeSoundTime >= 35
        ) {

            lastTypeSoundTime = now;

            playDeleteSound();

        }

    }

    else if (
        now - lastTypeSoundTime >= 35 &&
        event.data
    ) {

        lastTypeSoundTime = now;

        playTypewriterSound();

    }


    if (
        event.target === yesName
    ) {

        updateSubmitButton(
            yesName,
            yesReason,
            yesSubmit,
            yesSkip
        );

    }


    if (
        event.target === yesReason
    ) {

        updateSubmitButton(
            yesName,
            yesReason,
            yesSubmit,
            yesSkip
        );

    }


    if (
        event.target === noName
    ) {

        updateSubmitButton(
            noName,
            noReason,
            noSubmit,
            noSkip
        );

    }


    if (
        event.target === noReason
    ) {

        updateSubmitButton(
            noName,
            noReason,
            noSubmit,
            noSkip
        );

    }

}


// =========================
// TEXT INPUT LISTENERS
// =========================

yesName.addEventListener(
    "input",
    handleTyping
);

yesReason.addEventListener(
    "input",
    handleTyping
);

noName.addEventListener(
    "input",
    handleTyping
);

noReason.addEventListener(
    "input",
    handleTyping
);


// =========================
// INITIAL BUTTON STATE
// =========================

updateSubmitButton(
    yesName,
    yesReason,
    yesSubmit,
    yesSkip
);

updateSubmitButton(
    noName,
    noReason,
    noSubmit,
    noSkip
);


// =========================
// INITIALIZE AUDIO
// ON BUTTON CLICK
// =========================

document.querySelectorAll("button").forEach(
    function (button) {

        button.addEventListener(
            "click",
            function () {

                initAudio();

            }
        );

    }
);
