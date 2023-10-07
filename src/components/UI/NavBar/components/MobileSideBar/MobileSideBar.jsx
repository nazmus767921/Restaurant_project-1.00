import { Link } from "react-router-dom";
import { nav } from "../../../../../constant/en-us/shared.constants";
import getCursiveStyle from "../../../../../utils/helpers/getCursiveStyle";
import SideBarLink from "./components/SideBarLink";
import { Dark_overlay, Main } from "./styles/MobileSideBar.styles";
import TextBTNDoubleLines from "../../../TextBTNDoubleLines";
import { paths } from "../../../../../Root.paths";

const MobileSideBar = ({ toggleShowSidebar }) => {
	const links = nav.links;
	return (
		<>
			<Dark_overlay />
			<Main>
				<button type="button" className="icon" onClick={toggleShowSidebar}>
					{nav.icons.cross}
				</button>
				<div className="links">
					{links.map((linkobj) => {
						const { id, link, title } = linkobj;
						if (link !== paths.reservation)
							return (
								<Link to={link} key={id} onClick={toggleShowSidebar}>
									<SideBarLink>{getCursiveStyle(title)}</SideBarLink>
								</Link>
							);
					})}
				</div>
				<Link to={nav.btn.link} onClick={toggleShowSidebar}>
					<TextBTNDoubleLines className="reservation--button">
						{nav.btn.title}
					</TextBTNDoubleLines>
				</Link>
			</Main>
		</>
	);
};

export default MobileSideBar;
