import styled from "styled-components";
import { devices } from "../../../utils/breakpoints";
import { colors } from "../../../utils/colors";
import { ease } from "../../../utils/animation";

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
	.price_filter--wrapper {
		width: 100%;
		display: flex;
		padding: 0.65em 1.25em;
	}

	.filter_wrapper--bottom {
		display: flex;
		justify-content: space-between;
		align-items: center;
		padding: 0.65em 2.5em;
	}
	.viewChanger--wrapper {
		display: flex;
		flex-direction: row;
		gap: 1.25em;
		/* elements inside */
		.view--icon {
			width: 1.25em;
			height: 1.25em;
			/* animation */
			transition: color 0.35s ${ease["out-expo"]};
			&:hover,
			:focus {
				color: ${colors.brand};
			}
		}
	}
	.menusSection {
		margin-top: 2.5em;
		/* elements inside */
		.listView--wrapper {
			width: 100%;
			@media screen and (${devices.xl}) {
				width: 70%;
			}
		}
	}
`;
