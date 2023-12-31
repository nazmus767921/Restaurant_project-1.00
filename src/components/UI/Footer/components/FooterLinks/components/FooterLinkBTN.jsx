import styled from "styled-components";
import { ease } from "../../../../../../utils/animation";

const FooterLinkBTN = ({ children, className = null }) => {
	return (
		<BTN type="button" className={className}>
			{children}
		</BTN>
	);
};

const BTN = styled.button`
	/* makeup */
	color: ${(props) => props.theme["text"]};
	opacity: 0.5;
	/* animation */
	transition: all 0.35s ${ease["out-expo"]};
	/* typo */
	font-family: Cabin Condensed;
	font-size: 0.875rem;
	font-style: normal;
	font-weight: 400;
	line-height: normal;
	text-transform: uppercase;

	/* events */
	&:hover,
	:focus {
		/* makeup */
		opacity: 1;
	}
`;

export default FooterLinkBTN;
