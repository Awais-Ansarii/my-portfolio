import ArrowUpRightIcon from "@/assets/icons/arrow-up-right.svg";
import GrainImage from "@/assets/images/grain.jpg";
import Link from "next/link";
import GmailIcon from "@/assets/icons/socials/gmail.svg";
import LeetcodeIcon from "@/assets/icons/socials/leetcode.svg";
import GithubIcon from "@/assets/icons/socials/github.svg";
import LinkedinIcon from "@/assets/icons/socials/linkedin.svg";
const SocialsData = [
  {
    name: "Gmail",
    icon: GmailIcon,
    url: "mailto:awaisansari1502@gmail.com"
  },
  {
    name: "Leetcode",
    icon: LeetcodeIcon,
    url: "https://leetcode.com/u/awais_ansarii/"
  },
  {
    name: "Github",
    icon: GithubIcon,
    url: "https://github.com/awais-ansarii"
  },
  {
    name: "LinkedIn",
    icon: LinkedinIcon,
    url: "https://www.linkedin.com/in/awais-ansari-584705270/"
  }
];
export const ContactSection = ({}) => {
  return (
    <div className="py-16 pt-10 ">
      <div className="container">
        <div id="contact" className="relative text-center md:text-left bg-gradient-to-r from-emerald-300 to-sky-400 rounded-3xl py-8 lg:py-16 px-10 text-gray-900 overflow-hidden z-0">
          <div
            className="absolute inset-0 -z-10 opacity-10"
            style={{
              backgroundImage: `url(${GrainImage.src})`,
            }}
          ></div>
          <div className="flex flex-col lg:flex-row items-center md:justify-between gap-8 md:gap-12">
            <div>
              <h2 className="font-serif text-2xl md:text-3xl">
                Lets Connect with Me
              </h2>
              <p className="text-sm md:text-base mt-2">
                Lets build something amazing together
              </p>
              
            </div>
            {/* <div className=""> */}

              {/* <button className="cursor-pointer text-white bg-gray-900 inline-flex gap-2  items-center px-6 h-12 rounded-xl w-max border border-gray-900">
                <span className="font-semibold">Contact Me</span>
                <ArrowUpRightIcon className="size-4 " />
              </button> */}
              <nav className=
                "flex flex-row items-center max-md:!flex-wrap gap-8 md:gap-6 text-white bg-gray-900/90 px-6 h-12 rounded-xl w-max border border-gray-900 max-md:w-[100%] max-md:h-full max-md:py-8 max-lg:py-6"
              >
            {SocialsData.map(({ name, icon: Icon, url }) => (
              <Link key={name} href={url} target="_blank" className="hover:text-emerald-200 inline-flex items-center gap-x-1 cursor-pointer">
                <Icon className="size-6" />
                <span className="font-semibold">{name}</span>
              </Link>
            ))}
          </nav>
            {/* </div> */}
          </div>
        </div>
      </div>
    </div>
  );
};
