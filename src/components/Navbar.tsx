"use client";

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import {
  AlignJustify,
  AtSign,
  Briefcase,
  Code,
  House,
  Settings,
  X,
} from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import SwitchTheme from "./SwitchTheme";

const Navbar = () => {
  const [isOpen, setOpen] = useState(false);
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
          <div className="sticky flex w-full items-center justify-between rounded-full border border-background/20 bg-foreground px-10 py-3 shadow-sm">
            <div className="flex items-center gap-2">
              <div className="flex md:hidden">
                {/* <Hamburger toggled={isOpen} toggle={setOpen} size={25} rounded /> */}
                {isOpen ? (
                  <X
                    onClick={() => setOpen((prev) => !prev)}
                    className="cursor-pointer"
                  />
                ) : (
                  <AlignJustify
                    onClick={() => setOpen((prev) => !prev)}
                    className="cursor-pointer"
                  />
                )}
              </div>
              <p className="text-background">Priyangsu B.</p>
            </div>
            <div className="hidden items-center justify-center gap-16 md:flex">
              {navItems.map((item, index) => (
                <TooltipProvider key={index}>
                  <Tooltip>
                    <TooltipTrigger>
                      <Link href={item.link}>
                        <div
                          className={`${
                            pathname === item.link
                              ? "font-bold text-blue-500"
                              : "text-background"
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
            <div className="">
              <SwitchTheme />
            </div>
          </div>
          {isOpen && (
            <div className="sticky flex h-full w-full flex-col gap-5 rounded-2xl border bg-slate-50 p-3 px-12 shadow-sm lg:hidden lg:px-10">
              {navItems.map((item, index) => (
                <Link
                  href={item.link}
                  key={index}
                  className={`flex items-center gap-2 rounded-full p-3 ${
                    pathname === item.link
                      ? "bg-blue-500 text-white"
                      : "text-gray-800"
                  }`}
                >
                  <div>{item.icon}</div>
                  <p className="">{item.name}</p>
                </Link>
              ))}
            </div>
          )}
        </div>
      </header>
    </>
  );
};

export default Navbar;
