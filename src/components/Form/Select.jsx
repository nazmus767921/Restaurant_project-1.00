import styled from "styled-components";
import { colors } from "../../utils/colors";

const Select = ({ name, id, value, onChange, options = [] }) => {
	return (
		<SelectWrapper name={name} id={id || name}>
			{options.map((option) => {
				return (
					<option key={option} value={option?.value}>
						{option?.label}
					</option>
				);
			})}
		</SelectWrapper>
	);
};

const SelectWrapper = styled.select`
	display: flex;
	padding: 0.375em 0.75em;
	justify-content: center;
	align-items: center;
	gap: 0.625em;
	/* makeup */
	border-radius: 0.3125em;
	background: ${colors["bg-primary-dark-deep"]};
`;

export default Select;
