import styled from "styled-components";
import { usePaginationContext } from "../store/contexts/pagination_context";
import { MdArrowBackIos, MdArrowForwardIos } from "react-icons/md";

const Pagination = () => {
	const { currentPage, totalPages, nextPage, prevPage, goToPage } =
		usePaginationContext();

	const getPageNumbers = () => {
		const pageNumbers = [];
		let maxVisiblePages = 4; // Maximum number of visible page numbers

		if (currentPage <= 3) {
			maxVisiblePages = 5;
		} else if (currentPage >= totalPages - 2) {
			maxVisiblePages = 5;
		} else if (currentPage > 3 && currentPage < totalPages - 2) {
			maxVisiblePages = 3;
		}

		// Calculate the range of page numbers to display
		let start = currentPage - Math.floor(maxVisiblePages / 2);
		let end = currentPage + Math.floor(maxVisiblePages / 2);

		if (start < 1) {
			start = 1;
			end = Math.min(totalPages, maxVisiblePages);
		}

		if (end > totalPages) {
			end = totalPages;
			start = Math.max(1, totalPages - maxVisiblePages + 1);
		}

		if (start > 1) {
			// Always show the first page
			pageNumbers.push(
				<button
					type="button"
					key={1}
					onClick={() => goToPage(1)}
					className={currentPage === 1 ? "page_numbers active" : "page_numbers"}
				>
					{1}
				</button>
			);

			if (start > 2) {
				// Show ellipsis before the first page
				pageNumbers.push("...");
			}
		}

		for (let i = start; i <= end; i++) {
			pageNumbers.push(
				<button
					type="button"
					key={i}
					onClick={() => goToPage(i)}
					className={currentPage === i ? "page_numbers active" : "page_numbers"}
				>
					{i}
				</button>
			);
		}

		if (end < totalPages) {
			if (end < totalPages - 1) {
				// Show ellipsis after the last page
				pageNumbers.push("...");
			}

			// Always show the last page
			pageNumbers.push(
				<button
					type="button"
					key={totalPages}
					onClick={() => goToPage(totalPages)}
					className={
						currentPage === totalPages ? "page_numbers active" : "page_numbers"
					}
				>
					{totalPages}
				</button>
			);
		}

		return pageNumbers;
	};

	return (
		<Wrapper>
			<button
				type="button"
				onClick={prevPage}
				className={currentPage === 1 ? "disabled" : ""}
				disabled={currentPage === 1}
			>
				<MdArrowBackIos />
			</button>
			{getPageNumbers()}
			<button
				type="button"
				onClick={nextPage}
				className={currentPage === totalPages ? "disabled" : ""}
				disabled={currentPage === totalPages}
			>
				<MdArrowForwardIos />
			</button>
		</Wrapper>
	);
};

const Wrapper = styled.div`
	display: flex;
	flex-direction: row;
	align-items: center;
	gap: 1em;

	button {
		display: flex;
		justify-content: center;
		align-items: center;
		font-size: 0.55em;
		width: 2em;
		aspect-ratio: 1/1;
		/* makeup */
		color: ${(props) => props.theme["text"]};
		border-radius: 999px;
	}
	button.page_numbers {
		font-size: 0.75em;
	}
	button.active {
		background-color: ${(props) => props.theme["brand"]};
		color: ${(props) => props.theme["bg-primary-deep"]};
		font-weight: 700;
		font-size: 110%;
	}
	button.disabled {
		opacity: 0.1;
	}
`;

export default Pagination;
