// src/pages/api/userProfile.js
export async function get() {
	const token = localStorage.getItem("authToken"); // Retrieve from local storage
	if (!token) {
		return { status: 401, body: "No authentication token provided" };
	}

	const response = await fetch("http://localhost:1337/api/users/me", {
		headers: {
			Authorization: `Bearer ${token}`,
			"Content-Type": "application/json",
		},
	});

	if (!response.ok) {
		return { status: response.status, body: "Failed to fetch user data" };
	}

	const user = await response.json();
	return { body: user };
}
