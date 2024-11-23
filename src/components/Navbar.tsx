"use client";

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { AtSign, Briefcase, Code, House, Settings } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import SwitchTheme from "./SwitchTheme";
import { MobileNav } from "./MobileNav";

const Navbar = () => {
  const pathname = usePathname();

  const navItems = [
    { name: "Home", link: "/", icon: <House /> },
    { name: "About", link: "/about", icon: <AtSign /> },
    { name: "Skills", link: "/skills", icon: <Settings /> },
    { name: "Services", link: "/services", icon: <Briefcase /> },
    { name: "Projects", link: "/projects", icon: <Code /> },
  ];
  return (
    <>
      <header className="mx-auto max-w-screen-lg px-6">
        <div className="relative my-6 flex flex-col items-center justify-between gap-4">
          <div className="sticky flex w-full items-center justify-between rounded-full text-background">
            <div className="flex items-center gap-2">
              <p className="text-2xl font-bold text-foreground">Priyangsu B.</p>
            </div>
            <div className="hidden items-center justify-center gap-16 md:flex">
              {navItems.map((item, index) => (
                <TooltipProvider key={index}>
                  <Tooltip>
                    <TooltipTrigger>
                      <Link href={item.link}>
                        <div
                          className={`p-3 ${
                            pathname === item.link
                              ? "border-b-4 border-black text-foreground"
                              : "text-foreground"
                          }`}
                        >
                          {item.icon}
                        </div>
                      </Link>
                    </TooltipTrigger>
                    <TooltipContent>
                      <p>{item.name}</p>
                    </TooltipContent>
                  </Tooltip>
                </TooltipProvider>
              ))}
            </div>
            <div className="flex items-center gap-4">
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
