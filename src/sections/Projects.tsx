import darkSaasLandingPage from "@/assets/images/dark-saas-landing-page.png";
import lightSaasLandingPage from "@/assets/images/light-saas-landing-page.png";
import aiStartupLandingPage from "@/assets/images/ai-startup-landing-page.png";
import Link from "next/link";
import Image from "next/image";
import CheckCircleIcon from "@/assets/icons/check-circle.svg";
import ArrowUpRightIcon from "@/assets/icons/arrow-up-right.svg";
import GrainImage from "@/assets/images/grain.jpg";
import SectionHeader from "@/components/SectionHeader";
import Card from "@/components/Card";
const portfolioProjects = [
  {
    company: "Acme Corp",
    year: "2022",
    title: "AI-Powered Career Coaching and Achievement Tracking Platform",
    desc: "AI-powered career coaching platform that helps employees, especially early-career and underrepresented individuals, track achievements and receive personalized guidance. It boosts engagement, fosters confidence, and reduces turnover by making performance management more effective and achievement-focused.",
    results: [
      { title: "Enhanced user experience by 40%" },
      { title: "Improved site speed by 50%" },
      { title: "Increased mobile traffic by 35%" },
    ],
    link: "https://youtu.be/4k7IdSLxh6w",
    tech: [
      {
        title: "React.js",
      },
      {
        title: "Next.js",
      },
      {
        title: "Better Auth",
      },
      {
        title: "Tailwind",
      },
      {
        title: "AWS (S3, Amazon SES)",
      },
      {
        title: "PM2",
      },
      {
        title: "Docker",
      },
      {
        title: "MySQL",
      },
       {
        title: "Prisma",
      },
    ],
  },
  {
    company: "Acme Corp",
    year: "2022",
    title: "AI-Powered Career Coaching and Achievement Tracking Platform",
    desc: "AI-powered career coaching platform that helps employees, especially early-career and underrepresented individuals, track achievements and receive personalized guidance. It boosts engagement, fosters confidence, and reduces turnover by making performance management more effective and achievement-focused.",
    results: [
      { title: "Enhanced user experience by 40%" },
      { title: "Improved site speed by 50%" },
      { title: "Increased mobile traffic by 35%" },
    ],
    link: "https://youtu.be/4k7IdSLxh6w",
    tech: [
      {
        title: "React.js",
      },
      {
        title: "Next.js",
      },
      {
        title: "Better Auth",
      },
      {
        title: "Tailwind",
      },
      {
        title: "AWS (S3, Amazon SES)",
      },
      {
        title: "PM2",
      },
      {
        title: "Docker",
      },
      {
        title: "MySQL",
      },
       {
        title: "Prisma",
      },
    ],
  },
  {
    company: "Acme Corp",
    year: "2022",
    title: "AI-Powered Career Coaching and Achievement Tracking Platform",
    desc: "AI-powered career coaching platform that helps employees, especially early-career and underrepresented individuals, track achievements and receive personalized guidance. It boosts engagement, fosters confidence, and reduces turnover by making performance management more effective and achievement-focused.",
    results: [
      { title: "Enhanced user experience by 40%" },
      { title: "Improved site speed by 50%" },
      { title: "Increased mobile traffic by 35%" },
    ],
    link: "https://youtu.be/4k7IdSLxh6w",
    tech: [
      {
        title: "React.js",
      },
      {
        title: "Next.js",
      },
      {
        title: "Better Auth",
      },
      {
        title: "Tailwind",
      },
      {
        title: "AWS (S3, Amazon SES)",
      },
      {
        title: "PM2",
      },
      {
        title: "Docker",
      },
      {
        title: "MySQL",
      },
       {
        title: "Prisma",
      },
    ],
  },
 
];

export const ProjectsSection = () => {
  return (
    <section id={"project"} className="pb-16 lg:py-24">
      <div className="container">
        <SectionHeader
          title={"Projects"}
          eyebrow={"Impactful Projects I've Worked On"}
          description={""}
        />

        <div className="flex flex-col gap-20 mt-10 md:mt-20">
          {portfolioProjects?.map((project, index) => {
            return (
              <Card
                className={
                  "px-8 md:px-10 lg:px-12 pt-8 lg:pt-16 md:pt-12 pb-0 sticky top-20"
                }
                key={index}
                style={{
                  top: `64px + ${index * 40}px`,
                }}
              >
                <div
                  className="absolute inset-0 -z-10 opacity-5"
                  style={{ backgroundImage: `url(${GrainImage.src})` }}
                ></div>
                <div className="lg:grid lg:grid-cols-1 lg:gap-16">
                  <div className="lg:pb-16">
                    {/* <div className="bg-gradient-to-r from-emerald-300 to-sky-400 text-transparent bg-clip-text inline-flex uppercase font-bold tracking-widest text-sm gap-2 ">
                      <span>{project.company}</span>
                      <span>&bull;</span>
                      <span>{project.year}</span>
                    </div> */}

                    <h3 className="font-serif md:text-center text-2xl md:text-4xl mt-2 md:mt-5">
                      {project.title}
                    </h3>
                    {project.desc && (
                      <p className="pt-3 md:text-center"> {project.desc}</p>
                    )}
                    <hr className="mt-4 md:mt-5 border-2 border-white/5" />
                    <ul className="flex flex-col gap-4 mt-4 md:mt-5">
                      {project.results?.map((result, index) => {
                        return (
                          <li
                            key={index}
                            className="flex gap-2 text-sm md:text-base text-white/50"
                          >
                            <CheckCircleIcon className="size-5 md:size-6" />
                            <span>{result.title}</span>
                          </li>
                        );
                      })}
                      {/* <Link href={project.link}>
                        <button className="bg-white text-gray-950 rounded-xl h-12 w-full font-bold inline-flex justify-center items-center gap-2 mt-8 md:w-auto px-6">
                          <span>Visit Live Site</span>

                          <ArrowUpRightIcon className="size-4" />
                        </button>
                      </Link> */}
                    </ul>
                    
                    <div className="mt-4 flex flex-row items-start justify-start gap-x-2">
                      <span className="text-sm md:text-base ">Techstack: </span>
                      <div className="flex flex-wrap gap-2">

                      {
                        project.tech.map((item, index) => {
                          return (
                            <span
                            key={index}
                            className="border-2 px-2.5 py-0.5 text-nowrap rounded-[12px] border-white/10 text-sm md:text-base text-white/85"
                            >{item.title}</span>
                          )
                        })
                      }
                      </div>

                    </div>
                  </div>
                  {/* <div className="lg:relative">
                    <Image
                      src={project.image}
                      alt={project.title}
                      priority
                      className="mt-8 -mb-4 md:-mb-0 lg:mt-0 lg:absolute lg:w-auto lg:h-full lg:max-w-none"
                    />
                  </div> */}
                </div>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};
