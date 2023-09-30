import { createContext, useContext, useReducer } from "react";
import { ReducerName as reducer } from "../reducers/reducer";

const context_name = createContext(null);

const initialState = {
	name: "Res2Rant",
};

export const Context_providerName = ({ children }) => {
	const [state, dispatch] = useReducer(reducer, initialState);
	return (
		<context_name.Provider value={{ ...state }}>
			{children}
		</context_name.Provider>
	);
};

export const useContextName = () => {
	return useContext(context_name);
};
