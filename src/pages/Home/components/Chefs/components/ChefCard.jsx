import styled from "styled-components";
import { devices } from "../../../../../utils/breakpoints";
import { useThemeContext } from "../../../../../store/contexts/ThemeContext";
import { darkTheme } from "../../../../../theme";

const ChefImage = ({ image, alt }) => {
	const { theme } = useThemeContext();
	const gradientOverlay = {
		background: `linear-gradient(0deg, ${darkTheme["bg-primary"]} 18.39%,	rgba(25, 25, 25, 0) 55.81%)`,
	};
	return (
		<OverFlowHidden>
			<ChefProfileImageWrapper>
				<img src={image} alt={alt} />
			</ChefProfileImageWrapper>
			<div
				className="gradientOverlay"
				style={theme === "dark" ? gradientOverlay : null}
			/>
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
	filter: drop-shadow(1px 1px 2px rgba(0, 0, 0, 0.2))
		drop-shadow(3px 3px 4px rgba(0, 0, 0, 0.17))
		drop-shadow(6px 7px 5px rgba(0, 0, 0, 0.1))
		drop-shadow(11px 12px 6px rgba(0, 0, 0, 0.03))
		drop-shadow(17px 18px 7px rgba(0, 0, 0, 0));
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
		/* layout */
		width: 110%;
		height: 110%;
		position: absolute;
		top: 0;
		bottom: 0;
		right: 0;
		left: 0;
		z-index: 10;
		/* for touch devices */
		pointer-events: none;
		/* makeup */

		/* media queries */
		@media screen and (${devices["2xl"]}) {
			display: none;
		}
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

	h3 {
		color: ${(props) => props.theme["text"]};
		font-size: 1.525em;

		@media screen and (${devices.md}) {
			font-size: 1.925em;
		}
		@media screen and (${devices.xl}) {
			font-size: 2.75em;
		}
	}

	h5 {
		font-size: 0.9em;
		@media screen and (${devices.md}) {
			font-size: 1em;
		}
	}
	.chef_post {
		color: ${(props) => props.theme["brand"]};
		opacity: 0.7;
		margin-top: -0.35em;
	}

	.chefInfo--wrapper {
		margin-inline: 0.75em;
		display: flex;
		flex-direction: column;
		align-items: center;
		gap: 0.525em;
		@media screen and (${devices.xl}) {
			gap: 0.5em;
		}
	}
`;

export default ChefCard;
