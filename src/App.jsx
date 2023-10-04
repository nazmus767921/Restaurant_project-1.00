import { Outlet } from "react-router-dom";
import NavBar from "./components/UI/NavBar/NavBar";
import ScrollToTop from "./utils/helpers/ScrollToTop";

const App = () => {
	return (
		<>
			<ScrollToTop />
			<NavBar />
			<Outlet />
		</>
	);
};

export default App;
