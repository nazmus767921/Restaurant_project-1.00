import { reservation } from "../../../constant/en-us/shared.constants";
import Tag from "../Tag";
import Title from "../Title";
import { Wrapper } from "./styles/Reservation.styles";

const Reservation = () => {
	return (
		<Wrapper>
			<div className="Reservation_content--wrapper">
				<Tag>{reservation.tagline}</Tag>
				<Title>{reservation.title}</Title>
			</div>
		</Wrapper>
	);
};

export default Reservation;
