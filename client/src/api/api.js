export async function signupUser(formData) {
	const response = await fetch(`${process.env.REACT_APP_API_SERVER}/api/users`, {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json'
		},
		body: JSON.stringify(formData)
	});

	return response.json();
}

export async function loginUser(formData) {
	const response = await fetch(`${process.env.REACT_APP_API_SERVER}/api/login`, {
		method: 'POST',
		credentials: 'include',
		headers: {
			'Content-Type': 'application/json'
		},
		body: JSON.stringify(formData)
	});

	return response.json();
}

export async function logoutUser() {
	const response = await fetch(`${process.env.REACT_APP_API_SERVER}/api/logout`, {
		method: 'POST',
		credentials: 'include',
		headers: {
			'Content-Type': 'application/json'
		}
	});

	return response.json();
}

export async function saveRecipe(recipeData) {
	const userID = localStorage.getItem('userId');
	const response =
		await fetch(`${process.env.REACT_APP_API_SERVER}/api/users/${userID}/recipes`,
			{
				method: 'POST',
				credentials: 'include',
				body: recipeData
			});

	return response.json();
}