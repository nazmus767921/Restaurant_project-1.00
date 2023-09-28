import { GiForkKnifeSpoon, GiKnifeFork } from "react-icons/gi";
import { LuSearch, LuUtensilsCrossed } from "react-icons/lu";
import { SiFacebook, SiInstagram } from "react-icons/si";
import BGImage from "./assets/Blue_bowl_chicken.png";
import { paths } from "../../Root.paths";

export const sharedImages = {
	bg: BGImage,
};

export const nav = {
	links: [
		{
			id: crypto.randomUUID(),
			title: "Home Page**#",
			link: "/",
		},
		{
			id: crypto.randomUUID(),
			title: "About us**#",
			link: "/about",
		},
		{
			id: crypto.randomUUID(),
			title: "Our menus**#",
			link: "/menus",
		},
		{
			id: crypto.randomUUID(),
			title: "Contact us**#",
			link: "/contact",
		},
	],

	btn: "Make Reservation",

	icons: {
		search: <LuSearch />,
		hamburger: {
			open: <GiForkKnifeSpoon />,
			close: <GiKnifeFork />,
		},
		cross: <LuUtensilsCrossed />,
	},
};

export const reservation = {
	title: "*** Make an online**# Reservation",
	tagline: "we saved you a seat",
	description:
		"When the going gets tough, the tough get grilling. Bringing heat to your meat. No one can compete with our meat.",
	btn: "Make Reservation",
};

export const footer = {
	address: {
		street: "13/7, Abdus Sattar Road",
		city: "Gazipur",
		district: "Dhaka",
	},
	"nav-links": [
		{
			id: crypto.randomUUID(),
			title: "Our menus",
			link: paths.menu,
		},
		{
			id: crypto.randomUUID(),
			title: "Reservation",
			link: paths.reservation,
		},
		{
			id: crypto.randomUUID(),
			title: "About",
			link: paths.about,
		},
		{
			id: crypto.randomUUID(),
			title: "Contact us",
			link: paths.contact,
		},
	],

	socials: [
		{
			id: crypto.randomUUID(),
			title: "Facebook",
			link: "https://www.facebook.com/nazmus767921",
			icon: <SiFacebook />,
		},
		{
			id: crypto.randomUUID(),
			title: "Instagram",
			link: "https://www.instagram.com/nazmus767921",
			icon: <SiInstagram />,
		},
	],
	"footer-extras": [
		{
			id: crypto.randomUUID(),
			title: "© Copyright Nazmus767921",
			link: null,
		},
		{
			id: crypto.randomUUID(),
			title: "All Right Reserved.",
			link: null,
		},
		{
			id: crypto.randomUUID(),
			title: "Privacy policy",
			link: null,
		},
		{
			id: crypto.randomUUID(),
			title: "Terms of use",
			link: null,
		},
	],
};
