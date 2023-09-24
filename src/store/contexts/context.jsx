import { createContext, useContext, useReducer } from "react";
import { ReducerName as reducer } from "../reducers/reducer";

const contextName = createContext(null);

const initialState = {
	name: "Res2Rant",
};

export const ContextProvider = ({ children }) => {
	const [state, dispatch] = useReducer(reducer, initialState);
	return (
		<contextName.Provider value={{ ...state }}>{children}</contextName.Provider>
	);
};

export const useContextName = () => {
	return useContext(contextName);
};
