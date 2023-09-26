import { reservation } from "../../../constant/en-us/shared.constants";
import Tag from "../Tag";
import Title from "../Title";
import { Wrapper } from "./styles/Reservation.styles";

const Reservation = () => {
	return (
		<Wrapper>
			<div className="Reservation_content--wrapper">
				<div className="header">
					<Tag>{reservation.tagline}</Tag>
					<Title>{reservation.title}</Title>
				</div>
				<div className="content">
					<p>{reservation.description}</p>
				</div>
			</div>
		</Wrapper>
	);
};

export default Reservation;
