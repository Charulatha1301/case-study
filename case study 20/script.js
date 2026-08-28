let timeLeft = 60;
let timer;

function startTimer() {
	clearInterval(timer);

	timer = setInterval(function() {
		document.getElementById("timer").textContent = timeLeft;

		if (timeLeft <= 0) {
			clearInterval(timer);
			document.getElementById("timer").textContent = "Time Up!";
			return;
		}

		timeLeft--;
	}, 1000);
}

function resetTimer() {
	clearInterval(timer);

	timeLeft = 60;
	document.getElementById("timer").textContent = timeLeft;
}
