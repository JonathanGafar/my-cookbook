import store from '../../redux/store.js';
import {deleteDescription} from
	'./DrawerSections/DescriptionSection/descriptionSlice';
import {deleteIngredient} from
	'./DrawerSections/IngredientsSection/ingredientsSlice';
import {deleteRecipeStep} from
	'./DrawerSections/RecipeStepsSection/recipeStepsSlice';

/* Remove unused inputs and text areas (unused meaning no input has been added
or only white spaces have been added) when the recipe drawer closes */
export function cleanRecipeDrawer() {
	const {
		description: {
			description
		},
		ingredients: {
			ingredients
		},
		recipeSteps: {
			recipeSteps
		}
	} = store.getState();

	if (description !== null && description.trim().length === 0) {
		store.dispatch(deleteDescription());
	}

	/* Iterating in reverse because we are possibly removing items from array
	while looping through it. Iterating forward could cause the loop to skip
	indices if items are deleted */
	for (let i = ingredients.length - 1; i >= 0; --i) {
		if (ingredients[i].trim().length === 0) {
			store.dispatch(deleteIngredient(i));
		}
	}

	// Iterating in reverse for the same reasons as stated above
	for (let i = recipeSteps.length - 1; i >= 0; --i) {
		if (recipeSteps[i].trim().length === 0) {
			store.dispatch(deleteRecipeStep(i));
		}
	}
}

export function getRecipeFromRedux() {
	const recipeDrawerData = store.getState();
	const recipeData = {
		name: recipeDrawerData.description.name,
		description: recipeDrawerData.description.description,
		ingredients: recipeDrawerData.ingredients.ingredients,
		recipeSteps: recipeDrawerData.recipeSteps.recipeSteps
	};

	return recipeData;
}