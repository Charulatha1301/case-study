const form = document.getElementById("registrationForm");
const message = document.getElementById("message");

form.addEventListener("submit", (event) => {
	event.preventDefault();

	const name = document.getElementById("name").value.trim();
	const email = document.getElementById("email").value.trim();
	const password = document.getElementById("password").value;
	const confirmPassword = document.getElementById("confirmPassword").value;
	const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

	if (!name || !email || !password || !confirmPassword) {
		showMessage("Please fill in all fields.", "error");
	} else if (!emailPattern.test(email)) {
		showMessage("Please enter a valid email address.", "error");
	} else if (password.length < 6) {
		showMessage("Password must be at least 6 characters long.", "error");
	} else if (password !== confirmPassword) {
		showMessage("Passwords do not match.", "error");
	} else {
		showMessage("Registration successful!", "success");
		form.reset();
	}
});

function showMessage(text, type) {
	message.textContent = text;
	message.className = type;
}
