import { Wrapper } from "./style/SocialIcon.styles";

const SocialIcon = ({ children, className = null, link }) => {
	return (
		<Wrapper className={className} href={link}>
			{children}
		</Wrapper>
	);
};

export default SocialIcon;
