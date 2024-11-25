import { Separator } from "./ui/separator";

const AboutMe = () => {
  return (
    <>
      <div className="flex flex-col justify-center md:h-[60dvh] md:flex-row md:items-center">
        <div className="flex flex-col gap-5">
          <span className="motion-preset-blur-up text-3xl font-bold motion-duration-1000 md:text-5xl">
            About Me
          </span>
          <Separator className="bg-foreground" />
          <span className="motion-preset-blur-right text-lg motion-duration-1000">
            I am a dedicated software engineer with a strong foundation in
            Computer Science. Skilled in{" "}
            <span className="font-bold">
              web and mobile app development, e-commerce, SaaS, and cloud
              computing
            </span>
            , excels in creating efficient, user-friendly solutions. Passionate
            about learning and innovation, he combines technical expertise with
            creativity to deliver high-quality, impactful digital products.
          </span>

          <span className="motion-preset-blur-left text-lg motion-duration-1000">
            Beyond coding, I am passionate about staying ahead of industry
            trends, continually{" "}
            <span className="font-bold">
              expanding my knowledge in cloud computing and emerging
              technologies
            </span>
            . I enjoy experimenting with new tools and frameworks, ensuring my
            projects are future-proof and cutting-edge. My dedication to quality
            and innovation makes me a reliable partner in any tech endeavor,
            delivering solutions that make a real difference.
          </span>
        </div>
      </div>
    </>
  );
};

export default AboutMe;
