import styled from "styled-components";
import formatPrice from "../../../utils/helpers/formatPrice";

const MenuCard__ListView = ({ menu }) => {
	const { name, description, price, image } = menu;
	return (
		<Card>
			<div className="item_image">
				<img loading="lazy" src={`./${image}`} alt={name} />
			</div>
			<div className="content--wrapper">
				<h3>{name}</h3>
				<p className="small description">{description}</p>
				<h3 className="item_price">{formatPrice(price)}</h3>
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
		filter: drop-shadow(1px 1px 2px rgba(0, 0, 0, 0.2))
			drop-shadow(3px 3px 4px rgba(0, 0, 0, 0.17))
			drop-shadow(6px 7px 5px rgba(0, 0, 0, 0.1))
			drop-shadow(11px 12px 6px rgba(0, 0, 0, 0.03))
			drop-shadow(17px 18px 7px rgba(0, 0, 0, 0));
	}
	.content--wrapper {
		display: flex;
		flex-direction: column;
		align-items: flex-start;
		gap: 0.5em;
		flex: 1 0 0;
		padding: 0.5em 1.25em 0 0;
		/* elements inside */
		.item_price {
			font-size: 1em;
			color: ${(props) => props.theme["brand"]};
			align-self: flex-end;
		}
	}
`;

export default MenuCard__ListView;
