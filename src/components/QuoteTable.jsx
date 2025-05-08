import React from "react";
import { useNavigate } from "react-router-dom";

const QuoteTable = ({ quotes }) => {
  const navigate = useNavigate();

  if (!Array.isArray(quotes)) {
    return <div className="text-gray-500">Loading quotes...</div>;
  }

  return (
    <table className="min-w-full table-auto border border-gray-300 mb-6">
      <thead>
        <tr className="bg-gray-200">
          <th className="p-2 text-left">Quote</th>
          <th className="p-2 text-left">Action</th>
        </tr>
      </thead>
      <tbody>
        {quotes.map((quote) => (
          <tr key={quote.id} className="border-t">
            <td className="p-2">{quote.quote}</td>
            <td className="p-2">
              <button
                className="text-blue-500 underline"
                onClick={() => navigate(`/quote/${quote.id}`)}
              >
                View
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default QuoteTable;