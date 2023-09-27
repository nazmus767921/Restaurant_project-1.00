import styled from "styled-components";
import { devices } from "../../../../utils/breakpoints";

export const Wrapper = styled.div`
	/* layout */
	width: 1.75em;
	aspect-ratio: 1;
	flex-shrink: 0;
	/* makeup */
	opacity: 0.5;

	/* media queries */
	@media screen and (${devices["2xl"]}) {
		width: 2.85em;
	}
`;
