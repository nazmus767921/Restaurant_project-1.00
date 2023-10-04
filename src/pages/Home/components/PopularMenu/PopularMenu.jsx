import Title from "../../../../components/UI/Title";
import { menu } from "../../../../constant/en-us/home_page.constants";
import { styled } from "styled-components";
import MenuShowcase from "../../../../components/UI/MenuShowcase/MenuShowcase";
import TextBTN from "../../../../components/UI/TextBTN";
import { Link } from "react-router-dom";
import { paths } from "../../../../Root.paths";
import MenuCard__GridView from "../../../../components/UI/MenuCard/MenuCard__GridView";
import { useProductsContext } from "../../../../store/contexts/products_context";

const PopularMenu = () => {
	// taking only the featured menu items for homepage
	const featuredMenus = useProductsContext().menus.filter(
		(menu) => menu.featured === true
	);
	return (
		<Wrapper>
			<Title deco>{menu.title}</Title>
			<MenuShowcase>
				{featuredMenus.map((menu) => {
					return <MenuCard__GridView key={menu.id} menu={menu} />;
				})}
			</MenuShowcase>
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
	.Show_full_menu--BTN {
		margin-inline: auto;
	}
`;

export default PopularMenu;
