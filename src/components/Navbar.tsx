"use client";

import { Briefcase, Code, House, Settings } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { MobileNav } from "./MobileNav";
import SwitchTheme from "./SwitchTheme";

const Navbar = () => {
  const pathname = usePathname();

  const navItems = [
    { name: "Home", link: "/", icon: <House /> },
    { name: "Services", link: "/services/", icon: <Briefcase /> },
    { name: "Skills", link: "/skills/", icon: <Settings /> },
    { name: "Projects", link: "/projects/", icon: <Code /> },
  ];
  return (
    <>
      <header className="sticky top-0 z-50 mx-auto max-w-screen-lg bg-background/40 p-1 px-6 backdrop-blur-md">
        <div className="my-6 flex flex-col items-center justify-between gap-4">
          <div className="flex w-full items-center justify-end rounded-full text-background">
            {/* <div className="flex items-center gap-2">
              <Link
                href={"/"}
                className="text-2xl font-bold text-foreground"
              >
                Priyangsu B.
              </Link>
            </div> */}
            <div className="flex items-center gap-4">
              <div className="hidden items-center justify-center gap-8 md:flex">
                {navItems.map((item, index) => (
                  <Link
                    href={item.link}
                    key={index}
                  >
                    <div
                      className={`p-3 ${
                        pathname === item.link
                          ? "border-b-4 border-foreground text-foreground"
                          : "text-foreground/60"
                      }`}
                    >
                      {item.name}
                    </div>
                  </Link>
                ))}
              </div>
              <SwitchTheme />
              <div className="flex md:hidden">
                <MobileNav navItems={navItems} />
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Navbar;
