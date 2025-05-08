import React from "react";
import { useNavigate } from "react-router-dom";

const QuoteTable = ({ quotes }) => {
  const navigate = useNavigate();

  if (!Array.isArray(quotes)) {
    return (
      <div className="bg-gradient-to-br from-blue-100 to-cyan-50 dark:from-indigo-900 dark:to-purple-900 p-4 sm:p-6 lg:p-8">
        <div className="max-w-4xl mx-auto bg-white dark:bg-indigo-800 border border-blue-200 dark:border-indigo-600 rounded-xl shadow-xl p-6 sm:p-8 text-center">
          <p className="text-lg text-blue-600 dark:text-purple-400 animate-pulse">Loading quotes...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-gradient-to-br from-blue-100 to-cyan-50 dark:from-indigo-900 dark:to-purple-900 p-4 sm:p-6 lg:p-8">
      <div className="max-w-4xl mx-auto bg-white dark:bg-indigo-800 border border-blue-200 dark:border-indigo-600 rounded-xl shadow-xl overflow-hidden transform transition-all hover:scale-105 duration-300">
        <table className="min-w-full table-auto">
          <thead>
            <tr className="bg-blue-100 dark:bg-indigo-900">
              <th className="p-4 text-left text-blue-900 dark:text-indigo-100 font-semibold">Quote</th>
              <th className="p-4 text-left text-blue-900 dark:text-indigo-100 font-semibold">Action</th>
            </tr>
          </thead>
          <tbody>
            {quotes.map((quote) => (
              <tr key={quote.id} className="border-t border-blue-200 dark:border-indigo-600">
                <td className="p-4 text-blue-900 dark:text-indigo-100 font-serif">{quote.quote}</td>
                <td className="p-4">
                  <button
                    className="text-blue-600 dark:text-purple-400 hover:text-blue-800 dark:hover:text-purple-300 font-medium transition-colors duration-200"
                    onClick={() => navigate(`/quote/${quote.id}`)}
                  >
                    View
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default QuoteTable;