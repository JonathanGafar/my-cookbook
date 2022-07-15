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

async function getUserID() {
	const response = await fetch(`${process.env.REACT_APP_API_SERVER}/api/userid`, {
		method: 'GET',
		credentials: 'include'
	});

	return response.json();
}

export async function saveRecipe(recipeData) {
	const userID = await getUserID();
	const response =
		await fetch(`${process.env.REACT_APP_API_SERVER}/api/users/${userID.id}/recipes`,
			{
				method: 'POST',
				credentials: 'include',
				headers: {
					'Content-Type': 'application/json'
				},
				body: JSON.stringify(recipeData)
			});

	return response.json();
}