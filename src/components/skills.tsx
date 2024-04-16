import React from "react";
import { LampDemo } from "./aceternity-ui/Lamp";
import { TailwindcssButtons } from "./aceternity-ui/TailwindcssButtons";

type Props = {};

const techStack = [
  "HTML",
  "CSS",
  "Javascript",
  "Typescript",
  "SASS",
  "Tailwind CSS",
  "REACT",
  "REDUX",
  "Node JS",
  "Express",
  "Mongo DB",
  "Postgres SQL",
  "Firebase",
  "Prisma",
  "MUI",
  "ShadCN UI",
  "C++",
  "OOPS",
];
const SkillsSection = (props: Props) => {
  return (
    <div>
      <LampDemo>
        <div className="flex  justify-center items-center mt-6">
          {/* <TailwindcssButtons variant="Gradient" />
          <TailwindcssButtons variant="Shimmer" />
          <TailwindcssButtons
            variant="Lit up borders"
            className=" py-15 h-50"
          /> */}
          <div className="relative top-8 md:w-[64rem] w-[32rem] flex gap-3 flex-wrap  justify-center items-center">
            {techStack.map((text, ind) => (
              <Button key={ind}>{text}</Button>
            ))}
          </div>
        </div>
      </LampDemo>
    </div>
  );
};

type ButtonProps = {
  children: React.ReactNode;
};
const Button = ({ children }: ButtonProps) => {
  return (
    <button className="p-[3px] relative">
      <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-lg" />
      <div
        className={
          "px-8 py-2  bg-black rounded-[6px]  relative group transition duration-200 text-white hover:bg-transparent md:text-4xl text-xl tracking-wider"
        }
        // className="px-8 py-2  bg-black rounded-[6px]  relative group transition duration-200 text-white hover:bg-transparent"
      >
        {children}
      </div>
    </button>
  );
};
export default SkillsSection;
