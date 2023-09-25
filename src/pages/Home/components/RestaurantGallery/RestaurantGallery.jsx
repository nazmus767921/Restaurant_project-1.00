import styled from "styled-components";
import Title from "../../../../components/UI/Title";
import { restaurantGallery } from "../../../../constant/en-us/home_page.constants";

const RestaurantGallery = () => {
	return (
		<Wrapper>
			<Title>{restaurantGallery.title}</Title>
		</Wrapper>
	);
};

const Wrapper = styled.div`
	display: flex;
	flex-direction: column;
	gap: 0.65em;
	width: 100%;

  margin-top: 3.75em;
`;

export default RestaurantGallery;
