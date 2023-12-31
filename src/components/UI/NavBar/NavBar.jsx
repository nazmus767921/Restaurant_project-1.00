import Logo from "../Logo";
import { nav } from "../../../constant/en-us/shared.constants";
import { Wrapper } from "./styles/NavBar.styles";
import React, { useState } from "react";
import NavLink from "./NavLink";
import { Link } from "react-router-dom";
import { paths } from "../../../Root.paths";
import MobileSideBar from "./components/MobileSideBar/MobileSideBar";
import { HiOutlineSun } from "react-icons/hi";
import { PiMoonStarsDuotone } from "react-icons/pi";
import { useThemeContext } from "../../../store/contexts/ThemeContext";

const NavLinks = React.memo(() => {
	return (
		<>
			{nav.links.map((linkobj) => (
				<Link to={linkobj.link} key={linkobj.id}>
					<NavLink>
						{linkobj.title.includes("menu")
							? linkobj.title.split(" ")[1].replace(/\**#/g, "")
							: linkobj.title.split(" ")[0]}
					</NavLink>
				</Link>
			))}
		</>
	);
});

NavLinks.displayName = "NavLinks";

const NavBar = () => {
	const [showSideBar, setShowSideBar] = useState(false);

	const { theme, toggleTheme } = useThemeContext();

	// actions
	const toggleShowSidebar = () => {
		setShowSideBar((prev) => !prev);
	};

	return (
		<Wrapper>
			{showSideBar ? <MobileSideBar toggleShowSidebar={toggleShowSidebar} /> : null}
			<nav className="container">
				<Link to={paths.home}>
					<Logo />
				</Link>
				<div className="nav_links">
					<NavLinks />
				</div>
				<div className="menu_controls">
					<button className="icon control_btn" onClick={toggleTheme}>
						{theme === "light" ? <HiOutlineSun /> : <PiMoonStarsDuotone />}
					</button>
					<button className="icon control_btn hamburger" onClick={toggleShowSidebar}>
						{nav.icons.hamburger.open}
					</button>
				</div>
			</nav>
		</Wrapper>
	);
};

React.memo(NavBar, () => true);

export default NavBar;
