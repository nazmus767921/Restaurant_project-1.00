import { createContext, useContext, useEffect, useReducer } from "react";
import { products_reducer as reducer } from "../reducers/products_reducer";
import {
	UPDATE_FILTERS,
	FETCH_MENUS,
	FILTER_MENUS,
	UPDATE_SORT,
	UPDATE_GRID_VIEW,
	UPDATE_LIST_VIEW,
	GET_CATEGORIES,
	SORT_MENU,
	UPDATE_MIN_MAX_PRICES,
} from "../../actions";
import Data from "../../data.json";

const products_context = createContext(null);

const initialState = {
	menus: [],
	filteredMenu: [],
	categories: [],
	grid_view: true,
	sort: "price-low",
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
			value = e.target.textContent.toLowerCase();
		}
		dispatch({ type: UPDATE_FILTERS, payload: { name, value } });
	};

	const update_sort = (e) => {
		let name = e.target.name;
		let value = e.target.value;
		dispatch({ type: UPDATE_SORT, payload: { name, value } });
	};

	const update_gridView = () => {
		dispatch({ type: UPDATE_GRID_VIEW });
	};

	const update_listView = () => {
		dispatch({ type: UPDATE_LIST_VIEW });
	};

	//all actions
	const Actions = {
		update_filters,
		update_sort,
		update_gridView,
		update_listView,
	};

	// data fetching
	const fetchMenuItems = () => {
		dispatch({ type: FETCH_MENUS, payload: { Data: Data.menuItems } });
	};
	useEffect(() => {
		fetchMenuItems();
		dispatch({ type: GET_CATEGORIES });
	}, []);

	useEffect(() => {
		dispatch({ type: FILTER_MENUS });
		dispatch({ type: SORT_MENU });
	}, [state.menus, state.filters, state.sort]);
	useEffect(() => {
		dispatch({ type: UPDATE_MIN_MAX_PRICES });
	}, [state.menus]);

	return (
		<products_context.Provider value={{ ...state, ...Actions }}>
			{children}
		</products_context.Provider>
	);
};

export const useProductsContext = () => {
	return useContext(products_context);
};
