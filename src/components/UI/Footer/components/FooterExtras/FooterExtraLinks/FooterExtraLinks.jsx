import { footer } from "../../../../../../constant/en-us/shared.constants";
import ExtraLink from "./components/ExtraLink";
import { Wrapper } from "./style/FooterExtraLinks.styles";

const FooterExtraLinks = () => {
	const extras = footer["footer-extras"];
	return (
		<Wrapper>
			{extras.map((content) => {
				const { id, link, title } = content;
				return (
					<ExtraLink key={id} link={link}>
						{title}
					</ExtraLink>
				);
			})}
		</Wrapper>
	);
};

export default FooterExtraLinks;
