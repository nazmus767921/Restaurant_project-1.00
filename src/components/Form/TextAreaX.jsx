import { colors } from "../../utils/colors";
import styled from "styled-components";

const TextAreaX = ({
	name = null,
	value = null,
	placeholder = "type here",
	label,
	onChange,
}) => {
	const handleInputChange = (e) => {
		onChange();
		e.target.style.height = "auto";
		e.target.style.height = `${e.target.scrollHeight}px`;
	};

	return (
		<Wrapper>
			<label htmlFor={name} className="cursive">
				{label || name}
			</label>
			<textarea
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
	input {
		/* layout */
		border: 0;
		border-bottom: 2px solid ${colors.brand};
		background-color: transparent;
		/* typo */
		font-size: 1em;
		line-height: 2em;
	}
`;

export default TextAreaX;
