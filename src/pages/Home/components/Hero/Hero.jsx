import Description from "../../../../components/UI/Description";
import Heading from "../../../../components/UI/Heading";
import { hero } from "../../../../constant/en-us/home_page.constants";
import { sharedImages } from "../../../../constant/en-us/shared.constants";
import getCursiveStyle from "../../../../utils/helpers/getCursiveStyle";
import { Wrapper } from "./styles/Hero.styles";

// const heroTitle = () => {
// 	return (
// 		<>
// 			{`${hero.title.split(" ")[0]} ${hero.title.split(" ")[1]}`}
// 			<br />
// 			<span className="cursive">{hero.title.split(" ")[2]}</span>
// 		</>
// 	);
// };

const BGImage = () => {
	return (
		<div className="bg-image">
			<img src={sharedImages.bg} alt="hero" />
		</div>
	);
};

const Hero = () => {
	return (
		<Wrapper>
			<div className="content">
				<Heading tag={hero.tagline} title={getCursiveStyle(hero.title)} />
				<Description>{hero.description}</Description>
			</div>
			<BGImage></BGImage>
		</Wrapper>
	);
};

export default Hero;
