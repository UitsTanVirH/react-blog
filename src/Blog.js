import React from "react";
import { useParams } from "react-router-dom";

const Blog = ({ blogs }) => {
  const { id } = useParams();
  const blog = blogs.find((blog) => blog.id === id);

  if (!blog) {
    return <div>Blog not found</div>;
  }

  return (
    <div>
      <h2>{blog.title}</h2>
      <p>{blog.content}</p>
    </div>
  );
};

export default Blog;
