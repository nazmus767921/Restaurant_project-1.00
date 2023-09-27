import styled from "styled-components";
import FooterLinkBTN from "./components/FooterLinkBTN";
import { footer } from "../../../../../constant/en-us/shared.constants";
import Hr from "../../../Hr";
import { colors } from "../../../../../utils/colors";
import { devices } from "../../../../../utils/breakpoints";

const FooterLinks = () => {
	return (
		<Wrapper>
			<Hr className="divider" />
			<div className="links">
				{footer["nav-links"].map((link_obj) => {
					const { id, link, title } = link_obj;
					return (
						<FooterLinkBTN key={id} link={link} className="link_btn">
							{title}
						</FooterLinkBTN>
					);
				})}
			</div>
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
	}

	/* elements inside */
	.links {
		display: flex;
		flex-direction: column;
		align-items: center;
		gap: 1.25em;
	}

	/* media queries */
	@media screen and (${devices["2xl"]}) {
		/* layout */
		flex-direction: row;
		gap: 5em;
		/* elements inside */
		.divider {
			width: 1px;
			height: 100%;
		}
		.link_btn {
			font-size: 1.25em;
		}
	}
`;

export default FooterLinks;
