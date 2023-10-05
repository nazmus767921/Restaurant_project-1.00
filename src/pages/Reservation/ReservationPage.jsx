import DateField from "../../components/Form/DateField";
import Label from "../../components/Form/Label";
import SelectX from "../../components/Form/SelectX";
import Tag from "../../components/UI/Tag";
import Title from "../../components/UI/Title";
import { form, hero } from "../../constant/en-us/reservation_page.constants";
import { Main, ReserveFormWrapper } from "./styles/ReservationPage.styles";

const ReservationPage = () => {
	return (
		<Main className="page-container">
			<Hero />
			<ReserveForm />
			{/* <ContactForm /> */}
		</Main>
	);
};

const ReserveForm = () => {
	return (
		<ReserveFormWrapper>
			<SelectX
				name={form.peopleSelection.name}
				options={form.peopleSelection.options}
				label={form.peopleSelection.label}
			/>
			<div>
				<Label htmlFor="reservation_date">{form.date.label}</Label>
				<DateField id={"reservation_date"} />
			</div>
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
