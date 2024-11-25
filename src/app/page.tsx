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
      <div className="space-y-32">
        <div className="flex items-start justify-start py-20">
          <Hero />
        </div>
        <AboutMe />
      </div>
    </>
  );
};

export default page;
