import styled from "styled-components";
import { WaveDeco } from "../../assets/images";
import getCursiveStyle from "../../utils/helpers/getCursiveStyle";

const Decorators = () => {
	return (
		<Decorator_wrapper>
			<img src={WaveDeco} alt="curvy lines" />
		</Decorator_wrapper>
	);
};

const TextContent = ({ children }) => {
	const content = getCursiveStyle(children);
	return (
		<>
			<h2>{content}</h2>
		</>
	);
};

const Title = ({ children }) => {
	return (
		<Wrapper>
			<Decorators />
			<TextContent>{children}</TextContent>
			<Decorators />
		</Wrapper>
	);
};

const Decorator_wrapper = styled.div`
	width: 4em;
	max-width: 7.875em;
`;

const Wrapper = styled.div`
	display: flex;
	gap: 0.5em;
	justify-content: center;
	align-items: center;
`;

export default Title;
