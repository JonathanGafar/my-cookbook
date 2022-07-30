import store from '../../redux/store.js';
import {deleteDescription, deleteName} from
	'./DrawerSections/DescriptionSection/descriptionSlice';
import {deleteIngredient} from
	'./DrawerSections/IngredientsSection/ingredientsSlice';
import {deleteRecipeStep} from
	'./DrawerSections/RecipeStepsSection/recipeStepsSlice';
import {deletePhoto} from
	'./DrawerSections/PhotoSection/photosSlice';

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

/* Reset the redux store to its initialState. This is called after a recipe
has been successfully saved and the recipe drawer automatically closes */
export function resetReduxStore() {
	const {
		ingredients: {
			ingredients
		},
		recipeSteps: {
			recipeSteps
		},
		photos: {
			photoURLs
		}
	} = store.getState();

	store.dispatch(deleteName());
	store.dispatch(deleteDescription());

	/* Iterating in reverse because we are possibly removing items from array
	while looping through it. Iterating forward could cause the loop to skip
	indices if items are deleted */
	for (let i = ingredients.length - 1; i >= 0; --i) {
		store.dispatch(deleteIngredient(i));
	}

	// Iterating in reverse for the same reasons stated above
	for (let i = recipeSteps.length - 1; i >= 0; --i) {
		store.dispatch(deleteRecipeStep(i));
	}

	/* This deletes the references the browser stores to the photos. This is done
	to prevent memory leaks */
	photoURLs.forEach(url => {
		if (url) {
			URL.revokeObjectURL(url);
		}
	});

	/* i ranges from 1 to 3 (rather than 0 to 2) because there are 3 indices for
	photos in the array, and i in this case represents the photo number, as it
	appears to the user. 1 is actually subtracted from i in this reducer so that
	the changes are being made to the photo arrays from the 0th index through the
	2nd index */
	for (let i = 3; i >= 1; --i) {
		store.dispatch(deletePhoto(i));
	}
}

export function getRecipeFromRedux() {
	const recipeDrawerData = store.getState();
	const recipeData = new FormData();

	recipeData.append('name', recipeDrawerData.description.name);
	recipeData.append('description', recipeDrawerData.description.description);
	recipeData.append('ingredients', JSON.stringify(recipeDrawerData.ingredients
		.ingredients));
	recipeData.append('recipeSteps', JSON.stringify(recipeDrawerData.recipeSteps
		.recipeSteps));

	recipeDrawerData.photos.photos.forEach(photo => {
		if (photo) {
			recipeData.append('photos', photo);
		}
	});

	return recipeData;
}

/* Declared outside of the functional component so that the entire RecipeDrawer
doesn't rerender whenever the name changes */
export function isRecipeValid() {
	const {
		description: {
			name
		}
	} = store.getState();

	return name.trim().length > 0;
}

export function revokePhotoURLs() {
	const {
		photos: {
			photoURLs
		}
	} = store.getState();
}