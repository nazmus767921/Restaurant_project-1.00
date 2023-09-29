import styled from "styled-components";
import Hr from "./Hr";
import { ease } from "../../utils/animation";
import { colors } from "../../utils/colors";
import { devices } from "../../utils/breakpoints";

const TextBTN = ({ children, className }) => {
	return (
		<Button type="button" className={className}>
			<Wrapper>{children}</Wrapper>
			<Hr className="underline" />
		</Button>
	);
};

const Wrapper = styled.div`
	font-family: Cabin Condensed;
	font-size: 1em;
	font-style: normal;
	font-weight: 700;
	line-height: normal;
	text-transform: capitalize;
	/* media queries */
	@media screen and (${devices["2xl"]}) {
		font-size: 1.5em;
	}
`;

const Button = styled.button`
	width: fit-content;
	display: flex;
	flex-direction: column;
	gap: 0.65em;
	color: ${colors["text-white"]};

	.underline {
		transition: all 0.35s ${ease["out-expo"]};
	}
	&:hover,
	:focus {
		.underline {
			transform: translateY(-120%);
		}
		${Wrapper} {
			opacity: 0.6;
		}
	}
`;

export default TextBTN;
