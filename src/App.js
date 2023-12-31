import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import BlogList from "./BlogList";
import Blog from "./Blog";
import blogs from "./data";

const App = () => {
  return (
    <div className="container">
      <Router>
        <Routes>
          <Route path="/" element={<BlogList blogs={blogs} />} />
          <Route path="/blogs/:id" element={<Blog blogs={blogs} />} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
