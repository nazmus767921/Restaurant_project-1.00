import styled from "styled-components";
import { colors } from "../../utils/colors";

const InputRange = ({ name, value, min, max, onChange, id }) => {
	return (
		<Wrapper>
			<label htmlFor="price">price</label>
			<input
				type="range"
				name={name}
				id={id || name}
				min={min}
				max={max}
				step={1}
				value={value}
				onChange={onChange}
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
		width: 1em;
		aspect-ratio: 1/2;
		background: ${colors.brand}; /* Thumb color */
		border-radius: 62.4375em; /* Round thumb shape */
		cursor: pointer;
	}
`;

export default InputRange;
