import {
	CATEGORY_FILTER,
	UPDATE_FILTERS,
	LOAD_PRODUCTS,
	SET_MENU_DATA,
} from "../../actions";

export const products_reducer = (state, action) => {
	if (action.type === UPDATE_FILTERS) {
		return {
			...state,
			filters: {
				...state.filters,
				[action.payload.name]: action.payload.value,
			},
		};
	}
	if (action.type === SET_MENU_DATA) {
		return { ...state, menus: action.payload.Data };
	}
	if (action.type === LOAD_PRODUCTS) {
		return { ...state, filteredMenu: [...state.menus] };
	}
};
