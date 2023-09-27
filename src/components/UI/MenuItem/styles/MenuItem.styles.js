import styled from "styled-components";
import { colors } from "../../../../utils/colors";

export const Wrapper = styled.div`
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
