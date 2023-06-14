import React, { useState } from "react";
import { Link } from "react-router-dom";

const BlogList = ({ blogs }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const postsPerPage = 2;

  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;

  const currentPosts = blogs.slice(indexOfFirstPost, indexOfLastPost);

  const totalPages = Math.ceil(blogs.length / postsPerPage);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <div>
      {currentPosts.map((blog) => (
        <div key={blog.id}>
          <h2>
            <Link to={`/blogs/${blog.id}`}>{blog.title}</Link>
          </h2>
          <p>{blog.content}</p>
        </div>
      ))}

      {/* Pagination controls */}
      <div>
        {Array.from({ length: totalPages }, (_, index) => (
          <button key={index + 1} onClick={() => handlePageChange(index + 1)}>
            {index + 1}
          </button>
        ))}
      </div>
    </div>
  );
};

export default BlogList;
