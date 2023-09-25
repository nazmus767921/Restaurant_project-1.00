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

const ChefInfo = () => {
	return (
		<>
			<p className="chef_pitch small">Finest Chef you’ll get in the city.</p>
			<h3 className="chef_name cursive">Mohammad Ali</h3>
			<h5 className="chef_post">Master Chef</h5>
		</>
	);
};

const ChefCard = () => {
	return (
		<Wrapper>
			<ChefImage />
			<ChefInfo />
		</Wrapper>
	);
};

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

const OverFlowHidden = styled.div`
	aspect-ratio: 1/1;
	display: flex;
	justify-content: center;
	align-items: center;
	border-radius: 999px;
	overflow: hidden;
`;

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
	}
`;

export default ChefCard;
