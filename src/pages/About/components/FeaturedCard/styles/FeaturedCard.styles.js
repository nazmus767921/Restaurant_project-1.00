import styled from "styled-components";

export const Card = styled.div`
	/* layout */
	width: 100%;
	display: flex;
	flex-direction: ${(props) => (props.$rev ? "row-reverse" : "row")};
	gap: 1.25em;
	padding: 1.25em;
	border: 1px solid;

	/* elements inside */
	.image {
		width: 30%;
		aspect-ratio: 1;
		border: 1px solid;
		flex-shrink: 0;
	}
	.content {
		text-align: ${(props) => (props.$rev ? "right" : "left")};;
	}
`;
