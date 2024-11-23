import { indexPage } from "@/lib/seoData";
import { Metadata } from "next";

export const generateMetadata = (): Metadata => {
  return indexPage;
};

const page = () => {
  return (
    <>
      <div className="grid place-items-center"></div>
    </>
  );
};

export default page;
