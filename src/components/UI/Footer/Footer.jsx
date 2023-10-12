import { memo } from "react";
import FooterExtras from "./components/FooterExtras";
import FooterHeader from "./components/FooterHeader";
import FooterLinks from "./components/FooterLinks/FooterLinks";
import { Wrapper } from "./styles/Footer.styles";

const Footer = memo(() => {
	return (
		<Wrapper>
			<FooterHeader />
			<FooterLinks />
			<FooterExtras />
		</Wrapper>
	);
});

Footer.displayName = "Footer";

export default Footer;
