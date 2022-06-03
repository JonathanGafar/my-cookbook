import React from 'react';
import {Routes, Route} from 'react-router-dom';

import Home from './pages/Home';
import Signup from './pages/Signup';

export default function App() {
	return (
		<Routes>
			<Route element={<Home />} path='/' />
			<Route element={<Signup />} path='/signup' />
		</Routes>
	);
}