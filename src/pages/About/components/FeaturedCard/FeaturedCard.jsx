import getCursiveStyle from "../../../../utils/helpers/getCursiveStyle";
import { Card } from "./styles/FeaturedCard.styles";

const FeaturedCard = ({reverse}) => {
	return (
		<Card $rev={reverse}>
			<div className="image">
				<img src="" alt="" />
			</div>
			<div className="content">
				<h2>{getCursiveStyle("*** Fresh Products")}</h2>
				<p className="small">
					Lorem Ipsum is simply dummy text of the printing and
				</p>
			</div>
		</Card>
	);
};

export default FeaturedCard;
