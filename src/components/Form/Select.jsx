import styled from "styled-components";
import { ease } from "../../utils/animation";

const Select = ({ name, id, value, onChange, options = [] }) => {
	return (
		<SelectWrapper
			name={name}
			id={id || name}
			value={value}
			onChange={onChange}
		>
			{options.map((option) => {
				return (
					<option key={option?.value} value={option?.value}>
						{option?.label}
					</option>
				);
			})}
		</SelectWrapper>
	);
};

const SelectWrapper = styled.select`
	color: inherit;
	width: 100%;
	padding: 0.75em;
	/* makeup */
	border: none;
	appearance: none;
	border-radius: 0.3125em;
	background: ${(props) => props.theme["select"]};
	/* animation */
	transition: opacity 0.35s ${ease["out-expo"]};
	&:hover,
	:focus {
		opacity: 0.7;
	}
`;

export default Select;
