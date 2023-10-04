import styled from "styled-components";
import InputRange from "../../../components/Form/InputRange";
import { useProductsContext } from "../../../store/contexts/products_context";

const PriceFilter = () => {
	const {
		update_filters,
		filters: { price, min_price, max_price },
	} = useProductsContext();
	return (
		<Wrapper className="price_filter--wrapper">
			<InputRange
				name="price"
				min={min_price}
				max={max_price}
				value={price}
				onChange={update_filters}
			/>
		</Wrapper>
	);
};

const Wrapper = styled.div`
	width: 100%;
	display: flex;
	padding: 0.65em 1.25em;
`;

export default PriceFilter;
