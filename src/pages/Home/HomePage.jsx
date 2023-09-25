import { Wrapper } from "./styles/Home.styles";
import Hero from "./components/Hero/Hero";
import PopularMenu from "./components/PopularMenu";
import RestaurantGallery from "./components/RestaurantGallery/RestaurantGallery";
import Chefs from "./components/Chefs/Chefs";

const HomePage = () => {
	return (
		<Wrapper className="page-container">
			<Hero />
			<PopularMenu />
			<RestaurantGallery />
			<Chefs />
		</Wrapper>
	);
};

export default HomePage;
