import styled from "styled-components";
import { ChickenBowl } from "../../../../assets/images";
import Description from "../../../../components/UI/Description";
import Heading from "../../../../components/UI/Heading";
import { hero } from "../../../../constant/en-us/home_page.constants";
import getCursiveStyle from "../../../../utils/helpers/getCursiveStyle";
import { Wrapper } from "./styles/Hero.styles";
import { ease } from "../../../../utils/animation";

const Hero = () => {
	return (
		<Wrapper>
			<div className="content">
				<Heading tag={hero.tagline} title={getCursiveStyle(hero.title)} />
				<Description>{hero.description}</Description>
			</div>
			<div className="hero_image--wrapper">
				<HeroImage />
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
	width: 43em;
	aspect-ratio: 1.124/1;
	position: relative;
	left: 16em;
	/* animation */
	@keyframes moveLeft {
		0% {
			left: 0;
		}
		100% {
			left: -16rem;
		}
	}
	animation: moveLeft 2s ${ease["out-expo"]} forwards 0.35s;
`;

export default Hero;
