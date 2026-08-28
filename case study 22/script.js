document.getElementById("imageInput").addEventListener("change", function () {
	const file = this.files[0];

	if (file) {
		const reader = new FileReader();

		reader.onload = function (event) {
			const image = document.getElementById("previewImage");
			const text = document.getElementById("previewText");

			image.src = event.target.result;
			image.style.display = "block";
			text.style.display = "none";
		};

		reader.readAsDataURL(file);
	}
});

function submitImage() {
	const file = document.getElementById("imageInput").files[0];
	const message = document.getElementById("message");

	if (!file) {
		message.textContent = "Please select an image first.";
		message.style.color = "red";
	} else {
		message.textContent = "Image submitted successfully!";
		message.style.color = "green";
	}
}
