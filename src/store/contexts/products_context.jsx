import { createContext, useContext, useReducer } from "react";
import { products_reducer as reducer } from "../reducers/products_reducer";
import { SELECT_CATEGORY } from "../../actions";

const products_context = createContext(null);

const initialState = {
	menus: {},
	filteredMenu: {},
	categories: ["breakfast", "lunch", "dinner", "deserts"],
	selectedCategory: "all",
};

export const Products_contextProvider = ({ children }) => {
	const [state, dispatch] = useReducer(reducer, initialState);

	// actions

	const selectCategory = (textContent) => {
		dispatch({ type: SELECT_CATEGORY, payload: { textContent } });
	};

	//all actions
	const Actions = {
		selectCategory,
	};

	return (
		<products_context.Provider value={{ ...state, ...Actions }}>
			{children}
		</products_context.Provider>
	);
};

export const useProductsContext = () => {
	return useContext(products_context);
};
