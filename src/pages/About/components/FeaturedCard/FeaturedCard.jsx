import getCursiveStyle from "../../../../utils/helpers/getCursiveStyle";
import { Card } from "./styles/FeaturedCard.styles";

const FeaturedCard = ({ reverse, title, description, image, color }) => {
	return (
		<Card $rev={reverse} $color={color}>
			<div className="image">
				<img src={image} alt={title} />
			</div>
			<div className="content">
				<h2>{getCursiveStyle(title)}</h2>
				<p className="small">{description}</p>
			</div>
		</Card>
	);
};

export default FeaturedCard;
