import { useEffect } from "react";
import InputRange from "../../components/Form/InputRange";
import Select from "../../components/Form/Select";
import FoodFilterMenu from "../../components/UI/Food Filter/FoodFilterMenu";
import Hr from "../../components/UI/Hr";
import MenuCard__GridView from "../../components/UI/MenuCard/MenuCard__GridView";
import MenuShowcase from "../../components/UI/MenuShowcase/MenuShowcase";
import Title from "../../components/UI/Title";
import { title } from "../../constant/en-us/foodmenu_page.constants";
import { Main } from "./styles/MenuPage.styles";
import MenuCard__ListView from "../../components/UI/MenuCard/MenuCard__ListView";
import Footer from "../../components/UI/Footer/Footer";
import { useProductsContext } from "../../store/contexts/products_context";
import { TfiLayoutGrid2Alt } from "react-icons/tfi";
import { PiListBold } from "react-icons/pi";

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
	const { filteredMenu, grid_view } = useProductsContext();

	return (
		<div className="menusSection">
			<MenuShowcase>
				{grid_view ? (
					<>
						{filteredMenu.map((menu) => (
							<MenuCard__GridView key={menu.id} menu={menu} />
						))}
					</>
				) : (
					<>
						{filteredMenu.map((menu) => (
							<ListView__MenuCard key={menu.id} menu={menu} />
						))}
					</>
				)}
			</MenuShowcase>
		</div>
	);
};

const ListView__MenuCard = ({ menu }) => {
	return (
		<div className="listView--wrapper">
			<MenuCard__ListView menu={menu} />
		</div>
	);
};

const ViewChanger = () => {
	const { update_gridView, update_listView } = useProductsContext();
	return (
		<div className="viewChanger--wrapper">
			<div className="view--icon" onClick={update_gridView}>
				<TfiLayoutGrid2Alt />
			</div>
			<div className="view--icon" onClick={update_listView}>
				<PiListBold />
			</div>
		</div>
	);
};

const PriceFilter = () => {
	const {
		update_filters,
		filters: { price, min_price, max_price },
	} = useProductsContext();
	return (
		<div className="price_filter--wrapper">
			<InputRange
				name="price"
				min={min_price}
				max={max_price}
				value={price}
				onChange={update_filters}
			/>
		</div>
	);
};

const Sorter = () => {
	const { sort, update_sort } = useProductsContext();
	const options = [
		{ label: "Price ( Lowest - Highest )", value: "price-low" },
		{ label: "Price ( Highest - Lowest )", value: "price-high" },
		{ label: "Alphabetically (A - Z)", value: "a-z" },
		{ label: "Alphabetically (Z - A)", value: "z-a" },
	];
	return (
		<div className="select--wrapper">
			<Select
				options={options}
				name="sort"
				value={sort}
				onChange={update_sort}
			/>
		</div>
	);
};

export default MenuPage;
