import styled from "styled-components";
import { devices } from "../../../utils/breakpoints";

const MenuShowcase = ({ children, className }) => {
	return (
		<Wrapper>
			<div className={`section ${className}`}>{children}</div>
		</Wrapper>
	);
};

const Wrapper = styled.div`
	.section {
		display: flex;
		width: 100%;
		flex-wrap: wrap;
		justify-content: center;
		row-gap: 1em;
		gap: 1em;
	}
	.fullHeight {
		min-height: 88em;
		@media screen and (${devices.md}) {
			min-height: 70em;
		}
		@media screen and (${devices.xl}) {
			min-height: 42em;
		}
	}
	.halfHeight {
		min-height: 44em;
		@media screen and (${devices.md}) {
			min-height: 35em;
		}
		@media screen and (${devices.md}) {
			min-height: 21em;
		}
	}
	.autoHeight {
		min-height: fit-content;
	}
`;

export default MenuShowcase;
