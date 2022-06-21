import React, {useReducer} from 'react';
import RecipeContext from './RecipeContext';
import recipeReducer from './RecipeReducer';

export default function RecipeState(props) {
	const initialState = {
		ingredients: []
	};

	const [recipeState, dispatch] = useReducer(recipeReducer, initialState);

	function addDescription(description) {
		dispatch({
			type: 'addDescription',
			payload: description
		});
	}

	function deleteDescription() {
		dispatch({
			type: 'deleteDescription'
		});
	}

	function addIngredientStep(ingredient) {
		dispatch({
			type: 'addIngredientStep',
			payload: ingredient
		});
	}

	function onIngredientStepChange(ingredientNum, ingredient) {
		dispatch({
			type: 'onIngredientStepChange',
			payload: {
				ingredientNum,
				ingredient
			}
		});
	}

	const contextValues = {
		recipeState,
		addDescription,
		deleteDescription,
		addIngredientStep,
		onIngredientStepChange
	};

	return (
		<RecipeContext.Provider value={contextValues}>
			{props.children}
		</RecipeContext.Provider>
	);
}