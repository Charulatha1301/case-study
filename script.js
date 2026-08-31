const password = document.getElementById("password");
const strength = document.getElementById("strength");
const message = document.getElementById("message");

password.addEventListener("input", function () {

    let value = password.value;
    let score = 0;

    if (value.length >= 8) {
        score++;
    }

    if (/[A-Z]/.test(value)) {
        score++;
    }

    if (/[0-9]/.test(value)) {
        score++;
    }

    if (/[^A-Za-z0-9]/.test(value)) {
        score++;
    }

    if (value.length === 0) {

        strength.style.width = "0%";
        message.textContent = "Enter a password";

    }

    else if (score <= 1) {

        strength.style.width = "25%";
        strength.style.backgroundColor = "red";

        message.textContent = "Weak";
        message.style.color = "red";

    }

    else if (score <= 3) {

        strength.style.width = "60%";
        strength.style.backgroundColor = "orange";

        message.textContent = "Medium";
        message.style.color = "orange";

    }

    else {

        strength.style.width = "100%";
        strength.style.backgroundColor = "green";

        message.textContent = "Strong";
        message.style.color = "green";

    }
});
