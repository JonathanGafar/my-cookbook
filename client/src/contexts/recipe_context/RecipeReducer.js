export default function recipeReducer(state, action) {
	switch (action.type) {
	case 'addDescription':
		return {
			...state,
			description: action.payload
		};
	case 'deleteDescription':
		return {
			...state,
			description: undefined
		};
	case 'addIngredientStep':
		return {
			...state,
			ingredients: [...state.ingredients, action.payload]
		};
	/* This action returns a state equal to the first one except for the
	state.ingredients array having an ingredient added in the appropriate spot.
	Note that the ingredient in the nth index of the array has ingredientNum
	equal to n + 1. This is because each ingredient's has its ingredientNum
	displayed next to it, and people usually count starting from 1 rather than 0 */
	case 'onIngredientStepChange':
		return {
			...state,
			ingredients: state.ingredients.slice(0, action.payload.ingredientNum - 1)
				.concat(
					action.payload.ingredient
				)
				.concat(
					state.ingredients.slice(action.payload.ingredientNum)
				)
		};
	case 'deleteIngredientStep':
		return {
			...state,
			ingredients: state.ingredients.slice(0, action.payload - 1)
				.concat(
					state.ingredients.slice(action.payload)
				)
		};
	case 'addRecipeStep':
		return {
			...state,
			recipeSteps: [...state.recipeSteps, action.payload]
		};
	// This is analagous to onIngredientStepChange
	case 'onRecipeStepChange':
		return {
			...state,
			recipeSteps: state.recipeSteps.slice(0, action.payload.stepNum - 1)
				.concat(
					action.payload.step
				)
				.concat(
					state.recipeSteps.slice(action.payload.stepNum)
				)
		};
	case 'deleteRecipeStep':
		return {
			...state,
			recipeSteps: state.recipeSteps.slice(0, action.payload - 1)
				.concat(
					state.recipeSteps.slice(action.payload)
				)
		};
	}
}