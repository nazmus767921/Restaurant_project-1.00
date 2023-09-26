import styled from "styled-components";
import { colors } from "../../../../utils/colors";
import { devices } from "../../../../utils/breakpoints";

export const Wrapper = styled.div`
	position: fixed;
	z-index: 999;
	width: 100vw;
	margin: 0 calc(-50vw + 50%);
	padding: 0 1.25em;
	background: ${colors["bg-primary-dark"]};

	@media screen and (${devices.xl}) {
		padding: 0 12em;
	}
	nav {
		display: flex;
		justify-content: space-between;
		align-items: center;

		width: 100%;
		overflow: hidden;
		padding: 0.75rem 0;

		.menu_controls {
			display: flex;
			gap: 1.25em;
			justify-content: space-between;

			.control_btn {
				width: 2em;
				color: ${colors.brand};
				opacity: 0.3;
				&:hover,
				:focus {
					opacity: 1;
				}
			}

			.hamburger {
				transform: rotate(-90deg);
				@media screen and (${devices.lg}) {
					display: none;
				}
			}
		}
		.nav_links {
			display: none;
			@media screen and (${devices.lg}) {
				display: flex;
				flex-direction: row;
				gap: 1.25em;
			}
		}
	}
`;
