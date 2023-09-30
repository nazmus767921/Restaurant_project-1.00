import { Products_contextProvider } from "./contexts/products_context";

const GlobalContextProvider = ({ children }) => {
	return <Products_contextProvider>{children}</Products_contextProvider>;
};

export default GlobalContextProvider;
