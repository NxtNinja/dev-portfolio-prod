"use client";

import {
  Sun,
  House,
  Settings,
  Code,
  AtSign,
  Briefcase,
  Moon,
} from "lucide-react";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Cross as Hamburger } from "hamburger-react";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const Navbar = () => {
  const [isOpen, setOpen] = useState(false);
  const [isDark, setDark] = useState(false);
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
      <div className="flex flex-col justify-between items-center p-5 lg:px-24 relative gap-4">
        <div className="border sticky shadow-sm bg-slate-50 h-full w-full lg:p-3 rounded-full flex justify-between items-center px-9 lg:px-10">
          <div className="flex items-center gap-2">
            <div className="lg:hidden block w-fit h-fit p-0">
              <Hamburger toggled={isOpen} toggle={setOpen} size={25} rounded />
            </div>
            <p className="">Priyangsu B.</p>
          </div>
          <div className="lg:flex justify-center items-center gap-16 hidden">
            {navItems.map((item, index) => (
              <TooltipProvider key={index}>
                <Tooltip>
                  <TooltipTrigger>
                    <Link href={item.link}>
                      <div
                        className={`${
                          pathname === item.link
                            ? "text-blue-500 font-bold"
                            : "text-gray-800"
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
            {isDark ? (
              <motion.div
                key="moon"
                initial={{ opacity: 0, rotate: -180 }}
                animate={{ opacity: 1, rotate: 0 }}
                exit={{ opacity: 0, rotate: 180 }}
                transition={{ duration: 0.3 }}
                onClick={() => setDark((prev) => !prev)}
                className="cursor-pointer"
              >
                <Moon />
              </motion.div>
            ) : (
              <motion.div
                key="sun"
                initial={{ opacity: 0, rotate: 180 }}
                animate={{ opacity: 1, rotate: 0 }}
                exit={{ opacity: 0, rotate: -180 }}
                transition={{ duration: 0.5 }}
                onClick={() => setDark((prev) => !prev)}
                className="cursor-pointer"
              >
                <Sun />
              </motion.div>
            )}
          </div>
        </div>
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ y: -100, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -100, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="border lg:hidden sticky shadow-sm rounded-2xl bg-slate-50 h-full w-full flex flex-col gap-5 p-3 px-12 lg:px-10"
            >
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
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </>
  );
};

export default Navbar;
