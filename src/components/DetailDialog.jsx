import React from 'react';
import { motion } from 'framer-motion';
import './Animated.css';

const backdropVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
};

const dialogVariants = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: { opacity: 1, scale: 1 },
};

const DetailDialog = ({ card, onClose }) => {
  return (
    <motion.div
      className="backdrop"
      variants={backdropVariants}
      initial="hidden"
      animate="visible"
      exit="hidden"
      onClick={onClose}
    >
      <motion.div
        className="dialog"
        layoutId={`card-${card.id}`}
        variants={dialogVariants}
        initial="hidden"
        animate="visible"
        exit="hidden"
        onClick={(e) => e.stopPropagation()}
      >
        <h2>{card.title}</h2>
        <p>{card.content}</p>
        <button onClick={onClose}>Close</button>
      </motion.div>
    </motion.div>
  );
};
export default DetailDialog;