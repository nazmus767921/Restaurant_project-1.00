import styled from "styled-components";
import { colors } from "../../../utils/colors";
import { devices } from "../../../utils/breakpoints";

const MenuBTN = ({ children }) => {
	return <Menu_BTN>{children}</Menu_BTN>;
};

const FoodFilterMenu = () => {
	return (
		<Wrapper>
			<div className="filter_menu">
				<MenuBTN>all</MenuBTN>
				<MenuBTN>breakfast</MenuBTN>
				<MenuBTN>lunch</MenuBTN>
				<MenuBTN>dinner</MenuBTN>
				<MenuBTN>deserts</MenuBTN>
			</div>
		</Wrapper>
	);
};

const Menu_BTN = styled.button`
	font-size: 0.75em;
	font-weight: 600;
	text-transform: capitalize;
	padding: 0.5em 1.25em;
	display: flex;
	justify-content: center;
	align-items: center;
	border-radius: 999px;

	@media screen and (${devices.md}) {
		font-size: .9em;
	}
`;

const Wrapper = styled.div`
	display: flex;
	width: 100%;
	justify-content: center;
	align-items: center;

	.filter_menu {
		display: flex;
		align-items: center;
		justify-content: space-between;
		width: 100%;

		@media screen and (${devices.md}) {
			max-width: fit-content;
		}

		overflow: hidden;

		border-radius: 999px;
		background: ${colors["bg-primary-dark"]};
		filter: drop-shadow(0px 1px 2px rgba(255, 107, 0, 0.05))
			drop-shadow(0px 4px 4px rgba(255, 107, 0, 0.04))
			drop-shadow(0px 8px 5px rgba(255, 107, 0, 0.03))
			drop-shadow(0px 14px 6px rgba(255, 107, 0, 0.01))
			drop-shadow(0px -1px 2px rgba(255, 255, 255, 0.03))
			drop-shadow(0px -4px 4px rgba(255, 107, 0, 0.02))
			drop-shadow(0px -8px 5px rgba(255, 107, 0, 0.01));
	}

	.active {
		background-color: ${colors.brand};
		color: ${colors["bg-primary-dark"]};
	}
`;

export default FoodFilterMenu;
