import Services from "@/components/Services";
import { servicePage } from "@/lib/seoData";
import { Metadata } from "next";

export const generateMetadata = (): Metadata => {
  return servicePage;
};

const services = () => {
  return (
    <>
      <Services />
    </>
  );
};

export default services;
