import { chefs } from "./chefs";

export const hero = {
	title: "taste the difference**", //** for cursive styling
	tagline: "more flavor for less",
	description: "Bringing heat to your meat. No one can compete with our meat",
};

export const menu = {
	title: "Popular Menus**", //** for cursive styling used by getCursiveStyling.jsx
	btn: "See full Menu",
};

export const restaurantGallery = {
	title: "Good food** and Great** vibes",
	description:
		"The premium taste that yearns to be savored, ground beef between your teeth",
};

export const chefsDetails = {
	title: "Meet Our Excellent Chefs",
	tagline: "The Artists of cooking",
	chefs: [...chefs],
};
