import {
	OfferingImageId1,
	OfferingImageId2,
	OfferingImageId3,
} from "./assets/offerings";

export const hero = {
	title: "we are specialized in spicy**# modern**# fusion**# food",
	tagline: "art of cooking",
	description:
		"At Res2Rant, we're not just a restaurant. we're a culinary journey. Our team of expert chefs, led by Executive Chef Mohammad Ali, blends traditional flavors with avant-garde creativity to craft dishes that are as visually stunning as they are delectable.",
};

export const offerings = [
	{
		id: crypto.randomUUID(),
		title: "Fresh Products",
		description: "Lorem Ipsum is simply dummy text of the printing",
		image: OfferingImageId1,
	},
	{
		id: crypto.randomUUID(),
		title: "Skilled Chefs",
		description: "Lorem Ipsum is simply dummy text of the printing",
		image: OfferingImageId2,
	},
	{
		id: crypto.randomUUID(),
		title: "Vegan Cuisine",
		description: "Lorem Ipsum is simply dummy text of the printing",
		image: OfferingImageId3,
	},
];
