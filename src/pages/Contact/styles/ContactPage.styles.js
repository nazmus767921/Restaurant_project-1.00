import styled from "styled-components";
import { colors } from "../../../utils/colors";

export const Main = styled.main`
	/* elements inside */
	.hero_wrapper {
		display: flex;
		flex-direction: column;
		gap: 1.25em;
		text-align: center;
		h2 {
			line-height: normal;
			.title--colored {
				color: ${colors.brand};
			}
		}
	}
`;
