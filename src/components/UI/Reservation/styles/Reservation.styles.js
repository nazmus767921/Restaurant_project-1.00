import styled from "styled-components";

export const Wrapper = styled.div`
	.Reservation_content--wrapper {
		display: flex;
		flex-direction: column;
		gap: 1.88em;

		h2 {
			font-size: 3em;
		}
		h2 > span.cursive {
			font-size: 100%;
			line-height: 75%;
		}

		.header {
			display: flex;
			flex-direction: column;
			gap: 1.125em;
		}
		.content {
			display: flex;
			flex-direction: column;
			gap: 1.88em;
			align-items: center;
			p {
				text-align: center;
			}
		}
	}
`;
