// ============================================================
// SUPABASE
// ============================================================

const SUPABASE_URL =
    "https://fkcqiruudgrkvossdjtr.supabase.co";

const SUPABASE_PUBLISHABLE_KEY =
    "sb_publishable_proRa69j5ixAYcqRjJOFOw_SzRjB15q";

let supabaseClient = null;

if (
    window.supabase &&
    typeof window.supabase.createClient === "function"
) {
    supabaseClient =
        window.supabase.createClient(
            SUPABASE_URL,
            SUPABASE_PUBLISHABLE_KEY
        );
}


// ============================================================
// ELEMENTS
// ============================================================

// ACCOUNT HOME
const accountHome =
    document.getElementById("accountHome");

const createAccountButton =
    document.getElementById("createAccountButton");

const loginButton =
    document.getElementById("loginButton");

const guestButton =
    document.getElementById("guestButton");


// CREATE ACCOUNT
const createAccountScreen =
    document.getElementById("createAccountScreen");

const createAccountForm =
    document.getElementById("createAccountForm");

const createUsername =
    document.getElementById("createUsername");

const createEmail =
    document.getElementById("createEmail");

const createPassword =
    document.getElementById("createPassword");

const createAccountSubmit =
    document.getElementById("createAccountSubmit");

const createAccountStatus =
    document.getElementById("createAccountStatus");

const createAccountBack =
    document.getElementById("createAccountBack");


// LOGIN
const loginScreen =
    document.getElementById("loginScreen");

const loginForm =
    document.getElementById("loginForm");

const loginEmail =
    document.getElementById("loginEmail");

const loginPassword =
    document.getElementById("loginPassword");

const loginSubmit =
    document.getElementById("loginSubmit");

const loginStatus =
    document.getElementById("loginStatus");

const loginBack =
    document.getElementById("loginBack");


// HOME
const homeScreen =
    document.getElementById("homeScreen");

const menuButton =
    document.getElementById("menuButton");

const mailButton =
    document.getElementById("mailButton");

const mailBadge =
    document.getElementById("mailBadge");

const homeWelcome =
    document.getElementById("homeWelcome");

const sendConfessionButton =
    document.getElementById("sendConfessionButton");


// OVERLAY
const overlay =
    document.getElementById("overlay");


// SIDE MENU
const sideMenu =
    document.getElementById("sideMenu");

const closeMenuButton =
    document.getElementById("closeMenuButton");

const sideMenuUsername =
    document.getElementById("sideMenuUsername");

const accountInfoButton =
    document.getElementById("accountInfoButton");

const settingsButton =
    document.getElementById("settingsButton");

const logoutButton =
    document.getElementById("logoutButton");


// ACCOUNT INFORMATION
const accountInfoPanel =
    document.getElementById("accountInfoPanel");

const closeAccountInfo =
    document.getElementById("closeAccountInfo");

const accountInfoUsername =
    document.getElementById("accountInfoUsername");

const accountInfoEmail =
    document.getElementById("accountInfoEmail");


// SETTINGS
const settingsPanel =
    document.getElementById("settingsPanel");

const closeSettings =
    document.getElementById("closeSettings");


// MAIL
const mailPopup =
    document.getElementById("mailPopup");

const closeMailButton =
    document.getElementById("closeMailButton");

const inboxList =
    document.getElementById("inboxList");

const emptyInbox =
    document.getElementById("emptyInbox");


// LETTER VIEWER
const letterViewer =
    document.getElementById("letterViewer");

const closeLetterViewer =
    document.getElementById("closeLetterViewer");

const receivedLetter =
    document.getElementById("receivedLetter");


// WRITING
const writingScreen =
    document.getElementById("writingScreen");

const writingBackButton =
    document.getElementById("writingBackButton");

const confessionMessage =
    document.getElementById("confessionMessage");

const letterCharacterCount =
    document.getElementById("letterCharacterCount");

const nextDetailsButton =
    document.getElementById("nextDetailsButton");


// DETAILS
const detailsScreen =
    document.getElementById("detailsScreen");

const detailsBackButton =
    document.getElementById("detailsBackButton");

const confessionDetailsForm =
    document.getElementById("confessionDetailsForm");

const recipientUsername =
    document.getElementById("recipientUsername");

const senderDisplayName =
    document.getElementById("senderDisplayName");

const anonymousCheckbox =
    document.getElementById("anonymousCheckbox");

const sendConfessionSubmit =
    document.getElementById("sendConfessionSubmit");

const confessionStatus =
    document.getElementById("confessionStatus");


// GUEST
const guestScreen =
    document.getElementById("guestScreen");

const guestCreateAccountButton =
    document.getElementById("guestCreateAccountButton");

const guestBackButton =
    document.getElementById("guestBackButton");


// ============================================================
// CURRENT USER
// ============================================================

let currentUser = null;


// ============================================================
// HELPER FUNCTIONS
// ============================================================

function hideAllMainScreens() {

    accountHome.classList.add("hidden");

    createAccountScreen.classList.add("hidden");

    loginScreen.classList.add("hidden");

    homeScreen.classList.add("hidden");

    guestScreen.classList.add("hidden");

    writingScreen.classList.add("hidden");

    detailsScreen.classList.add("hidden");

}


function closeEverything() {

    sideMenu.classList.remove("visible");

    accountInfoPanel.classList.add("hidden");

    settingsPanel.classList.add("hidden");

    mailPopup.classList.add("hidden");

    letterViewer.classList.add("hidden");

    overlay.classList.remove("visible");

    overlay.classList.add("hidden");

}


function showAccountHome() {

    closeEverything();

    hideAllMainScreens();

    accountHome.classList.remove("hidden");

}


function showCreateAccount() {

    closeEverything();

    hideAllMainScreens();

    createAccountScreen.classList.remove("hidden");

    createAccountStatus.textContent = "";

}


function showLogin() {

    closeEverything();

    hideAllMainScreens();

    loginScreen.classList.remove("hidden");

    loginStatus.textContent = "";

}


function showGuest() {

    closeEverything();

    hideAllMainScreens();

    guestScreen.classList.remove("hidden");

}


function getUsername(user) {

    if (!user) {
        return "there";
    }

    return (
        user.user_metadata?.username ||
        user.email?.split("@")[0] ||
        "there"
    );

}


function updateUserInformation(user) {

    if (!user) {
        return;
    }

    const username =
        getUsername(user);

    const email =
        user.email || "No email";

    homeWelcome.textContent =
        `Welcome back, ${username}.`;

    sideMenuUsername.textContent =
        `@${username}`;

    accountInfoUsername.textContent =
        `@${username}`;

    accountInfoEmail.textContent =
        email;

}


function showHome(user) {

    currentUser = user;

    closeEverything();

    hideAllMainScreens();

    updateUserInformation(user);

    homeScreen.classList.remove("hidden");

    // No real inbox database yet.
    mailBadge.classList.add("hidden");

}


function openOverlay() {

    overlay.classList.remove("hidden");

    // Small delay lets the CSS opacity transition work.
    requestAnimationFrame(() => {
        overlay.classList.add("visible");
    });

}


function closeOverlay() {

    overlay.classList.remove("visible");

    setTimeout(() => {

        if (!overlay.classList.contains("visible")) {
            overlay.classList.add("hidden");
        }

    }, 300);

}


function openMenu() {

    closeEverything();

    openOverlay();

    sideMenu.classList.add("visible");

}


function closeMenu() {

    sideMenu.classList.remove("visible");

    closeOverlay();

}


function resetConfessionForm() {

    confessionMessage.value = "";

    recipientUsername.value = "";

    senderDisplayName.value = "";

    anonymousCheckbox.checked = false;

    confessionStatus.textContent = "";

    updateCharacterCount();

}


function showWritingScreen() {

    closeEverything();

    hideAllMainScreens();

    resetConfessionForm();

    writingScreen.classList.remove("hidden");

    updateCharacterCount();

}


function showDetailsScreen() {

    const message =
        confessionMessage.value.trim();

    if (!message) {

        confessionMessage.focus();

        return;

    }

    closeEverything();

    hideAllMainScreens();

    detailsScreen.classList.remove("hidden");

}


function updateCharacterCount() {

    const count =
        confessionMessage.value.length;

    letterCharacterCount.textContent =
        `${count} characters`;

}


// ============================================================
// ACCOUNT NAVIGATION
// ============================================================

createAccountButton.addEventListener(
    "click",
    () => {

        showCreateAccount();

    }
);


loginButton.addEventListener(
    "click",
    () => {

        showLogin();

    }
);


guestButton.addEventListener(
    "click",
    () => {

        showGuest();

    }
);


createAccountBack.addEventListener(
    "click",
    () => {

        showAccountHome();

    }
);


loginBack.addEventListener(
    "click",
    () => {

        showAccountHome();

    }
);


guestBackButton.addEventListener(
    "click",
    () => {

        showAccountHome();

    }
);


guestCreateAccountButton.addEventListener(
    "click",
    () => {

        showCreateAccount();

    }
);


// ============================================================
// CREATE ACCOUNT
// ============================================================

createAccountForm.addEventListener(
    "submit",
    async (event) => {

        event.preventDefault();

        if (!supabaseClient) {

            createAccountStatus.textContent =
                "Supabase could not be loaded.";

            return;

        }

        const username =
            createUsername.value.trim();

        const email =
            createEmail.value.trim();

        const password =
            createPassword.value;

        if (!username || !email || !password) {

            createAccountStatus.textContent =
                "Please fill in all fields.";

            return;

        }

        if (username.length < 3) {

            createAccountStatus.textContent =
                "Username must be at least 3 characters.";

            return;

        }

        if (password.length < 6) {

            createAccountStatus.textContent =
                "Password must be at least 6 characters.";

            return;

        }


        createAccountSubmit.disabled = true;

        createAccountSubmit.textContent =
            "Creating Account...";

        createAccountStatus.textContent =
            "";


        try {

            const {
                data,
                error
            } =
                await supabaseClient.auth.signUp({

                    email: email,

                    password: password,

                    options: {

                        data: {
                            username: username
                        }

                    }

                });


            if (error) {
                throw error;
            }


            /*
             * Supabase may require email confirmation.
             *
             * If a session is returned immediately,
             * go straight to the home screen.
             */

            if (data.session && data.user) {

                showHome(data.user);

            } else {

                createAccountStatus.textContent =
                    "Account created! Check your email to confirm your account, then log in.";

                createAccountForm.reset();

            }

        } catch (error) {

            console.error(
                "Create account error:",
                error
            );

            createAccountStatus.textContent =
                error.message ||
                "Something went wrong while creating your account.";

        } finally {

            createAccountSubmit.disabled = false;

            createAccountSubmit.textContent =
                "Create Account 💌";

        }

    }
);


// ============================================================
// LOGIN
// ============================================================

loginForm.addEventListener(
    "submit",
    async (event) => {

        event.preventDefault();

        if (!supabaseClient) {

            loginStatus.textContent =
                "Supabase could not be loaded.";

            return;

        }

        const email =
            loginEmail.value.trim();

        const password =
            loginPassword.value;


        if (!email || !password) {

            loginStatus.textContent =
                "Please enter your email and password.";

            return;

        }


        loginSubmit.disabled = true;

        loginSubmit.textContent =
            "Logging In...";

        loginStatus.textContent =
            "";


        try {

            const {
                data,
                error
            } =
                await supabaseClient.auth.signInWithPassword({

                    email: email,

                    password: password

                });


            if (error) {
                throw error;
            }


            if (
                data.session &&
                data.user
            ) {

                showHome(data.user);

            } else {

                loginStatus.textContent =
                    "Login succeeded, but no session was returned.";

            }

        } catch (error) {

            console.error(
                "Login error:",
                error
            );

            loginStatus.textContent =
                error.message ||
                "Incorrect email or password.";

        } finally {

            loginSubmit.disabled = false;

            loginSubmit.textContent =
                "Log In 💌";

        }

    }
);


// ============================================================
// HOME MENU
// ============================================================

menuButton.addEventListener(
    "click",
    () => {

        openMenu();

    }
);


closeMenuButton.addEventListener(
    "click",
    () => {

        closeMenu();

    }
);


overlay.addEventListener(
    "click",
    () => {

        closeEverything();

    }
);


// ============================================================
// ACCOUNT INFORMATION
// ============================================================

accountInfoButton.addEventListener(
    "click",
    () => {

        sideMenu.classList.remove("visible");

        accountInfoPanel.classList.remove("hidden");

    }
);


closeAccountInfo.addEventListener(
    "click",
    () => {

        accountInfoPanel.classList.add("hidden");

        closeOverlay();

    }
);


// ============================================================
// SETTINGS
// ============================================================

settingsButton.addEventListener(
    "click",
    () => {

        sideMenu.classList.remove("visible");

        settingsPanel.classList.remove("hidden");

    }
);


closeSettings.addEventListener(
    "click",
    () => {

        settingsPanel.classList.add("hidden");

        closeOverlay();

    }
);


// ============================================================
// LOGOUT
// ============================================================

logoutButton.addEventListener(
    "click",
    async () => {

        if (!supabaseClient) {

            showAccountHome();

            return;

        }


        logoutButton.disabled = true;


        try {

            const {
                error
            } =
                await supabaseClient.auth.signOut();


            if (error) {
                throw error;
            }


            currentUser = null;

            showAccountHome();


        } catch (error) {

            console.error(
                "Logout error:",
                error
            );

            logoutButton.disabled = false;

        }

    }
);


// ============================================================
// INBOX
// ============================================================

mailButton.addEventListener(
    "click",
    () => {

        closeEverything();

        openOverlay();

        mailPopup.classList.remove("hidden");

    }
);


closeMailButton.addEventListener(
    "click",
    () => {

        mailPopup.classList.add("hidden");

        closeOverlay();

    }
);


// ============================================================
// LETTER VIEWER
// ============================================================

closeLetterViewer.addEventListener(
    "click",
    () => {

        letterViewer.classList.add("hidden");

        closeOverlay();

    }
);


// ============================================================
// SEND CONFESSION
// ============================================================

sendConfessionButton.addEventListener(
    "click",
    () => {

        showWritingScreen();

    }
);


writingBackButton.addEventListener(
    "click",
    () => {

        showHome(currentUser);

    }
);


confessionMessage.addEventListener(
    "input",
    () => {

        updateCharacterCount();

    }
);


nextDetailsButton.addEventListener(
    "click",
    () => {

        showDetailsScreen();

    }
);


// ============================================================
// DETAILS
// ============================================================

detailsBackButton.addEventListener(
    "click",
    () => {

        detailsScreen.classList.add("hidden");

        writingScreen.classList.remove("hidden");

    }
);


anonymousCheckbox.addEventListener(
    "change",
    () => {

        if (anonymousCheckbox.checked) {

            senderDisplayName.value =
                "Anonymous";

            senderDisplayName.disabled =
                true;

        } else {

            senderDisplayName.value =
                "";

            senderDisplayName.disabled =
                false;

        }

    }
);


confessionDetailsForm.addEventListener(
    "submit",
    async (event) => {

        event.preventDefault();


        const message =
            confessionMessage.value.trim();

        const recipient =
            recipientUsername.value.trim();

        const displayName =
            senderDisplayName.value.trim();


        if (!message) {

            confessionStatus.textContent =
                "Your confession is empty.";

            return;

        }


        if (!recipient) {

            confessionStatus.textContent =
                "Please enter the recipient's username.";

            recipientUsername.focus();

            return;

        }


        if (!displayName) {

            confessionStatus.textContent =
                "Please enter a display name.";

            senderDisplayName.focus();

            return;

        }


        /*
         * DATABASE SENDING IS NOT CONNECTED YET.
         *
         * We are intentionally not pretending that
         * the confession has actually been delivered.
         */

        sendConfessionSubmit.disabled =
            true;

        sendConfessionSubmit.textContent =
            "Preparing Letter...";


        confessionStatus.textContent =
            "";


        await new Promise(
            resolve => setTimeout(resolve, 700)
        );


        confessionStatus.textContent =
            "Your letter is ready, but sending is not connected to the database yet.";


        sendConfessionSubmit.disabled =
            false;

        sendConfessionSubmit.textContent =
            "Send Confession 💌";

    }
);


// ============================================================
// SESSION CHECK
// ============================================================

async function checkExistingSession() {

    if (!supabaseClient) {

        console.error(
            "Supabase client was not initialized."
        );

        showAccountHome();

        return;

    }


    try {

        const {
            data,
            error
        } =
            await supabaseClient.auth.getSession();


        if (error) {
            throw error;
        }


        const session =
            data.session;


        if (
            session &&
            session.user
        ) {

            showHome(session.user);

        } else {

            showAccountHome();

        }

    } catch (error) {

        console.error(
            "Session check error:",
            error
        );

        showAccountHome();

    }

}


// ============================================================
// AUTH STATE LISTENER
// ============================================================

if (supabaseClient) {

    supabaseClient.auth.onAuthStateChange(
        (event, session) => {

            console.log(
                "Auth event:",
                event
            );


            if (
                session &&
                session.user
            ) {

                currentUser =
                    session.user;

            }

        }
    );

}


// ============================================================
// INITIALIZE
// ============================================================

document.addEventListener(
    "DOMContentLoaded",
    () => {

        updateCharacterCount();

        checkExistingSession();

    }
);
