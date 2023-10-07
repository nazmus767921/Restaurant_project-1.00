import { lazy, Suspense } from "react";
import { chefsDetails } from "../../../../constant/en-us/home_page.constants";
import Title from "../../../../components/UI/Title";
import Tag from "../../../../components/UI/Tag";
import { Wrapper } from "./styles/Chef.styles";
import { useThemeContext } from "../../../../store/contexts/ThemeContext";
const ChefCard = lazy(() => import("./components/ChefCard"));

const Chefs = () => {
	const { theme } = useThemeContext();
	return (
		<Wrapper>
			{theme === "dark" ? <div className="background"></div> : null}
			<div className="header">
				<Tag>{chefsDetails.tagline}</Tag>
				<Title>{chefsDetails.title}</Title>
			</div>
			<div className="cards_container">
				{chefsDetails.chefs.map((chef) => {
					return (
						<Suspense key={chef.id} fallback={<div>Loading...</div>}>
							<div className="chefCard--wrapper">
								<ChefCard {...chef} />
							</div>
						</Suspense>
					);
				})}
			</div>
		</Wrapper>
	);
};

export default Chefs;
