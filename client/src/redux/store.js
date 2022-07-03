import {configureStore} from '@reduxjs/toolkit';
import descriptionReducer from
	'../components/RecipeDrawer/DrawerSections/DescriptionSection/descriptionSlice';
import ingredientsReducer from
	'../components/RecipeDrawer/DrawerSections/IngredientsSection/ingredientsSlice';
import recipeStepsReducer from
	'../components/RecipeDrawer/DrawerSections/RecipeStepsSection/recipeStepsSlice';
import photosReducer from
	'../components/RecipeDrawer/DrawerSections/PhotoSection/photosSlice';

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