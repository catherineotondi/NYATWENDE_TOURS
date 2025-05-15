
import React, { useEffect, useState } from 'react';
import blogsData from '../blogs.json';
import { Link } from 'react-router-dom';
import "../css/styles.css"; 

const BlogList = () => {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    setBlogs(blogsData);
  }, []);

  return (
    <div className="blog-list-container">
      {blogs.map(blog => (
        <div key={blog.id} className="blog-card">
          <img src={blog.image} alt={blog.title} className="blog-image" />
          <h2 className="blog-title">{blog.title}</h2>
          <p className="blog-description">{blog.description}</p>
          <Link to={blog.route ? blog.route : `/blog/${blog.id}`} className="read-more">Read More</Link>
        </div>
      ))}
    </div>
  );
};

export default BlogList;
