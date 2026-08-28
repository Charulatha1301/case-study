let password = document.getElementById("password");
let strength = document.getElementById("strength");
let message = document.getElementById("message");

password.addEventListener("input", function() {

    let value = password.value;
    let score = 0;

    if (value.length >= 6) {
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

    if (score === 0) {
        strength.style.width = "0%";
        message.textContent = "Enter a password";
    }
    else if (score === 1) {
        strength.style.width = "25%";
        message.textContent = "Weak";
    }
    else if (score === 2) {
        strength.style.width = "50%";
        message.textContent = "Medium";
    }
    else if (score === 3) {
        strength.style.width = "75%";
        message.textContent = "Strong";
    }
    else {
        strength.style.width = "100%";
        message.textContent = "Very Strong";
    }
});
