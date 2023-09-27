import styled from "styled-components";
import { devices } from "../../../../utils/breakpoints";

export const Wrapper = styled.div`
	width: 100vw;
	margin: 0 calc(-50vw + 50%);
	/* makeup */
	background: var(--Pitch_black, #000);
	box-shadow: 0px -8px 17px 0px rgba(0, 0, 0, 0.83),
		0px -30px 30px 0px rgba(0, 0, 0, 0.72),
		0px -68px 41px 0px rgba(0, 0, 0, 0.43),
		0px -121px 48px 0px rgba(0, 0, 0, 0.13),
		0px -188px 53px 0px rgba(0, 0, 0, 0.02),
		0px 8px 17px 0px rgba(0, 0, 0, 0.83), 0px 30px 30px 0px rgba(0, 0, 0, 0.72),
		0px 68px 41px 0px rgba(0, 0, 0, 0.43);

	/* elements inside */
	.Reservation_content--wrapper {
		/* layout */
		display: flex;
		flex-direction: column;
		gap: 1.88em;
		margin-block: 3em;
		padding: 6.25em 2.25em;

		/* media queries */
		@media screen and (${devices["2xl"]}) {
			max-width: 54.625em;
			margin: 0 auto;
			padding: 14.38em 1.25em;
		}
		/* elements inside */
		h2 {
			font-size: 3em;
			@media screen and (${devices["2xl"]}) {
				font-size: 7.5em;
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
