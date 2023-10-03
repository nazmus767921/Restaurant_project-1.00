import { useState } from "react";
import InputRange from "../../components/Form/InputRange";
import Select from "../../components/Form/Select";
import FoodFilterMenu from "../../components/UI/Food Filter/FoodFilterMenu";
import Hr from "../../components/UI/Hr";
import MenuCard__GridView from "../../components/UI/MenuCard/MenuCard__GridView";
import MenuShowcase from "../../components/UI/MenuShowcase/MenuShowcase";
import Title from "../../components/UI/Title";
import { title, view } from "../../constant/en-us/foodmenu_page.constants";
import { Main } from "./styles/MenuPage.styles";
import MenuCard__ListView from "../../components/UI/MenuCard/MenuCard__ListView";
import Footer from "../../components/UI/Footer/Footer";

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

const MenusSection = () => {
	const [isGridView, setIsGridView] = useState(false);

	return (
		<div className="menusSection">
			<MenuShowcase>
				{isGridView ? (
					<>
						<MenuCard__GridView />
						<MenuCard__GridView />
						<MenuCard__GridView />
						<MenuCard__GridView />
						<MenuCard__GridView />
						<MenuCard__GridView />
					</>
				) : (
					<>
						<ListView__MenuCard />
						<ListView__MenuCard />
						<ListView__MenuCard />
						<ListView__MenuCard />
						<ListView__MenuCard />
						<ListView__MenuCard />
					</>
				)}
			</MenuShowcase>
		</div>
	);
};

const ListView__MenuCard = () => {
	return (
		<div className="listView--wrapper">
			<MenuCard__ListView />
		</div>
	);
};

const ViewChanger = () => {
	return (
		<div className="viewChanger--wrapper">
			{view.map((view) => (
				<div key={view.icon} className="view--icon">
					{view.icon}
				</div>
			))}
		</div>
	);
};

const PriceFilter = () => {
	return (
		<div className="price_filter--wrapper">
			<InputRange name="price" />
		</div>
	);
};

const Sorter = () => {
	const options = [
		{ label: "Price ( Lowest - Highest )", value: "lowest" },
		{ label: "Price ( Highest - Lowest )", value: "highest" },
		{ label: "Alphabetically (A - Z)", value: "a" },
		{ label: "Alphabetically (Z - A)", value: "z" },
	];
	return (
		<div className="select--wrapper">
			<Select options={options} />
		</div>
	);
};

export default MenuPage;
