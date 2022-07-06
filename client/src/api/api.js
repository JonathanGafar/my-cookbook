export async function signupUser(formData) {
	try {
		const response = await fetch(`${process.env.REACT_APP_API_SERVER}/users`, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify(formData)
		});

		return response.json();
	} catch (err) {
		return err;
	}
}