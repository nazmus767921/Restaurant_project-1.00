import { ThemeProvider } from "styled-components";
import { darkTheme, lightTheme } from "../theme";
import { PaginationContextProvider } from "./contexts/pagination_context";
import { Products_contextProvider } from "./contexts/products_context";
import { useThemeContext } from "./contexts/ThemeContext";

const GlobalContextProvider = ({ children }) => {
	const { theme } = useThemeContext();
	return (
		<ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
			<Products_contextProvider>
				<PaginationContextProvider>{children}</PaginationContextProvider>
			</Products_contextProvider>
		</ThemeProvider>
	);
};

export default GlobalContextProvider;
