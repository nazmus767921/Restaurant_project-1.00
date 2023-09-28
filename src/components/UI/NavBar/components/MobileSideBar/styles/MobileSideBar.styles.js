import styled from "styled-components";
import { colors } from "../../../../../../utils/colors";

export const Main = styled.main`
	/* layout */
	margin-top: 0;
	display: flex;
	flex-direction: column;
	align-items: flex-start;
	flex-shrink: 0;
	width: 16.875rem;
	min-height: 120vh;
	min-height: 120dvh;
	/* height: 36.125rem; */
	padding: 1.25rem;
	gap: 0.625rem;
	/* position */
	position: fixed;
	top: 0;
	bottom: 0;
	right: 0;
	z-index: 99;

	/* makeup */
	background-color: ${colors["bg-primary-dark-deep"]};

	/* elements inside */

	button {
		/* all buttons */
		&:hover,
		:focus {
			opacity: 0.5;
		}
	}
	.links {
		display: flex;
		flex-direction: column;
		gap: 1.25em;

		/* elements inside */
		button {
			font-family: "Cabin Condensed", sans-serif;
			font-size: 1.5rem;
			font-style: normal;
			font-weight: 700;
			line-height: normal;
			text-transform: capitalize;

			span {
				font-size: 2rem;
			}
		}
	}
	.reservation--button {
		margin: 1.25em auto;
	}
	.icon {
		/* layout */
		width: 1.75em;
		aspect-ratio: 1;
		align-self: flex-end;
		margin-bottom: 3em;
		/* makeup */
		color: ${colors.brand};
	}
`;
