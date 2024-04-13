"use client";
import React, { FunctionComponent, useRef } from "react";
import styles from "./Portfolio.module.scss";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import { PortfolioItem } from "@/libs/types";
import Link from "next/link";

type ListItem = {
  id: number;
  title: string;
  img: string;
  desc: string;
};

type SingleProps = {
  // item: ListItem;
  item: PortfolioItem;
  type: "category" | "project";
};

const Single = ({ item, type }: SingleProps): JSX.Element => {
  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
  });

  const y = useTransform(scrollYProgress, [0, 1], [-300, 300]);

  return (
    <section>
      <div className={styles.container}>
        <div className={styles.wrapper}>
          <div className={styles.imageContainer} ref={ref}>
            <img src={item.img} alt="" />
          </div>
          <motion.div className={styles.textContainer} style={{ y }}>
            <h2>{item.title}</h2>
            <p>{item.desc}</p>

            {type === "category" ? (
              <Link
                href={item.categoryLink || ""}
                className={styles.categoryLinkBtn}
              >
                <button>Show Projects</button>
              </Link>
            ) : (
              <div>
                <Link href={item.githubLink || ""} target="_blank">
                  Github 🐱‍💻
                </Link>
                <Link href={item.hostLink || ""} target="_blank">
                  Hosted Site 🚀
                </Link>
              </div>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

type Props = {
  title: string;
  items: PortfolioItem[];
  type?: "category" | "project";
};

const Portfolio = ({ title, type = "project", items }: Props) => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["end end", "start start"],
  });

  const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30 });

  return (
    <div ref={ref} className={styles.portfolio}>
      <div className={styles.progress}>
        <h1>{title}</h1>
        <motion.div style={{ scaleX }} className={styles.progressBar} />
      </div>
      {items.map((item) => (
        <Single key={item.id} type={type} item={item} />
      ))}
    </div>
  );
};

export default Portfolio;

// Another way of removing intrinsic attribute

// type ListItem = {
//   id: number;
//   title: string;
//   img: string;
//   desc: string;
// };

// const Single = (item: ListItem): JSX.Element => {
//   return <section>{item.title}</section>;
// };

// const Portfolio = () => {
//   return (
//     <div className={styles.portfolio}>
//       {items.map((item) => (
//         <Single key={item.id} {...item} />
//       ))}
//     </div>
//   );
// };

// export default Portfolio;
