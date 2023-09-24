import Hero from "./components/Hero/Hero";
import PopularMenu from "./components/PopularMenu";
import { Wrapper } from "./styles/Home.styles";
const HomePage = () => {
	return (
		<Wrapper className="page-container">
			<Hero />
			<PopularMenu />
		</Wrapper>
	);
};

export default HomePage;
