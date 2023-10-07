import styled from "styled-components";
import { colors } from "../../utils/colors";
import { devices } from "../../utils/breakpoints";

const Logo = ({ className }) => {
	return (
		<LogoWrapper className={className}>
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
	color: ${(props) => props.theme["text"]};
	span {
		color: ${(props) => props.theme["brand"]};
	}
`;
export default Logo;
