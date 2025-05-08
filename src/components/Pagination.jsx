import React from "react";

const Pagination = ({ currentPage, setPage }) => {
  return (
    <div className="flex gap-4 mb-6">
      <button
        className="px-4 py-2 bg-gray-300 rounded disabled:opacity-50"
        disabled={currentPage === 1}
        onClick={() => setPage(currentPage - 1)}
      >
        Previous
      </button>
      <span className="px-4 py-2">{currentPage}</span>
      <button
        className="px-4 py-2 bg-blue-500 text-white rounded"
        onClick={() => setPage(currentPage + 1)}
      >
        Next
      </button>
    </div>
  );
};

export default Pagination;