import { createContext, useContext, useEffect, useReducer } from "react";
import { products_reducer as reducer } from "../reducers/products_reducer";
import {
	SELECT_CATEGORY,
	SET_FILTERED_MENU_DATA,
	SET_MENU_DATA,
} from "../../actions";
import Data from "../../data.json";

const products_context = createContext(null);

const initialState = {
	menus: [],
	filteredMenu: [],
	categories: ["breakfast", "lunch", "dinner", "deserts"],
	selectedCategory: "all",
};

export const Products_contextProvider = ({ children }) => {
	const [state, dispatch] = useReducer(reducer, initialState);

	// actions
	const selectCategory = (textContent) => {
		dispatch({ type: SELECT_CATEGORY, payload: { textContent } });
	};

	const set_filteredMenus = () => {
		dispatch({ type: SET_FILTERED_MENU_DATA });
	};

	//all actions
	const Actions = {
		selectCategory,
		set_filteredMenus,
	};

	// data fetching
	const fetchMenuItems = () => {
		dispatch({ type: SET_MENU_DATA, payload: { Data: Data.menuItems } });
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
