import { createGlobalStyle } from "styled-components";
import { devices } from "./utils/breakpoints";
import { colors } from "./utils/colors";

export const GlobalStyles = createGlobalStyle`
	/* layout */
	overflow-x: hidden;

	a:-webkit-any-link {
		color: inherit; /* Use the default text color */
		cursor: auto; /* Remove pointer cursor */
		text-decoration: none; /* Remove underline */
}
	a {
		font-weight: 500;
		color: inherit;
		text-decoration: none;
	
	}


	a:hover {
		color: inherit;
	}



	body {
		margin: 0;

		/* font-size: 0.8333333333333334vw; */
		/* font-size: 4.266666666666667vw; */

		color: ${colors["text-white"]};

		display: flex;
		min-width: 320px;
		min-height: 100vh;
		width: 100%;
	}

	@media screen and (${devices["md"]}) {
		body {
			/* font-size: 16px; */
			/* font-size: 31.488px; */
		}
	}

	/* Container Max Width */
	.page-container {
		margin: auto auto;
		max-width: 1536px;
		width: calc(100vw - 1.875rem);

		@media screen and (${devices["sm"]}) {
			width: calc(100vw - 6rem);
		}

		@media screen and (${devices["2xl"]}) {
			width: calc(100vw - 12rem);
		}
	}

	.container {
		width: 100%;
		margin: 0 auto;
	}

	/* Min Font Size */

	h1,
	h2,
	h3,
	h4,
	h5,
	h6 {
		margin: 0;

		font-family: "Cabin Condensed", sans-serif;
		font-weight: 700;
		text-transform: capitalize;
		line-height: 0.9;
		font-style: normal;
	}

	.cursive {
		font-family: "Zeyada", cursive;
		font-weight: normal;
	}
	.cursive.colored {
		color: ${colors.brand};
	}

	h1 {
		font-size: 3em;
	}
	h1 > span.cursive {
		line-height: 0.82;
	}

	h2 {
		font-size: 1.75em;
		@media screen and (${devices["2xl"]}) {
			font-size: 3.375em;
		}
	}
	h2 > span.cursive {
		font-size: 120%;
		line-height: 1.1875;
	}

	h3 {
		font-size: 1.325em;
		@media screen and (${devices.md}) {
			font-size: 1.75em;
		}
	}

	h5 {
		font-size: 0.75em;
		@media screen and (${devices.md}) {
			font-size: 0.85em;
		}
		@media screen and (${devices.xl}) {
			font-size: 1.25rem;
		}
	}

	p {
		margin-top: 0;
		font-size: 1rem;
		line-height: 1.375;
		font-weight: 400;
		font-style: normal;
		opacity: 0.7;
	}
	p.small {
		font-size: 0.75rem;
		line-height: normal;
		@media screen and (${devices.xl}) {
			font-size: 0.85em;
		}
	}

	img {
		width: 4096px;
		max-width: 100%;
	}

	/* Icons adapts its size to its container */
	svg {
		width: 100%;
		height: 100%;
	}

	.signature {
		font-family: "Zeyada", cursive;
		font-size: 1.3125rem;
		line-height: 1;
	}

	.tag {
		font-family: "Lora", serif;
		font-size: 0.75rem;
		line-height: normal;
	}

	.icon {
		aspect-ratio: 1;
		display: flex;
		justify-content: center;
		align-items: center;
	}
`;
