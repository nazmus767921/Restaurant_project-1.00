import { footer } from "../../../../../../constant/en-us/shared.constants";
import SocialIcon from "../../../../SocialIcon";
import { Wrapper } from "./style/FooterSocialSection.styles";

const FooterSocialSection = () => {
	return (
		<Wrapper>
			{footer.socials.map((social) => {
				const { id, icon, link } = social;
				return (
					<SocialIcon key={id} link={link}>
						{icon}
					</SocialIcon>
				);
			})}
		</Wrapper>
	);
};

export default FooterSocialSection;
