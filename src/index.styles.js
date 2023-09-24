import styled from "styled-components";
import { devices } from "./utils/breakpoints";
import { colors } from "./utils/colors";

export const Wrapper = styled.div`
	a {
		font-weight: 500;
		color: #646cff;
		text-decoration: inherit;
	}
	a:hover {
		color: #535bf2;
	}

	body {
		margin: 0;

		font-size: 0.8333333333333334vw;

		color: ${colors["text-white"]};

		display: flex;
		min-width: 320px;
		min-height: 100vh;
		width: 100%;
	}

	@media screen and (${devices["4xl"]}) {
		body {
			font-size: 16px;
		}
	}

	/* Container Max Width */
	.page-container {
		margin: 0 auto;
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
	@media screen and (${devices["2xl"]}) {
		body {
			font-size: 10.666666666666668px;
		}
	}

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
		color: ${colors.brand};
	}

	h1 {
		font-size: 3em;
		@media screen and (${devices["md"]}) {
			font-size: 5em;
		}
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
		font-size: 1.35rem;
	}

	p {
		margin-top: 0;
		font-size: 1rem;
		line-height: 1.375;
		font-weight: 400;
		font-style: normal;
	}
	p.small {
		font-size: 0.65rem;
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
