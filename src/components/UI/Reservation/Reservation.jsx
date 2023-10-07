import { Link } from "react-router-dom";
import { reservation } from "../../../constant/en-us/shared.constants";
import Tag from "../Tag";
import TextBTNDoubleLines from "../TextBTNDoubleLines";
import Title from "../Title";
import { Wrapper } from "./styles/Reservation.styles";
import { paths } from "../../../Root.paths";
import { useThemeContext } from "../../../store/contexts/ThemeContext";

const Reservation = () => {
	const { theme } = useThemeContext();
	const darkShadows = {
		boxShadow:
			"0px -8px 17px 0px rgba(0, 0, 0, 0.83), 0px -30px 30px 0px rgba(0, 0, 0, 0.72),	0px -68px 41px 0px rgba(0, 0, 0, 0.43), 0px -121px 48px 0px rgba(0, 0, 0, 0.13), 0px -188px 53px 0px rgba(0, 0, 0, 0.02), 0px 8px 17px 0px rgba(0, 0, 0, 0.83), 0px 30px 30px 0px rgba(0, 0, 0, 0.72), 	0px 68px 41px 0px rgba(0, 0, 0, 0.43)",
	};
	// const lightShadows = {
	// 	boxShadow:
	// 		"0px -8px 17px 0px rgba(255, 255, 255, 0.83), 0px -30px 30px 0px rgba(255, 255, 255, 0.72),	0px -68px 41px 0px rgba(255, 255, 255, 0.43), 0px -121px 48px 0px rgba(255, 255, 255, 0.13), 0px -188px 53px 0px rgba(255, 255, 255, 0.02), 0px 8px 17px 0px rgba(255, 255, 255, 0.83), 0px 30px 30px 0px rgba(255, 255, 255, 0.72), 	0px 68px 41px 0px rgba(255, 255, 255, 0.43)",
	// };
	return (
		<Wrapper style={theme === "light" ? null : darkShadows}>
			<div className="Reservation_content--wrapper">
				<div className="header">
					<Tag>{reservation.tagline}</Tag>
					<Title>{reservation.title}</Title>
				</div>
				<div className="content">
					<p>{reservation.description}</p>
					<Link to={paths.reservation}>
						<TextBTNDoubleLines>{reservation.btn}</TextBTNDoubleLines>
					</Link>
				</div>
			</div>
		</Wrapper>
	);
};

export default Reservation;
