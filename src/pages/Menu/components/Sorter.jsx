import { memo } from "react";
import Select from "../../../components/Form/Select";

const Sorter = memo(({ sort, update_sort }) => {
	const options = [
		{ label: "Price ( Lowest - Highest )", value: "price-low" },
		{ label: "Price ( Highest - Lowest )", value: "price-high" },
		{ label: "Alphabetically (A - Z)", value: "name-a" },
		{ label: "Alphabetically (Z - A)", value: "name-z" },
	];
	return (
		<div>
			<Select options={options} name="sort" value={sort} onChange={update_sort} />
		</div>
	);
});

Sorter.displayName = "Sorter";

export default Sorter;
