import styled from "styled-components";
// import { navRef } from "../../../../../components/UI/NavBar/NavBar";
// import { useEffect, useState } from "react";
import { devices } from "../../../../../utils/breakpoints";

// const Getnavheight = () => {
// 	const [NavHeight, setNavHeight] = useState(0);

// 	useEffect(() => {
// 		if (!navRef.current) return;
// 		setNavHeight(navRef.current.clientHeight);
// 	}, [navRef]);

// 	if (!navRef.current) return 0;
// 	return NavHeight;
// };

export const Wrapper = styled.div`
	/* i want this div to be 100% to screen even though it cotainer has paddings using calc() */
	width: 100%;
	min-width: 100vw;
	margin: 0 calc(-50vw + 50%);

	display: grid;
	min-height: 100vh;
	/* min-height: calc(100dvh - 0); */
	/* min-height: calc(100vh - 0); */
	grid-template-columns: 1fr;
	align-content: center;
	position: relative;
	overflow-x: hidden;

	.content {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		z-index: 10;
		gap: 1.75rem;
		padding: 0 2em;
	}
	.bg-image {
		position: absolute;
		width: 19.375em;
		aspect-ratio: 1;
		height: 22.6875rem;
		right: -12.625em;
		bottom: 20%;
		@media only screen and (${devices.md}) {
			width: 30em;
			right: -12.625em;
			bottom: 30%;
		}

		filter: drop-shadow(-7px 2px 16px rgba(0, 0, 0, 0.44))
			drop-shadow(-28px 8px 29px rgba(0, 0, 0, 0.38))
			drop-shadow(-63px 18px 39px rgba(0, 0, 0, 0.23))
			drop-shadow(-111px 31px 46px rgba(0, 0, 0, 0.07))
			drop-shadow(-174px 49px 51px rgba(0, 0, 0, 0.01)) blur(2px);

		@media screen and (${devices.md}) {
			filter: drop-shadow(-7px 2px 16px rgba(0, 0, 0, 0.44))
				drop-shadow(-28px 8px 29px rgba(0, 0, 0, 0.38))
				drop-shadow(-63px 18px 39px rgba(0, 0, 0, 0.23))
				drop-shadow(-111px 31px 46px rgba(0, 0, 0, 0.07));
		}
	}
`;
