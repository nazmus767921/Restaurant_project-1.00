import { PiListBold } from "react-icons/pi";
import { TfiLayoutGrid2Alt } from "react-icons/tfi";
import { useProductsContext } from "../../../store/contexts/products_context";
import styled from "styled-components";
import { colors } from "../../../utils/colors";
import { ease } from "../../../utils/animation";

const ViewChanger = () => {
	const { update_gridView, update_listView } = useProductsContext();
	return (
		<Wrapper className="viewChanger--wrapper">
			<div className="view--icon" onClick={update_gridView}>
				<TfiLayoutGrid2Alt />
			</div>
			<div className="view--icon" onClick={update_listView}>
				<PiListBold />
			</div>
		</Wrapper>
	);
};

const Wrapper = styled.div`
	display: flex;
	flex-direction: row;
	gap: 1.25em;
	/* elements inside */
	.view--icon {
		width: 1.25em;
		height: 1.25em;
		/* animation */
		transition: color 0.35s ${ease["out-expo"]};
		&:hover,
		:focus {
			color: ${colors.brand};
		}
	}
`;

export default ViewChanger;
