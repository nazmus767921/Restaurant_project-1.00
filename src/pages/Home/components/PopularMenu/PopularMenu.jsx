import FoodFilterMenu from "../../../../components/UI/Food Filter/FoodFilterMenu";
import Title from "../../../../components/UI/Title";
import { menu } from "../../../../constant/en-us/home_page.constants";
import { styled } from "styled-components";
import MenuShowcase from "./components/MenuShowcase";
import { devices } from "../../../../utils/breakpoints";
import TextBTN from "../../../../components/UI/TextBTN";
import { Link } from "react-router-dom";
import { paths } from "../../../../Root.paths";

const PopularMenu = () => {
	return (
		<Wrapper>
			<Title deco>{menu.title}</Title>
			<div className="foodFilterMenu--wrapper">
				<FoodFilterMenu />
			</div>
			<MenuShowcase />
			<Link to={paths.menu}>
				<TextBTN className="Show_full_menu--BTN">{menu.btn}</TextBTN>
			</Link>
		</Wrapper>
	);
};

const Wrapper = styled.div`
	/* layout */
	display: flex;
	gap: 2.75em;
	flex-direction: column;
	padding-block-end: 6em;

	/* elements inside */
	.foodFilterMenu--wrapper {
		@media screen and (${devices.md}) {
			margin-block-end: 2em;
		}
	}

	.Show_full_menu--BTN {
		margin-inline: auto;
	}
`;

export default PopularMenu;
