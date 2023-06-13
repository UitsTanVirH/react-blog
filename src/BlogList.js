import React from "react";
import { Link } from "react-router-dom";

const BlogList = ({ blogs }) => {
  return (
    <div>
      <h2>Blog List</h2>
      {blogs.map((blog) => (
        <div key={blog.id}>
          <Link to={`/blogs/${blog.id}`}>
            <h3>{blog.title}</h3>
          </Link>
          <p>{blog.content}</p>
          <hr />
        </div>
      ))}
    </div>
  );
};

export default BlogList;
