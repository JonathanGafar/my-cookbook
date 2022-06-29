import {configureStore} from '@reduxjs/toolkit';
import descriptionReducer from './descriptionSlice';
import ingredientsReducer from './ingredientsSlice';
import recipeStepsReducer from './recipeStepsSlice';
import photosReducer from './photosSlice';

export default configureStore({
	reducer: {
		description: descriptionReducer,
		ingredients: ingredientsReducer,
		recipeSteps: recipeStepsReducer,
		photos: photosReducer
	}
});