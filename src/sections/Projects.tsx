import darkSaasLandingPage from "@/assets/images/dark-saas-landing-page.png";
import lightSaasLandingPage from "@/assets/images/light-saas-landing-page.png";
import aiStartupLandingPage from "@/assets/images/ai-startup-landing-page.png";
import Link from "next/link";
import Image from "next/image";
import CheckCircleIcon from "@/assets/icons/check-circle.svg";
import ArrowUpRightIcon from "@/assets/icons/arrow-up-right.svg";
import GrainImage from "@/assets/images/grain.jpg";
const portfolioProjects = [
  {
    company: "Acme Corp",
    year: "2022",
    title: "Dark Saas Landing Page",
    results: [
      { title: "Enhanced user experience by 40%" },
      { title: "Improved site speed by 50%" },
      { title: "Increased mobile traffic by 35%" },
    ],
    link: "https://youtu.be/4k7IdSLxh6w",
    image: darkSaasLandingPage,
  },
  {
    company: "Innovative Co",
    year: "2021",
    title: "Light Saas Landing Page",
    results: [
      { title: "Boosted sales by 20%" },
      { title: "Expanded customer reach by 35%" },
      { title: "Increased brand awareness by 15%" },
    ],
    link: "https://youtu.be/7hi5zwO75yc",
    image: lightSaasLandingPage,
  },
  {
    company: "Quantum Dynamics",
    year: "2023",
    title: "AI Startup Landing Page",
    results: [
      { title: "Enhanced user experience by 40%" },
      { title: "Improved site speed by 50%" },
      { title: "Increased mobile traffic by 35%" },
    ],
    link: "https://youtu.be/Z7I5uSRHMHg",
    image: aiStartupLandingPage,
  },
];

export const ProjectsSection = () => {
  return (
    <section className="pb-16 lg:py-24">
      <div className="container">
        <div className="flex justify-center">
          <p className="uppercase font-semibold tracking-widest bg-gradient-to-r from-emerald-300 to-sky-400 text-transparent bg-clip-text text-center">
            Real World Results
          </p>
        </div>
        <h2 className="text-center text-3xl md:text-5xl font-serif mt-6">
          Featured Projects
        </h2>
        <p className="text-center text-white/60 mt-4 md:text-lg lg:text-xl md:max-w-md md:mx-auto">
          See how I built these awesome projects in real life.
        </p>

        <div className="flex flex-col gap-20 mt-10 md:mt-20">
          {portfolioProjects?.map((project, index) => {
            return (
              <div
                className="bg-gray-800 rounded-3xl relative after:content-'' after:absolute after:inset-0 after:outline-2 after:outline  after:-outline-offset-2 after:rounded-3xl z-0 after:z-10 after:outline-white/20 overflow-hidden px-8 md:px-10 lg:px-12 pt-8 lg:pt-16 md:pt-12 after:pointer-events-none"
                key={index}
              >
                <div
                  className="absolute inset-0 -z-10 opacity-5"
                  style={{ backgroundImage: `url(${GrainImage.src})` }}
                ></div>
                <div className="lg:grid lg:grid-cols-2 lg:gap-16">
                  <div className="lg:pb-16">
                  <div className="bg-gradient-to-r from-emerald-300 to-sky-400 text-transparent bg-clip-text inline-flex uppercase font-bold tracking-widest text-sm gap-2 ">
                    <span>{project.company}</span>
                    <span>&bull;</span>
                    <span>{project.year}</span>
                  </div>

                  <h3 className="font-serif text-2xl md:text-4xl mt-2 md:mt-5">
                    {project.title}
                  </h3>
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
                    <Link href={project.link}>
                      <button className="bg-white text-gray-950 rounded-xl h-12 w-full font-bold inline-flex justify-center items-center gap-2 mt-8 md:w-auto px-6">
                        <span>Visit Live Site</span>

                        <ArrowUpRightIcon className="size-4" />
                      </button>
                    </Link>
                  </ul>
                  </div>
                  <div className="lg:relative">
                    <Image
                      src={project.image}
                      alt={project.title}
                      priority
                      className="mt-8 -mb-4 md:-mb-0 lg:mt-0 lg:absolute lg:w-auto lg:h-full lg:max-w-none"
                    />
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
