import React, { useState } from "react";

const RandomQuote = () => {
  const [quote, setQuote] = useState(null);

  const getRandomQuote = async () => {
    const res = await fetch(process.env.REACT_APP_RANDOM_QUOTE_API);
    const data = await res.json();
    setQuote(data);
  };

  return (
    <div className="bg-gradient-to-br from-blue-100 to-cyan-50 dark:from-indigo-900 dark:to-purple-900 p-4 sm:p-6 lg:p-8">
      <div className="max-w-2xl mx-auto bg-white dark:bg-indigo-800 border border-blue-200 dark:border-indigo-600 rounded-xl shadow-xl p-6 sm:p-8">
        <button
          onClick={getRandomQuote}
          className="w-full sm:w-auto px-6 py-3 bg-blue-600 dark:bg-indigo-600 text-white rounded-lg hover:bg-blue-700 dark:hover:bg-indigo-700 font-medium transition-colors duration-200"
        >
          Get Random Quote
        </button>
        {quote && (
          <div className="mt-6 transform transition-all hover:scale-105 duration-300">
            <div className="border border-blue-200 dark:border-indigo-600 rounded-lg p-6">
              <p className="text-xl sm:text-2xl font-serif italic text-blue-900 dark:text-indigo-100 leading-relaxed">
                "{quote.quote}"
              </p>
              <p className="mt-4 text-right text-sm sm:text-base font-medium text-blue-600 dark:text-purple-400">
                — {quote.author}
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default RandomQuote;