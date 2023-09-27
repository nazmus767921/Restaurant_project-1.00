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

const TextContent = ({ children, className }) => {
	const content = getCursiveStyle(children);
	return (
		<>
			<h2 className={className}>{content}</h2>
		</>
	);
};

const Title = ({ children, deco = false, className }) => {
	return (
		<Wrapper>
			{deco ? <Decorators /> : null}
			<TextContent className={className}>{children}</TextContent>
			{deco ? <Decorators /> : null}
		</Wrapper>
	);
};

const Decorator_wrapper = styled.div`
	width: 4em;
	max-width: 7.875em;
	flex-grow: 0;
	flex-shrink: 0;
`;

const Wrapper = styled.div`
	display: flex;
	gap: 0.5em;
	justify-content: center;
	align-items: center;

	h2 {
		width: fit-content;
		text-align: center;
	}
`;

export default Title;
