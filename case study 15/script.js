function calculateVolume() {
	let radius = Number(document.getElementById("radius").value);

	let volume = (4 / 3) * Math.PI * radius * radius * radius;

	document.getElementById("volume").value = volume.toFixed(2);
}
