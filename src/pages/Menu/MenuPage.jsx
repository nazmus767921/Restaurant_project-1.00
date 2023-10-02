import InputRange from "../../components/Form/InputRange";
import Select from "../../components/Form/Select";
import FoodFilterMenu from "../../components/UI/Food Filter/FoodFilterMenu";
import Hr from "../../components/UI/Hr";
import MenuItem from "../../components/UI/MenuItem/MenuItem";
import Title from "../../components/UI/Title";
import { title, view } from "../../constant/en-us/foodmenu_page.constants";
import { Main } from "./styles/MenuPage.styles";

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
		</Main>
	);
};

const MenusSection = () => {
	return (
		<div className="menusSection">
			<MenuItem />
		</div>
	)
}

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
