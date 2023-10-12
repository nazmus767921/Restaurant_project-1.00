import React from "react";
import FooterExtras from "./components/FooterExtras";
import FooterHeader from "./components/FooterHeader";
import FooterLinks from "./components/FooterLinks/FooterLinks";
import { Wrapper } from "./styles/Footer.styles";

const Footer = () => {
	return (
		<Wrapper>
			<FooterHeader />
			<FooterLinks />
			<FooterExtras />
		</Wrapper>
	);
};

React.memo(Footer, () => true);

export default Footer;
