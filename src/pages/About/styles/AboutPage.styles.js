import styled from "styled-components";


export const Main = styled.main`
	/* elements inside */
	.hero_wrapper {
		/* layout */
		min-height: 100vh;
		min-height: 100dvh;
		display: flex;
		flex-direction: column;
		gap: 1.825em;
		justify-content: center;
	}
	.header {
		display: flex;
		flex-direction: column;
		gap: 0.625em;
		/* elements inside */
		h1 {
			font-size: 3em;
			line-height: 4.325rem;
		}
	}
	.description {
		text-align: center;
	}
`;
