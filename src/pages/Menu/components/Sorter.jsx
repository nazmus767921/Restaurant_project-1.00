import Select from "../../../components/Form/Select";
import { useProductsContext } from "../../../store/contexts/products_context";

const Sorter = () => {
	const { sort, update_sort } = useProductsContext();
	const options = [
		{ label: "Price ( Lowest - Highest )", value: "price-low" },
		{ label: "Price ( Highest - Lowest )", value: "price-high" },
		{ label: "Alphabetically (A - Z)", value: "name-a" },
		{ label: "Alphabetically (Z - A)", value: "name-z" },
	];
	return (
		<div>
			<Select
				options={options}
				name="sort"
				value={sort}
				onChange={update_sort}
			/>
		</div>
	);
};

export default Sorter;
