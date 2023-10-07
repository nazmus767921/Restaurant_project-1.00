import { createContext, useContext, useEffect, useState } from "react";
import { useProductsContext } from "./products_context";

const pagination_context = createContext(null);

export const PaginationContextProvider = ({ children }) => {
	// pulling menus data from the products_context
	const { filteredMenu } = useProductsContext();
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

	const nextPage = () => {
		setCurrentPage((prevPage) => Math.min(prevPage + 1, totalPages));
	};

	const prevPage = () => {
		setCurrentPage((prevPage) => Math.max(prevPage - 1, 1));
	};

	const goToPage = (page) => {
		setCurrentPage(Math.min(Math.max(page, 1), totalPages));
	};

	const values = {
		currentPage,
		itemsPerPage,
		displayedData,
		totalPages,
		nextPage,
		prevPage,
		goToPage,
	};
	return (
		<pagination_context.Provider value={values}>
			{children}
		</pagination_context.Provider>
	);
};

export const usePaginationContext = () => {
	return useContext(pagination_context);
};
