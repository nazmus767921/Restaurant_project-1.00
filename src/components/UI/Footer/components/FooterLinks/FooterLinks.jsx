import styled from "styled-components";
import FooterLinkBTN from "./components/FooterLinkBTN";
import { footer } from "../../../../../constant/en-us/shared.constants";
import Hr from "../../../Hr";
import { colors } from "../../../../../utils/colors";
import { devices } from "../../../../../utils/breakpoints";
import { Link } from "react-router-dom";

const FooterLinks = () => {
	return (
		<Wrapper>
			<Hr className="divider" />
			<div className="links">
				{footer["nav-links"].map((link_obj) => {
					const { id, link, title } = link_obj;
					return (
						<Link to={link} key={id}>
							<FooterLinkBTN className="link_btn">{title}</FooterLinkBTN>
						</Link>
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
		gap: 1em;
	}

	/* media queries */
	@media screen and (${devices["md"]}) {
		/* layout */
		flex-direction: row;
		gap: 2em;
		/* elements inside */
		.divider {
			width: 1px;
			height: 100%;
		}
		.link_btn {
			font-size: 0.9em;
		}
	}
	@media screen and (${devices["2xl"]}) {
		/* layout */
		gap: 5em;
	}
`;

export default FooterLinks;
