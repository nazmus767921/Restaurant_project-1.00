import styled from "styled-components";
import { devices } from "../../../utils/breakpoints";
import formatPrice from "../../../utils/helpers/formatPrice";
import React from "react";

const MenuCard__GridView = React.memo(({ menu }) => {
	return (
		<Wrapper>
			<MenuItem menu={menu} />
		</Wrapper>
	);
});

MenuCard__GridView.displayName = "MenuCard__GridView";

const MenuItem = ({ menu }) => {
	const { description, name, price, image } = menu;
	return (
		<div className="menuItem--wrapper">
			<div className="item_image">
				<img loading="lazy" src={`./${image}`} alt={name} />
			</div>
			<h3>{name}</h3>
			<p className="small description">{description}</p>
			<h3 className="item_price">{formatPrice(price)}</h3>
		</div>
	);
};

const Wrapper = styled.div`
	width: 47%;

	@media screen and (${devices.md}) {
		width: 30%;
	}
	@media screen and (${devices.xl}) {
		width: 18%;
	}

	.menuItem--wrapper {
		/* layout */
		width: 100%;
		padding: 0.625rem 0.65rem;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		gap: 0.625rem;
		border-radius: 0.625rem;
		/* typo */
		text-align: center;

		/* elements inside */
		h3 {
			line-height: 1.3;
			min-height: 4ch;
			display: flex;
			align-items: center;
		}
		.item_image {
			/* layout */
			display: flex;
			justify-content: center;
			align-items: center;
			padding-inline: 0.65em;
			margin-block-end: 0.65em;
			overflow: hidden;
			filter: drop-shadow(1px 1px 2px rgba(0, 0, 0, 0.2))
				drop-shadow(3px 3px 4px rgba(0, 0, 0, 0.17))
				drop-shadow(6px 7px 5px rgba(0, 0, 0, 0.1))
				drop-shadow(11px 12px 6px rgba(0, 0, 0, 0.03))
				drop-shadow(17px 18px 7px rgba(0, 0, 0, 0));
		}
		.description {
			opacity: 0.7;
		}
		.item_price {
			color: ${(props) => props.theme["brand"]};
		}
	}
`;

export default MenuCard__GridView;
