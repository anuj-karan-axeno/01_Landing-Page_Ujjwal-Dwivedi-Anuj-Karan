import { createNavbar } from '../../components/navbar.js';

import { createFooter } from '../../components/footer.js';

const footerContainer = document.getElementById('footer-container');
const navbarContainer = document.getElementById('navbar-container');


// Render Navbar
navbarContainer.appendChild(createNavbar());


// Render Footer
footerContainer.appendChild(createFooter());


const form = document.getElementById("contact-form");

form.addEventListener("submit", function (event) {

    event.preventDefault();

    clearErrors();

    const name =
        document.getElementById("name").value.trim();

    const email =
        document.getElementById("email").value.trim();

    const subject =
        document.getElementById("subject").value.trim();

    const message =
        document.getElementById("message").value.trim();

    let isValid = true;

    if (name === "") {

        showError("name-error", "Name is required");

        isValid = false;
    }

    if (!validateEmail(email)) {

        showError("email-error", "Enter a valid email");

        isValid = false;
    }

    if (subject === "") {

        showError("subject-error", "Subject is required");

        isValid = false;
    }

    if (message.length < 10) {

        showError(
            "message-error",
            "Message should contain at least 10 characters."
        );

        isValid = false;
    }

    if (isValid) {

        alert("Message sent successfully!");

        form.reset();
    }

});

function showError(id, message) {

    document.getElementById(id).innerText = message;

}

function clearErrors() {

    document
        .querySelectorAll(".error")
        .forEach((error) => {

            error.innerText = "";

        });

}

function validateEmail(email) {

    const regex =
        /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    return regex.test(email);

}