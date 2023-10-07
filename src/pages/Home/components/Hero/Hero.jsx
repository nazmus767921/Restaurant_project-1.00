import Description from "../../../../components/UI/Description";
import Heading from "../../../../components/UI/Heading";
import { hero } from "../../../../constant/en-us/home_page.constants";
import getCursiveStyle from "../../../../utils/helpers/getCursiveStyle";
import { Wrapper } from "./styles/Hero.styles";
import HeroImage from "../../../../components/UI/HeroImage";

const Hero = () => {
	return (
		<Wrapper>
			<div className="content">
				<Heading tag={hero.tagline} title={getCursiveStyle(hero.title)} />
				<Description>{hero.description}</Description>
			</div>
				<HeroImage />
		</Wrapper>
	);
};



export default Hero;
