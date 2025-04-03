"use client";

import { Badge } from "../ui/badge";
import BackendSkills from "./BackendSkills";
import FrontendSkills from "./FrontendSkills";

const Skills = () => {
  return (
    <div className="grid w-full">
      <div className="flex min-h-[80dvh] w-full max-w-2xl flex-col justify-center gap-4">
        <div className="w-full space-y-3">
          <Badge
            variant="outline"
            className="motion-preset-pop rounded-full text-base font-semibold duration-1000"
          >
            ⚙️ Skills
          </Badge>
          <p className="motion-preset-slide-down max-w-2xl text-3xl font-bold duration-1000 md:text-3xl">
            From Concepts to Reality with the Right Skills
          </p>
        </div>
        <div className="w-full space-y-3">
          <p className="motion-preset-slide-right text-2xl leading-8 tracking-wider text-foreground/60 motion-duration-1000 sm:text-xl">
            Turning Ideas into Scalable, High-Performance Solutions
          </p>
          <p className="motion-preset-slide-right text-xl leading-8 tracking-wider text-foreground/60 motion-duration-1000 sm:text-lg">
            I specialize in modern web and mobile development, cloud solutions,
            and backend architecture to build seamless digital experiences.
          </p>
        </div>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-5">
          <div className="h-full w-full space-y-10 md:col-span-5">
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
