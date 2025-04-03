// import AboutMe from "@/components/AboutMe";
import Hero from "@/components/Hero";
import { indexPage } from "@/lib/seoData";
import { Metadata } from "next";

export const generateMetadata = (): Metadata => {
  return indexPage;
};

const page = () => {
  return (
    <>
      <div className="">
        <div className="flex items-start justify-start md:py-20">
          <Hero />
        </div>
        {/* <AboutMe /> */}
      </div>
    </>
  );
};

export default page;
