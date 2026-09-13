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


// ============================================================
// CLOSE ONLY PANELS
// IMPORTANT:
// This does NOT close the background overlay.
// ============================================================

function closePanelsOnly() {

    sideMenu.classList.remove("visible");

    accountInfoPanel.classList.remove("open");

    accountInfoPanel.classList.add("hidden");

    settingsPanel.classList.remove("open");

    settingsPanel.classList.add("hidden");

    mailPopup.classList.remove("open");

    mailPopup.classList.add("hidden");

    letterViewer.classList.remove("open");

    letterViewer.classList.add("hidden");

}


// ============================================================
// CLOSE EVERYTHING
// ============================================================

function closeEverything() {

    closePanelsOnly();

    overlay.classList.remove("visible");

    overlay.classList.add("hidden");

}


// ============================================================
// ACCOUNT HOME
// ============================================================

function showAccountHome() {

    closeEverything();

    hideAllMainScreens();

    accountHome.classList.remove("hidden");

}


// ============================================================
// CREATE ACCOUNT
// ============================================================

function showCreateAccount() {

    closeEverything();

    hideAllMainScreens();

    createAccountScreen.classList.remove("hidden");

    createAccountStatus.textContent = "";

}


// ============================================================
// LOGIN
// ============================================================

function showLogin() {

    closeEverything();

    hideAllMainScreens();

    loginScreen.classList.remove("hidden");

    loginStatus.textContent = "";

}


// ============================================================
// GUEST
// ============================================================

function showGuest() {

    closeEverything();

    hideAllMainScreens();

    guestScreen.classList.remove("hidden");

}


// ============================================================
// GET USERNAME
// ============================================================

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


// ============================================================
// UPDATE USER INFORMATION
// ============================================================

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


// ============================================================
// SHOW HOME
// ============================================================

function showHome(user) {

    currentUser = user;

    closeEverything();

    hideAllMainScreens();

    updateUserInformation(user);

    homeScreen.classList.remove("hidden");

    // Load real unread count from database.
    loadUnreadCount();

}


// ============================================================
// OPEN OVERLAY
// ============================================================

function openOverlay() {

    overlay.classList.remove("hidden");

    requestAnimationFrame(() => {

        overlay.classList.add("visible");

    });

}


// ============================================================
// CLOSE OVERLAY
// ============================================================

function closeOverlay() {

    overlay.classList.remove("visible");

    setTimeout(() => {

        if (!overlay.classList.contains("visible")) {

            overlay.classList.add("hidden");

        }

    }, 300);

}


// ============================================================
// OPEN MENU
// ============================================================

function openMenu() {

    // Close other panels but KEEP the home screen.
    closePanelsOnly();

    openOverlay();

    sideMenu.classList.add("visible");

}


// ============================================================
// CLOSE MENU
// ============================================================

function closeMenu() {

    sideMenu.classList.remove("visible");

    closeOverlay();

}


// ============================================================
// RESET CONFESSION FORM
// ============================================================

function resetConfessionForm() {

    confessionMessage.value = "";

    recipientUsername.value = "";

    senderDisplayName.value = "";

    anonymousCheckbox.checked = false;

    senderDisplayName.disabled = false;

    confessionStatus.textContent = "";

    updateCharacterCount();

}


// ============================================================
// SHOW WRITING SCREEN
// ============================================================

function showWritingScreen() {

    closeEverything();

    hideAllMainScreens();

    resetConfessionForm();

    writingScreen.classList.remove("hidden");

    updateCharacterCount();

}


// ============================================================
// SHOW DETAILS SCREEN
// ============================================================

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


// ============================================================
// CHARACTER COUNT
// ============================================================

function updateCharacterCount() {

    const count =
        confessionMessage.value.length;

    letterCharacterCount.textContent =
        `${count} characters`;

}


// ============================================================
// DATABASE — GET UNREAD COUNT
// ============================================================

async function loadUnreadCount() {

    if (
        !supabaseClient ||
        !currentUser
    ) {
        mailBadge.classList.add("hidden");
        return;
    }

    try {

        const {
            count,
            error
        } =
            await supabaseClient
                .from("confessions")
                .select(
                    "id",
                    {
                        count: "exact",
                        head: true
                    }
                )
                .eq(
                    "recipient_id",
                    currentUser.id
                )
                .eq(
                    "is_read",
                    false
                );

        if (error) {
            throw error;
        }

        if (count && count > 0) {

            mailBadge.textContent =
                count > 99 ? "99+" : count;

            mailBadge.classList.remove("hidden");

        } else {

            mailBadge.classList.add("hidden");

        }

    } catch (error) {

        console.error(
            "Unread count error:",
            error
        );

        mailBadge.classList.add("hidden");

    }

}


// ============================================================
// DATABASE — LOAD INBOX
// ============================================================

async function loadInbox() {

    if (
        !supabaseClient ||
        !currentUser
    ) {
        return;
    }

    inboxList.innerHTML = "";

    emptyInbox.classList.add("hidden");

    try {

        const {
            data,
            error
        } =
            await supabaseClient
                .from("confessions")
                .select(
                    "id, message, sender_display_name, is_anonymous, is_read, created_at"
                )
                .eq(
                    "recipient_id",
                    currentUser.id
                )
                .order(
                    "created_at",
                    {
                        ascending: false
                    }
                );

        if (error) {
            throw error;
        }


        if (!data || data.length === 0) {

            emptyInbox.classList.remove("hidden");

            return;

        }


        data.forEach(
            confession => {

                const item =
                    document.createElement("button");

                item.type =
                    "button";

                item.className =
                    "inbox-letter-card";

                if (!confession.is_read) {

                    item.classList.add(
                        "unread"
                    );

                }


                const topRow =
                    document.createElement("div");

                topRow.className =
                    "inbox-letter-top";


                const sender =
                    document.createElement("span");

                sender.className =
                    "inbox-letter-sender";

                sender.textContent =
                    confession.is_anonymous
                        ? "Anonymous"
                        : (
                            confession.sender_display_name ||
                            "Someone"
                        );


                const unreadDot =
                    document.createElement("span");

                unreadDot.className =
                    "inbox-unread-dot";

                if (confession.is_read) {

                    unreadDot.classList.add(
                        "hidden"
                    );

                }


                topRow.appendChild(sender);

                topRow.appendChild(unreadDot);


                const preview =
                    document.createElement("div");

                preview.className =
                    "inbox-letter-preview";

                preview.textContent =
                    confession.message.length > 90
                        ? confession.message.slice(0, 90) + "..."
                        : confession.message;


                const date =
                    document.createElement("div");

                date.className =
                    "inbox-letter-date";

                date.textContent =
                    formatConfessionDate(
                        confession.created_at
                    );


                item.appendChild(topRow);

                item.appendChild(preview);

                item.appendChild(date);


                item.addEventListener(
                    "click",
                    () => {

                        openReceivedLetter(
                            confession
                        );

                    }
                );


                inboxList.appendChild(item);

            }
        );


        await loadUnreadCount();

    } catch (error) {

        console.error(
            "Inbox loading error:",
            error
        );

        emptyInbox.classList.remove("hidden");

        emptyInbox.textContent =
            "Couldn't load your inbox right now.";

    }

}


// ============================================================
// FORMAT DATE
// ============================================================

function formatConfessionDate(
    timestamp
) {

    if (!timestamp) {
        return "";
    }

    const date =
        new Date(timestamp);

    if (Number.isNaN(date.getTime())) {
        return "";
    }

    return date.toLocaleString(
        undefined,
        {
            month: "short",
            day: "numeric",
            year: "numeric",
            hour: "numeric",
            minute: "2-digit"
        }
    );

}


// ============================================================
// DATABASE — OPEN RECEIVED LETTER
// ============================================================

async function openReceivedLetter(
    confession
) {

    closePanelsOnly();

    openOverlay();


    /*
     * Find the existing elements inside the
     * letter viewer and update their text.
     *
     * We use textContent instead of innerHTML
     * so received messages cannot inject HTML.
     */

    const letterMessage =
        receivedLetter.querySelector(
            ".letter-message"
        );

    const letterSignature =
        receivedLetter.querySelector(
            ".letter-signature"
        );

    const letterSender =
        receivedLetter.querySelector(
            ".letter-sender"
        );


    if (letterMessage) {

        letterMessage.textContent =
            confession.message;

    } else {

        receivedLetter.textContent =
            confession.message;

    }


    if (letterSignature) {

        letterSignature.textContent =
            confession.is_anonymous
                ? "Anonymous"
                : (
                    confession.sender_display_name ||
                    "Someone"
                );

    }


    if (letterSender) {

        letterSender.textContent =
            confession.is_anonymous
                ? "Anonymous"
                : (
                    confession.sender_display_name ||
                    "Someone"
                );

    }


    letterViewer.classList.remove(
        "hidden"
    );

    requestAnimationFrame(() => {

        letterViewer.classList.add(
            "open"
        );

    });


    // Mark the letter as read.
    if (!confession.is_read) {

        try {

            const {
                error
            } =
                await supabaseClient
                    .from("confessions")
                    .update({
                        is_read: true
                    })
                    .eq(
                        "id",
                        confession.id
                    )
                    .eq(
                        "recipient_id",
                        currentUser.id
                    );

            if (error) {
                throw error;
            }

            await loadUnreadCount();

        } catch (error) {

            console.error(
                "Mark as read error:",
                error
            );

        }

    }

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

        /*
         * Usernames are stored in lowercase so
         * recipient searches are consistent.
         */

        const username =
            createUsername.value
                .trim()
                .replace(/^@/, "")
                .toLowerCase();

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

            if (
                data.session &&
                data.user
            ) {

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


// ============================================================
// OVERLAY CLICK
// ============================================================

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

        requestAnimationFrame(() => {

            accountInfoPanel.classList.add("open");

        });

    }
);


closeAccountInfo.addEventListener(
    "click",
    () => {

        accountInfoPanel.classList.remove("open");

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

        requestAnimationFrame(() => {

            settingsPanel.classList.add("open");

        });

    }
);


closeSettings.addEventListener(
    "click",
    () => {

        settingsPanel.classList.remove("open");

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
    async () => {

        // Close other panels but KEEP the home screen.
        closePanelsOnly();

        openOverlay();

        mailPopup.classList.remove("hidden");

        requestAnimationFrame(() => {

            mailPopup.classList.add("open");

        });

        // Load actual database inbox.
        await loadInbox();

    }
);


closeMailButton.addEventListener(
    "click",
    () => {

        mailPopup.classList.remove("open");

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

        letterViewer.classList.remove("open");

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


// ============================================================
// SEND CONFESSION TO DATABASE
// ============================================================

confessionDetailsForm.addEventListener(
    "submit",
    async (event) => {

        event.preventDefault();


        if (
            !supabaseClient ||
            !currentUser
        ) {

            confessionStatus.textContent =
                "You need to be logged in to send a confession.";

            return;

        }


        const message =
            confessionMessage.value.trim();

        const recipient =
            recipientUsername.value
                .trim()
                .replace(/^@/, "")
                .toLowerCase();

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


        sendConfessionSubmit.disabled =
            true;

        sendConfessionSubmit.textContent =
            "Sending Letter...";

        confessionStatus.textContent =
            "";


        try {

            // ==================================================
            // FIND RECIPIENT BY USERNAME
            // ==================================================

            const {
                data: recipientProfile,
                error: recipientError
            } =
                await supabaseClient
                    .from("profiles")
                    .select(
                        "id, username"
                    )
                    .eq(
                        "username",
                        recipient
                    )
                    .maybeSingle();


            if (recipientError) {
                throw recipientError;
            }


            if (!recipientProfile) {

                confessionStatus.textContent =
                    "That username doesn't exist.";

                recipientUsername.focus();

                return;

            }


            // ==================================================
            // PREVENT SENDING TO YOURSELF
            // ==================================================

            if (
                recipientProfile.id ===
                currentUser.id
            ) {

                confessionStatus.textContent =
                    "You can't send a confession to yourself.";

                return;

            }


            // ==================================================
            // INSERT CONFESSION
            // ==================================================

            const {
                error: sendError
            } =
                await supabaseClient
                    .from("confessions")
                    .insert({

                        sender_id:
                            currentUser.id,

                        recipient_id:
                            recipientProfile.id,

                        message:
                            message,

                        sender_display_name:
                            displayName,

                        is_anonymous:
                            anonymousCheckbox.checked

                    });


            if (sendError) {
                throw sendError;
            }


            // ==================================================
            // SUCCESS
            // ==================================================

            confessionStatus.textContent =
                "Confession sent! 💌";

            sendConfessionSubmit.textContent =
                "Sent! 💌";


            await new Promise(
                resolve =>
                    setTimeout(
                        resolve,
                        1000
                    )
            );


            resetConfessionForm();

            showHome(currentUser);


        } catch (error) {

            console.error(
                "Send confession error:",
                error
            );

            confessionStatus.textContent =
                error.message ||
                "Something went wrong while sending your confession.";

        } finally {

            sendConfessionSubmit.disabled =
                false;

            sendConfessionSubmit.textContent =
                "Send Confession 💌";

        }

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
