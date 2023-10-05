import styled from "styled-components";
import { colors } from "../../../utils/colors";

export const ReserveFormWrapper = styled.div`
	display: flex;
	flex-direction: column;
	gap: 2.5em;
`;

export const Main = styled.main`
	.hero {
		text-align: center;
		padding-block: 4em;
		h2 {
			color: ${colors["text-white"]};
			text-align: center;
			font-family: Zeyada;
			font-size: 3rem;
			font-style: normal;
			font-weight: 400;
			text-transform: capitalize;
		}
	}
`;
