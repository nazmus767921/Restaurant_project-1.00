import styled from "styled-components";
import { colors } from "../../utils/colors";
import Hr from "./Hr";

const TextBTNDoubleLines = ({ children }) => {
	return (
		<BTN type="button">
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
	/* text styles */
	font-family: "Lora", serif;
	color: ${colors["text-white"]};
	text-align: center;
	font-size: 1.25rem;
	font-style: normal;
	font-weight: 400;
	line-height: normal;
	text-transform: uppercase;

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
