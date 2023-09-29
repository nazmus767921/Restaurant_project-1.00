import styled from "styled-components";
import { devices } from "../../../../utils/breakpoints";
import { ease } from "../../../../utils/animation";

export const Wrapper = styled.a`
	/* layout */
	width: 1.75em;
	aspect-ratio: 1;
	flex-shrink: 0;
	/* makeup */
	opacity: 0.5;
	/* animation */
	transition: all 0.35s ${ease["out-expo"]};

	/* events */
	&:hover,
	:focus {
		opacity: 1;
	}
`;
