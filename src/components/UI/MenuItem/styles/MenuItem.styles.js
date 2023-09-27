import styled from "styled-components";
import { colors } from "../../../../utils/colors";

export const Wrapper = styled.div`
	/* layout */
	width: 100%;
	padding: 0.625rem 0.65rem;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	gap: 0.625rem;
	border-radius: 0.625rem;

	/* event */
	&:hover,
	:focus {
		/* makeup */
		box-shadow: 0px -5px 5px 0px rgba(0, 0, 0, 0.09);
	}
	/* typo */
	text-align: center;

	/* elements inside */
	.item_image {
		/* layout */
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