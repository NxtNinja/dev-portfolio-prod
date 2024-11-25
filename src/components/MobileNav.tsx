"use client";

import {
  Sheet,
  SheetContent,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { AlignJustify } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

type MobileNavProps = {
  navItems: Array<{
    name: string;
    link: string;
    icon: React.ReactNode;
  }>;
};

export function MobileNav({ navItems }: MobileNavProps) {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  // Close the sheet when the route changes
  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  return (
    <Sheet
      open={isOpen}
      onOpenChange={setIsOpen}
    >
      <SheetTrigger asChild>
        <AlignJustify
          className="cursor-pointer text-foreground"
          onClick={() => setIsOpen(!isOpen)}
        />
      </SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <SheetTitle>MENU</SheetTitle>
        </SheetHeader>
        <div className="grid gap-4 py-4">
          <div className="space-y-4">
            {navItems.map((item, index) => (
              <Link
                href={item.link}
                key={index}
                className={`flex items-center gap-2 rounded-full p-3 ${
                  pathname === item.link
                    ? "bg-foreground text-background"
                    : "text-foreground"
                }`}
                onClick={() => setIsOpen(false)} // Close sheet when clicking a link
              >
                <div>{item.icon}</div>
                <p className="">{item.name}</p>
              </Link>
            ))}
          </div>
        </div>
        <SheetFooter></SheetFooter>
      </SheetContent>
    </Sheet>
  );
}
