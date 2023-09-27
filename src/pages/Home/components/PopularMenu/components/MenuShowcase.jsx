import styled from "styled-components";
// import MenuItem from "../../../../../components/UI/MenuItem/MenuItem";
import { devices } from "../../../../../utils/breakpoints";
import { Suspense, lazy } from "react";
import MenuItemFallback from "../../../../../components/UI/MenuItem/Fallback/MenuItemFallback";
const MenuItem = lazy(() =>
	import("../../../../../components/UI/MenuItem/MenuItem")
);

const MenuCard = () => {
	return (
		<Suspense
			fallback={
				<div className="menu_item--wrapper">
					<MenuItemFallback />
				</div>
			}
		>
			<div className="menu_item--wrapper">
				<MenuItem />
			</div>
		</Suspense>
	);
};
const MenuShowcase = () => {
	return (
		<Wrapper>
			<MenuCard />
			<MenuCard />
			<MenuCard />
			<MenuCard />
			<MenuCard />
		</Wrapper>
	);
};

const Wrapper = styled.div`
	display: flex;
	width: 100%;
	flex-wrap: wrap;
	justify-content: center;
	row-gap: 1em;
	gap: 1em;

	.menu_item--wrapper {
		width: 47%;

		@media screen and (${devices.md}) {
			width: 30%;
		}
		@media screen and (${devices.xl}) {
			width: 18%;
		}
	}
`;

export default MenuShowcase;
