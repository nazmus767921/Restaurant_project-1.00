import styled from "styled-components";
import { ease } from "../../utils/animation";
import { devices } from "../../utils/breakpoints";
import { ChickenBowl } from "../../assets/images";

const HeroImage = () => {
	return (
		<HeroImageWrapper>
			<Image>
				<img src={ChickenBowl} alt="" />
			</Image>
		</HeroImageWrapper>
	);
};

const HeroImageWrapper = styled.div`
	position: absolute;
	top: 0;
	bottom: 0;

	/* places the bg-image absolutely in the center */
	display: flex;
	align-items: center;
	justify-content: flex-end;
	/* layout */
	width: 100%;
`;

const Image = styled.div`
	width: 43em;
	aspect-ratio: 1.124/1;
	position: relative;
	left: 16em;
	/* animation */
	@keyframes moveLeft {
		0% {
			left: 0;
		}
		100% {
			left: -16rem;
		}
	}
	animation: moveLeft 2s ${ease["out-expo"]} forwards 0.35s;

	@media screen and (${devices.md}) {
		left: 5em;
		/* animation */
		@keyframes moveLeft {
			0% {
				left: 0;
			}
			100% {
				left: 5rem;
			}
		}
		animation: moveLeft 2s ${ease["out-expo"]} forwards 0.35s;
	}
	@media screen and (${devices["3xl"]}) {
		left: -3em;
		/* animation */
		@keyframes moveLeft {
			0% {
				left: 0;
			}
			100% {
				left: -3rem;
			}
		}
		animation: moveLeft 2s ${ease["out-expo"]} forwards 0.35s;
	}
	@media screen and (${devices["4xl"]}) {
		left: -16em;
		/* animation */
		@keyframes moveLeft {
			0% {
				left: 0;
			}
			100% {
				left: -16rem;
			}
		}
		animation: moveLeft 2s ${ease["out-expo"]} forwards 0.35s;
	}
`;

export default HeroImage;
