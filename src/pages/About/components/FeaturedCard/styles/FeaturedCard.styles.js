import styled from "styled-components";
import { colors } from "../../../../../utils/colors";

export const Card = styled.div`
	/* layout */
	width: 100%;
	display: flex;
	flex-direction: ${(props) => (props.$rev ? "row-reverse" : "row")};
	gap: 1.75em;
	padding: 1.25em;

	/* elements inside */
	.image {
		width: 30%;
		aspect-ratio: 1/1;
		flex-shrink: 0;
		background-position: center;
		background-repeat: no-repeat;
		background-size: cover;
		overflow: hidden;
		/* makeup */
		border-radius: 999px;
		box-shadow: ${(props) =>
			!props.$rev
				? "2px 0px 4px 0px rgba(0, 0, 0, 0.59), 8px 0px 8px 0px rgba(0, 0, 0, 0.51), 17px 0px 10px 0px rgba(0, 0, 0, 0.3), 30px 0px 12px 0px rgba(0, 0, 0, 0.09), 47px 0px 13px 0px rgba(0, 0, 0, 0.1);"
				: "-2px 0px 4px 0px rgba(0, 0, 0, 0.59), -8px 0px 8px 0px rgba(0, 0, 0, 0.51), -17px 0px 10px 0px rgba(0, 0, 0, 0.30), -30px 0px 12px 0px rgba(0, 0, 0, 0.09), -47px 0px 13px 0px rgba(0, 0, 0, 0.01);"};
	}
	.content {
		display: flex;
		flex-direction: column;
		align-items: ${(props) => (props.$rev ? "flex-end" : "flex-start")};
		/* typo */
		text-align: ${(props) => (props.$rev ? "right" : "left")};
		/* elements inside */
		h2 {
			color: ${(props) => props.$color || colors["text-white"]};
		}
		p {
			max-width: 20ch;
		}
	}
`;
