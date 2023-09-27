import styled from "styled-components";
import FooterLinkBTN from "./components/FooterLinkBTN";
import { footer } from "../../../../../constant/en-us/shared.constants";
import Hr from "../../../Hr";
import { colors } from "../../../../../utils/colors";

const FooterLinks = () => {
	return (
		<Wrapper>
			<Hr className="divider" />
			{footer["nav-links"].map((link_obj) => {
				const { id, link, title } = link_obj;
				return (
					<FooterLinkBTN key={id} link={link}>
						{title}
					</FooterLinkBTN>
				);
			})}
			<Hr className="divider" />
		</Wrapper>
	);
};

const Wrapper = styled.div`
	/* layout */
	display: flex;
	flex-direction: column;
	align-items: center;
	gap: 1.25em;

	/* elements inside */
	.divider {
		height: 1px;
		background-color: ${colors["text-white"]};
		opacity: 0.3;
		width: 40%;
	}
`;

export default FooterLinks;
