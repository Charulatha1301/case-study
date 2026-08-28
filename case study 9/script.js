document.getElementById("feedbackForm").addEventListener("submit", function(event) {

	event.preventDefault();

	let name = document.getElementById("name").value.trim();
	let email = document.getElementById("email").value.trim();
	let message = document.getElementById("message").value.trim();
	let result = document.getElementById("result");

	// Check all fields
	if (name === "" || email === "" || message === "") {
		result.textContent = "Please fill all fields.";
		result.style.color = "red";
		return;
	}

	// Check email format
	let emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

	if (!emailPattern.test(email)) {
		result.textContent = "Please enter a valid email.";
		result.style.color = "red";
		return;
	}

	// Check message length
	if (message.length < 50) {
		result.textContent = "Message must be at least 50 characters.";
		result.style.color = "red";
		return;
	}

	result.textContent = "Feedback submitted successfully!";
	result.style.color = "green";
});
