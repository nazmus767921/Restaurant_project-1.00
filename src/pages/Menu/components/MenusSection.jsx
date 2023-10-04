import styled from "styled-components";
import MenuCard__GridView from "../../../components/UI/MenuCard/MenuCard__GridView";
import MenuShowcase from "../../../components/UI/MenuShowcase/MenuShowcase";
import { useProductsContext } from "../../../store/contexts/products_context";
import ListView__MenuCard from "./ListView__MenuCard";

const MenusSection = () => {
	const { filteredMenu, grid_view } = useProductsContext();

	return (
		<Wrapper>
			<MenuShowcase>
				{grid_view ? (
					<>
						{filteredMenu.map((menu) => (
							<MenuCard__GridView key={menu.id} menu={menu} />
						))}
					</>
				) : (
					<>
						{filteredMenu.map((menu) => (
							<ListView__MenuCard key={menu.id} menu={menu} />
						))}
					</>
				)}
			</MenuShowcase>
		</Wrapper>
	);
};

const Wrapper = styled.div`
	margin-top: 2.5em;
`;

export default MenusSection;
