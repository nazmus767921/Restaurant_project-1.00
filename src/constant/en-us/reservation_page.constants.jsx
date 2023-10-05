import { form as contactForm } from "./contact_page.constants";

export const hero = {
	title: "*** Make an online**# Reservation",
	tagline: "we saved you a seat",
	description:
		"Your dining experience matters to us, and we can't wait to welcome you to our restaurant. Let's make your visit unforgettable!",
};

export const form = {
	peopleSelection: {
		label: "How many people?",
		name: "people",
		options: [
			{ value: ">10", label: "More than 10 People" },
			{ value: "10", label: "10 People" },
			{ value: "9", label: "9 People" },
			{ value: "8", label: "8 People" },
			{ value: "7", label: "7 People" },
			{ value: "6", label: "6 People" },
			{ value: "5", label: "5 People" },
			{ value: "4", label: "4 People" },
			{ value: "3", label: "3 People" },
			{ value: "2", label: "2 People" },
			{ value: "1", label: "1 People" },
		],
	},
	date: {
		label: "When would you like to come?",
	},
	specialRequests: {
		label: "Additional Details & Special Requests",
	},
	guestDetailsForm: [...contactForm],
	btn: "Book",
};
