// src/utils/auth.js

const STRAPI_API_URL = 'http://localhost:1337'; // Replace with your Strapi URL

export async function authenticateUser(email, password) {
  try {
    const response = await fetch(`${STRAPI_API_URL}/api/auth/local`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        identifier: email,
        password: password,
      }),
    });

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const data = await response.json();
    console.log('Authentication Response:', data); // Debug statement
    return data.jwt; // Returns JWT token
  } catch (error) {
    console.error('Error during authentication:', error.message);
    return null;
  }
}
