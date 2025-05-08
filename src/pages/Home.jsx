import React, { useEffect, useState } from "react";
import QuoteTable from "../components/QuoteTable";
import Pagination from "../components/Pagination";
import RandomQuote from "../components/RandomQuote";

const Home = () => {
  const [quotes, setQuotes] = useState([]);
  const [page, setPage] = useState(1);

  const fetchQuotes = async () => {
    const skip = (page - 1) * 10;
    const res = await fetch(`${process.env.REACT_APP_QUOTES_API}?limit=10&skip=${skip}`);
    const data = await res.json();
    setQuotes(data.quotes); 
  };

  useEffect(() => {
    fetchQuotes();
  }, [page]);

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-4">Quotes List</h1>
      <QuoteTable quotes={quotes} />
      <Pagination currentPage={page} setPage={setPage} />
      <RandomQuote />
    </div>
  );
};

export default Home;