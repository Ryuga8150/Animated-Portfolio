"use client";
import React, { useState } from "react";
import styles from "./page.module.scss";
import { motion } from "framer-motion";
type Props = {};

const Test = (props: Props) => {
  const [open, setOpen] = useState<boolean>(false);
  const variants = {
    visible: { opacity: 1 },
    hidden: { opacity: 0 },
  };
  return (
    <div className={styles.course}>
      {/* <div className={styles.box}></div> */}
      {/* <motion.div className={styles.box} animate={{ opacity: 0 }} /> */}
      <motion.div
        className={styles.box}
        // initial={{ opacity: 0, scale: 0.5 }}
        // animate={{ opacity: 1, scale: 1 }}
        // transition={{ duration: 2, dealy: 2 }}

        variants={variants}
        initial="hidden"
        // animate="visible"
        animate={open ? "hidden" : "visible"}
        transition={{ duration: 2 }}
      />
      <button onClick={() => setOpen(!open)}>Click</button>
    </div>
  );
};

export default Test;
