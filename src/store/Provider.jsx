import { ContextProvider } from "./contexts/context";

const GlobalContextProvider = ({ children }) => {
	return <ContextProvider>{children}</ContextProvider>;
};

export default GlobalContextProvider;
