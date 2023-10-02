import styled from "styled-components";
import { devices } from "../../../utils/breakpoints";

export const Main = styled.main`
	display: flex;
	flex-direction: column;
	gap: 1.25em;
	/* elements inside */
	.header {
		width: fit-content;
		margin: 0 auto;
		@media screen and (${devices.md}) {
			margin-top: 4em;
		}
	}
`;
