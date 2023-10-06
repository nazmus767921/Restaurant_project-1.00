export const hero = {
	title: "We'd Love to Hear From You, Please Let Us Know",
	description:
		"Whether you have questions, feedback, or want to make a reservation, our team is here to assist you. Reach out via the form below, and we'll get back to you promptly.",
};

export const submissionStatus = {
	title: "*** We have received**# your message.",
	body: "Thank you for contacting us, sir/ madam. We will connect ith you soon.",
};

export const form = {
	textField: [
		{
			id: crypto.randomUUID(),
			name: "name",
			type: "text",
			placeholder: "Your name, Sir/ Madam?",
		},
		{
			id: crypto.randomUUID(),
			name: "email",
			type: "text",
			placeholder: "Your Phone Number, Sir/ Madam?",
		},
	],
	messageField: {
		name: "message",
		maxCharacters: 500,
		placeholder: "",
	},
};

export const info = {
	address: {
		title: "Our Address",
		address: {
			street: "13/7, Abdus Sattar Road",
			city: "Gazipur",
			district: "Dhaka",
		},
	},
	"open-hours": {
		title: "Open Hours",
		opening: { Day: "Monday", Hours: "10:00 AM" },
		closing: { Day: "Friday", Hours: "9:00 PM" },
		contacts: ["+88 01794-799 114", "+88 01211-115 500"],
	},
};
