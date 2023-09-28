import { ProfileID1, ProfileID2 } from "./assets";

export const chefs = [
	{
		id: crypto.randomUUID(),
		name: "Mohammad Ali",
		post: "Master Chef",
		subtitle: "Finest Chef you’ll get in the city.",
		image: ProfileID1,
	},
	{
		id: crypto.randomUUID(),
		name: "Krisna Roy",
		post: "junior Chef",
		subtitle: "Our second best. He has magical hands.",
		image: ProfileID2,
	},
];
