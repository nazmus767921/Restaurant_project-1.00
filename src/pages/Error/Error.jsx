import { Link } from "react-router-dom";
import NavBar from "../../components/UI/NavBar/NavBar";
import Tag from "../../components/UI/Tag";
import TextBTN from "../../components/UI/TextBTN";
import Title from "../../components/UI/Title";
import { errorhero } from "../../constant/en-us/error_page.constants";
import { Wrapper } from "./styles/Error.styles";
import { paths } from "../../Root.paths";

const Error = () => {
	return (
		<>
			<NavBar />
			<Wrapper>
				<div className="header">
					<Tag>{errorhero.tagline}</Tag>
					<Title className="error_title">{errorhero.title}</Title>
				</div>
				<Link to={paths.home}>
					<TextBTN>{errorhero.btn}</TextBTN>
				</Link>
			</Wrapper>
		</>
	);
};

export default Error;
