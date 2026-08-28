document.getElementById("loginForm").addEventListener("submit", function (event) {
	event.preventDefault();

	const username = document.getElementById("username").value.trim();
	const password = document.getElementById("password").value;
	const message = document.getElementById("message");

	if (username === "") {
		message.textContent = "Username cannot be empty.";
		message.style.color = "red";
		return;
	}

	if (password.length < 6) {
		message.textContent = "Password must have at least 6 characters.";
		message.style.color = "red";
		return;
	}

	message.textContent = "Login successful!";
	message.style.color = "green";
});
