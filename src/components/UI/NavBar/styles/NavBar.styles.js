import styled from "styled-components";
import { devices } from "../../../../utils/breakpoints";

export const Wrapper = styled.div`
	position: fixed;
	z-index: 999;
	width: 100vw;
	margin: 0 calc(-50vw + 50%);
	padding: 0 1.25em;
	background: ${(props) => props.theme["bg-primary"]};

	@media screen and (${devices.xl}) {
		padding: 0 12em;
	}
	nav {
		display: flex;
		justify-content: space-between;
		align-items: center;
		position: relative;

		width: 100%;
		overflow: hidden;
		padding: 0.75rem 0;

		/* elements inside */
		.menu_controls {
			/* layout */
			display: flex;
			gap: 1.25em;
			justify-content: flex-end;

			/* elements inside */
			.control_btn {
				width: 2em;
				color: ${(props) => props.theme["brand"]};
				opacity: 1;
				/* events */
				&:hover,
				:focus {
					opacity: 0.7;
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
				position: absolute;
				left: 50%;
				transform: translateX(-50%);
			}
		}
	}
`;
