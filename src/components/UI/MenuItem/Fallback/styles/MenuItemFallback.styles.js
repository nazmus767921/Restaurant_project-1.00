import styled from "styled-components";
import { colors } from "../../../../../utils/colors";

export const Wrapper = styled.div`
	width: 100%;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	gap: 0.625rem;
	padding: 0.625rem 0.65rem;
	border-radius: 0.625rem;
	/* makeup */
	background-color: ${colors["bg-primary-dark-deep"]};

	/* element inside */

	.item_image {
		/* layout */
		width: 100%;
		aspect-ratio: 1;
		border-radius: 0.625em;
		/* makeup */
		background-color: ${colors["bg-primary-dark"]};
	}
	.title_placeholder {
		width: 100%;
		aspect-ratio: 15/1;
		border-radius: 0.625em;
		background-color: ${colors["bg-primary-dark"]};
	}
	.title_placeholder2 {
		width: 80%;
		aspect-ratio: 15/1;
		border-radius: 0.625em;
		background-color: ${colors["bg-primary-dark"]};
	}
	.description_placeholder {
		margin-top: 0.625em;
		width: 80%;
		aspect-ratio: 20/1;
		border-radius: 0.625em;
		background-color: ${colors["bg-primary-dark"]};
	}
	.Price_placeholder_container {
		display: flex;
		gap: 0.625em;
		width: 30%;
		&::before {
			font-size: 1.25em;
			font-family: "Libre FrankLin", sans-serif;
			font-weight: 700;
			content: "$";
			color: ${colors["bg-primary-dark"]};
		}
	}
	.Price_placeholder {
		width: 100%;
		aspect-ratio: 1.5/1;
		border-radius: 0.25em;
		background-color: ${colors["bg-primary-dark"]};
	}
`;
