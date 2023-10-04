import styled from "styled-components";
import { devices } from "../../../utils/breakpoints";

export const Main = styled.main`
	display: flex;
	flex-direction: column;
	gap: 1.875em;
	/* elements inside */
	.header {
		width: fit-content;
		margin: 0 auto;
		@media screen and (${devices.md}) {
			margin-top: 4em;
		}
	}
	
	.filter_wrapper--bottom {
		display: flex;
		justify-content: space-between;
		align-items: center;
		padding: 0.65em 2.5em;
	}
`;
