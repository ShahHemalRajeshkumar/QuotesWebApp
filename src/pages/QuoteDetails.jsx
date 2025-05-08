import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const QuoteDetails = () => {
  const { id } = useParams();
  const [quote, setQuote] = useState(null);

  useEffect(() => {
    const fetchQuote = async () => {
      const res = await fetch(`${process.env.REACT_APP_QUOTE_DETAILS_API}/${id}`);
      const data = await res.json();
      setQuote(data);
    };
    fetchQuote();
  }, [id]);

  return (
    <div className="p-6">
      {quote ? (
        <div className="text-xl font-medium">
          <p>"{quote.content}"</p>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default QuoteDetails;