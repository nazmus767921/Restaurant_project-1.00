import styled from "styled-components";
import { colors } from "../../utils/colors";

const BTNSolid = ({ children, className = null }) => {
	return (
		<Button type="button" className={className}>
			{children}
		</Button>
	);
};

const Button = styled.button`
	/* layout */
	padding: 0.5em 1.25em;
	/* makeup */
	background-color: ${colors.brand};
	color: ${colors["text-white"]};
	border-radius: 0.325em;
	/* typo */
	font-size: 1em;
	font-weight: 700;
`;

export default BTNSolid;
