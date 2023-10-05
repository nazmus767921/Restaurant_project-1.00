import { usePaginationContext } from "../store/contexts/pagination_context";

const Pagination = () => {
	const { currentPage, totalPages, nextPage, prevPage, goToPage } =
		usePaginationContext();

	const getPageNumbers = () => {
		const pageNumbers = [];
		for (let i = 1; i <= totalPages; i++) {
			pageNumbers.push(
				<button
					key={i}
					onClick={() => goToPage(i)}
					className={currentPage === i ? "active" : ""}
				>
					{i}
				</button>
			);
		}
		return pageNumbers;
	};

	return (
		<div className="pagination">
			<button onClick={prevPage} disabled={currentPage === 1}>
				Previous
			</button>
			{getPageNumbers()}
			<button onClick={nextPage} disabled={currentPage === totalPages}>
				Next
			</button>
		</div>
	);
};

export default Pagination;
