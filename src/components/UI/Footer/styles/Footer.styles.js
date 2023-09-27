import styled from "styled-components";
import { devices } from "../../../../utils/breakpoints";

export const Wrapper = styled.div`
	/* layout */
	display: flex;
	flex-direction: column;
	gap: 1.25em;
	padding: 3.25em 0;
	width: max-content;
	margin: 0 auto;
	/* media queries */
	@media screen and (${devices["2xl"]}) {
		/* layout */
		width: 100%;
		flex-direction: row;
		justify-content: center;
		gap: 15em;
		padding: 12em 0 4em 0;
	}
`;
