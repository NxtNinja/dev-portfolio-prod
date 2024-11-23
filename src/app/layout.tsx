import { ReactNode } from "react";
import "./globals.css";
import Navbar from "@/components/Navbar";
import { Outfit } from "next/font/google";

type RootLayoutProps = Readonly<{
  children: ReactNode;
}>;

const outfit = Outfit({
  subsets: ["latin"],
  weight: "500",
});

const RootLayout = ({ children }: RootLayoutProps) => {
  return (
    <html lang="en">
      <body className={`container mx-auto ${outfit.className}`}>
        <div className="">
          <Navbar />
        </div>
        <main className="">{children}</main>
      </body>
    </html>
  );
};

export default RootLayout;
