document.getElementById("registrationForm").addEventListener("submit", function(event) {

    event.preventDefault();

    let firstName = document.getElementById("firstName").value.trim();
    let lastName = document.getElementById("lastName").value.trim();
    let mobile = document.getElementById("mobile").value.trim();
    let email = document.getElementById("email").value.trim();
    let message = document.getElementById("message");

    // Check empty fields
    if (firstName === "" || lastName === "" || mobile === "" || email === "") {
        message.textContent = "Please fill all required fields.";
        message.style.color = "red";
        return;
    }

    // Check mobile number
    if (!/^[0-9]+$/.test(mobile)) {
        message.textContent = "Mobile number must contain only numbers.";
        message.style.color = "red";
        return;
    }

    // Check email
    let emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailPattern.test(email)) {
        message.textContent = "Please enter a valid email address.";
        message.style.color = "red";
        return;
    }

    message.textContent = "Registration successful!";
    message.style.color = "green";
});
