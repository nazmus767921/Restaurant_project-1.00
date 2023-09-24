const breakpoints = {
	xs: "375px", //mobile landscape
	sm: "576px", //tablet small
	md: "768px", // tablet
	lg: "991px", // tablet big
	xl: "1024px", // laptop
	"2xl": "1280px", // laptop big
	"3xl": "1536px", // desktop
	"4xl": "1920px", // desktop big
};

export const devices = {
	xs: `min-width: ${breakpoints.xs}`,
	sm: `min-width: ${breakpoints.sm}`,
	md: `min-width: ${breakpoints.md}`,
	lg: `min-width: ${breakpoints.lg}`,
	xl: `min-width: ${breakpoints.xl}`,
	"2xl": `min-width: ${breakpoints["2xl"]}`,
	"3xl": `min-width: ${breakpoints["3xl"]}`,
	"4xl": `min-width: ${breakpoints["4xl"]}`,
};
