"use client";

import { Badge } from "../ui/badge";
import BackendSkills from "./BackendSkills";
import FrontendSkills from "./FrontendSkills";

const Skills = () => {
  return (
    <div className="grid w-full py-12">
      <div className="flex w-full flex-col gap-8">
        <div className="w-full space-y-3">
          <Badge
            variant="outline"
            className="motion-preset-pop rounded-full text-base font-semibold duration-1000"
          >
            ⚙️ Skills
          </Badge>
          <p className="motion-preset-slide-down max-w-2xl text-3xl font-bold duration-1000 md:text-5xl">
            From Concepts to Reality with the Right Skills
          </p>
        </div>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-5">
          <div className="h-full w-full space-y-20 md:col-span-5">
            <FrontendSkills />
            <BackendSkills />
          </div>
          <div className="md:col-span-2">
            <div className="space-y-8"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
