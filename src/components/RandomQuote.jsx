import React, { useState } from "react";

const RandomQuote = () => {
  const [quote, setQuote] = useState(null);

  const getRandomQuote = async () => {
    const res = await fetch(process.env.REACT_APP_RANDOM_QUOTE_API);
    const data = await res.json();
    setQuote(data);
  };

  return (
    <div className="mt-8">
      <button
        onClick={getRandomQuote}
        className="bg-green-500 text-white px-4 py-2 rounded"
      >
        Get Random Quote
      </button>
      {quote && (
        <div className="mt-4 border p-4 rounded shadow">
          <p>"{quote.quote}"</p>
          <p className="text-right text-sm mt-2">— {quote.author}</p>
        </div>
      )}
    </div>
  );
};

export default RandomQuote;