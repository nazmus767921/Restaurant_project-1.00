import React from "react";
import ReactDOM from "react-dom/client";
import Root from "./Root.jsx";
import "./index.css";
import GlobalContextProvider from "./store/Provider.jsx";
import { GlobalStyles } from "./index.styles.js";

ReactDOM.createRoot(document.getElementById("root")).render(
	<React.StrictMode>
		<GlobalContextProvider>
			<GlobalStyles />
			<Root />
		</GlobalContextProvider>
	</React.StrictMode>
);
