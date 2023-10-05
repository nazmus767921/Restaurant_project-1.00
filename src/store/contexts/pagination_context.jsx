import { createContext, useContext, useState } from "react";
import { useProductsContext } from "./products_context";

const pagination_context = createContext(null);

export const PaginationContextProvider = ({ children }) => {
	// pulling menus data from the products_context
	const { menus } = useProductsContext();
	const [currentPage, setCurrentPage] = useState(1);
	const itemsPerPage = 8;
	const data = [...menus];
	const totalPages = Math.ceil(data.length / itemsPerPage);

  // Calculate the range of data to display based on the current page
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const displayedData = data.slice(startIndex, endIndex);

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
