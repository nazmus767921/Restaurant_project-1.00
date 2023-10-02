import { Form } from "react-router-dom";
import { FormWrapper } from "./styles/ContactForm.styles";
import TextInput from "../TextInput";
import TextAreaX from "../TextAreaX";
import BTNSolid from "../../UI/BTNSolid";

const ContactForm = ({ className }) => {
	return (
		<FormWrapper className={className}>
			<Form className="form-control">
				<TextInput
					type="text"
					name="name"
					placeholder="Your name, Sir/ Madam?"
					required
				/>
				<TextInput
					type="text"
					name="email"
					placeholder="Your Phone Number, Sir/ Madam?"
					required
				/>
				<TextAreaX name="message" maxLength="500" />
				<BTNSolid className="submit--btn">Submit</BTNSolid>
			</Form>
		</FormWrapper>
	);
};

export default ContactForm;
