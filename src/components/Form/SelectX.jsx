import styled from "styled-components";
import { colors } from "../../utils/colors";
import { IoMdArrowDropdown } from "react-icons/io";
import Label from "./Label";

const SelectX = ({ name, id, label, value, onChange, options = [] }) => {
	return (
		<Wrapper>
			{label ? <Label htmlFor={id || name}>{label}</Label> : null}
			<ElementContainer>
				<div className="icon--wrapper">
					<IoMdArrowDropdown style={{ color: colors.brand }} />
				</div>
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
			</ElementContainer>
		</Wrapper>
	);
};

const SelectWrapper = styled.select`
	/* layout */
	border: 0;
	border-bottom: 2px solid ${(props) => props.theme["brand"]};
	background-color: ${(props) => props.theme["bg-primary"]};
	/* typo */
	font-size: 1em;
	line-height: 2em;

	color: inherit;
	width: 100%;
	/* makeup */
	appearance: none;
`;

const ElementContainer = styled.div`
	position: relative;
	.icon--wrapper {
		display: flex;
		justify-content: center;
		align-items: center;
		position: absolute;
		top: 0;
		right: 0;
		bottom: 0;
		padding: 0.25em;
		/* elements inside */
	}
`;

const Wrapper = styled.div`
	display: flex;
	flex-direction: column;
	gap: 1em;
`;

export default SelectX;
