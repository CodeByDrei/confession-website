// =========================
// MUSIC
// =========================

let musicPlayer = null;
let musicRequested = false;
let musicStarted = false;


// =========================
// SOUND EFFECT SYSTEM
// =========================

let audioContext = null;


// Create the audio system only after the user interacts
// with the page. This keeps it compatible with browser
// autoplay restrictions.

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

    initAudio();

    if (!audioContext) {
        return;
    }


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
        0.0001,
        audioContext.currentTime
    );

    gain.gain.exponentialRampToValueAtTime(
        0.08,
        audioContext.currentTime + 0.008
    );

    gain.gain.exponentialRampToValueAtTime(
        0.0001,
        audioContext.currentTime + 0.07
    );


    oscillator.connect(gain);
    gain.connect(audioContext.destination);


    oscillator.start();

    oscillator.stop(
        audioContext.currentTime + 0.08
    );

}


// =========================
// TYPEWRITER SOUND
// =========================

function playTypewriterSound() {

    initAudio();

    if (!audioContext) {
        return;
    }


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
        0.0001,
        audioContext.currentTime
    );

    gain.gain.exponentialRampToValueAtTime(
        0.025,
        audioContext.currentTime + 0.003
    );

    gain.gain.exponentialRampToValueAtTime(
        0.0001,
        audioContext.currentTime + 0.035
    );


    oscillator.connect(gain);
    gain.connect(audioContext.destination);


    oscillator.start();

    oscillator.stop(
        audioContext.currentTime + 0.04
    );

}


// =========================
// ENVELOPE / PAPER SOUND
// =========================

function playPaperSound() {

    initAudio();

    if (!audioContext) {
        return;
    }


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
        audioContext.currentTime + 0.35
    );


    gain.gain.setValueAtTime(
        0.0001,
        audioContext.currentTime
    );

    gain.gain.exponentialRampToValueAtTime(
        0.035,
        audioContext.currentTime + 0.02
    );

    gain.gain.exponentialRampToValueAtTime(
        0.0001,
        audioContext.currentTime + 0.4
    );


    oscillator.connect(gain);
    gain.connect(audioContext.destination);


    oscillator.start();

    oscillator.stop(
        audioContext.currentTime + 0.42
    );

}


// =========================
// SEND SOUND
// =========================

function playSendSound() {

    initAudio();

    if (!audioContext) {
        return;
    }


    const now = audioContext.currentTime;


    const oscillator =
        audioContext.createOscillator();

    const gain =
        audioContext.createGain();


    oscillator.type = "sine";

    oscillator.frequency.setValueAtTime(
        500,
        now
    );

    oscillator.frequency.exponentialRampToValueAtTime(
        900,
        now + 0.15
    );

    oscillator.frequency.exponentialRampToValueAtTime(
        1200,
        now + 0.3
    );


    gain.gain.setValueAtTime(
        0.0001,
        now
    );

    gain.gain.exponentialRampToValueAtTime(
        0.06,
        now + 0.02
    );

    gain.gain.exponentialRampToValueAtTime(
        0.0001,
        now + 0.35
    );


    oscillator.connect(gain);
    gain.connect(audioContext.destination);


    oscillator.start();

    oscillator.stop(
        now + 0.4
    );

}


// =========================
// FINISH SOUND
// =========================

function playFinishSound() {

    initAudio();

    if (!audioContext) {
        return;
    }


    const now = audioContext.currentTime;


    function playNote(frequency, delay) {

        const oscillator =
            audioContext.createOscillator();

        const gain =
            audioContext.createGain();


        oscillator.type = "sine";

        oscillator.frequency.setValueAtTime(
            frequency,
            now + delay
        );


        gain.gain.setValueAtTime(
            0.0001,
            now + delay
        );

        gain.gain.exponentialRampToValueAtTime(
            0.05,
            now + delay + 0.02
        );

        gain.gain.exponentialRampToValueAtTime(
            0.0001,
            now + delay + 0.5
        );


        oscillator.connect(gain);
        gain.connect(audioContext.destination);


        oscillator.start(
            now + delay
        );

        oscillator.stop(
            now + delay + 0.55
        );
    }


    playNote(523.25, 0);
    playNote(659.25, 0.12);
    playNote(783.99, 0.24);

}


// =========================
// YOUTUBE MUSIC PLAYER
// =========================

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

                    musicPlayer.setVolume(25);


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
// DOM ELEMENTS
// =========================

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

const yesReason =
    document.querySelector("#yesReason");

const noReason =
    document.querySelector("#noReason");

const yesStatus =
    document.querySelector("#yesStatus");

const noStatus =
    document.querySelector("#noStatus");

const finish =
    document.querySelector("#finish");


// =========================
// INTRO → LETTER + MUSIC
// =========================

openButton.addEventListener(
    "click",
    function () {

        initAudio();

        playClickSound();


        // Tell the music system that the user
        // has intentionally requested the music.

        musicRequested = true;


        // If YouTube is already ready,
        // start immediately.

        if (
            musicPlayer &&
            typeof musicPlayer.playVideo === "function"
        ) {

            musicPlayer.setVolume(25);

            musicPlayer.playVideo();

            musicStarted = true;

        }


        intro.classList.add("fade-out");


        setTimeout(function () {

            intro.classList.add("hidden");

            letter.classList.remove("hidden");

            letter.classList.add("fade-in");

        }, 500);

    }
);


// =========================
// OPEN ENVELOPE
// =========================

envelope.addEventListener(
    "click",
    function () {

        if (
            envelope.classList.contains("open")
        ) {
            return;
        }


        initAudio();

        playPaperSound();


        envelope.classList.add("open");

        letter.classList.add("opened");

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


        setTimeout(function () {

            letter.classList.add("hidden");

            question.classList.remove("hidden");

            question.classList.add("fade-in");

        }, 500);

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


        setTimeout(function () {

            question.classList.add("hidden");

            yesResponse.classList.remove("hidden");

            yesResponse.classList.add("fade-in");

            yesReason.focus();

        }, 500);

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


        setTimeout(function () {

            question.classList.add("hidden");

            noResponse.classList.remove("hidden");

            noResponse.classList.add("fade-in");

            noReason.focus();

        }, 500);

    }
);


// =========================
// TYPEWRITER EFFECT
// =========================

let lastTypeSoundTime = 0;


function handleTyping(event) {

    const now = Date.now();


    // Prevent the sound from becoming
    // ridiculously fast and annoying.

    if (now - lastTypeSoundTime < 35) {
        return;
    }


    if (
        event.inputType &&
        event.inputType.startsWith("delete")
    ) {
        return;
    }


    if (event.data) {

        lastTypeSoundTime = now;

        playTypewriterSound();

    }

}


yesReason.addEventListener(
    "input",
    handleTyping
);

noReason.addEventListener(
    "input",
    handleTyping
);


// =========================
// FINISH SCREEN
// =========================

function showFinishScreen() {

    yesResponse.classList.add("fade-out");

    noResponse.classList.add("fade-out");


    setTimeout(function () {

        yesResponse.classList.add("hidden");

        noResponse.classList.add("hidden");

        yesResponse.classList.remove("fade-out");

        noResponse.classList.remove("fade-out");


        finish.classList.remove("hidden");

        finish.classList.add("fade-in");


        playFinishSound();

    }, 500);

}


// =========================
// YES FORM
// =========================

yesForm.addEventListener(
    "submit",
    async function (event) {

        event.preventDefault();


        initAudio();

        playSendSound();


        yesSubmit.disabled = true;

        yesSubmit.textContent =
            "Sending... 💌";

        yesSkip.disabled = true;

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

                yesSubmit.textContent =
                    "Sent 💌";


                setTimeout(
                    showFinishScreen,
                    1000
                );


            } else {

                yesStatus.textContent =
                    "Something went wrong. Try again 😭";

                yesSubmit.disabled = false;

                yesSkip.disabled = false;

                yesSubmit.textContent =
                    "Send 💌";

            }

        } catch (error) {

            yesStatus.textContent =
                "Couldn't send it. Check your internet connection.";

            yesSubmit.disabled = false;

            yesSkip.disabled = false;

            yesSubmit.textContent =
                "Send 💌";

        }

    }
);


// =========================
// NO FORM
// =========================

noForm.addEventListener(
    "submit",
    async function (event) {

        event.preventDefault();


        initAudio();

        playSendSound();


        noSubmit.disabled = true;

        noSubmit.textContent =
            "Sending... 💌";

        noSkip.disabled = true;

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

                noSubmit.textContent =
                    "Sent 💌";


                setTimeout(
                    showFinishScreen,
                    1000
                );


            } else {

                noStatus.textContent =
                    "Something went wrong. Try again 😭";

                noSubmit.disabled = false;

                noSkip.disabled = false;

                noSubmit.textContent =
                    "Send 💌";

            }

        } catch (error) {

            noStatus.textContent =
                "Couldn't send it. Check your internet connection.";

            noSubmit.disabled = false;

            noSkip.disabled = false;

            noSubmit.textContent =
                "Send 💌";

        }

    }
);


// =========================
// SKIP YES REASON
// =========================

yesSkip.addEventListener(
    "click",
    function () {

        initAudio();

        playClickSound();

        showFinishScreen();

    }
);


// =========================
// SKIP NO REASON
// =========================

noSkip.addEventListener(
    "click",
    function () {

        initAudio();

        playClickSound();

        showFinishScreen();

    }
);


// =========================
// ALL BUTTONS
// =========================

// This adds the little click sound to
// buttons that aren't already handled above.

const allButtons =
    document.querySelectorAll("button");


allButtons.forEach(function (button) {

    button.addEventListener(
        "click",
        function () {

            initAudio();

        }
    );

});
