import { footer } from "../../../../../../constant/en-us/shared.constants";
import SocialIcon from "../../../../SocialIcon";
import { Wrapper } from "./style/FooterSocialSection.styles";

const FooterSocialSection = () => {
	return (
		<Wrapper>
			<SocialIcon>{footer.socials[0].icon}</SocialIcon>
		</Wrapper>
	);
};

export default FooterSocialSection;
