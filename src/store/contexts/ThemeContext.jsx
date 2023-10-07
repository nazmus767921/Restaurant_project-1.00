import { createContext, useContext, useState } from "react";

const theme_context = createContext(null);

export const ThemeContext_provider = ({ children }) => {
	const [theme, setTheme] = useState("dark");

	const toggleTheme = () => {
		theme === "light" ? setTheme("dark") : setTheme("light");
	};

	return (
		<theme_context.Provider value={{ toggleTheme, theme }}>
			{children}
		</theme_context.Provider>
	);
};

export const useThemeContext = () => {
	return useContext(theme_context);
};
