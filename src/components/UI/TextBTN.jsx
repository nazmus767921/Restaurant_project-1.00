import styled from "styled-components";
import Hr from "./Hr";

const TextBTN = () => {
	return (
		<Wrapper>
			<Button>Show full menu</Button>
			<Hr />
		</Wrapper>
	);
};

const Button = styled.button`
	font-family: Cabin Condensed;
	font-size: 1rem;
	font-style: normal;
	font-weight: 700;
	line-height: normal;
	text-transform: capitalize;
`;

const Wrapper = styled.div`
width: fit-content;
	display: flex;
	flex-direction: column;
	gap: .65em;
`;

export default TextBTN;
