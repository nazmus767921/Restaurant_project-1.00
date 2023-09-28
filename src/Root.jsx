import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App";
import HomePage from "./pages/Home/HomePage";
import Error from "./pages/Error/Error";
import { paths } from "./Root.paths";
import AboutPage from "./pages/About/AboutPage";
import ContactPage from "./pages/Contact/ContactPage";
import MenuPage from "./pages/Menu/MenuPage";
import MobileSideBar from "./components/UI/NavBar/components/MobileSideBar/MobileSideBar";

const router = createBrowserRouter([
	{
		path: "/",
		element: <App />,
		errorElement: <Error />,
		children: [
			{
				path: paths.home,
				element: <HomePage />,
			},
			{
				path: paths.about,
				element: <AboutPage />,
			},
			{
				path: paths.contact,
				element: <ContactPage />,
			},
			{
				path: paths.menu,
				element: <MenuPage />,
			},
			{
				path: "/sidebar",
				element: <MobileSideBar />,
			},
		],
	},
]);

function Root() {
	return <RouterProvider router={router} />;
}

export default Root;
