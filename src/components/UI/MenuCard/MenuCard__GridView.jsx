import { Suspense, lazy } from "react";
import MenuItemFallback from "../MenuItem/Fallback/MenuItemFallback";
import styled from "styled-components";
import { devices } from "../../../utils/breakpoints";
import { colors } from "../../../utils/colors";
import { Shahi_kebab } from "../../../assets/images";
import formatPrice from "../../../utils/helpers/formatPrice";
// const MenuItem = lazy(() => import("../MenuItem/MenuItem"));

const MenuCard__GridView = ({ menu }) => {
	return (
		<Suspense
			fallback={
				<Wrapper>
					<MenuItemFallback />
				</Wrapper>
			}
		>
			<Wrapper>
				<MenuItem menu={menu} />
			</Wrapper>
		</Suspense>
	);
};

const MenuItem = ({ menu }) => {
	const { description, name, price, image } = menu;
	return (
		<div className="menuItem--wrapper">
			<div className="item_image">
				<img loading="lazy" src={Shahi_kebab} alt="ItemName" />
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

		/* event */
		&:hover,
		:focus {
			/* makeup */
			box-shadow: 0px -5px 5px 0px rgba(0, 0, 0, 0.09);
		}
		/* typo */
		text-align: center;

		/* elements inside */
		.item_image {
			/* layout */
			display: flex;
			justify-content: center;
			align-items: center;
			padding-inline: 0.65em;
			margin-block-end: 0.65em;
			overflow: hidden;
		}
		.description {
			opacity: 0.7;
		}
		.item_price {
			color: ${colors.brand};
		}
	}
`;

export default MenuCard__GridView;
