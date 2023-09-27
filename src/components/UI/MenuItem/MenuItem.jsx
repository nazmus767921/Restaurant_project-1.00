import { Shahi_kebab } from "../../../assets/images";
import { Wrapper } from "./styles/MenuItem.styles";

const MenuItem = () => {
	return (
		<Wrapper>
			<div className="item_image">
				<img src={Shahi_kebab} alt="ItemName" />
			</div>
			<h3>Shahi Kebab</h3>
			<p className="small description">
				Best meat you can get between your teeth.
			</p>
			<h3 className="item_price">$ 29.99</h3>
		</Wrapper>
	);
};

export default MenuItem;
