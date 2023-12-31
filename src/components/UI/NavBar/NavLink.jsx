import styled from "styled-components";
import { ease } from "../../../utils/animation";
import Hr from "../Hr";

const NavLink = ({ children }) => {
	return (
		<>
			<NavLinkWrapper className="nav_link_wrapper">
				<button className="nav_link">{children}</button>
				<Hr className="selector" />
			</NavLinkWrapper>
		</>
	);
};

const NavLinkWrapper = styled.div`
	position: relative;
	overflow: hidden;
	.nav_link {
		font-size: 1em;
		padding: 0.5em 0;
		color: ${(props) => props.theme["text"]};
		transition: all 0.35s ${ease["out-expo"]};
	}
	.selector {
		transform: translateX(-102%);
		transition: all 0.35s ${ease["out-expo"]};
	}
	&:hover {
		.selector {
			transform: translateX(0%);
		}
		.nav_link {
			opacity: 0.6;
		}
	}
`;

export default NavLink;
