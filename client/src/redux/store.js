import {configureStore} from '@reduxjs/toolkit';
import descriptionReducer from './descriptionSlice';
import ingredientsReducer from './ingredientSlice';

export default configureStore({
	reducer: {
		description: descriptionReducer,
		ingredients: ingredientsReducer
	}
});