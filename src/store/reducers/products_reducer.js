import { SELECT_CATEGORY } from "../../actions";

export const products_reducer = (state, action) => {
	if (action.type === SELECT_CATEGORY) {
		return { ...state, selectedCategory: action.payload.textContent };
	}
	return { ...state };
};
