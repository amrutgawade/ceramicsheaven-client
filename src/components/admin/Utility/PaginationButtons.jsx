import React from "react";
import ReactPaginate from "react-paginate";
import { BsChevronLeft, BsChevronRight } from "react-icons/bs";

function PaginationButtons({ setCurrentPage, currentPage, totalPages }) {
  const handlePageClick = ({ selected }) => {
    setCurrentPage(selected);
    // console.log(currentPage);
  };
  const showNextButton = currentPage !== totalPages - 1;
  const showPrevButton = currentPage !== 0;
  console.log(showPrevButton);
  return (
    <div>
      <ReactPaginate
        breakLabel="..."
        nextLabel={
          showNextButton ? (
            <span className="h-10 w-10  flex items-center justify-center bg-indigo-500/20 rounded-md">
              <BsChevronRight />
            </span>
          ) : null
        }
        onPageChange={handlePageClick}
        pageRangeDisplayed={3}
        pageCount={totalPages}
        previousLabel={
          showPrevButton ? (
            <span className="h-10 w-10  flex items-center justify-center bg-indigo-500/20 rounded-md">
              <BsChevronLeft />
            </span>
          ) : null
        }
        containerClassName="flex items-center justify-end gap-x-1 mt-8 mb-4"
        pageClassName="block border border-solid border-indigo-500/20 h-10 w-10  flex items-center justify-center hover:bg-indigo-500/20 rounded-md"
        activeClassName="bg-indigo-500 text-white"
      />
    </div>
  );
}

export default PaginationButtons;
