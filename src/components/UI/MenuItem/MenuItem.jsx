import styled from "styled-components";
import { Shahi_kebab } from "../../../assets/images";
import { colors } from "../../../utils/colors";

const MenuItem = () => {
	return (
		<Wrapper>
			<div className="item_image">
				<img src={Shahi_kebab} alt="ItemName" />
			</div>
			<h3>Shahi Kebab</h3>
			<p className="small description">
				Best meat you can get between your teeths.
			</p>
			<h3 className="item_price">$ 29.99</h3>
		</Wrapper>
	);
};

const Wrapper = styled.div`
	display: flex;
	padding: 0.625rem 0.65rem;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	text-align: center;
	gap: 0.625rem;
	width: 100%;

	.item_image {
		display: flex;
		justify-content: center;
		align-items: center;

		padding-inline: 0.65em;
		margin-block-end: 0.65em;

		overflow: hidden;
	}

	.description {
		opacity: 0.7;
	}

	.item_price {
		color: ${colors.brand};
	}
`;

export default MenuItem;
