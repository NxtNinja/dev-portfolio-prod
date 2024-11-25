import Skills from "@/components/Skills/Skills";
import { skillsPage } from "@/lib/seoData";
import { Metadata } from "next";

export const generateMetadata = (): Metadata => {
  return skillsPage;
};

const page = () => {
  return (
    <>
      <Skills />
    </>
  );
};

export default page;
