import React from "react";
import ReactDOM from "react-dom/client";
import Root from "./Root.jsx";
import "./index.css";
import GlobalContextProvider from "./store/Provider.jsx";
import { GlobalStyles } from "./index.styles.js";
import { ThemeContext_provider } from "./store/contexts/ThemeContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
	<React.StrictMode>
		<ThemeContext_provider>
			<GlobalContextProvider>
				<GlobalStyles />
				<Root />
			</GlobalContextProvider>
		</ThemeContext_provider>
	</React.StrictMode>
);
