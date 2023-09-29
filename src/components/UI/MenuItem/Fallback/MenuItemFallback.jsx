import { Wrapper } from "../Fallback/styles/MenuItemFallback.styles";

const MenuItemFallback = () => {
	return (
		<Wrapper>
			<div className="item_image"></div>
			<div className="title_placeholder"></div>
			<div className="title_placeholder2"></div>
			<div className="description_placeholder"></div>
			<div className="Price_placeholder_container">
				<div className="Price_placeholder"></div>
			</div>
		</Wrapper>
	);
};

export default MenuItemFallback;
