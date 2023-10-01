import styled from "styled-components";
import { colors } from "../../utils/colors";

const TextInput = ({
	type = "text",
	name = null,
	value = null,
	placeholder = "type here",
	label,
	onChange,
	required,
}) => {
	return (
		<Wrapper>
			<label htmlFor={name} className="cursive">
				{label || name}
				{required && "*"}
			</label>
			<input
				type={type}
				id={name}
				name={name}
				placeholder={placeholder}
				value={value}
				required
				onChange={onChange}
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

export default TextInput;
