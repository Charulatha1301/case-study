let searchBox = document.getElementById("searchBox");
let items = document.querySelectorAll("#itemList li");

searchBox.addEventListener("input", function () {
	let searchText = searchBox.value.toLowerCase();

	items.forEach(function (item) {
		let itemText = item.textContent.toLowerCase();

		item.style.display = itemText.includes(searchText) ? "block" : "none";
	});
});
