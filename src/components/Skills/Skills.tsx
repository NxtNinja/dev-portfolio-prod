"use client";

import { ChartConfig } from "@/components/ui/chart";
import { Badge } from "../ui/badge";
import BackendChart from "./BackendChart";
import BackendSkills from "./BackendSkills";
import FrontendChart from "./FrontendChart";
import FrontendSkills from "./FrontendSkills";

// Separate data for Frontend and Backend
const frontendData = [
  { skill: "Javascript", percentage: 90 },
  { skill: "Typescript", percentage: 95 },
  { skill: "Web Design", percentage: 98 },
  { skill: "Performance Optimization", percentage: 98 },
  { skill: "SEO", percentage: 70 },
];

const backendData = [
  { skill: "Node.js", percentage: 85 },
  { skill: "Headless CMS", percentage: 95 },
  { skill: "Cloud", percentage: 70 },
  { skill: "API Development", percentage: 95 },
  { skill: "Git", percentage: 90 },
];

const chartConfig = {
  percentage: {
    label: "Skills",
    color: "hsl(var(--chart-1))",
  },
} satisfies ChartConfig;

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
          <div className="space-y-6 md:col-span-3">
            <FrontendSkills />
            <BackendSkills />
          </div>
          <div className="md:col-span-2">
            <div className="space-y-8">
              {/* Frontend Skills Chart */}
              <FrontendChart
                chartConfig={chartConfig}
                frontendData={frontendData}
              />

              {/* Backend Skills Chart */}
              <BackendChart
                chartConfig={chartConfig}
                backendData={backendData}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
