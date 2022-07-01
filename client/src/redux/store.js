import {configureStore} from '@reduxjs/toolkit';
import descriptionReducer from
	'../components/DrawerSections/DescriptionSection/descriptionSlice';
import ingredientsReducer from
	'../components/DrawerSections/IngredientsSection/ingredientsSlice';
import recipeStepsReducer from
	'../components/DrawerSections/RecipeStepsSection/recipeStepsSlice';
import photosReducer from
	'../components/DrawerSections/PhotoSection/photosSlice';

export default configureStore({
	reducer: {
		description: descriptionReducer,
		ingredients: ingredientsReducer,
		recipeSteps: recipeStepsReducer,
		photos: photosReducer
	}
});