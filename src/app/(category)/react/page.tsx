import Portfolio from "@/components/portfolio/Portfolio";
import { getCategoryOfProjects, getReactProjects } from "@/libs/queries";
import React from "react";

type Props = {};

const ReactProjectsPage = async (props: Props) => {
  const projects = await getReactProjects();
  if (!projects) return;

  return (
    <div>
      <Portfolio title="React.js Haven" items={projects} />
    </div>
  );
};

export default ReactProjectsPage;
