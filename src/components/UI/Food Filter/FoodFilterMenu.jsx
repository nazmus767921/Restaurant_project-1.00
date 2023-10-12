import styled from "styled-components";
import { devices } from "../../../utils/breakpoints";
import React from "react";

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

const FoodFilterMenu = React.memo(
	({ categories, update_filters, category }) => {
		return (
			<Wrapper>
				<div className="filter_menu">
					<MenuBTN onClick={update_filters} selectedCategory={category}>
						All
					</MenuBTN>
					{categories.map((c, index) => {
						return (
							<MenuBTN key={index} onClick={update_filters} selectedCategory={category}>
								{c}
							</MenuBTN>
						);
					})}
				</div>
			</Wrapper>
		);
	},
	(prevProps, nextProps) => {
		return (
			prevProps.category === nextProps.category && prevProps.categories === nextProps.categories
		);
	}
);

FoodFilterMenu.displayName = "FoodFilterMenu";

const Menu_BTN = styled.button`
	text-transform: capitalize;
	padding: 0.5em 1.25em;
	display: flex;
	justify-content: center;
	align-items: center;
	/* makeup */
	border-radius: 999px;
	color: ${(props) => props.theme["text"]};
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
			background-color: ${(props) => props.theme["brand"]};
		}

		@media screen and (${devices.md}) {
			max-width: fit-content;
			gap: 0.625em;
		}

		overflow: hidden;

		border-radius: 999px;
		background: ${(props) => props.theme["bg-primary"]};
		filter: drop-shadow(0px 1px 2px rgba(255, 107, 0, 0.05))
			drop-shadow(0px 4px 4px rgba(255, 107, 0, 0.04))
			drop-shadow(0px 8px 5px rgba(255, 107, 0, 0.03))
			drop-shadow(0px 14px 6px rgba(255, 107, 0, 0.01))
			drop-shadow(0px -1px 2px rgba(255, 255, 255, 0.03))
			drop-shadow(0px -4px 4px rgba(255, 107, 0, 0.02))
			drop-shadow(0px -8px 5px rgba(255, 107, 0, 0.01));
	}

	.active {
		background-color: ${(props) => props.theme["brand"]};
		color: ${(props) => props.theme["bg-primary"]};
	}
`;

export default FoodFilterMenu;
