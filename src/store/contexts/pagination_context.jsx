import { createContext, useContext, useEffect, useMemo, useState } from "react";
import { useProductsContext } from "./products_context";

const pagination_context = createContext(null);

export const PaginationContextProvider = ({ children }) => {
	// pulling menus data from the products_context
	const { filteredMenu, start_filtering, end_filtering } = useProductsContext();
	const [currentPage, setCurrentPage] = useState(1);
	const itemsPerPage = 10;
	const totalPages = Math.ceil(filteredMenu.length / itemsPerPage);

	// Calculate the range of data to display based on the current page
	const startIndex = (currentPage - 1) * itemsPerPage;
	const endIndex = startIndex + itemsPerPage;
	const displayedData = filteredMenu.slice(startIndex, endIndex);

	// Update the current page if it exceeds the total number of pages after filtering but i don't want to run this on initial load but only when the dependencies change

	useEffect(() => {
		if (filteredMenu.length <= 0) {
			setCurrentPage(1);
			return;
		}
		if (currentPage > totalPages) {
			setCurrentPage(totalPages);
		}
	}, [filteredMenu, currentPage, totalPages]);

	// navBar height

	const scrollToMenuSection = () => {
		const section = document.getElementById("MenuShowcase");
		const navbarHeight = document.querySelector("nav").offsetHeight;
		const sectionTop = section.offsetTop - navbarHeight;
		window.scrollTo({
			top: sectionTop,
			behavior: "smooth",
		});
	};
	//Page Actions
	const nextPage = () => {
		start_filtering();
		scrollToMenuSection();
		setCurrentPage((prevPage) => Math.min(prevPage + 1, totalPages));
		end_filtering(0);
	};

	const prevPage = () => {
		start_filtering();
		scrollToMenuSection();
		setCurrentPage((prevPage) => Math.max(prevPage - 1, 1));
		end_filtering(0);
	};

	const goToPage = (page) => {
		start_filtering();
		scrollToMenuSection();
		setCurrentPage(Math.min(Math.max(page, 1), totalPages));
		end_filtering(0);
	};

	const values = useMemo(
		() => ({
			currentPage,
			itemsPerPage,
			displayedData,
			totalPages,
			nextPage,
			prevPage,
			goToPage,
		}),
		[currentPage, displayedData, totalPages]
	);
	return <pagination_context.Provider value={values}>{children}</pagination_context.Provider>;
};

export const usePaginationContext = () => {
	return useContext(pagination_context);
};
