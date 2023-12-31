import styled from "styled-components";

const InputRange = ({ name, value, min, max, onChange, id, step }) => {
	return (
		<Wrapper>
			<input
				type="range"
				name={name}
				id={id || name}
				min={min}
				max={max}
				step={step}
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
	gap: 1.75em;
	/* elements inside */
	.slider {
		width: 100%;
		height: 2px;
		-webkit-appearance: none; /* Remove default styling on Webkit browsers */
		appearance: none; /* Remove default styling on non-Webkit browsers */
		background: ${(props) => props.theme["text"]}; /* Track color */
		border-radius: 2em;
	}

	.slider::-webkit-slider-thumb {
		-webkit-appearance: none; /* Remove default thumb styling on Webkit browsers */
		appearance: none; /* Remove default thumb styling on non-Webkit browsers */
		width: 1em;
		aspect-ratio: 1/2;
		background: ${(props) => props.theme["brand"]}; /* Thumb color */
		border-radius: 62.4375em; /* Round thumb shape */
		cursor: pointer;
	}
`;

export default InputRange;
