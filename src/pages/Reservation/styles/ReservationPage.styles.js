import styled from "styled-components";

export const ReserveFormWrapper = styled.form`
	display: flex;
	flex-direction: column;
	gap: 2.5em;
	/* elements inside */
	.submit--btn {
		margin: 0 auto;
	}
`;

export const Main = styled.main`
	.hero {
		text-align: center;
		padding-block: 4em;
		h2 {
			color: ${(props) => props.theme["text"]};
			text-align: center;
			font-family: Zeyada;
			font-size: 3rem;
			font-style: normal;
			font-weight: 400;
			text-transform: capitalize;
		}
	}
`;
