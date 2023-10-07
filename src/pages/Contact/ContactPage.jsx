import ContactForm from "../../components/Form/ContactForm/ContactForm";
import { AddressInfoCard } from "../../components/UI/AddressInfoCard";
import Footer from "../../components/UI/Footer/Footer";
import Reservation from "../../components/UI/Reservation/Reservation";
import { hero } from "../../constant/en-us/contact_page.constants";
import { Main } from "./styles/ContactPage.styles";
import spanTool from "span-tool";

const ContactPage = () => {
	return (
		<Main className="page-container">
			<HeroWrapper />
			<div className="form_wrapper">
				<ContactForm className="contact_form"/>
				<InfoSection />
			</div>
			<Reservation />
			<Footer />
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
			<h2>{spanTool(hero.title, "Please Let Us Know", "title--colored cursive")}</h2>
			<p className="hero_description">{hero.description}</p>
		</div>
	);
};

export default ContactPage;
