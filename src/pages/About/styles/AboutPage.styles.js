import styled from "styled-components";
import { devices } from "../../../utils/breakpoints";

export const Main = styled.main`
	/* elements inside */
	.hero_wrapper {
		position: relative;
		max-width: 100vw;
		/* layout */
		min-height: 100vh;
		min-height: 100dvh;
		display: flex;
		flex-direction: column;
		gap: 1.825em;
		justify-content: center;
		align-items: center;
		@media screen and (${devices.sm}) {
			min-height: fit-content;
			margin-top: 15em;
			margin-bottom: 3.44em;
		}
	}
	.header {
		display: flex;
		flex-direction: column;
		gap: 0.625em;
		/* elements inside */
		position: relative;
		z-index: 100;
		h1 {
			font-size: 3em;
			line-height: 4.325rem;
		}
	}
	.featured_section {
		/* layout */
		width: 100%;
		display: flex;
		flex-direction: column;
		gap: 1.25em;
		margin: 0 auto;
		/* media queries */
		@media screen and (${devices.sm}) {
			width: 70%;
		}
		@media screen and (${devices.md}) {
			flex-direction: row;
			width: 100%;
			flex-wrap: wrap;
			justify-content: center;
			gap: 3.25em;
		}
		@media screen and (${devices["2xl"]}) {
			margin-bottom: 10em;
		}
	}
`;
