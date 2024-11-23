import { ReactNode } from "react";
import "./globals.css";
import Navbar from "@/components/Navbar";
import { Outfit } from "next/font/google";
import ThemeProvider from "@/components/providers/ThemeProvider";

type RootLayoutProps = Readonly<{
  children: ReactNode;
}>;

const outfit = Outfit({
  subsets: ["latin"],
  weight: "500",
});

const RootLayout = ({ children }: RootLayoutProps) => {
  return (
    <html
      lang="en"
      suppressHydrationWarning
    >
      <body className={outfit.className}>
        <ThemeProvider
          attribute={"class"}
          defaultTheme="light"
          enableSystem={false}
        >
          <Navbar />

          <main className="mx-auto max-w-screen-lg px-6">{children}</main>
        </ThemeProvider>
      </body>
    </html>
  );
};

export default RootLayout;
