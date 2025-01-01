import ArrowUpRightIcon from "@/assets/icons/arrow-up-right.svg";
import GrainImage from "@/assets/images/grain.jpg";
export const ContactSection = ({}) => {
  return (
    <div className="py-16 pt-10 ">
      <div className="container">
        <div className="relative text-center md:text-left bg-gradient-to-r from-emerald-300 to-sky-400 rounded-3xl py-8 px-10 text-gray-900 overflow-hidden z-0">
          <div
            className="absolute inset-0 -z-10 opacity-10"
            style={{
              backgroundImage: `url(${GrainImage.src})`,
            }}
          ></div>
          <div className="flex flex-col md:flex-row items-center md:justify-between gap-8 md:gap-12">
            <div>
              <h2 className="font-serif text-2xl md:text-3xl">
                Lets Connect with Me
              </h2>
              <p className="text-sm md:text-base mt-2">
                Lets create something amazing together
              </p>
            </div>
            <div>
              <button className="cursor-pointer text-white bg-gray-900 inline-flex gap-2  items-center px-6 h-12 rounded-xl w-max border border-gray-900">
                <span className="font-semibold">Contact Me</span>
                <ArrowUpRightIcon className="size-4 " />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
