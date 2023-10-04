import styled from "styled-components";
import MenuCard__ListView from "../../../components/UI/MenuCard/MenuCard__ListView";
import { devices } from "../../../utils/breakpoints";

const ListView__MenuCard = ({ menu }) => {
	return (
		<Wrapper>
			<MenuCard__ListView menu={menu} />
		</Wrapper>
	);
};

const Wrapper = styled.div`
	width: 100%;
	@media screen and (${devices.xl}) {
		width: 70%;
	}
`;

export default ListView__MenuCard;
