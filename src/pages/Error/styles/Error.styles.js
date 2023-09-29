import styled from "styled-components";
import { devices } from "../../../utils/breakpoints";

export const Wrapper = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	gap: 3.125em;
	padding-top: 5em;
	padding-inline: 1.25em;
	min-height: 100vh;
	min-height: 100dvh;
	/* elements inside */

	.header {
		display: flex;
		flex-direction: column;
		gap: 1em;
		max-width: 1280px;
	}
	h2.error_title {
		font-size: 2.5em;
		line-height: 1.4em;
		text-align: center;
	}
	h2.error_title > span {
		font-size: 180%;
		line-height: 0;
	}
`;
