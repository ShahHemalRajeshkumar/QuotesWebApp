import React, { useEffect, useState, useCallback } from "react";
import QuoteTable from "../components/QuoteTable";
import Pagination from "../components/Pagination";
import RandomQuote from "../components/RandomQuote";

const Home = () => {
  const [quotes, setQuotes] = useState([]);
  const [page, setPage] = useState(1);

  const fetchQuotes = useCallback(async () => {
    const skip = (page - 1) * 10;
    const res = await fetch(`${process.env.REACT_APP_QUOTES_API}?limit=10&skip=${skip}`);
    const data = await res.json();
    setQuotes(data.quotes);
  }, [page]);

  useEffect(() => {
    fetchQuotes();
  }, [fetchQuotes]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-100 to-cyan-50 dark:from-indigo-900 dark:to-purple-900 p-4 sm:p-6 lg:p-8">
      <div className="max-w-4xl mx-auto bg-white dark:bg-indigo-800 border border-blue-200 dark:border-indigo-600 rounded-xl shadow-xl p-6 sm:p-8">
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-blue-900 dark:text-indigo-100 mb-6 text-center sm:text-left">
          Quotes List
        </h1>
        <QuoteTable quotes={quotes} />
        <Pagination currentPage={page} setPage={setPage} />
        <RandomQuote />
      </div>
    </div>
  );
};

export default Home;