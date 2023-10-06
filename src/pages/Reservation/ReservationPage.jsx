import { useState } from "react";
import DateField from "../../components/Form/DateField";
import Label from "../../components/Form/Label";
import SelectX from "../../components/Form/SelectX";
import TextAreaX from "../../components/Form/TextAreaX";
import TextInput from "../../components/Form/TextInput";
import BTNSolid from "../../components/UI/BTNSolid";
import Footer from "../../components/UI/Footer/Footer";
import Tag from "../../components/UI/Tag";
import Title from "../../components/UI/Title";
import {
	form,
	hero,
	submissionStatus,
} from "../../constant/en-us/reservation_page.constants";
import { Main, ReserveFormWrapper } from "./styles/ReservationPage.styles";
import SubmissionStatus from "../../components/UI/SubmissionStatus";

const ReservationPage = () => {
	const [isSubmitting, setIsSubmitting] = useState(false);
	const [IsSubmitted, setIsSubmitted] = useState(false);

	const props = { isSubmitting, setIsSubmitting, IsSubmitted, setIsSubmitted };

	return (
		<Main className="page-container">
			{!IsSubmitted ? (
				<>
					<Hero />
					<ReserveForm {...props} />
				</>
			) : (
				<SubmissionStatus
					title={submissionStatus.title}
					body={submissionStatus.body}
				/>
			)}

			<Footer />
		</Main>
	);
};

const ReserveForm = ({ isSubmitting, setIsSubmitting, setIsSubmitted }) => {
	const handleSubmit = (e) => {
		e.preventDefault();
		setIsSubmitting(true);
		console.log("starts");
		setTimeout(() => {
			setIsSubmitting(false);
			setIsSubmitted(true);
		}, 1500);
	};
	return (
		<ReserveFormWrapper onSubmit={handleSubmit}>
			{/* requirements */}
			<SelectX
				name={form.peopleSelection.name}
				options={form.peopleSelection.options}
				label={form.peopleSelection.label}
			/>
			<Label htmlFor="reservation_date">{form.date.label}</Label>
			<DateField id={"reservation_date"} />
			<Label>{form.specialRequests.label}</Label>
			<TextAreaX name={"special-requests"} label={null} />
			{/* requirements */}
			{/* guest info */}
			<TextInput
				type="text"
				name="name"
				placeholder="Your Name, Sir/ Madam?"
				required
			/>
			<TextInput
				type="email"
				name="email"
				placeholder="Your Phone Number, Sir/ Madam?"
				required
			/>
			<BTNSolid className="submit--btn" isLoading={isSubmitting}>
				{form.btn}
			</BTNSolid>
		</ReserveFormWrapper>
	);
};

const Hero = () => {
	return (
		<div className="hero">
			<div className="header">
				<Tag>{hero.tagline}</Tag>
				<Title>{hero.title}</Title>
			</div>
			<p>{hero.description}</p>
		</div>
	);
};

export default ReservationPage;
