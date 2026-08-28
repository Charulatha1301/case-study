function showTab(tab) {

	let content = document.getElementById("content");

	if (tab === "home") {
		content.innerHTML = `
			<h2>Welcome to Home</h2>
			<p>This is the home section of the dashboard.</p>
		`;
	}

	else if (tab === "profile") {
		content.innerHTML = `
			<h2>My Profile</h2>
			<p>Name: Student</p>
			<p>Department: Computer Science</p>
		`;
	}

	else if (tab === "projects") {
		content.innerHTML = `
			<h2>My Projects</h2>
			<p>Project 1: Website Design</p>
			<p>Project 2: JavaScript Application</p>
		`;
	}

	else if (tab === "contact") {
		content.innerHTML = `
			<h2>Contact Me</h2>
			<p>Email: student@example.com</p>
			<p>Phone: 9876543210</p>
		`;
	}
}
