import styled from "styled-components";
import MenuCard__GridView from "../../../components/UI/MenuCard/MenuCard__GridView";
import MenuShowcase from "../../../components/UI/MenuShowcase/MenuShowcase";
import { useProductsContext } from "../../../store/contexts/products_context";
import ListView__MenuCard from "./ListView__MenuCard";
import Pagination from "../../../components/Pagination";
import { usePaginationContext } from "../../../store/contexts/pagination_context";
import { useMemo } from "react";
import { lightTheme } from "../../../theme";

const MenusSection = () => {
	const { grid_view, isFiltering } = useProductsContext();
	const { displayedData, totalPages } = usePaginationContext();

	const whatHeightShouldbe = useMemo(() => {
		if (totalPages > 1 && displayedData.length > 3) {
			return "fullHeight";
		} else if (totalPages > 1 && displayedData.length <= 3) {
			return "halfHeight";
		}
		return "autoHeight";
	}, [totalPages, displayedData]);

	if (isFiltering) {
		const loading_style = {
			minHeight: "50vh",
			width: "100%",
			textAlign: "center",
			display: "flex",
			justifyContent: "center",
			alignItems: "center",
		};
		return (
			<h1 className="cursive" style={loading_style}>
				Loading<span style={{ color: lightTheme.brand }}>...</span>
			</h1>
		);
	}
	return (
		<Wrapper>
			<MenuShowcase className={whatHeightShouldbe}>
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
