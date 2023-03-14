import React from "react";

const Pagination = ({
  totalPages,
  postsPerPage,
  setCurrentPage,
  currentPage,
}) => {
  let pages = [];
  for (let i = 1; i <= Math.ceil(totalPages / postsPerPage); i++) {
    pages.push(i);
  }
  return (
    <div className="py-14">
      {pages.map((page, index) => {
        return (
          <button
            key={index}
            onClick={() => setCurrentPage(page)}
            className={
              page === currentPage
                ? "text-black rounded-lg bg-[#ffffff] mx-2 px-3 py-1 my-4 font-bold text-lg"
                : "text-[#feda6a] rounded-lg bg-[#3b436d] mx-2 px-3 py-1 my-4 font-bold text-lg"
            }
          >
            {page}
          </button>
        );
      }).slice(0,10)}
    </div>
  );
};

export default Pagination;
