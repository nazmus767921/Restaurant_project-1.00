import { Suspense, lazy } from "react";
import MenuItemFallback from "../MenuItem/Fallback/MenuItemFallback";
import styled from "styled-components";
import { devices } from "../../../utils/breakpoints";
const MenuItem = lazy(() => import("../MenuItem/MenuItem"));

const MenuCard__GridView = () => {
	return (
		<Suspense
			fallback={
				<Wrapper>
					<MenuItemFallback />
				</Wrapper>
			}
		>
			<Wrapper>
				<MenuItem />
			</Wrapper>
		</Suspense>
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
`;

export default MenuCard__GridView;
