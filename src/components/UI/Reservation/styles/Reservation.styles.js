import styled from "styled-components";
import { devices } from "../../../../utils/breakpoints";

export const Wrapper = styled.div`
	width: 100vw;
	margin: 0 calc(-50vw + 50%);
	/* makeup */
	background: ${(props) => props.theme["reservation"]};

	/* elements inside */
	.Reservation_content--wrapper {
		/* layout */
		display: flex;
		flex-direction: column;
		gap: 1.88em;
		margin: 3em auto;
		padding: 6.25em 2.25em;

		/* media queries */
		@media screen and (${devices["md"]}) {
			max-width: calc(100% - 8em);
		}
		@media screen and (${devices["2xl"]}) {
			max-width: calc(100% - 40em);
			padding: 14.38em 1.25em;
		}
		/* elements inside */
		h2 {
			font-size: 3em;
			@media screen and (${devices["2xl"]}) {
				font-size: 4.4em;
			}
		}
		h2 > span.cursive {
			font-size: 100%;
			line-height: 75%;
			@media screen and (${devices["2xl"]}) {
				line-height: 10%;
			}
		}

		.header {
			/* layout */
			max-width: 40ch;
			margin: 0 auto;
			display: flex;
			flex-direction: column;
			gap: 1.125em;
			/* media queries */
			@media screen and (${devices["2xl"]}) {
				gap: 0;
			}
		}
		.content {
			display: flex;
			flex-direction: column;
			gap: 1.88em;
			align-items: center;
			p {
				text-align: center;
			}
		}
	}
`;
