import { Wrapper } from "./style/SocialIcon.styles";

const SocialIcon = ({ children, className = null }) => {
	return <Wrapper className={className}>{children}</Wrapper>;
};

export default SocialIcon;
