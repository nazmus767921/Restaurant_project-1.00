import { colors } from "../../utils/colors";
import styled from "styled-components";

const TextAreaX = ({
	name = null,
	value = null,
	placeholder = "Please, tell us here",
	label,
	onChange,
	maxLength = null,
}) => {
	const handleInputChange = (e) => {
		// onChange();
		e.target.style.height = "auto";
		e.target.style.height = `${e.target.scrollHeight}px`;
	};

	return (
		<Wrapper>
			<label htmlFor={name} className="cursive">
				{label || name}
			</label>
			<textarea
				maxLength={maxLength}
				rows="1"
				id={name}
				name={name}
				placeholder={placeholder}
				value={value}
				onChange={handleInputChange}
				style={{ overflow: "hidden" }}
			/>
		</Wrapper>
	);
};

const Wrapper = styled.div`
	display: flex;
	flex-direction: column;
	gap: 0em;
	/* element inside */
	label {
		font-size: 1.85em;
		color: ${colors.brand};
		text-transform: capitalize;
	}
	textarea {
		/* layout */
		max-width: 100%;
		min-width: 100%;
		min-height: 2.5em;
		max-height: 16em;
		border: 0;
		border-bottom: 2px solid ${colors.brand};
		background-color: transparent;
		/* typo */
		font-size: 1em;
		font-family: "Libre Franklin", sans-serif;
		line-height: 2em;
	}
`;

export default TextAreaX;
