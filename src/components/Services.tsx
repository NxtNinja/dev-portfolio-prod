import Link from "next/link";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";

// Array of services
const servicesList = [
  {
    title: "UI/UX Design",
    description:
      "Create stunning and user-friendly interfaces that provide an exceptional user experience.",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        x="0px"
        y="0px"
        width="30"
        height="30"
        viewBox="0 0 30 30"
        className="fill-current text-background"
      >
        <path d="M10 29L10 29c-2.209 0-4-1.791-4-4l0 0c0-2.209 1.791-4 4-4h2.857C13.488 21 14 21.512 14 22.143V25C14 27.209 12.209 29 10 29zM20 9h-2.857C16.512 9 16 8.488 16 7.857V2.143C16 1.512 16.512 1 17.143 1H20c2.209 0 4 1.791 4 4l0 0C24 7.209 22.209 9 20 9zM10 1h2.857C13.488 1 14 1.512 14 2.143v5.714C14 8.488 13.488 9 12.857 9H10C7.791 9 6 7.209 6 5l0 0C6 2.791 7.791 1 10 1zM10 11h2.857C13.488 11 14 11.512 14 12.143v5.714C14 18.488 13.488 19 12.857 19H10c-2.209 0-4-1.791-4-4l0 0C6 12.791 7.791 11 10 11zM20 11A4 4 0 1020 19 4 4 0 1020 11z"></path>
      </svg>
    ),
    link: "/services/ui-ux-design",
  },
  {
    title: "Web Development",
    description:
      "Build high-performance and scalable web applications tailored to your business needs.",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="30"
        height="30"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="fill-current text-background"
      >
        <rect
          x="2"
          y="3"
          width="20"
          height="14"
          rx="2"
          ry="2"
        ></rect>
        <line
          x1="8"
          y1="21"
          x2="16"
          y2="21"
        ></line>
        <line
          x1="12"
          y1="17"
          x2="12"
          y2="21"
        ></line>
      </svg>
    ),
    link: "/services/web-development",
  },
  {
    title: "Backend Development",
    description:
      "Build robust and scalable server-side applications with modern backend technologies.",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="30"
        height="30"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="fill-current text-background"
      >
        <rect
          x="2"
          y="7"
          width="20"
          height="10"
          rx="2"
          ry="2"
        ></rect>
        <path d="M8 7V5a4 4 0 018 0v2"></path>
        <line
          x1="8"
          y1="11"
          x2="16"
          y2="11"
        ></line>
      </svg>
    ),
    link: "/services/backend-development",
  },
  {
    title: "Headless CMS",
    description:
      "Manage your content effortlessly with a headless CMS for dynamic and flexible websites.",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="30"
        height="30"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="fill-current text-background"
      >
        <path d="M3 4h18v13H3z"></path>
        <path d="M8 21h8"></path>
        <path d="M12 17v4"></path>
      </svg>
    ),
    link: "/services/headless-cms",
  },
  {
    title: "Database Management",
    description:
      "Ensure data integrity and optimized queries with expert database management.",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="30"
        height="30"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="fill-current text-background"
      >
        <ellipse
          cx="12"
          cy="5"
          rx="9"
          ry="3"
        ></ellipse>
        <path d="M3 5v6c0 1.3 4 2.7 9 2.7s9-1.4 9-2.7V5"></path>
        <path d="M3 11v6c0 1.3 4 2.7 9 2.7s9-1.4 9-2.7v-6"></path>
      </svg>
    ),
    link: "/services/database-management",
  },
  {
    title: "Cloud Computing",
    description:
      "Leverage cloud platforms for scalable and reliable infrastructure solutions.",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="30"
        height="30"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="fill-current text-background"
      >
        <path d="M20 17.58A5.5 5.5 0 0016.26 7 4.5 4.5 0 106 10.75"></path>
        <path d="M3 17h18"></path>
      </svg>
    ),
    link: "/services/cloud-computing",
  },
  {
    title: "E-commerce Solutions",
    description:
      "Develop a custom e-commerce platform with seamless shopping experiences and powerful features.",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="30"
        height="30"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="fill-current text-background"
      >
        <path d="M6 6h15l-1.5 9h-11.1"></path>
        <circle
          cx="9"
          cy="20"
          r="1"
        ></circle>
        <circle
          cx="18"
          cy="20"
          r="1"
        ></circle>
      </svg>
    ),
    link: "/services/ecommerce-solutions",
  },
  {
    title: "SaaS Development",
    description:
      "Build scalable and user-centric SaaS products tailored to meet specific business requirements.",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="30"
        height="30"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="fill-current text-background"
      >
        <rect
          x="2"
          y="3"
          width="20"
          height="14"
          rx="2"
          ry="2"
        ></rect>
        <line
          x1="8"
          y1="21"
          x2="16"
          y2="21"
        ></line>
        <line
          x1="12"
          y1="17"
          x2="12"
          y2="21"
        ></line>
        <line
          x1="2"
          y1="10"
          x2="22"
          y2="10"
        ></line>
      </svg>
    ),
    link: "/services/saas-development",
  },
  {
    title: "SEO Optimization",
    description:
      "Enhance your website's visibility with effective SEO strategies and content optimization.",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="30"
        height="30"
        viewBox="0 0 24 24"
        className="fill-current text-background"
      >
        <path d="M12 2L1.8 21.6h20.4zm0 3.6l6 12.3H6z"></path>
      </svg>
    ),
    link: "/services/seo-optimization",
  },
];

const Services = () => {
  return (
    <>
      <div className="grid w-full py-12">
        <div className="flex w-full flex-col gap-4">
          <div className="w-full space-y-3">
            <Badge
              variant="outline"
              className="motion-preset-pop rounded-full text-base font-semibold duration-1000"
            >
              ⚙️ Services
            </Badge>
            <p className="motion-preset-slide-down max-w-2xl text-3xl font-bold duration-1000 md:text-5xl">
              Don&apos;t just build software, build experiences
            </p>
          </div>
          <div className="grid grid-cols-1 gap-7 sm:grid-cols-2 md:grid-cols-3">
            {servicesList.map((service, index) => (
              <div
                key={index}
                className="motion-preset-slide-right flex w-full flex-col gap-3 rounded-3xl border border-foreground/40 p-4 duration-1000"
              >
                <div className="w-fit rounded-full bg-foreground p-3">
                  {service.icon}
                </div>
                <p className="text-xl font-semibold">{service.title}</p>
                <p className="text-gray-600 dark:text-gray-300">
                  {service.description}
                </p>
                <Button className="w-fit rounded-full">
                  <Link
                    href={`https://wa.me/8420615746?text=Hello! I would like to hire you for ${service.title} related project`}
                  >
                    Let&apos;s talk
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

export default Services;
