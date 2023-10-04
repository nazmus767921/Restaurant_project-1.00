import { UPDATE_FILTERS, LOAD_PRODUCTS, FETCH_MENUS } from "../../actions";

export const products_reducer = (state, action) => {
	if (action.type === FETCH_MENUS) {
		const maxPrice = state.menus.reduce((max, item) => {
			return item.price > max ? item.price : max;
		}, 0);
		return {
			...state,
			menus: action.payload.Data,
			filters: { ...state.filters, max_price: maxPrice, price: maxPrice },
		};
	}
	if (action.type === LOAD_PRODUCTS) {
		return {
			...state,
			filteredMenu: [...state.menus],
		};
	}
	if (action.type === UPDATE_FILTERS) {
		return {
			...state,
			filters: {
				...state.filters,
				[action.payload.name]: action.payload.value,
			},
		};
	}
};
