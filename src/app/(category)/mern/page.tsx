import Portfolio from "@/components/portfolio/Portfolio";
import { getCategoryOfProjects, getMernProjects } from "@/libs/queries";
import React from "react";

type Props = {};

const MERNProjectsPage = async (props: Props) => {
  const projects = await getMernProjects();
  if (!projects) return;

  return (
    <div>
      <Portfolio title="MERN Haven" items={projects} />
    </div>
  );
};

export default MERNProjectsPage;
