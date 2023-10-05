import styled from "styled-components";
import MenuCard__GridView from "../../../components/UI/MenuCard/MenuCard__GridView";
import MenuShowcase from "../../../components/UI/MenuShowcase/MenuShowcase";
import { useProductsContext } from "../../../store/contexts/products_context";
import ListView__MenuCard from "./ListView__MenuCard";
import Pagination from "../../../components/Pagination";
import { usePaginationContext } from "../../../store/contexts/pagination_context";

const MenusSection = () => {
	const { filteredMenu, grid_view } = useProductsContext();
	const {displayedData} = usePaginationContext();

	return (
		<Wrapper>
			<MenuShowcase>
				{grid_view ? (
					<>
						{displayedData.map((menu) => (
							<MenuCard__GridView key={menu.id} menu={menu} />
						))}
					</>
				) : (
					<>
						{displayedData.map((menu) => (
							<ListView__MenuCard key={menu.id} menu={menu} />
						))}
					</>
				)}
			</MenuShowcase>
			<Pagination />
		</Wrapper>
	);
};

const Wrapper = styled.div`
	margin-top: 2.5em;
`;

export default MenusSection;
