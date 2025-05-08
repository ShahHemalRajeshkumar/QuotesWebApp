import React from "react";

const Pagination = ({ currentPage, setPage }) => {
  return (
    <div className="bg-gradient-to-br from-blue-100 to-cyan-50 dark:from-indigo-900 dark:to-purple-900 p-4 sm:p-6 lg:p-8">
      <div className="max-w-2xl mx-auto bg-white dark:bg-indigo-800 border border-blue-200 dark:border-indigo-600 rounded-xl shadow-xl p-6 sm:p-8 flex justify-center gap-4">
        <button
          className="px-4 py-2 bg-blue-600 dark:bg-indigo-600 text-white rounded-lg hover:bg-blue-700 dark:hover:bg-indigo-700 disabled:opacity-50 disabled:hover:bg-blue-600 dark:disabled:hover:bg-indigo-600 transition-colors duration-200"
          disabled={currentPage === 1}
          onClick={() => setPage(currentPage - 1)}
        >
          Previous
        </button>
        <span className="px-4 py-2 text-blue-900 dark:text-indigo-100 text-lg font-medium">
          {currentPage}
        </span>
        <button
          className="px-4 py-2 bg-blue-600 dark:bg-indigo-600 text-white rounded-lg hover:bg-blue-700 dark:hover:bg-indigo-700 transition-colors duration-200"
          onClick={() => setPage(currentPage + 1)}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default Pagination;