import styled from "styled-components";
import { devices } from "../../utils/breakpoints";
import Title from "./Title";
import { Link } from "react-router-dom";
import TextBTN from "./TextBTN";
import { paths } from "../../Root.paths";
import { errorhero } from "../../constant/en-us/error_page.constants";

const SubmissionStatus = ({ title, body }) => {
	return (
		<SubmissionSuccess>
			<div>
				<Title>{title}</Title>
				<p>{body}</p>
			</div>
			<Link to={paths.home}>
				<TextBTN>{errorhero.btn}</TextBTN>
			</Link>
		</SubmissionSuccess>
	);
};

const SubmissionSuccess = styled.div`
	max-width: 100%;
	min-height: 90vh;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	gap: 1.25em;

	/* typo */
	text-align: center;

	/* elements inside */
	p {
		margin: 0 auto;

		@media screen and (${devices.md}) {
			max-width: 70%;
		}
	}
`;

export default SubmissionStatus;
