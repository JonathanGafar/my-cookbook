export async function signupUser(formData) {
	const response = await fetch(`${process.env.REACT_APP_API_SERVER}/users`, {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json'
		},
		body: JSON.stringify(formData)
	});

	return response.json();
}

export async function loginUser(formData) {
	const response = await fetch(`${process.env.REACT_APP_API_SERVER}/login`, {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json'
		},
		body: JSON.stringify(formData)
	});

	return response.json();
}

export async function saveRecipe(recipeData) {
}