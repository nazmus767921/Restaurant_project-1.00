import { createContext, useContext, useEffect, useReducer } from "react";
import { products_reducer as reducer } from "../reducers/products_reducer";
import {
	UPDATE_FILTERS,
	LOAD_PRODUCTS,
	FETCH_MENUS,
	FILTER_MENUS,
} from "../../actions";
import Data from "../../data.json";

const products_context = createContext(null);

const initialState = {
	menus: [],
	filteredMenu: [],
	categories: ["breakfast", "lunch", "dinner", "deserts"],
	grid_view: true,
	selectedCategory: "all",
	filters: {
		category: "all",
		min_price: 0,
		max_price: 0,
		price: 0,
	},
};

export const Products_contextProvider = ({ children }) => {
	const [state, dispatch] = useReducer(reducer, initialState);

	// actions
	const update_filters = (e) => {
		let name = e.target.name;
		let value = e.target.value;

		if (name === "category") {
			value = e.target.textContent;
		}
		dispatch({ type: UPDATE_FILTERS, payload: { name, value } });
	};

	const load_products = () => {
		dispatch({ type: LOAD_PRODUCTS });
	};

	const filter_category_wise = (category) => {
		dispatch({ type: CATEGORY_FILTER, payload: { category } });
	};

	//all actions
	const Actions = {
		update_filters,
		set_filteredMenus: load_products,
		filter_category_wise,
	};

	// data fetching
	const fetchMenuItems = () => {
		dispatch({ type: FETCH_MENUS, payload: { Data: Data.menuItems } });
	};
	useEffect(() => {
		fetchMenuItems();
	}, []);

	return (
		<products_context.Provider value={{ ...state, ...Actions }}>
			{children}
		</products_context.Provider>
	);
};

export const useProductsContext = () => {
	return useContext(products_context);
};
