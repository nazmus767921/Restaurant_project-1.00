import ContactForm from "../../components/Form/ContactForm/ContactForm";
import { AddressInfoCard } from "../../components/UI/AddressInfoCard";
import { hero } from "../../constant/en-us/contact_page.constants";
import { Main } from "./styles/ContactPage.styles";
import spanTool from "span-tool";

const ContactPage = () => {
	return (
		<Main className="page-container">
			<HeroWrapper />
			<ContactForm />
			<InfoSection />
		</Main>
	);
};

const InfoSection = () => {
	return (
		<div className="infoCard_section">
			<AddressInfoCard />
		</div>
	);
};

const HeroWrapper = () => {
	return (
		<div className="hero_wrapper">
			<h2>{spanTool(hero.title, "Please Let Us Know", "title--colored")}</h2>
			<p className="description">{hero.description}</p>
		</div>
	);
};

export default ContactPage;
