import React from 'react';
import { useRef, useState} from 'react';
import { motion } from 'framer-motion';
import BlogDetail from './BlogDetail';

const BlogList = ({blogs}) => {
  const dialogRef=useRef(null);  
  const [dialogContent, setDialogContent] = useState('hahaha');  
  
  function toggleDialog(){
    if(!dialogRef.current){
      return;
    }
    dialogRef.current.hasAttribute('open') ? 
    dialogRef.current.close()
    : dialogRef.current.showModal();
  }

  return (
    <div className="blog-list">
      {blogs.map(blog => (
        <div 
        className="blog-item" 
        key={blog.id}
        onClick={()=> {
          setDialogContent(<BlogDetail blog={blog}/>)
          toggleDialog(); 
        }}> 
          <motion.img
              src={blog.largeImage}
              alt={blog.title}
              layoutId={`blog-image-${blog.id}`}
          />
          <h2>{blog.title}</h2>
        </div>
      ))}
      <dialog ref={dialogRef}>{dialogContent}</dialog>
    </div>
  );
};

export default BlogList;