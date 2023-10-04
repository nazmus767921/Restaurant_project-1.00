import { createGlobalStyle } from "styled-components";
import { devices } from "./utils/breakpoints";
import { colors } from "./utils/colors";
import { ease } from "./utils/animation";

export const GlobalStyles = createGlobalStyle`
	
	body {
		margin: 0;
	
		color: ${colors["text-white"]};
		display: flex;
		min-width: 320px;
		min-height: 100vh;
		width: 100%;

		/* overflow-x: hidden; */
	}

button {
	width: fit-content;
	cursor: pointer;
	background-color: inherit;
	border: 0;
	margin: 0;
	padding: 0;
	text-transform: capitalize;
	font-family: "Libre Franklin", sans-serif;

	/* for touch screens only. */
	-webkit-tap-highlight-color: transparent; /* For Webkit-based browsers like Safari */
	tap-highlight-color: transparent; /* For other browsers */
}

button.icon {
	/* for touch screens only. */
	-webkit-tap-highlight-color: transparent; /* For Webkit-based browsers like Safari */
	tap-highlight-color: transparent; /* For other browsers */
}

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

	input, textarea {
		/* makeup */
		caret-color: ${colors.brand};
	/* animation */
		transition: all 0.35s ${ease["out-expo"]};
		&::placeholder {
			transition: all 0.35s ${ease["out-expo"]};
		}
		&:focus {
			padding-inline: 0.65em;
			background-color: ${colors["bg-primary-dark-deep"]};
			&::placeholder {
				font-size: 105%;
			}
		}
	}

	input,select,textarea {
		outline: none;
		color: inherit;
	}

	/* Container Max Width */
	.page-container {
		margin: 4em auto;
		max-width: 1536px;
		width: calc(100vw - 1.19rem);

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

	span {
		display: inline-block;
	}

	.cursive {
		font-family: "Zeyada", cursive;
		font-weight: normal;
	}
	.cursive.colored {
		color: ${colors.brand};
	}

	h1 {
		font-size: 3.75em;
	}
	h1 > span.cursive {
		line-height: 0.82;
	}

	h2 {
		font-size: 1.75em;
		@media screen and (${devices["2xl"]}) {
			font-size: 2.25em;
		}
	}
	h2 > span.cursive {
		font-size: 120%;
		line-height: 1.1875;
	}

	h3 {
		font-size: 1.325em;
		@media screen and (${devices["2xl"]}) {
			font-size: 1.5em;
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

	.hero_description {
		text-align: center;
		max-width: 65ch;
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
