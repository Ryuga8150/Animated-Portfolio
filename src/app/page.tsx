import React from "react";
import Navbar from "@/components/navbar/Navbar";
import Hero from "@/components/hero/Hero";
import Parallax from "../components/parallax/Parallax";
import Services from "@/components/services/Services";
import Portfolio from "@/components/portfolio/Portfolio";
import Contact from "@/components/contact/Contact";
import Cursor from "@/components/cursor/Cursor";
import { getCategoryOfProjects } from "@/libs/queries";
import SkillsSection from "@/components/skills";
// import Test from "./Test";

type Props = {};

const page = async (props: Props) => {
  const projectCategory = await getCategoryOfProjects();

  if (!projectCategory) return;

  return (
    <div>
      <Cursor />
      <section id="Homepage">
        <Navbar />
        <Hero />
      </section>
      <section id="Services">
        <Parallax text="What I Learned?" mode="dark" />
      </section>
      <section>
        <SkillsSection />
        {/* <Services /> */}
      </section>
      <section id="Portfolio">
        <Parallax text="What I Did?" mode="light" />
      </section>
      <Portfolio
        title="Featured Works"
        type="category"
        items={projectCategory}
      />
      <section id="Contact">
        <Contact />
      </section>
      {/* <Test /> */}
    </div>
  );
};

export default page;
