import styled from "styled-components";
import Tag from "./Tag";
import HeroTitle from "./HeroTitle";

const Heading = ({ tag, title }) => {
	return (
		<Wrapper>
			{tag ? <Tag>{tag}</Tag> : null}
			<HeroTitle>{title}</HeroTitle>
		</Wrapper>
	);
};

const Wrapper = styled.div`
	display: flex;
	flex-direction: column;
	gap: 0.625rem;
`;

export default Heading;
