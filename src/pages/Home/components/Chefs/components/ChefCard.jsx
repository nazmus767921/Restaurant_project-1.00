import styled from "styled-components";
import { chefsDetails } from "../../../../../constant/en-us/home_page.constants";
import { colors } from "../../../../../utils/colors";

const ChefImage = () => {
	return (
		<OverFlowHidden>
			<ChefProfileImageWrapper>
				<img src={chefsDetails.chefs[0].image} alt="chef name" />
				<div className="gradientOverlay" />
			</ChefProfileImageWrapper>
		</OverFlowHidden>
	);
};

const ChefInfo = ({ description, name, post }) => {
	return (
		<div className="chefInfo--wrapper">
			<p className="chef_pitch small">{description}</p>
			<h3 className="chef_name cursive">{name}</h3>
			<h5 className="chef_post">{post}</h5>
		</div>
	);
};

const ChefCard = () => {
	return (
		<Wrapper>
			<ChefImage />
			<ChefInfo
				name="Mohammad Ali"
				description="Finest Chef you’ll get in the city."
				post="Master Chef"
			/>
		</Wrapper>
	);
};

// chefImage Styles
const ChefProfileImageWrapper = styled.div`
	width: 90%;
	aspect-ratio: 1/1;

	display: flex;
	justify-content: center;
	align-items: center;
	position: relative;

	.gradientOverlay {
		position: absolute;
		top: 0;
		bottom: 0;
		right: 0;
		left: 0;
		width: 110%;
		height: 110%;
		pointer-events: none;
		z-index: 10;
		background: linear-gradient(
			0deg,
			#191919 18.39%,
			rgba(25, 25, 25, 0) 55.81%
		);
	}
`;

// chefImage Styles
const OverFlowHidden = styled.div`
	aspect-ratio: 1/1;
	display: flex;
	justify-content: center;
	align-items: center;
	border-radius: 999px;
	overflow: hidden;
`;

// chefCard styles
const Wrapper = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	gap: 0.38em;
	width: 47%;
	padding: 0.62em;
	text-align: center;

	.chef_pitch {
	}
	.chef_name {
		color: ${colors["text-white"]};
	}
	.chef_post {
		color: ${colors.brand};
		opacity: 0.7;
		margin-top: -0.35em;
	}

	.chefInfo--wrapper {
		margin-inline: 0.75em;
		display: flex;
		flex-direction: column;
		align-items: center;
		gap: 0.38em;
	}
`;

export default ChefCard;
