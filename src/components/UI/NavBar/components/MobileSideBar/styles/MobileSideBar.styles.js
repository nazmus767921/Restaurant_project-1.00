import styled from "styled-components";
import { ease } from "../../../../../../utils/animation";

export const Dark_overlay = styled.div`
	/* layout */
	position: fixed;
	top: 0;
	bottom: 0;
	right: 0;
	left: 0;
	z-index: 98;
	min-height: 120vh;
	min-height: 120dvh;
	background-color: ${(props) => props.theme["bg-primary-deep"]};
	/* animation */
	@keyframes Fading {
		0% {
			opacity: 0;
		}
		100% {
			opacity: 0.8;
		}
	}
	animation: Fading 0.5s ${ease["out-expo"]} forwards;
`;
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
	right: -100%;
	z-index: 99;

	@keyframes OpenSideBar {
		0% {
			right: -100%;
		}
		100% {
			right: 0%;
		}
	}
	animation: OpenSideBar 0.5s ${ease["out-expo"]} forwards;

	/* makeup */
	background-color: ${(props) => props.theme["mobileSidebar"]};

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
		color: ${(props) => props.theme["brand"]};
	}
`;
