import FoodFilterMenu from "../../components/UI/Food Filter/FoodFilterMenu";
import Hr from "../../components/UI/Hr";
import Title from "../../components/UI/Title";
import { title } from "../../constant/en-us/foodmenu_page.constants";
import { Main } from "./styles/MenuPage.styles";
import Footer from "../../components/UI/Footer/Footer";
import MenusSection from "./components/MenusSection";
import ViewChanger from "./components/ViewChanger";
import PriceFilter from "./components/PriceFilter";
import Sorter from "./components/Sorter";

const MenuPage = () => {
	return (
		<Main className="page-container">
			<div className="header">
				<Title>{title}</Title>
				<Hr />
			</div>
			<FoodFilterMenu />
			<PriceFilter />
			<div className="filter_wrapper--bottom">
				<ViewChanger />
				<Sorter />
			</div>
			<MenusSection />
			<Footer />
		</Main>
	);
};

export default MenuPage;
