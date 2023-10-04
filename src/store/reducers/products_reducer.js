import {
	UPDATE_FILTERS,
	FETCH_MENUS,
	UPDATE_SORT,
	UPDATE_GRID_VIEW,
	UPDATE_LIST_VIEW,
	FILTER_MENUS,
	GET_CATEGORIES,
	SORT_MENU,
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
		const { category, price } = state.filters;
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
	if (action.type === SORT_MENU) {
		const { filteredMenu, sort } = state;
		let tempProducts = [...filteredMenu];

		if (sort === "price-low") {
			tempProducts = tempProducts.sort((a, b) => a.price - b.price);
		}
		if (sort === "price-high") {
			tempProducts = tempProducts.sort((a, b) => b.price - a.price);
		}
		if (sort === "name-a") {
			tempProducts = tempProducts.sort((a, b) => a.name.localeCompare(b.name));
		}
		if (sort === "name-z") {
			tempProducts = tempProducts.sort((a, b) => b.name.localeCompare(a.name));
		}
		return { ...state, filteredMenu: tempProducts };
	}
};
