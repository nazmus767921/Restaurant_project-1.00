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
			id: 1,
			title: "Home Page**#",
			link: "/",
		},
		{
			id: 2,
			title: "About us**#",
			link: "/about",
		},
		{
			id: 3,
			title: "Our menus**#",
			link: "/menus",
		},
		{
			id: 4,
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
			id: 1,
			title: "Our menus",
			link: paths.menu,
		},
		{
			id: 2,
			title: "Reservation",
			link: paths.reservation,
		},
		{
			id: 3,
			title: "About",
			link: paths.about,
		},
		{
			id: 4,
			title: "Contact us",
			link: paths.contact,
		},
	],

	socials: [
		{
			id: 1,
			title: "Facebook",
			link: "https://www.facebook.com/nazmus767921",
			icon: <SiFacebook />,
		},
		{
			id: 1,
			title: "Instagram",
			link: "https://www.instagram.com/nazmus767921",
			icon: <SiInstagram />,
		},
	],
	"footer-extras": [
		{
			id: 1,
			title: "© Copyright Nazmus767921",
			link: null,
		},
		{
			id: 2,
			title: "All Right Reserved.",
			link: null,
		},
		{
			id: 3,
			title: "Privacy policy",
			link: null,
		},
		{
			id: 4,
			title: "Terms of use",
			link: null,
		},
	],
};
