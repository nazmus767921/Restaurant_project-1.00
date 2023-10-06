import styled from "styled-components";
import { colors } from "../../utils/colors";
import { ease } from "../../utils/animation";

const BTNSolid = ({ children, className = null, isLoading = false }) => {
	return (
		<Button
			className={`${className} ${isLoading === true ? "loading" : ""}`}
		>
			<span className="spinner"></span>
			<span className="text">{children}</span>
		</Button>
	);
};

const Button = styled.button`
	/* layout */
	position: relative;
	padding: 0.5em 1.25em;
	/* makeup */
	background-color: ${colors.brand};
	color: ${colors["text-white"]};
	border-radius: 0.325em;
	/* typo */
	font-size: 1em;
	font-weight: 700;
	/* animation */
	transition: opacity 0.35s ${ease["out-expo"]};

	/* states */
	&:hover,
	:focus {
		opacity: 0.7;
	}

	.text {
		position: relative;
		z-index: 1;
	}
	&.loading .text {
		opacity: 0;
	}

	/* Style the loading spinner */
	.spinner {
		border: 4px solid rgba(255, 255, 255, 0.3);
		border-top: 4px solid ${colors["text-white"]};
		border-radius: 50%;
		width: 20px;
		height: 20px;
		position: absolute;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
		animation: spin 1s linear infinite;
		display: none; /* Initially hide the spinner */
	}

	/* Define the spinner animation */
	@keyframes spin {
		0% {
			transform: translate(-50%, -50%) rotate(0deg);
		}
		100% {
			transform: translate(-50%, -50%) rotate(360deg);
		}
	}

	/* Add a class to show the spinner when the button is in a loading state */
	&.loading .spinner {
		display: block;
	}

	/* Add a class to disable the button when it's in a loading state */
	&.loading {
		pointer-events: none;
		opacity: 0.8;
	}
`;

export default BTNSolid;
