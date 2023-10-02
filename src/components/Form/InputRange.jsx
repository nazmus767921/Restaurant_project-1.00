import styled from "styled-components";
import { colors } from "../../utils/colors";

const InputRange = ({ name, value, onChange }) => {
	return (
		<Wrapper>
			<label htmlFor="price">price</label>
			<input
				type="range"
				name={name}
				id="price"
				min={0}
				max={100}
				step={10}
				aria-label="My Input Range"
				// value={value}
				// onChange={handleChange}
				className="slider"
			/>
		</Wrapper>
	);
};

const Wrapper = styled.div`
	width: 100%;
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	align-items: center;
	padding-inline: 1.25em;
	gap: 1.75em;
	/* elements inside */
	label {
		font-size: 0.75em;
		text-transform: capitalize;
	}
	.slider {
		width: 100%;
		height: 2px;
		-webkit-appearance: none; /* Remove default styling on Webkit browsers */
		appearance: none; /* Remove default styling on non-Webkit browsers */
		background: ${colors["text-white"]}; /* Track color */
		border-radius: 2em;
	}

	.slider::-webkit-slider-thumb {
		-webkit-appearance: none; /* Remove default thumb styling on Webkit browsers */
		appearance: none; /* Remove default thumb styling on non-Webkit browsers */
		width: 0.625em;
		aspect-ratio: 1/2;
		height: 20px;
		background: ${colors.brand}; /* Thumb color */
		border-radius: 62.4375em; /* Round thumb shape */
		cursor: pointer;
	}
`;

export default InputRange;