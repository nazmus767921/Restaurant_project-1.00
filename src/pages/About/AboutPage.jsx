import HeroTitle from "../../components/UI/HeroTitle";
import Tag from "../../components/UI/Tag";
import { featured, hero } from "../../constant/en-us/about_page.constants";
import getCursiveStyle from "../../utils/helpers/getCursiveStyle";
import FeaturedCard from "./components/FeaturedCard/FeaturedCard";
import { Main } from "./styles/AboutPage.styles";

const AboutPage = () => {
	return (
		<Main className="page-container">
			<div className="hero_wrapper">
				<div className="header">
					<Tag>{hero.tagline}</Tag>
					<HeroTitle>{getCursiveStyle(hero.title)}</HeroTitle>
				</div>
				<p className="description">{hero.description}</p>
			</div>
			<div className="featured_section">
				{featured.map((content, index) => {
					return index % 2 === 0 ? (
						<FeaturedCard {...content} />
					) : (
						<FeaturedCard {...content} reverse />
					);
				})}
			</div>
		</Main>
	);
};

export default AboutPage;
