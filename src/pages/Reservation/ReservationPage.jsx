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

const ReservationPage = () => {
	return (
		<Main className="page-container">
			<Hero />
			<ReserveForm />
			<Footer />
		</Main>
	);
};

const ReserveForm = () => {
	return (
		<ReserveFormWrapper>
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
			<BTNSolid className="submit--btn">{form.btn}</BTNSolid>
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
