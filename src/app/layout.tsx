import { ReactNode } from "react";
import "./globals.css";
import Navbar from "@/components/Navbar";
import { Sulphur_Point } from "next/font/google";
import ThemeProvider from "@/components/providers/ThemeProvider";
// import Footer from "@/components/Footer";

type RootLayoutProps = Readonly<{
  children: ReactNode;
}>;

const sulphur = Sulphur_Point({
  subsets: ["latin"],
  weight: "400",
});

const RootLayout = ({ children }: RootLayoutProps) => {
  return (
    <html
      lang="en"
      suppressHydrationWarning
    >
      <body className={sulphur.className}>
        <ThemeProvider
          attribute={"class"}
          defaultTheme="light"
          enableSystem={false}
        >
          <Navbar />

          <main className="mx-auto max-w-screen-lg px-6">{children}</main>

          {/* <Footer /> */}
        </ThemeProvider>
      </body>
    </html>
  );
};

export default RootLayout;
