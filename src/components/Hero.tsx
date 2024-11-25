import Image from "next/image";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "./ui/tooltip";
import Link from "next/link";

// Define the icons with links and labels
const icons = [
  {
    label: "Github",
    link: "https://github.com/NxtNinja",
    svg: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        x="0px"
        y="0px"
        width="65"
        height="65"
        viewBox="0 0 72 72"
        className="fill-current"
      >
        <path d="M36,12c13.255,0,24,10.745,24,24c0,10.656-6.948,19.685-16.559,22.818c0.003-0.009,0.007-0.022,0.007-0.022	s-1.62-0.759-1.586-2.114c0.038-1.491,0-4.971,0-6.248c0-2.193-1.388-3.747-1.388-3.747s10.884,0.122,10.884-11.491	c0-4.481-2.342-6.812-2.342-6.812s1.23-4.784-0.426-6.812c-1.856-0.2-5.18,1.774-6.6,2.697c0,0-2.25-0.922-5.991-0.922	c-3.742,0-5.991,0.922-5.991,0.922c-1.419-0.922-4.744-2.897-6.6-2.697c-1.656,2.029-0.426,6.812-0.426,6.812	s-2.342,2.332-2.342,6.812c0,11.613,10.884,11.491,10.884,11.491s-1.097,1.239-1.336,3.061c-0.76,0.258-1.877,0.576-2.78,0.576	c-2.362,0-4.159-2.296-4.817-3.358c-0.649-1.048-1.98-1.927-3.221-1.927c-0.817,0-1.216,0.409-1.216,0.876s1.146,0.793,1.902,1.659	c1.594,1.826,1.565,5.933,7.245,5.933c0.617,0,1.876-0.152,2.823-0.279c-0.006,1.293-0.007,2.657,0.013,3.454	c0.034,1.355-1.586,2.114-1.586,2.114s0.004,0.013,0.007,0.022C18.948,55.685,12,46.656,12,36C12,22.745,22.745,12,36,12z"></path>
      </svg>
    ),
  },
  {
    label: "LinkedIn",
    link: "https://www.linkedin.com/in/priyangsubanik/",
    svg: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        x="0px"
        y="0px"
        width="50"
        height="50"
        viewBox="0 0 50 50"
        className="fill-current"
      >
        <path d="M25,2C12.318,2,2,12.317,2,25s10.318,23,23,23s23-10.317,23-23S37.682,2,25,2z M18,35h-4V20h4V35z M16,17 c-1.105,0-2-0.895-2-2c0-1.105,0.895-2,2-2s2,0.895,2,2C18,16.105,17.105,17,16,17z M37,35h-4v-5v-2.5c0-1.925-1.575-3.5-3.5-3.5 S26,25.575,26,27.5V35h-4V20h4v1.816C27.168,20.694,28.752,20,30.5,20c3.59,0,6.5,2.91,6.5,6.5V35z"></path>
      </svg>
    ),
  },
  {
    label: "Fiverr",
    link: "https://www.fiverr.com/s/R70GkkR",
    svg: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        x="0px"
        y="0px"
        width="50"
        height="50"
        viewBox="0 0 50 50"
        className="fill-current"
      >
        <path d="M25,2C12.32,2,2,12.32,2,25s10.32,23,23,23s23-10.32,23-23S37.68,2,25,2z M34,36h-6V25h-4v11h-6V25h-4v-6h4.04 c0.37-4.96,3.54-8,8.46-8h2.53v6H26.5c-0.92,0-2.14,0-2.43,2H34V36z"></path>
      </svg>
    ),
  },
];

const Hero = () => {
  return (
    <>
      <div className="mx-auto flex max-w-lg flex-col items-center justify-center gap-5">
        <div className="flex flex-col items-center justify-center gap-4">
          <div className="relative">
            <Image
              src={"/MY_PIC.avif"}
              alt="Priyangsu B."
              className="motion-preset-pop -z-50 h-32 w-32 rounded-full border-4 border-slate-200 grayscale motion-delay-500"
              width={200}
              height={200}
            />
          </div>
          <p className="motion-preset-slide-left tracking-wider motion-duration-1000">
            Hi, I&apos;m <span className="font-semibold">Priyangsu 👋</span>
          </p>
        </div>
        <p className="motion-preset-slide-right text-center text-3xl font-bold text-foreground motion-duration-1000 sm:text-5xl md:leading-[3.5rem]">
          Software engineer, building digital products and experience.
        </p>
        <div className="flex items-center justify-center gap-5 dark:text-foreground">
          {icons.map((icon, index) => (
            <TooltipProvider key={index}>
              <Tooltip>
                <TooltipTrigger asChild>
                  <Link
                    href={icon.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`${
                      index % 2 === 0
                        ? "motion-preset-slide-right"
                        : "motion-preset-slide-left"
                    } motion-duration-1000`}
                  >
                    {icon.svg}
                  </Link>
                </TooltipTrigger>
                <TooltipContent>
                  <p>{icon.label}</p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
          ))}
        </div>
      </div>
    </>
  );
};

export default Hero;
