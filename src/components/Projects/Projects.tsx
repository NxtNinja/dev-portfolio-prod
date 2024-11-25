import Link from "next/link";
import { Badge } from "../ui/badge";
import { Button } from "../ui/button";
import { Link2 } from "lucide-react";

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
      <div className="grid w-full py-12">
        <div className="flex w-full flex-col gap-4">
          <div className="w-full space-y-3">
            <Badge
              variant="outline"
              className="motion-preset-pop rounded-full text-base font-semibold duration-1000"
            >
              ⚙️ Projects
            </Badge>
            <p className="motion-preset-slide-down max-w-2xl text-3xl font-bold duration-1000 md:text-5xl">
              Code with Character, Projects with Purpose
            </p>
          </div>
          <div className="grid grid-cols-1 gap-7 sm:grid-cols-2 md:grid-cols-3">
            {projects.map((project, index) => (
              <div
                key={index}
                className="motion-preset-slide-right flex w-full flex-col gap-3 rounded-3xl border border-foreground/40 p-4 duration-1000"
              >
                <Badge
                  variant={"outline"}
                  className="w-fit rounded-full"
                >
                  {project.status}
                </Badge>
                <p className="text-xl font-semibold">{project.name}</p>
                <p className="text-gray-600 dark:text-gray-300">
                  {project.description}
                </p>

                <Button
                  asChild
                  className="mt-auto w-fit rounded-full"
                >
                  <Link
                    href={project.url}
                    target="_blank"
                  >
                    Github Link <Link2 />
                  </Link>
                </Button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Projects;
