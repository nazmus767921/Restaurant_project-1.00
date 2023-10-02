import FoodFilterMenu from "../../components/UI/Food Filter/FoodFilterMenu";
import Hr from "../../components/UI/Hr";
import Title from "../../components/UI/Title";
import { title } from "../../constant/en-us/foodmenu_page.constants";
import { Main } from "./styles/MenuPage.styles";

const MenuPage = () => {
	return (
		<Main className="page-container">
			<div className="header">
				<Title>{title}</Title>
				<Hr />
			</div>
			<FoodFilterMenu />
		</Main>
	);
};

export default MenuPage;
