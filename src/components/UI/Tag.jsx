import styled from "styled-components";
import { colors } from "../../utils/colors";
import { devices } from "../../utils/breakpoints";

const Tag = ({ children }) => {
	return <TagWrapper>{children}</TagWrapper>;
};

const TagWrapper = styled.div`
	font-family: "Lora", serif;
	color: ${colors["text-white"]};
	text-align: center;
	font-size: 0.75em;
	line-height: normal;
	font-weight: 400;
	text-transform: uppercase;
	@media screen and (${devices["xl"]}) {
		font-size: 1.25em;
	}
`;

export default Tag;
