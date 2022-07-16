import React from 'react';
import {useNavigate} from 'react-router-dom';

export function useAuthentication() {
	const navigate = useNavigate();

	/* loggedIn is initialized to be true to improve the user experience. If
	the user is logged in and loggedIn is initialized to false in the line of
	code below, then the signup form, which is rendered on the condition that
	the user is NOT logged in, will initially show for a very brief moment
	before redirecting the user to their profile page. By initializing loggedIn
	to true and conditionally rendering the signup form, no components are rendered
	until the app has "decided" if it is going to show the signup form, or redirect
	the user to their profile page */
	const [loggedIn, setLoggedIn] = React.useState(true);

	React.useEffect(() => {
		const userId = localStorage.getItem('userId');
		if (userId) {
			navigate(`/users/${userId}`, {replace: true});
		} else {
			setLoggedIn(false);
		}
	}, [loggedIn]);

	return loggedIn;
}