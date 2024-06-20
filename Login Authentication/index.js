// Actions for Join Group button on smaller screen
const grpBtn = document.getElementById("grpBtn");
grpBtn.addEventListener('click', () => {
    if (grpBtn.innerHTML === "Leave Group") {
        grpBtn.innerHTML = "Join Group";
    } else {
        grpBtn.innerHTML = "Leave Group";
    }
});

// Change background of navbar on scroll
const navBar = document.getElementById("navBar");
window.onscroll = () => {
    if (document.body.scrollTop >= 490 || document.documentElement.scrollTop >= 490) {
        navBar.classList.add("navBar");
    } else {
        navBar.classList.remove("navBar");
    }
};

// Actions for Join Group button
const grpAction = document.getElementById("grpAction");
grpAction.addEventListener('click', () => {
    if (grpAction.classList.contains("btn-primary")) {
        grpAction.classList.toggle("btn-outline-secondary");
        grpAction.classList.toggle("btn-primary");
        grpAction.innerHTML = `
        <svg xmlns="http://www.w3.org/2000/svg" height="20px" viewBox="0 -960 960 960" width="20px"
        fill="#ADB5BD">
        <path
        d="M200-120q-33 0-56.5-23.5T120-200v-160h80v160h560v-560H200v160h-80v-160q0-33 23.5-56.5T200-840h560q33 0 56.5 23.5T840-760v560q0 33-23.5 56.5T760-120H200Zm220-160-56-58 102-102H120v-80h346L364-622l56-58 200 200-200 200Z" />
        </svg>
        &nbsp;Leave Group
        `;
    } else if (grpAction.classList.contains("btn-outline-secondary")) {
        grpAction.classList.toggle("btn-outline-secondary");
        grpAction.classList.toggle("btn-primary");
        grpAction.innerHTML = `
        <svg xmlns="http://www.w3.org/2000/svg" height="20px" viewBox="0 -960 960 960" width="20px"
        fill="#ffffff">
        <path
        d="M720-400v-120H600v-80h120v-120h80v120h120v80H800v120h-80Zm-360-80q-66 0-113-47t-47-113q0-66 47-113t113-47q66 0 113 47t47 113q0 66-47 113t-113 47ZM40-160v-112q0-34 17.5-62.5T104-378q62-31 126-46.5T360-440q66 0 130 15.5T616-378q29 15 46.5 43.5T680-272v112H40Zm80-80h480v-32q0-11-5.5-20T580-306q-54-27-109-40.5T360-360q-56 0-111 13.5T140-306q-9 5-14.5 14t-5.5 20v32Zm240-320q33 0 56.5-23.5T440-640q0-33-23.5-56.5T360-720q-33 0-56.5 23.5T280-640q0 33 23.5 56.5T360-560Zm0-80Zm0 400Z" />
        </svg>
        &nbsp;Join Group
        `;
    }
});

// Actions for follow and Unfollow button
const followBtn = document.getElementsByClassName("followBtn");
for (let btn of followBtn) {
    btn.addEventListener('click', () => {
        if (btn.classList.contains("followBtn")) {
            btn.classList.toggle("followBtn");
            btn.classList.toggle("unfollowBtn");
            btn.classList.toggle("border-0");
            btn.innerHTML = "Unfollow";
        } else {
            btn.classList.toggle("followBtn");
            btn.classList.toggle("unfollowBtn");
            btn.classList.toggle("border-0");
            btn.innerHTML = "Follow";
        }
    })
}

// Create Account Form Validation
let logInForm = document.getElementById("logInForm");
let signInForm = document.getElementById("signInForm");
let submitCreateAcc = document.getElementById("submitCreateAcc");
let submitSignIn = document.getElementById("submitSignIn");
const forms = document.querySelectorAll('.needs-validation');
(() => {
    'use strict'

    Array.from(forms).forEach(() => {
        submitCreateAcc.addEventListener('click', event => {
            if (!logInForm.checkValidity()) {
                event.preventDefault()
                event.stopPropagation()
            }
            logInForm.classList.add('was-validated')
        }, false)

        submitSignIn.addEventListener('click', event => {
            if (!signInForm.checkValidity()) {
                event.preventDefault()
                event.stopPropagation()
            }
            signInForm.classList.add('was-validated')
        }, false)
    })
})();

// Switch between Sign in and Create Account
const signInBtn = document.getElementsByClassName("signInBtn");
const switchSignIn = document.getElementById("switchSignIn");
const createAcc = document.getElementById("createAcc");

let btn;
for (btn of signInBtn) {
    btn.addEventListener('click', () => {
        if (switchSignIn.classList.contains("d-none")) {
            switchSignIn.classList.toggle("d-none");
            createAcc.classList.toggle("d-none");
            btn.innerHTML = `Create Account instead? <span class="text-primary">Create Account</span>`;
        } else {
            switchSignIn.classList.toggle("d-none");
            createAcc.classList.toggle("d-none");
            btn.innerHTML = `Already have an account? <span class="text-primary">Sign in</span>`;
        }
    });
}

// Action for favorite button
const favorite = document.getElementsByClassName("favorite");
for (let i = 0; i < favorite.length; i++) {
    favorite[i].addEventListener('click', () => {
        if (favorite[i].classList.contains("like")) {
            favorite[i].classList.toggle("like");
            favorite[i].innerHTML = `<img src="./Assets/removelike.svg" alt="removeLike"> 
        <div>Remove from Favorites</div>`;
        } else {
            favorite[i].classList.toggle("like");
            favorite[i].innerHTML = `<img src="./Assets/like.svg" alt="like"> 
        <div>Add to Favorites</div>`;
        }
    });
}

// Password Encryption using Bcrypt
// const bcrypt = require('bcrypt');
// const saltRounds = 10;

// Create account
class user {
    s_name;
    l_name;
    psw;

    constructor(s_name, l_name, psw) {
        this.s_name = s_name;
        this.l_name = l_name;
        this.psw = psw;
    }
}

let users = [];

let s_name_input = document.getElementById("validationCustom01");
let l_name_input = document.getElementById("validationCustom02");
let email_input = document.getElementById("validationEmail");
let psw_input = document.getElementById("validationCustom03");
let confirmPsw_input = document.getElementById("validationCustom05");

submitCreateAcc.addEventListener('click', () => {
    if (logInForm.classList.contains("was-validated")) {
        let s_name = s_name_input.value.trim();
        let l_name = l_name_input.value.trim();
        let email = email_input.value.trim();
        let confirmPsw = confirmPsw_input.value;
        if (s_name !== "" && l_name !== "" && email !== "" && confirmPsw !== "" && psw_input.value !== "") {
            let email_user = new user(s_name, l_name, confirmPsw);
            users.push({
                key: email,
                value: email_user
            });
        }
    }

})

// Log-in authentication
let accountModal = document.getElementsByClassName("accountModal");
let contentBlock = document.getElementById("contentBlock");
let logInBlock = document.getElementById("logInBlock");
let signIn_email = document.getElementById("validationEmailSignIn");
let signIn_psw = document.getElementById("validationCustom03SignIn");
submitSignIn.addEventListener('click', () => {
    if (signIn_email.value.trim() !== "" && signIn_psw.value !== "") {
        for (let i in users) {
            if (users[i].key === signIn_email.value.trim() && users[i].value.psw === signIn_psw.value) {
                for (let i = 0; i < accountModal.length; i++) {
                    accountModal[i].classList.toggle("d-none");
                }
                logInBlock.classList.toggle("d-none");
                contentBlock.classList.toggle("logged-out");
                contentBlock.classList.toggle("logged-in");
            }
        }
    }
});