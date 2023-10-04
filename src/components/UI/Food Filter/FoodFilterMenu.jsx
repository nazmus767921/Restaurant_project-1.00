import styled from "styled-components";
import { colors } from "../../../utils/colors";
import { devices } from "../../../utils/breakpoints";
import { useProductsContext } from "../../../store/contexts/products_context";

const MenuBTN = ({ children, onClick, selectedCategory }) => {
	return (
		<Menu_BTN
			type="button"
			name="category"
			onClick={onClick}
			className={selectedCategory === children.toLowerCase() ? "active" : null}
		>
			{children}
		</Menu_BTN>
	);
};

const FoodFilterMenu = () => {
	const {
		categories,
		update_filters,
		filters: { category },
	} = useProductsContext();

	return (
		<Wrapper>
			<div className="filter_menu">
				<MenuBTN onClick={update_filters} selectedCategory={category}>
					All
				</MenuBTN>
				{categories.map((c) => {
					return (
						<MenuBTN
							key={crypto.randomUUID()}
							onClick={update_filters}
							selectedCategory={category}
						>
							{c}
						</MenuBTN>
					);
				})}
			</div>
		</Wrapper>
	);
};

const Menu_BTN = styled.button`
	text-transform: capitalize;
	padding: 0.5em 1.25em;
	display: flex;
	justify-content: center;
	align-items: center;
	/* makeup */
	border-radius: 999px;
	color: ${colors["text-white"]};
	/* typo */
	font-size: 0.75em;
	font-weight: 600;

	@media screen and (${devices.md}) {
		font-size: 0.825em;
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

		/* elements inside */
		.active {
			background-color: ${colors.brand};
		}

		@media screen and (${devices.md}) {
			max-width: fit-content;
			gap: 0.625em;
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
