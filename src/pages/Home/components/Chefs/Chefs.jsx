import styled from "styled-components";
import ChefCard from "./components/ChefCard";
import { devices } from "../../../../utils/breakpoints";
import { chefsDetails } from "../../../../constant/en-us/home_page.constants";
import Title from "../../../../components/UI/Title";
import Tag from "../../../../components/UI/Tag";

const Chefs = () => {
	return (
		<Wrapper>
			<div className="header">
				<Tag>{chefsDetails.tagline}</Tag>
				<Title>{chefsDetails.title}</Title>
			</div>
			<div className="cards_container">
				{chefsDetails.chefs.map((chef) => {
					return (
						<div key={chef.id} className="chefCard--wrapper">
							<ChefCard {...chef} />
						</div>
					);
				})}
			</div>
		</Wrapper>
	);
};

const Wrapper = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	flex-wrap: wrap;
	padding-block: 6.825em;
	border: 1px solid;
	/* for making the container 100vw */
	width: 100vw;
	margin: 0 calc(-50vw + 50%);
	/* for making the container 100vw */
  background-image: url();

	.header {
		display: flex;
		flex-direction: column;
		gap: 0.625em;
	}

	.cards_container {
		display: flex;
		flex-direction: row;
		justify-content: center;
	}

	.chefCard--wrapper {
		width: 47%;
		@media screen and (${devices.xl}) {
			width: 30%;
		}
	}
`;
export default Chefs;
