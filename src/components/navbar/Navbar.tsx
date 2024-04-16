"use client";
import React from "react";
import styles from "./Navbar.module.scss";

import { motion } from "framer-motion";
import Sidebar from "../sidebar/Sidebar";
import Link from "next/link";
import Image from "next/image";

const navbarLinks = [
  {
    to: "https://github.com/Ryuga8150",
    image: "/github.png",
    description: "Github Logo",
  },
  {
    to: "https://leetcode.com/Ryuga8150/",
    image: "/leetcode.png",
    description: "Leetcode Logo",
  },
  {
    to: "https://www.linkedin.com/in/paras-rawat-baa527291/",
    image: "/linkedin.png",
    description: "Linkedin Logo",
  },
];

const Navbar = () => {
  return (
    <div className="h-100">
      <Sidebar />
      <div
        // className={styles.wrapper}
        className="flex items-center md:justify-between justify-end md:px-16 md:py-8 p-5 h-full m-auto max-w-[1366]"
      >
        {/* <motion.span
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          Lama Dev
        </motion.span> */}
        <motion.span
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 0.5 }}
          transition={{ duration: 0.5 }}
          className="text-4xl font-semibold"
        >
          PORTFOLIO
        </motion.span>
        <div className="flex gap-5 items-center">
          {navbarLinks.map(({ to, image, description }, ind) => (
            <Link href={to} key={ind}>
              <Image
                src={image}
                alt={description}
                width={30}
                height={30}
                className="bg-slate-50/80 rounded"
              />
            </Link>
          ))}
          <Link
            href="https://drive.google.com/file/d/1SF2yWPI95c_YtenZwHDdNnp2xIqUKNKA/view?usp=drivesdk"
            target="_blank"
          >
            <button className="ml-4 inline-flex h-12 animate-shimmer items-center justify-center rounded-md border border-slate-100 bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] bg-[length:200%_100%] px-6 font-medium text-slate-50 transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
              Resume
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
