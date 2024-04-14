import Portfolio from "@/components/portfolio/Portfolio";
import { getCategoryOfProjects, getHtmlCssJsProjects } from "@/libs/queries";
import React from "react";

type Props = {};

const HtmlCssProjectsPage = async (props: Props) => {
  const projects = await getHtmlCssJsProjects();
  if (!projects) return;

  return (
    <div>
      <Portfolio title="World of HTM, CSS, And JS" items={projects} />
    </div>
  );
};

export default HtmlCssProjectsPage;
