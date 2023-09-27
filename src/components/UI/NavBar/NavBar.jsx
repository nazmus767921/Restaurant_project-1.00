import Logo, { logoContainerRef, logoContainerWidth } from "../Logo";
import { nav } from "../../../constant/en-us/shared.constants";
import { Wrapper } from "./styles/NavBar.styles";
import { createRef, useEffect, useState } from "react";
import NavLink from "./NavLink";

export const navRef = createRef();
const NavBar = () => {
	const [menu_controlStyle, setMenu_controlStyle] = useState({
		width: "fit-content",
	});
	useEffect(() => {
		const width = `"${logoContainerWidth()}px"`;
		setMenu_controlStyle({ width });
	}, [logoContainerRef]);
	return (
		<Wrapper>
			<nav ref={navRef} className="container">
				<Logo />
				<div className="nav_links">
					{nav.links.map((link) => (
						<NavLink key={link.id}>
							{link.title.includes("menu")
								? link.title.split(" ")[1]
								: link.title.split(" ")[0]}
						</NavLink>
					))}
				</div>
				<div className="menu_controls" style={menu_controlStyle}>
					<button className="icon control_btn">{nav.icons.search}</button>
					<button className="icon control_btn hamburger">
						{nav.icons.hamburger.open}
					</button>
				</div>
			</nav>
		</Wrapper>
	);
};

export default NavBar;
