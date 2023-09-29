import styled from "styled-components";
import { colors } from "../../utils/colors";

const Hr = ({ className }) => {
	return <Line className={className}></Line>;
};

const Line = styled.div`
	height: 2px;
	margin-top: -2px;
	width: 100%;
	background: ${colors.brand};
`;

export default Hr;
