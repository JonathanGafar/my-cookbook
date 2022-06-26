import {configureStore} from '@reduxjs/toolkit';
import descriptionReducer from './descriptionSlice';
import ingredientsReducer from './ingredientsSlice';
import recipeStepsReducer from './recipeStepsSlice';

export default configureStore({
	reducer: {
		description: descriptionReducer,
		ingredients: ingredientsReducer,
		recipeSteps: recipeStepsReducer
	}
});