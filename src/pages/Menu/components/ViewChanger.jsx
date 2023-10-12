import React from "react";
import { PiListBold } from "react-icons/pi";
import { TfiLayoutGrid2Alt } from "react-icons/tfi";
import styled from "styled-components";
import { ease } from "../../../utils/animation";

const ViewChanger = React.memo(({ update_gridView, update_listView, grid_view }) => {
	return (
		<Wrapper className="viewChanger--wrapper">
			<div className={`view--icon ${grid_view ? "active" : null}`} onClick={update_gridView}>
				<TfiLayoutGrid2Alt />
			</div>
			<div className={`view--icon ${grid_view ? null : "active"}`} onClick={update_listView}>
				<PiListBold />
			</div>
		</Wrapper>
	);
});

ViewChanger.displayName = "ViewChanger";

const Wrapper = styled.div`
	display: flex;
	flex-direction: row;
	gap: 1.25em;

	/* styling class */
	.active {
		color: ${(props) => props.theme["brand"]};
	}
	/* elements inside */
	.view--icon {
		width: 1.25em;
		height: 1.25em;
		/* animation */
		transition: color 0.35s ${ease["out-expo"]};
		&:hover {
			opacity: 0.5;
		}
		&:focus {
			color: ${(props) => props.theme["brand"]};
		}
	}
`;

export default ViewChanger;
