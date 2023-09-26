import ChefCard from "./components/ChefCard";
import { chefsDetails } from "../../../../constant/en-us/home_page.constants";
import Title from "../../../../components/UI/Title";
import Tag from "../../../../components/UI/Tag";
import { Wrapper } from "./styles/Chef.styles";

const Chefs = () => {
	return (
		<Wrapper>
			<div className="background"></div>
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

export default Chefs;
