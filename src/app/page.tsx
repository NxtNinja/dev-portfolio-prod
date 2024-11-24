import AboutMe from "@/components/AboutMe";
import Hero from "@/components/Hero";
import { indexPage } from "@/lib/seoData";
import { Metadata } from "next";

export const generateMetadata = (): Metadata => {
  return indexPage;
};

const page = () => {
  return (
    <>
      <Hero />
      <AboutMe />
    </>
  );
};

export default page;
