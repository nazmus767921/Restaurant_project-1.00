import styled from "styled-components";
import MenuCard__GridView from "../../../components/UI/MenuCard/MenuCard__GridView";
import MenuShowcase from "../../../components/UI/MenuShowcase/MenuShowcase";
import { useProductsContext } from "../../../store/contexts/products_context";
import ListView__MenuCard from "./ListView__MenuCard";
import Pagination from "../../../components/Pagination";
import { usePaginationContext } from "../../../store/contexts/pagination_context";

const MenusSection = () => {
	const { grid_view } = useProductsContext();
	const { displayedData, totalPages } = usePaginationContext();

	const whatHeightShouldbe = () => {
		if (totalPages > 1 && displayedData.length > 3) {
			return { minHeight: "88em" };
		} else if (totalPages > 1 && displayedData.length <= 3) {
			return { minHeight: "44em" };
		}
		return { minHeight: "fit-content" };
	};

	return (
		<Wrapper>
			<MenuShowcase style={whatHeightShouldbe()}>
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
			<div className="pagination--wrapper">
				<Pagination />
			</div>
		</Wrapper>
	);
};

const Wrapper = styled.div`
	margin-top: 2.5em;
	.pagination--wrapper {
		display: flex;
		justify-content: center;
		align-items: center;
		margin-top: 1.25em;
	}
`;

export default MenusSection;
