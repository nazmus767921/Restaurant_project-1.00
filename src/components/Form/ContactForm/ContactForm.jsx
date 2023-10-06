import { Form } from "react-router-dom";
import { FormWrapper } from "./styles/ContactForm.styles";
import TextInput from "../TextInput";
import TextAreaX from "../TextAreaX";
import BTNSolid from "../../UI/BTNSolid";
import { useState } from "react";
import SubmissionStatus from "../../UI/SubmissionStatus";
import {
	form,
	submissionStatus,
} from "../../../constant/en-us/contact_page.constants";

const ContactForm = ({ className }) => {
	const [isSubmitting, setIsSubmitting] = useState(false);
	const [IsSubmitted, setIsSubmitted] = useState(false);

	const handleSubmit = (e) => {
		e.preventDefault();
		setIsSubmitting(true);
		console.log("starts");
		setTimeout(() => {
			setIsSubmitting(false);
			setIsSubmitted(true);
		}, 1500);
	};
	if (!IsSubmitted) {
		return (
			<FormWrapper className={className} onSubmit={handleSubmit}>
				<Form className="form-control">
					{form.textField.map((c) => {
						const { id, name, type, placeholder } = c;
						return (
							<TextInput
								key={id}
								type={type}
								name={name}
								placeholder={placeholder}
								required
							/>
						);
					})}
					<TextAreaX
						name={form.messageField.name}
						maxLength={form.messageField.maxCharacters}
					/>
					<BTNSolid className="submit--btn" isLoading={isSubmitting}>
						Submit
					</BTNSolid>
				</Form>
			</FormWrapper>
		);
	}
	if (IsSubmitted) {
		return (
			<SubmissionStatus
				title={submissionStatus.title}
				body={submissionStatus.body}
			/>
		);
	}
};

export default ContactForm;
