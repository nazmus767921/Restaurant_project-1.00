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
import { form, hero } from "../../constant/en-us/reservation_page.constants";
import { Main, ReserveFormWrapper } from "./styles/ReservationPage.styles";
import styled from "styled-components";
import TextBTN from "../../components/UI/TextBTN";
import { errorhero } from "../../constant/en-us/error_page.constants";
import { paths } from "../../Root.paths";
import { Link } from "react-router-dom";
import { devices } from "../../utils/breakpoints";

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
				<SubmissionSuccess>
					<div>
						<Title>*** We have received**# your request.</Title>
						<p>
							We wish to extend our gratitude for choosing Res2Rant for your
							dining experience. We want to inform you that your reservation
							request has been successfully received, and our team is diligently
							working to secure a seat for you. Rest assured, we will promptly
							confirm your reservation and notify you accordingly.
						</p>
					</div>
					<Link to={paths.home}>
						<TextBTN>{errorhero.btn}</TextBTN>
					</Link>
				</SubmissionSuccess>
			)}

			<Footer />
		</Main>
	);
};

const ReserveForm = ({
	isSubmitting,
	setIsSubmitting,
	IsSubmitted,
	setIsSubmitted,
}) => {
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
				placeholder="Your name, Sir/ Madam?"
				required
			/>
			<TextInput
				type="text"
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

const SubmissionSuccess = styled.div`
	width: 100%;
	min-height: 90vh;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	gap: 1.25em;

	/* typo */
	text-align: center;

	/* elements inside */
	p {
		margin: 0 auto;

		@media screen and (${devices.md}) {
			max-width: 70%;
		}
	}
`;

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
