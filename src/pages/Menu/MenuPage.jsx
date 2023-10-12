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
import { useProductsContext } from "../../store/contexts/products_context";
import React, { useMemo } from "react";

const Header = React.memo(
	() => {
		return (
			<div className="header">
				<Title>{title}</Title>
				<Hr />
			</div>
		);
	},
	() => true
);

Header.displayName = "Header";

const MenuPage = () => {
	const {
		categories,
		update_filters,
		filters: { category, price, min_price, max_price },
	} = useProductsContext();

	const MemorizedCategories = useMemo(() => categories, [categories]);

	return (
		<Main className="page-container">
			<Header />
			<FoodFilterMenu
				update_filters={update_filters}
				category={category}
				categories={MemorizedCategories}
			/>
			<PriceFilter
				update_filters={update_filters}
				price={price}
				min_price={min_price}
				max_price={max_price}
			/>
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
