// src/pages/api/get-user-data.js
import fetch from "node-fetch";
import { parse } from "cookie";

export async function get({ request }) {
	const cookies = request.headers.get("cookie") || "";
	const cookieData = parse(cookies);
	const token = cookieData.jwt;

	if (!token) {
		return {
			status: 401,
			body: "Unauthorized",
		};
	}

	// Fetch user data using JWT
	const response = await fetch(
		"http://localhost:1337/api/users/me?populate=*",
		{
			headers: { Authorization: `Bearer ${token}` },
		}
	);

	if (response.ok) {
		const userData = await response.json();
		return {
			body: userData,
		};
	} else {
		return {
			status: 401,
			body: "Unauthorized",
		};
	}
}
