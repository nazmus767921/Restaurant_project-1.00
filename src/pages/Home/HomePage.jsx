import { Wrapper } from "./styles/Home.styles";
import Hero from "./components/Hero/Hero";
// import PopularMenu from "./components/PopularMenu";
import RestaurantGallery from "./components/RestaurantGallery/RestaurantGallery";
import Chefs from "./components/Chefs/Chefs";
import { PopularMenu } from "./components/PopularMenu";
import Reservation from "../../components/UI/Reservation";

const HomePage = () => {
	return (
		<Wrapper className="page-container">
			<Hero />
			<PopularMenu />
			{/* <RestaurantGallery /> */}
			<Chefs />
			<Reservation />
		</Wrapper>
	);
};

export default HomePage;
