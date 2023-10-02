import styled from "styled-components";
import { colors } from "../../../utils/colors";

export const Main = styled.main`
	/* elements inside */
	.hero_wrapper {
		display: flex;
		flex-direction: column;
		gap: 1.25em;
		text-align: center;
		padding-top: 5em;
		padding-bottom: 3.65em;
		h2 {
			line-height: normal;
			.title--colored {
				color: ${colors.brand};
				display: block;
			}
		}
	}
	.infoCard_section {
		display: flex;
		justify-content: center;
		align-items: center;
		padding: 6.25em 0;
	}
	.hero_description {
		margin: 0 auto;
	}
`;
