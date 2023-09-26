import styled from "styled-components";
import { devices } from "../../../../../utils/breakpoints";
import BGImage from "../assets/chicken-sticks-bowl-tomato-soup.jpg";

export const Wrapper = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	flex-wrap: wrap;
	padding-block: 6.825em;
	position: relative;
	/* for making the container 100vw */
	width: 100vw;
	margin: 0 calc(-50vw + 50%);
	/* for making the container 100vw */

	.background {
		display: none;
		@media screen and (${devices["2xl"]}) {
			display: block;
			position: absolute;
			top: 0;
			bottom: 0;
			left: 0;
			right: 0;
			background: url(${BGImage}), lightgray 50% / cover no-repeat;
			/* opacity: 0.5; */
			filter: blur(15px);
		}
	}

	.header {
		display: flex;
		flex-direction: column;
		gap: 0.625em;
		z-index: 10;
	}

	.cards_container {
		display: flex;
		flex-direction: row;
		justify-content: center;
		z-index: 10;
	}

	.chefCard--wrapper {
		width: 47%;
		@media screen and (${devices.xl}) {
			width: 30%;
		}
	}
`;
