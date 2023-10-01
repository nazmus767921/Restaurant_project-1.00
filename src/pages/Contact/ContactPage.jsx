import ContactForm from "../../components/Form/ContactForm/ContactForm";
import { hero } from "../../constant/en-us/contact_page.constants";
import { Main } from "./styles/ContactPage.styles";
import spanTool from "span-tool";

const ContactPage = () => {
	return (
		<Main className="page-container">
			<div className="hero_wrapper">
				<h2>{spanTool(hero.title, "Please Let Us Know", "title--colored")}</h2>
				<p className="description">{hero.description}</p>
			</div>
			<ContactForm />
		</Main>
	);
};

export default ContactPage;
