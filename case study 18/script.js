function changeAlignment() {
	let alignments = ["left", "right", "center", "justify"];
	let randomIndex = Math.floor(Math.random() * alignments.length);
	let randomAlignment = alignments[randomIndex];

	document.getElementById("myParagraph").style.textAlign = randomAlignment;
}
function replaceScript() {
    let list = document.getElementById("myList");

    list.lastElementChild.textContent = "Computer Architecture";
}

function removeList() {
    let list = document.getElementById("myList");

    list.innerHTML = "";
}