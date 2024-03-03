"use client";
import React, { useRef } from "react";
import styles from "./Parallax.module.scss";
import {
  motion,
  useMotionValueEvent,
  useScroll,
  useTransform,
} from "framer-motion";

type Props = {
  type: string;
};

const Parallax = ({ type }: Props) => {
  const ref = useRef(null);
  const { scrollY, scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  // useMotionValueEvent(scrollYProgress, "change", (latest) => {
  //   console.log("Page scroll: ", latest);
  // });
  // console.log(scrollYProgress);
  const yText = useTransform(scrollYProgress, [0, 1], ["0%", "500%"]);
  const yBg = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <div
      className={styles.parallax}
      ref={ref}
      style={{
        background:
          type === "services"
            ? "linear-gradient(180deg, #111132, #0c0c1d)"
            : "linear-gradient(180deg, #111132, #505064)",
      }}
    >
      <motion.h1 style={{ y: yText }}>
        {type === "services" ? "What We Do?" : "What We Did?"}
      </motion.h1>
      <motion.div className={styles.mountains}></motion.div>
      <motion.div style={{ y: yBg }} className={styles.planets}></motion.div>
      <motion.div style={{ x: yBg }} className={styles.stars}></motion.div>
    </div>
  );
};

export default Parallax;
