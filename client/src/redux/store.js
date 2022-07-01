import {configureStore} from '@reduxjs/toolkit';
import descriptionReducer from
	'../components/DrawerSections/DescriptionSection/descriptionSlice';
import ingredientsReducer from
	'../components/DrawerSections/IngredientsSection/ingredientsSlice';
import recipeStepsReducer from
	'../components/DrawerSections/RecipeStepsSection/recipeStepsSlice';
import photosReducer from
	'../components/DrawerSections/PhotoSection/photosSlice';

/* Stores the recipe in client state while the user is creating a recipe.
This allows the user to close the create recipe modal, continue with something
else, and pick up where they left off. Ultimately, the recipe will be saved in
server state once the user clicks save. */
export default configureStore({
	reducer: {
		description: descriptionReducer,
		ingredients: ingredientsReducer,
		recipeSteps: recipeStepsReducer,
		photos: photosReducer
	}
});