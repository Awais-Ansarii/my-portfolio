import Link from "next/link";
import CheckCircleIcon from "@/assets/icons/check-circle.svg";
import ArrowUpRightIcon from "@/assets/icons/arrow-up-right.svg";
import GrainImage from "@/assets/images/grain.jpg";
import SectionHeader from "@/components/SectionHeader";
import Card from "@/components/Card";

const portfolioProjects = [
  {
    company: "Metricoid Technology Solutions",
    url:"https://metricoidtech.com/",
    year: "2024 - 2026",
    title: "Software Engineer",
    results: [
    
      { title: "Developed end-to-end web applications, including user-specific platforms and a modern super admin dashboard, while also integrating a dynamic website with Strapi CMS for seamless content management and real-time updates." },
      
      
      
      
      
      
      { title: "Implemented real-time chat functionality using WebSockets (Socket.io), allowing users to request support, admins to initiate or accept chats, share media, and mark conversations as completed or resolved." },
      
      { title: "Implemented scheduled cron jobs to automate daily reminder emails, generate timely in-app notifications, send free trial expiration alerts, and perform real-time validation of active subscription limits, including token usage against allocated quotas." },
      
      { title: "Built and optimized RESTful APIs with CRUD operations, implemented API security, error handling, and testing, while ensuring efficient query performance and integrating proper logging mechanisms." },

      { title: "Integrated multiple 3rd-party web-hooks and APIs, Razorpay & Stripe payment gateways." },
      
      { title: "Extended authentication module to support custom 3-factor authentication (3FA) flows by customising existing auth library (better-auth), adding security beyond defaults." },

      { title: "Set up CI/CD pipelines via GitLab and Jenkins to automate linting, building, deployment, and ensure consistent environment by Dockerizing the application." },

      { title: "Re-engineered a broken legacy Next.js 12 application into a scalable Next.js 15 architecture using App Router, Server Components, and hybrid ISR + on-demand revalidation, SSG — delivering faster load times, 100% performance and SEO scores, improved search indexing with a dynamic sitemap, and a significant increase in organic traffic & ranking visibility." },

      { title: "Translated UX designs into responsive UI with pixel-perfect implementation, enhancing user experience across platforms." },
      { title: "Collaborated with cross-functional teams and international clients, ensuring requirements were translated into practical, production-ready features." },
    ],
  },
  
];

 const Experience = () => {
  return (
    <section id={"experience"} className="pb-16 lg:py-24">
      <div  className="container">
        <SectionHeader
          title={"Experience"}
          eyebrow={"My Professional Journey"}
          description={""}
        />

        <div className="flex flex-col gap-20 mt-10 md:mt-20">
          {portfolioProjects?.map((project, index) => {
            return (
              <Card
                className={"px-8 md:px-10 lg:px-12 pt-8 lg:pt-16 md:pt-12 pb-0 sticky top-20"}
                key={index}
                style={{
                  top : `64px + ${index * 40}px`,
                }}
              >
                <div
                  className="absolute inset-0 -z-10 opacity-5"
                  style={{ backgroundImage: `url(${GrainImage.src})` }}
                ></div>
                <div className="lg:grid lg:grid-cols-1 lg:gap-16">
                  <div className="lg:pb-16">
                    <div className="w-full flex flex-col items-center gap-0">
                    <h3 className="font-serif text-2xl md:text-4xl ">
                      {project.title}
                    </h3>
                    <Link
                      href={project.url}
                      target="_blank"
                      className=
                      "bg-gradient-to-r mt-2 md:mt-5 from-emerald-300 to-sky-400 text-transparent bg-clip-text inline-flex text-center uppercase font-bold tracking-widest text-sm gap-1 ">
                      {project.company}
                      <ArrowUpRightIcon  className="size-4 text-emerald-300" />

                      
                      </Link>
                      <span className="md:text-nowrap mt-1">{project.year}</span>
                      </div>


                    
                    <hr className="mt-4 md:mt-5 border-2 border-white/5" />
                    <ul className="flex flex-col gap-4 mt-4 md:mt-5 max-md:pb-6">
                      {project?.results?.map((result, index) => {
                        return (
                          <li
                            key={index}
                            className="flex flex-row items-start justify-start gap-2 text-sm md:text-base text-white/50"
                          >
                            <CheckCircleIcon  className="size-5 md:size-6 shrink-0" />
                            <span>{result.title}</span>
                          </li>
                        );
                      })}
                      
                    </ul>
                  </div>
                 
                </div>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
 };

export default Experience;
