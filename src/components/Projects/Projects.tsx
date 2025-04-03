import Link from "next/link";
import { Badge } from "../ui/badge";
import { SquareArrowOutUpRight } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      name: "AlteraX. A social media platform",
      description:
        "A comprehensive full-stack social media platform designed to bring people together seamlessly",
      url: "https://github.com/NxtNinja/AlteraX",
      techstack: [
        "Nextjs",
        "Tailwind",
        "Directus",
        "PostgreSQL",
        "Tanstack Query",
      ],
      status: "Completed",
    },
    {
      name: "Quick Note. A note taking web app",
      description:
        "An intuitive note-taking application that makes organizing thoughts simple and accessible for everyone.",
      url: "https://github.com/NxtNinja/Quik-Note",
      techstack: [
        "Nextjs",
        "Tailwind",
        "Nest.js",
        "PostgreSQL",
        "Prisma",
        "Tanstack Query",
      ],
      status: "Completed",
    },
    {
      name: "Expense Tracker. A expense tracking app",
      description:
        "An efficient app for tracking and managing expenses, helping users maintain financial clarity.",
      url: "https://github.com/NxtNinja/Expense-Tracker-FullStack",
      techstack: [
        "Nextjs",
        "Tailwind",
        "Fastify",
        "PostgreSQL",
        "Prisma",
        "Tanstack Query",
      ],
      status: "Completed",
    },
    {
      name: "Taskify. A Todo List Web App",
      description:
        "A user-friendly to-do list application that streamlines task management for daily productivity.",
      url: "https://github.com/NxtNinja/taskify-webui-v1",
      techstack: [
        "Nextjs",
        "Tailwind",
        "Directus",
        "PostgreSQL",
        "Tanstack Query",
      ],
      status: "Completed",
    },
    {
      name: "Secrecy. A password manager",
      description:
        "A secure and reliable password manager for safeguarding and organizing your sensitive information.",
      url: "",
      techstack: [
        "Nextjs",
        "Tailwind",
        "Directus",
        "PostgreSQL",
        "Tanstack Query",
      ],
      status: "Ongoing",
    },
    {
      name: "Developer Portfolio. A portfolio website",
      description:
        "A dynamic portfolio showcasing my skills and projects, crafted with modern design and interactivity.",
      url: "https://github.com/NxtNinja/dev-portfolio-prod",
      techstack: ["Nextjs", "Tailwind", "NextUI", "Jotai", "Framer Motion"],
      status: "Completed",
    },
  ];
  return (
    <>
      <div className="grid w-full">
        <div className="flex min-h-[80dvh] w-full max-w-2xl flex-col justify-center gap-4">
          <div className="w-full space-y-3">
            <Badge
              variant="outline"
              className="motion-preset-pop rounded-full text-base font-semibold duration-1000"
            >
              ⚙️ Projects
            </Badge>
            <p className="motion-preset-slide-down max-w-2xl text-3xl font-bold duration-1000 md:text-3xl">
              Code with Character, Projects with Purpose
            </p>
          </div>
          <div className="w-full space-y-3">
            <p className="motion-preset-slide-right text-2xl leading-8 tracking-wider text-foreground/60 motion-duration-1000 sm:text-xl">
              Bringing Ideas to Life with Real-World Solutions
            </p>
            <p className="motion-preset-slide-right text-xl leading-8 tracking-wider text-foreground/60 motion-duration-1000 sm:text-lg">
              Here are some of the projects I’ve worked on, combining
              innovation, performance, and seamless user experience.
            </p>
          </div>
          <div className="">
            <div className="grid w-full grid-cols-1 gap-2 sm:grid-cols-2">
              {projects.map((project, index) => (
                <Link
                  href={project.url}
                  key={index}
                  className="motion-preset-slide-right flex w-full flex-col gap-1 rounded-lg border border-foreground/40 p-4 duration-1000"
                >
                  <div className="flex justify-between gap-3">
                    <p className="line-clamp-1 text-base font-semibold">
                      {project.name}
                    </p>
                    <SquareArrowOutUpRight />
                  </div>
                  <p className="line-clamp-1 text-gray-600 dark:text-gray-300">
                    {project.description}
                  </p>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Projects;
