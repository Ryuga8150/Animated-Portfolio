import Portfolio from "@/components/portfolio/Portfolio";
import { getCategoryOfProjects, getNodeProjects } from "@/libs/queries";
import React from "react";

type Props = {};

const NodeProjectsPage = async (props: Props) => {
  const projects = await getNodeProjects();
  if (!projects) return;

  return (
    <div>
      <Portfolio title="Node.js Haven" items={projects} />
    </div>
  );
};

export default NodeProjectsPage;
