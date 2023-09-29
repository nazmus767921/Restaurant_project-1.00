import styled from "styled-components";
import { devices } from "../../../../../../../utils/breakpoints";

export const Wrapper = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	gap: 1.88em;
	@media screen and (${devices.xl}) {
		gap: 1.125em;
	}
`;
