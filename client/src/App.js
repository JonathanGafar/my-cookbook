import React from 'react';
import {Routes, Route} from 'react-router-dom';

import Home from './pages/Home';
import Signup from './pages/Signup';
import Login from './pages/Login';
import LoggedIn from './pages/LoggedIn';
import RecipeState from './contexts/recipe_context/RecipeState';

export default function App() {
	return (
		<RecipeState>
			<Routes>
				<Route element={<Home />} path='/' />
				<Route element={<Signup />} path='/signup' />
				<Route element={<Login />} path='/login' />
				<Route element={<LoggedIn />} path='/loggedin' />
			</Routes>
		</RecipeState>
	);
}