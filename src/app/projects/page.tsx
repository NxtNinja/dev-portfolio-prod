import Projects from "@/components/Projects/Projects";
import { projectsPage } from "@/lib/seoData";
import { Metadata } from "next";

export const generateMetadata = (): Metadata => {
  return projectsPage;
};

const page = () => {
  return (
    <>
      <Projects />
    </>
  );
};

export default page;
