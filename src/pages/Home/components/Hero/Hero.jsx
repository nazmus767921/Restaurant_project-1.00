import styled from "styled-components";
import { ChickenBowl } from "../../../../assets/images";
import Description from "../../../../components/UI/Description";
import Heading from "../../../../components/UI/Heading";
import { hero } from "../../../../constant/en-us/home_page.constants";
import { sharedImages } from "../../../../constant/en-us/shared.constants";
import getCursiveStyle from "../../../../utils/helpers/getCursiveStyle";
import { Wrapper } from "./styles/Hero.styles";

const Hero = () => {
	return (
		<Wrapper>
			<div className="content">
				<Heading tag={hero.tagline} title={getCursiveStyle(hero.title)} />
				<Description>{hero.description}</Description>
			</div>
		</Wrapper>
	);
};

const HeroImage = () => {
	return (
		<HeroImageWrapper>
			<img src={ChickenBowl} alt="" />
		</HeroImageWrapper>
	);
};


const HeroImageWrapper = styled.div`
	/* width: ; */
`

export default Hero;
