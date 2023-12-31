import styled from "styled-components";
import { devices } from "../../utils/breakpoints";

const Tag = ({ children }) => {
	return <TagWrapper>{children}</TagWrapper>;
};

const TagWrapper = styled.div`
	font-family: "Lora", serif;
	color: ${(props) => props.theme["text"]};
	text-align: center;
	font-size: 0.75em;
	line-height: normal;
	font-weight: 400;
	text-transform: uppercase;
	@media screen and (${devices["xl"]}) {
		font-size: 0.9em;
	}
`;

export default Tag;
