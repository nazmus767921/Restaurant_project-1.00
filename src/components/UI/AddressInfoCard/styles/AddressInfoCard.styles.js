import styled from "styled-components";
import { colors } from "../../../../utils/colors";

export const Card = styled.div`
	/* layout */
	display: flex;
	flex-direction: column;
	align-items: center;
	gap: 1.875em;
	padding: 1.25rem;
	/* makeup */
	border-radius: 0.625rem;
	border: 1px solid ${colors.brand};
	/* elements inside */
	.title {
		font-family: "Lora", serif;
		color: ${colors["text-white"]};
		text-align: center;
		font-size: 1.35em;
		font-style: normal;
		font-weight: 400;
		line-height: normal;
	}
	.text_info {
		opacity: 0.5;
	}
	.info_wrapper {
		display: flex;
		flex-direction: column;
		gap: 0.65em;
		/* typo */
		text-align: center;
	}
	.divider {
		width: 80%;
		height: 1px;
	}
`;
