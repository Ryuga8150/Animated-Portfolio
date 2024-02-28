"use client";
import { useState } from "react";
import Links from "./links/Links";
import ToggleButton from "./toggleButton/ToggleButton";
import styles from "./Sidebar.module.scss";
import { motion } from "framer-motion";

type Props = {};
const variants = {
  open: {
    clipPath: "circle(1200px at 50px 50px)",
    transition: {
      // delay: 0.5,
      type: "spring",
      stiffness: 20,
      // damping: 40,
    },
  },
  closed: {
    clipPath: "circle(30px at 50px 50px)",
    transition: {
      delay: 0.5,
      type: "spring",
      stiffness: 400,
      damping: 40,
    },
  },
};
const Sidebar = (props: Props) => {
  const [open, setOpen] = useState<boolean>(false);

  return (
    <motion.div className={styles.sidebar} animate={open ? "open" : "closed"}>
      <motion.div className={styles.bg} variants={variants}>
        <Links />
      </motion.div>
      <ToggleButton setOpen={setOpen} />
    </motion.div>
  );
};

export default Sidebar;
