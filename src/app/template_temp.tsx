"use client";

import React, { use } from "react";
import { motion } from "framer-motion";
import { usePathname } from "next/navigation";

const Template = ({ children }: { children: React.ReactNode }) => {
  const path = usePathname();
  return (
    <motion.div
      key={path}
      initial={{ scale: 0.9, opacity: 0, filter: "blur(10px)" }}
      animate={{ scale: 1, opacity: 1, filter: "blur(0px)" }}
      transition={{ duration: 0.5 }}
    >
      {children}
    </motion.div>
  );
};

export default Template;
