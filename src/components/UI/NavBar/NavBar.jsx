import Logo from "../Logo";
import { nav } from "../../../constant/en-us/shared.constants";
import { Wrapper } from "./styles/NavBar.styles";
import { createRef, useState } from "react";
import NavLink from "./NavLink";
import { Link } from "react-router-dom";
import { paths } from "../../../Root.paths";
import MobileSideBar from "./components/MobileSideBar/MobileSideBar";

export const navRef = createRef();

const NavBar = () => {
	const [showSideBar, setShowSideBar] = useState(false);

	// actions
	const toggleShowSidebar = () => {
		setShowSideBar((prev) => !prev);
		console.log(showSideBar);
	};

	return (
		<Wrapper>
			{showSideBar ? (
				<MobileSideBar toggleShowSidebar={toggleShowSidebar} />
			) : null}
			<nav ref={navRef} className="container">
				<Link to={paths.home}>
					<Logo />
				</Link>
				<div className="nav_links">
					{nav.links.map((link) => (
						<NavLink key={link.id}>
							{link.title.includes("menu")
								? link.title.split(" ")[1]
								: link.title.split(" ")[0]}
						</NavLink>
					))}
				</div>
				<div className="menu_controls">
					<button className="icon control_btn">{nav.icons.search}</button>
					<button
						className="icon control_btn hamburger"
						onClick={toggleShowSidebar}
					>
						{nav.icons.hamburger.open}
					</button>
				</div>
			</nav>
		</Wrapper>
	);
};

export default NavBar;
