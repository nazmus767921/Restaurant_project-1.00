import styled from "styled-components";
import { chefsDetails } from "../../../../../constant/en-us/home_page.constants";
import { colors } from "../../../../../utils/colors";

const ChefCard = () => {
	return (
		<Wrapper>
			<div className="chefProfileImageWrapper">
				<img src={chefsDetails.chefs[0].image} alt="chef name" />
			</div>
			<p className="chef_pitch small">Finest Chef you’ll get in the city.</p>
			<h3 className="chef_name cursive">Mohammad Ali</h3>
			<h5 className="chef_post">Master Chef</h5>
		</Wrapper>
	);
};

const Wrapper = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	gap: 0.32em;
	width: 47%;
	padding: 0.62em;
	text-align: center;

	.chefProfileImageWrapper {
		width: 9em;
		aspect-ratio: 1/1;
		display: flex;
		justify-content: center;
		align-items: center;
	}
	.chef_pitch {
	}
	.chef_name {
		color: ${colors["text-white"]};
	}
	.chef_post {
	}
`;

export default ChefCard;
