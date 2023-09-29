import styled from "styled-components";
import { colors } from "../../utils/colors";
import Hr from "./Hr";
import { devices } from "../../utils/breakpoints";

const TextBTNDoubleLines = ({ children, className }) => {
	return (
		<BTN type="button" className={className}>
			<Hr className="BTN_Line" />
			{children}
			<Hr className="BTN_Line" />
		</BTN>
	);
};

const BTN = styled.button`
	/* layout */
	display: flex;
	flex-direction: column;
	align-items: center;
	gap: 0.25em;
	/* text styles */
	font-family: "Lora", serif;
	color: ${colors["text-white"]};
	text-align: center;
	font-size: 1.25em;
	font-style: normal;
	font-weight: 400;
	line-height: normal;
	text-transform: uppercase;

	/* media queries */
	@media screen and (${devices["2xl"]}) {
		font-size: 1.35rem;
	}

	/* events */
	&:hover,
	:focus {
		opacity: 0.6;
	}

	/* elements inside */
	.BTN_Line {
		height: 1px;
		opacity: 0.7;
	}
`;

export default TextBTNDoubleLines;
