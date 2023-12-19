import React from 'react';
import { motion } from "framer-motion";

export const GiftsPage = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
    >
      <div>GiftPage</div>
    </motion.div>
  )
}
