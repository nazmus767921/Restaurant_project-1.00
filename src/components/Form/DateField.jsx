import { useState } from "react";
import styled from "styled-components";
import { colors } from "../../utils/colors";

const DatePicker = styled.input`
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
	-webkit-appearance: none;
	-moz-appearance: none;
	position: relative;
`;

const formatDate = (date) => {
	return date ? date.toISOString().split("T")[0] : ""; // Check if date is valid
};

const DateField = ({ id }) => {
	const [date, setDate] = useState(new Date());

	const handleChange = (e) => {
		const inputDate = new Date(e.target.value);
		if (!isNaN(inputDate.getTime())) {
			// Check if input is a valid date
			const maxValidDate = new Date();
			maxValidDate.setMonth(maxValidDate.getMonth() + 2);
			if (inputDate <= maxValidDate) {
				setDate(inputDate);
			} else {
				// Show error message
			}
		}
	};

	return (
		<div>
			<DatePicker
				type="date"
				id={id}
				value={formatDate(date)}
				onChange={handleChange}
			/>
		</div>
	);
};

export default DateField;
