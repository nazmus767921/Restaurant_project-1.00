import styled from "styled-components";
import { colors } from "../../../../../../../utils/colors";
import { ease } from "../../../../../../../utils/animation";

const ExtraLink = ({ children }) => {
	return <A>{children}</A>;
};

const A = styled.a`
	/* makeup */
	color: ${colors["text-white"]};
	opacity: 0.7;
	/* animation */
	transition: all 0.35s ${ease["out-expo"]};

	/* typo */
	text-align: center;
	font-family: Libre Franklin;
	font-size: 0.65775rem;
	font-style: normal;
	font-weight: 400;
	line-height: normal;

	/* events */
	&:hover,
	:focus {
		opacity: 1;
	}
`;

export default ExtraLink;
