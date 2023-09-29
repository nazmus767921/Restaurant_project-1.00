import styled from "styled-components";
import Logo from "../../Logo";
import { devices } from "../../../../utils/breakpoints";
import { footer } from "../../../../constant/en-us/shared.constants";

const FooterHeader = () => {
	const { street, city, district } = footer.address;
	return (
		<Wrapper>
			<Logo className="footer_logo" />
			<p className="small">{`${street}, ${city}, ${district}`}</p>
		</Wrapper>
	);
};

const Wrapper = styled.div`
	/* layout */
	display: flex;
	flex-direction: column;
	align-items: center;

	/* elements inside */

	.footer_logo {
		font-size: 3rem;
	}
	@media screen and (${devices["md"]}) {
		/* layout */
		align-items: flex-start;
		/* elements inside */
		.footer_logo {
			font-size: 2.5em;
		}
	}
	@media screen and (${devices["2xl"]}) {
		/* elements inside */
		.footer_logo {
			font-size: 2.9em;
		}
	}
`;

export default FooterHeader;
