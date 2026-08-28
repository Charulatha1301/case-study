document.getElementById("myForm").addEventListener("submit", function(event) {

	event.preventDefault();

	let name = document.getElementById("name").value.trim();
	let email = document.getElementById("email").value.trim();
	let message = document.getElementById("message");

	// Check name
	if (name === "") {
		message.textContent = "Please enter your name.";
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

	// If everything is valid
	message.textContent = "Form submitted successfully!";
	message.style.color = "green";
});
