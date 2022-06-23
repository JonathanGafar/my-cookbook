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
	/* This action returns a state equal to the first one except for the state.ingredients array having an ingredient added in the appropriate spot */
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
	}
}