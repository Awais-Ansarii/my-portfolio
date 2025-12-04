import CheckCircleIcon from "@/assets/icons/check-circle.svg";
import GrainImage from "@/assets/images/grain.jpg";
import SectionHeader from "@/components/SectionHeader";
import Card from "@/components/Card";
import Link from "next/link";
const portfolioProjects = [
  {
    title: "AI-Powered Career Coaching & Achievement Tracking Platform",
    desc: "AI-powered career coaching platform that helps employees, especially early-career and underrepresented individuals, track achievements and receive personalized guidance. It boosts engagement, fosters confidence, and reduces turnover by making performance management more effective and achievement-focused.",
    results: [
      {
        title:
          "Developed end-to-end web applications, including user-specific platform and a modern super admin dashboard, while also integrating a dynamic website with Strapi CMS for seamless content management and real-time updates.",
      },
      {
        title:
          "Translated UX designs into responsive UI with pixel-perfect implementation, enhancing user experience across platforms.",
      },
      {
        title:
          "Integrated 3rd party APIs including Hubspot, Sendgrid, Hotjar, Google Analytics, Cookie-bot etc.",
      },
      {
        title:
          "Implemented scheduled cron jobs to automate daily reminder emails, weekly in-app notifications for achievements, monthly career-coach check-ins, and free trial expiration alerts.",
      },
      {
        title:
          "Integrated with AWS cloud services: configured media storage on AWS S3 so that user-uploaded media (images/videos) are securely stored and served.",
      },
      {
        title:
          "Containerized and Dockerized the entire application — enabling consistent, environment-agnostic deployment and simplified infrastructure management.",
      },
    ],
    link: null,
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
        title: "Context Api",
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
      {
        title: "REST Api",
      },
    ],
  },
  {
    title: "Next.js Migration & Performance Optimization for Legacy Website",
    desc: "Migrated a legacy webite Next.js 12 to Next.js 15 and re-architected critical parts to achieve near-edge performance, improved SEO, and streamlined maintainability. The migration resulted in a performant, modern web app that leverages static generation (SSG), hook-based APIs (web-hooks), and clean integration with a Strapi CMS back-end — enabling faster load times, better content management, and robust scalability.",
    results: [
      {
        title:
          "Migrated legacy front-end Next.js version 12 to version 15: Transformed monolithic, outdated codebase into a modern Next.js architecture — improving performance, maintainability, and developer experience.",
      },
      {
        title:
          "Implemented Static Site Generation (SSG): Used Next.js’s SSG capabilities to pre-render pages at build time — reducing server load, speeding up delivery and improving SEO.",
      },

      {
        title:
          "Set up Strapi-backed CMS with web-hooks: Integrated Strapi CMS with web-hooks to enable dynamic content updates and seamless headless-CMS workflows tied to the Next.js front-end.",
      },
      {
        title:
          "Optimized performance & page load times: Refactored code to reduce unnecessary renders, leveraged caching strategies, and optimized asset delivery to achieve “100% performance” post-migration, significantly improving user experience.",
      },
      {
        title:
          "Ensured clean, maintainable front-end stack: Adopted modern front-end best practices, leveraging Next.js + Tailwind + MySQL backend (via Strapi) to deliver a scalable and maintainable solution.",
      },
      {
        title:
          "Translated UX designs into responsive UI with pixel-perfect implementation, enhancing user experience across platforms, integrated Hubspot & Google Analytics.",
      },
    ],
    link: "https://medium.com/@awaisdev/from-legacy-code-to-100-performance-my-next-js-migration-journey-c744db1fde82",
    tech: [
      {
        title: "Next.js",
      },

      {
        title: "Tailwind",
      },
      {
        title: "Strapi CMS",
      },
      {
        title: "MySQL",
      },
      {
        title: "Static Site Generation (SSG)",
      },
      {
        title: "Web-hooks",
      },
      {
        title: "SEO & Performance Optimization",
      },
    ],
  },
  {
    title: "DUI Resources App ",
    desc: "Driving under the influence (DUI) in United States refers to operating a vehicle while affected by alcohol, drugs, or both. This applies to both legal and illegal drugs, including prescription medication and over-the-counter drugs.",
    results: [
      {
        title:
          "Developed end-to-end web applications, including user-specific platform and a modern super admin dashboard, while also integrating a dynamic website with Strapi CMS for seamless content management and real-time updates.",
      },
      {
        title:
          "Extended authentication module to support custom 3-factor authentication (3FA) flows by customising existing auth library (better-auth), adding security beyond defaults.",
      },
      {
        title:
          "Implemented real-time chat functionality using WebSockets (Socket.io), allowing users to request support, admins to initiate or accept chats, share media, and mark conversations as completed or resolved.",
      },
      {
        title:
          "Designed and implemented a fully dynamic Role-Based Access Control (RBAC) system in Next.js with centralized roles, permissions, and route-permission mapping, enforcing security at both server (middleware) and client (UI) levels. Enabled granular component-level access using a permission context and readable frontend constants for type-safe authorization.",
      },
      {
        title:
          "Integrated with AWS cloud services: configured media storage on AWS S3 so that user-uploaded media (images/videos) are securely stored and served.",
      },
      {
        title:
          "Containerized and Dockerized the entire application — enabling consistent, environment-agnostic deployment and simplified infrastructure management.",
      },
    ],
    link: null,
    tech: [
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
        title: "Zustand",
      },
      {
        title: "AWS",
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
      {
        title: "Web Sockets",
      },

      {
        title: "Socket.io",
      },
      {
        title: "RBAC",
      },
      {
        title: "Shadcn",
      },
    ],
  },
  {
    title: "AI-powered meeting productivity App",
    desc: "AI-powered meeting productivity platform that transforms conversations into structured knowledge accurately, securely, and instantly, automated transcription, AI‑generated summaries, actionable insights, and seamless integrations with the tools you already use.",
    results: [
      {
        title:
          "Developed end-to-end web applications, including user-specific platform and a modern super admin dashboard, while also integrating a dynamic website with Strapi CMS for seamless content management and real-time updates.",
      },
      {
        title:
          "Extended authentication module to support custom 3-factor authentication (3FA) flows by customising existing auth library (better-auth), adding security beyond defaults.",
      },
      
      {
        title:
          "Implemented a complete subscription and billing system with admin-driven plan management (free & paid) supporting token limits, audio/video usage caps, and multi-gateway support (Stripe & Razorpay). Built secure checkout, payment verification via webhooks, and automated post-payment plan activation.",
      },
      {
        title:
          "Implemented scheduled cron jobs to automate daily reminder emails, generate timely in-app notifications, send free trial expiration alerts, and perform real-time validation of active subscription limits, including token usage against allocated quotas.",
      },
      {
        title:
          "Integrated with AWS cloud services: configured media storage on AWS S3 so that user-uploaded media (images/videos) are securely stored and served.",
      },
      {
        title:
          "Containerized and Dockerized the entire application — enabling consistent, environment-agnostic deployment and simplified infrastructure management.",
      },
    ],
    link: null,
    tech: [
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
        title: "Context API",
      },
      {
        title: "AWS",
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
      {
        title: "Web Sockets",
      },
      {
        title: "Web Hooks",
      },

      {
        title: "Socket.io",
      },
      {
        title: "Razorpay",
      },
      {
        title: "Stirpe",
      },
      {
        title: "Open AI",
      },
      {
        title: "LLM",
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

        <div className="flex flex-col gap-16 mt-10 md:mt-16">
          {portfolioProjects?.map((project, index) => {
            return (
              <Card
                className={
                  "px-8 md:px-10 lg:px-12 pt-8  md:pt-12 pb-0 "
                }
                key={index}
                // style={{
                //   top: `64px + ${index * 40}px`,
                // }}
              >
                <div
                  className="absolute inset-0 -z-10 opacity-5"
                  style={{ backgroundImage: `url(${GrainImage.src})` }}
                ></div>
                <div className="lg:grid lg:grid-cols-1 lg:gap-16">
                  <div className="lg:pb-16">
                    <h3 className="font-serif md:text-center text-2xl md:text-4xl mt-2 md:mt-4">
                      {project.title}
                    </h3>
                    {project.desc && (
                      <p className="pt-3 md:text-center max-md:hidden">
                        {" "}
                        {project.desc}
                      </p>
                    )}
                    {project?.link && (
                      <div className="pt-3  hover:text-emerald-400 w-full !mx-auto text-center">
                        <Link
                          href={project.link}
                          target="_blank"
                          className="border-2 px-3 py-1.5 hover:border-emerald-400 rounded-[16px] border-white/15"
                        >
                          {"Read this blog for more details"}
                        </Link>
                      </div>
                    )}
                    <hr className="mt-4 md:mt-5 border-2 border-white/5" />
                    <ul className="flex flex-col gap-4 mt-4 md:mt-5">
                      {project.results?.map((result, index) => {
                        return (
                          <li
                            key={index}
                            className="flex gap-2 text-sm md:text-base text-white/50"
                          >
                            <CheckCircleIcon className="size-5 md:size-6 shrink-0" />
                            <span>{result.title}</span>
                          </li>
                        );
                      })}
                    </ul>

                    <div className="mt-4 pb-4 md:pb-4 md:mt-6 flex flex-row items-start justify-start gap-x-2 max-md:flex-wrap">
                      <span className="text-sm md:text-base text-nowrap max-md:pb-2">
                        Tech Stack:{" "}
                      </span>
                      <div className="flex flex-wrap gap-2">
                        {project.tech.map((item, index) => {
                          return (
                            <span
                              key={index}
                              className="border-2 px-2.5 py-0.5 text-nowrap rounded-[12px] border-white/10 text-sm md:text-base text-white/85"
                            >
                              {item.title}
                            </span>
                          );
                        })}
                      </div>
                    </div>
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
