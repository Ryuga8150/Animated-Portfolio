import Portfolio from "@/components/portfolio/Portfolio";
import { getCategoryOfProjects, getNextProjects } from "@/libs/queries";
import React from "react";

type Props = {};

const NextJsProjectsPage = async (props: Props) => {
  const projects = await getNextProjects();
  if (!projects) return;

  return (
    <div>
      <Portfolio title="Next.js Haven" items={projects} />
    </div>
  );
};

export default NextJsProjectsPage;
