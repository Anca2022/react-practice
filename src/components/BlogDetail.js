import React from 'react';
import { motion } from 'framer-motion';

const BlogDetail = ({ blog }) => {

  if (!blog) return <div>Blog not found</div>;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="blog-detail"
      transition={{ duration: 0.5 }}
    >
      <h1>{blog.title}</h1>
      <motion.img
        src={blog.largeImage}
        alt={blog.title}
        layoutId={`blog-image-${blog.id}`}
        initial={{ scale: 1 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.5 }}
      />
      <p>{blog.content}</p>
    </motion.div>
  );
};

export default BlogDetail;
