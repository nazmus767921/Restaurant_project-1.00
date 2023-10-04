import {
	UPDATE_FILTERS,
	LOAD_FILTERED_MENU,
	FETCH_MENUS,
	UPDATE_SORT,
	UPDATE_GRID_VIEW,
	UPDATE_LIST_VIEW,
	FILTER_MENUS,
	GET_CATEGORIES,
} from "../../actions";

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
	if (action.type === GET_CATEGORIES) {
		const categories = new Set(
			state.menus.map((menu) => {
				return menu.category;
			})
		);
		return { ...state, categories: [...categories] };
	}
	// if (action.type === LOAD_FILTERED_MENU) {
	// 	return {
	// 		...state,
	// 		filteredMenu: [...state.menus],
	// 	};
	// }
	if (action.type === UPDATE_FILTERS) {
		return {
			...state,
			filters: {
				...state.filters,
				[action.payload.name]: action.payload.value,
			},
		};
	}
	if (action.type === UPDATE_SORT) {
		return { ...state, [action.payload.name]: action.payload.value };
	}
	if (action.type === UPDATE_GRID_VIEW) {
		return { ...state, grid_view: true };
	}
	if (action.type === UPDATE_LIST_VIEW) {
		return { ...state, grid_view: false };
	}
	if (action.type === FILTER_MENUS) {
		const { menus } = state;
		const {category, price } = state.filters;
		let tempProducts = [...menus];
		//=> Filtering <==//
		if (category !== "all") {
			tempProducts = tempProducts.filter((menu) => {
				return menu.category.toLowerCase() === category.toLowerCase();
			});
		}
		if (price) {
			tempProducts = tempProducts.filter((menu) => {
				return menu.price <= price;
			});
		}
		return { ...state, filteredMenu: tempProducts };
	}
};
