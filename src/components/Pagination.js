import React from "react";

const Pagination = ({
  currentPage,
  totalDrivers,
  driversPerPage,
  nextPage,
  prevPage,
}) => {
  const totalPages = Math.ceil(totalDrivers / driversPerPage);

  return (
    <div className="flex justify-center mt-6 space-x-4">
      <button
        onClick={prevPage}
        disabled={currentPage === 1}
        className="p-2  text-gray-700 rounded-md  disabled:opacity-50"
      >
        &lt; Previous Page
      </button>

      <button
        onClick={nextPage}
        disabled={currentPage === totalPages}
        className="p-2  text-gray-700 rounded-md  disabled:opacity-50"
      >
        Next Page &gt;
      </button>
    </div>
  );
};

export default Pagination;
