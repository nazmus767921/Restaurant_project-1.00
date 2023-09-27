import FooterExtraLinks from "./FooterExtraLinks";
import FooterSocialSection from "./FooterSocialSection";
import { Wrapper } from "./style/FooterExtras.styles";

const FooterExtras = () => {
	return (
		<Wrapper>
			<FooterSocialSection />
			<FooterExtraLinks />
		</Wrapper>
	);
};

export default FooterExtras;
