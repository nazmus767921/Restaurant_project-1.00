import InputRange from "../../components/Form/InputRange";
import Select from "../../components/Form/Select";
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
			<PriceFilter />
			<Sorter />
		</Main>
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
	return <Select options={options} />;
};

export default MenuPage;
