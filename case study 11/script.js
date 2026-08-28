document.getElementById("contactForm").addEventListener("submit", function (event) {
	event.preventDefault();

	document.getElementById("result").textContent =
		"Message submitted successfully!";
});

function clearForm() {
	document.getElementById("name").value = "";
	document.getElementById("email").value = "";
	document.getElementById("message").value = "";

	document.getElementById("result").textContent = "";
}
