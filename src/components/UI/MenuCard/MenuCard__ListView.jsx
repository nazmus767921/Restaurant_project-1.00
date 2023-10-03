import styled from "styled-components";
import { Shahi_kebab } from "../../../assets/images";
import { colors } from "../../../utils/colors";

const MenuCard__ListView = () => {
	return (
		<Card>
			<div className="item_image">
				<img loading="lazy" src={Shahi_kebab} alt="ItemName" />
			</div>
			<div className="content--wrapper">
				<h3>Shahi Kebab</h3>
				<p className="small description">
					Best meat you can get between your teeth.
				</p>
				<h3 className="item_price">$ 29.99</h3>
			</div>
		</Card>
	);
};

const Card = styled.div`
	display: flex;
	flex-direction: row;
	gap: 1.25em;

	/* elements inside */
	.item_image {
		/* layout */
		display: flex;
		justify-content: center;
		align-items: center;
		padding-inline: 0.65em;
		margin-block-end: 0.65em;
		overflow: hidden;
		/* width: 5em; */
		flex: 0 0 7em;
	}
	.content--wrapper {
		display: flex;
		flex-direction: column;
		align-items: flex-start;
		gap: 0.5em;
		flex: 1 0 0;
    padding: .5em 1.25em 0 0;
		/* elements inside */
		.item_price {
			font-size: 1em;
			color: ${colors.brand};
      align-self: flex-end;
		}
	}
`;

export default MenuCard__ListView;
