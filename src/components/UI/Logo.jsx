import styled from "styled-components";
import { colors } from "../../utils/colors";
import { devices } from "../../utils/breakpoints";
import { createRef } from "react";

export const logoContainerRef = createRef();

export const logoContainerWidth = () => {
	return logoContainerRef?.current?.clientWidth;
};

const Logo = ({ className }) => {
	return (
		<LogoWrapper ref={logoContainerRef} className={className}>
			Res<span>2Rant</span>
		</LogoWrapper>
	);
};

const LogoWrapper = styled.div`
	font-family: "Cabin Condensed", sans-serif;
	font-size: 1.5rem;
	@media screen and (${devices.xl}) {
		font-size: 2rem;
	}
	font-weight: 700;
	line-height: normal;
	color: ${colors["text-white"]};
	span {
		color: ${colors.brand};
	}
`;
export default Logo;
