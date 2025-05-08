import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const QuoteDetails = () => {
  const { id } = useParams();
  const [quote, setQuote] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchQuote = async () => {
      try {
        const res = await fetch(`${process.env.REACT_APP_QUOTES_API}/${id}`);
        if (!res.ok) {
          throw new Error(`HTTP error! Status: ${res.status}`);
        }
        const data = await res.json();
        setQuote(data);
        setError(null);
      } catch (err) {
        setError("Failed to fetch quote. Please try again.");
        console.error(err);
      }
    };
    fetchQuote();
  }, [id]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-100 to-cyan-50 dark:from-indigo-900 dark:to-purple-900 flex items-center justify-center p-4 sm:p-6 lg:p-8">
      <div className="max-w-2xl w-full bg-white dark:bg-indigo-800 border border-blue-200 dark:border-indigo-600 rounded-xl shadow-xl overflow-hidden transform transition-all hover:scale-105 duration-300">
        {error ? (
          <div className="p-6 text-center">
            <p className="text-red-500 dark:text-red-400 text-lg font-semibold">{error}</p>
          </div>
        ) : quote ? (
          <div className="p-6 sm:p-8">
            <div className="text-center sm:text-left">
              <p className="text-2xl sm:text-3xl lg:text-4xl font-serif italic text-blue-900 dark:text-indigo-100 leading-relaxed">
                "{quote.quote}"
              </p>
              <p className="mt-4 text-right text-sm sm:text-base lg:text-lg font-medium text-blue-600 dark:text-purple-400">
                — {quote.author}
              </p>
            </div>
          </div>
        ) : (
          <div className="p-6 text-center">
            <p className="text-lg text-blue-600 dark:text-purple-400 animate-pulse">Loading...</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default QuoteDetails;