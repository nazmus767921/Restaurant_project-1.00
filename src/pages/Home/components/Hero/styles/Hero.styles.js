import styled from "styled-components";
import { devices } from "../../../../../utils/breakpoints";

export const Wrapper = styled.div`
	/* i want this div to be 100% to screen even though it container has paddings using calc() */
	width: 100%;
	min-width: 100vw;
	margin: 0 calc(-50vw + 50%);

	display: grid;
	min-height: 100vh;
	grid-template-columns: 1fr;
	align-content: center;
	position: relative;
	overflow-x: hidden;

	.content {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		z-index: 10;
		gap: 1.75rem;
		padding: 0 2em;
	}
	.hero_image--wrapper {
		position: absolute;
		top: 0;
		bottom: 0;

		/* places the bg-image absolutely in the center */
		display: flex;
		align-items: center;
		justify-content: flex-end;
		/* layout */
		width: 100%;
	}
`;
