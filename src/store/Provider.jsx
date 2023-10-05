import { PaginationContextProvider } from "./contexts/pagination_context";
import { Products_contextProvider } from "./contexts/products_context";

const GlobalContextProvider = ({ children }) => {
	return (
		<Products_contextProvider>
			<PaginationContextProvider>{children}</PaginationContextProvider>
		</Products_contextProvider>
	);
};

export default GlobalContextProvider;
