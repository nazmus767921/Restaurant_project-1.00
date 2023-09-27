import FooterHeader from "./components/FooterHeader";
import FooterLinks from "./components/FooterLinks/FooterLinks";
import { Wrapper } from "./styles/Footer.styles";

const Footer = () => {
	return (
		<Wrapper>
			<FooterHeader />
			<FooterLinks />
		</Wrapper>
	);
};

export default Footer;
