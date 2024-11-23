"use client";

import { MoonStar, Sun } from "lucide-react";
import { useTheme } from "next-themes";

const SwitchTheme = () => {
  const { theme, setTheme } = useTheme();

  return (
    <>
      <button
        onClick={() =>
          theme === "dark" ? setTheme("light") : setTheme("dark")
        }
        className="flex items-center"
      >
        <Sun className="rotate-0 scale-100 text-foreground transition-all duration-300 ease-in-out dark:-rotate-90 dark:scale-0" />
        <MoonStar className="absolute rotate-90 scale-0 text-foreground transition-all duration-300 ease-in-out dark:rotate-0 dark:scale-100" />
      </button>
    </>
  );
};

export default SwitchTheme;
