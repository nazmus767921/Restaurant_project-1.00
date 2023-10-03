import { SELECT_CATEGORY, SET_MENU_DATA } from "../../actions";

export const products_reducer = (state, action) => {
	if (action.type === SELECT_CATEGORY) {
		return { ...state, selectedCategory: action.payload.textContent };
	}
	if (action.type === SET_MENU_DATA) {
		return { ...state, menus: action.payload.Data };
	}
	return { ...state };
};
