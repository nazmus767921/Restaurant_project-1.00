import React from "react";
import styled from "styled-components";
import InputRange from "../../../components/Form/InputRange";
import formatPrice from "../../../utils/helpers/formatPrice";
import { devices } from "../../../utils/breakpoints";

const PriceFilter = React.memo(
	({ price, min_price, max_price, update_filters }) => {
		return (
			<Wrapper className="price_filter--wrapper">
				<label htmlFor="price">price</label>
				<InputRange
					name="price"
					min={min_price}
					max={max_price}
					step={100}
					value={price}
					onChange={update_filters}
				/>
				<h2 className="price">{formatPrice(price)}</h2>
			</Wrapper>
		);
	},
	(prevProps, nextProps) => {
		return prevProps.price === nextProps.price;
	}
);

PriceFilter.displayName = "PriceFilter";

const Wrapper = styled.div`
	width: 100%;
	display: flex;
	padding: 0.65em 1.25em;
	gap: 1.25em;
	/* elements inside */
	label {
		font-size: 1em;
		text-transform: capitalize;
	}
	.price {
		text-align: right;
		min-width: calc(100% / 10 + 12vw);
		@media screen and (${devices.xl}) {
			min-width: calc(100% / 10 + 2vw);
		}
	}
`;

export default PriceFilter;
