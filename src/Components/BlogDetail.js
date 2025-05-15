import React from 'react';
import { useParams } from 'react-router-dom';
import blogsData from '../blogs.json';
import "../css/styles.css"; 

const BlogDetail = () => {
  const { id } = useParams();
  const blog = blogsData.find(blog => blog.id === parseInt(id));

  if (!blog) return <p>Blog not found</p>;

  return (
    <div className="blog-detail-container">
      <img src={blog.image} alt={blog.title} className="blog-detail-image" />
      <h1 className="blog-detail-title">{blog.title}</h1>
      <p className="blog-detail-date">{blog.date}</p>
      <div className="blog-detail-content">{blog.content}</div>
    </div>
  );
};

export default BlogDetail;

