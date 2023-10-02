import { info } from "../../../constant/en-us/contact_page.constants";
import { objJoiner } from "../../../utils/helpers/objJoiner";
import Hr from "../Hr";
import { Card } from "./styles/AddressInfoCard.styles";

const AddressInfoCard = () => {
	return (
		<Card>
			<Address />
			<Hr className="divider" />
			<OpenHours />
		</Card>
	);
};

const Address = () => {
	return (
		<div className="info_wrapper">
			<h2 className="title">{info.address.title}</h2>
			<p className="text_info">{objJoiner(info.address.address)}</p>
		</div>
	);
};
const OpenHours = () => {
	const data = info["open-hours"];
	return (
		<div className="info_wrapper">
			<h2 className="title">{data.title}</h2>
			<p className="text_info">{`${data.opening.Day}-${data.closing.Day}, ${data.opening.Hours}-${data.closing.Hours}`}</p>
			{data.contacts.map((phone) => {
				return (
					<p key={crypto.randomUUID()} className="text_info">
						{phone}
					</p>
				);
			})}
		</div>
	);
};

export { AddressInfoCard };
