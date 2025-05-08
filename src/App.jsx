import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import QuoteDetails from "./pages/QuoteDetails";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/quote/:id" element={<QuoteDetails />} />
      </Routes>
    </Router>
  );
}

export default App;
