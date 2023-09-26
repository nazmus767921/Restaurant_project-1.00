import styled from "styled-components";
import { colors } from "../../../../../utils/colors";
import { devices } from "../../../../../utils/breakpoints";

const ChefImage = ({ image, alt }) => {
	return (
		<OverFlowHidden>
			<ChefProfileImageWrapper>
				<img src={image} alt={alt} />
			</ChefProfileImageWrapper>
			<div className="gradientOverlay" />
		</OverFlowHidden>
	);
};

const ChefInfo = ({ description, name, post }) => {
	return (
		<div className="chefInfo--wrapper">
			<p className="chef_pitch small">{description}</p>
			<h3 className="cursive chef_name">{name}</h3>
			<h5 className="chef_post">{post}</h5>
		</div>
	);
};

const ChefCard = ({ name, post, subtitle, image }) => {
	return (
		<Wrapper>
			<ChefImage image={image} alt={name} />
			<ChefInfo name={name} description={subtitle} post={post} />
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
	overflow: hidden;
	border-radius: 999px;
`;

// chefImage Styles
const OverFlowHidden = styled.div`
	width: 100%;
	aspect-ratio: 1/1;
	display: flex;
	justify-content: center;
	align-items: center;
	border-radius: 999px;
	overflow: hidden;
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

// chefCard styles
const Wrapper = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	gap: 0.38em;
	width: 100%;
	padding: 0.62em;
	text-align: center;

	.chef_pitch {
	}
	h3.chef_name {
		color: ${colors["text-white"]};
		@media screen and (${devices.xl}) {
			font-size: 3.375em;
		}
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
		@media screen and (${devices.xl}) {
			gap: 0.825em;
		}
	}
`;

export default ChefCard;
