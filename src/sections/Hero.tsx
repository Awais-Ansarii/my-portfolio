import memojiImage from "@/assets/images/memoji-computer.png";
import Image from "next/image";
import ArrowDown from "@/assets/icons/arrow-down.svg";
import StarIcon from "@/assets/icons/star.svg";
import SparckleIcon from "@/assets/icons/sparkle.svg";
import GrainImage from "@/assets/images/grain.jpg";
import HeroOrbit from "@/components/HeroOrbit";
import Link from "next/link";

export const HeroSection = ({}) => {
  return (
    <section className="py-32 md:py-44 lg:py-56 relative z-0 overflow-x-clip">
      <div
        className="absolute inset-0 [mask-image:linear-gradient(to bottom, transparent, rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.7), transparent)]"
        style={{
          maskImage:
            "linear-gradient(to bottom, transparent, rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.7), transparent)",
          WebkitMaskImage:
            "linear-gradient(to bottom, transparent, rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.7), transparent)",
        }}
      >
        <div
          className="absolute inset-0 -z-30 opacity-5"
          style={{ backgroundImage: `url(${GrainImage.src})` }}
        ></div>
        <div className=" size-[620px] hero-ring "></div>
        <div className=" size-[820px] hero-ring "></div>
        <div className=" size-[1020px] hero-ring "></div>
        <div className=" size-[1220px] hero-ring "></div>

        <HeroOrbit
          size={430}
          rotation={-14}
          shouldOrbit={true}
          spinDuration="30s"
          shouldSpin={true}
          selfSpinDuration="3s"
        >
          <SparckleIcon className="size-8 text-emerald-300/40" />
        </HeroOrbit>
        <HeroOrbit
          size={440}
          rotation={79}
          shouldOrbit={true}
          spinDuration="32s"
          shouldSpin={true}
          selfSpinDuration="3s"
        >
          <SparckleIcon className="size-5 text-emerald-300/40" />
        </HeroOrbit>

        <HeroOrbit
          size={520}
          rotation={-41}
          shouldOrbit={true}
          spinDuration="34s"
        >
          <div className="size-2 rounded-full bg-emerald-300/40"></div>
        </HeroOrbit>

        <HeroOrbit
          size={530}
          rotation={178}
          shouldOrbit={true}
          spinDuration="36s"
          shouldSpin={true}
          selfSpinDuration="3s"
        >
          <SparckleIcon className="size-10 text-emerald-300/40" />
        </HeroOrbit>
        <HeroOrbit
          size={570}
          rotation={20}
          shouldOrbit={true}
          spinDuration="38s"
          shouldSpin={true}
          selfSpinDuration="6s"
        >
          <StarIcon className="size-12 text-emerald-300" />
        </HeroOrbit>

        <HeroOrbit
          size={590}
          rotation={98}
          shouldOrbit={true}
          spinDuration="40s"
          shouldSpin={true}
          selfSpinDuration="6s"
        >
          <StarIcon className="size-8 text-emerald-300" />
        </HeroOrbit>
        <HeroOrbit
          size={650}
          rotation={-5}
          shouldOrbit={true}
          spinDuration="42s"
          shouldSpin={true}
          selfSpinDuration="6s"
        >
          <div className="size-2 rounded-full bg-emerald-300/20"></div>
        </HeroOrbit>
        <HeroOrbit
          size={710}
          rotation={144}
          shouldOrbit={true}
          spinDuration="44s"
          shouldSpin={true}
          selfSpinDuration="6s"
        >
          <SparckleIcon className="size-14 text-emerald-300/20" />
        </HeroOrbit>
        <HeroOrbit
          size={720}
          rotation={85}
          shouldOrbit={true}
          spinDuration="46s"
          shouldSpin={true}
          selfSpinDuration="6s"
        >
          <div className="size-3 rounded-full bg-emerald-300/20"></div>
        </HeroOrbit>
        <HeroOrbit
          size={800}
          rotation={-72}
          shouldOrbit={true}
          spinDuration="48s"
          shouldSpin={true}
          selfSpinDuration="6s"
        >
          <StarIcon className="size-28 text-emerald-300" />
        </HeroOrbit>
      </div>
      <div className="container">
        <div className="flex flex-col justify-center items-center">
          <Image
            src={memojiImage}
            className="size-[100px]"
            alt="Memoji Computer Image"
          />
          <div className="px-4 py-1.5 inline-flex bg-gray-950 border border-gray-800 items-center gap-4 rounded-lg">
            <div className="bg-green-500 size-2.5 rounded-full  relative ">
              <div className="bg-green-500 absolute inset-0 rounded-full animate-ping-large"></div>
            </div>
            <div className="text-sm font-medium">Open To Work</div>
          </div>
        </div>

        <div className="max-w-lg mx-auto">
          <h1 className="font-serif text-3xl md:text-5xl text-center mt-8 tracking-wide">
            Building Scalable Full Stack Applications
          </h1>
          <p className="mt-4 text-center text-pretty text-white/60 md:text-lg">
            Full Stack Software Engineer with 2+ years of experience building scalable, high-performance web applications for a US-based startup. Specialized in Java, React, Next.js, Node.js, and cloud-native architectures with expertise in real-time systems, secure authentication, payments, and performance optimization. Proven ability to modernize legacy systems and deliver SEO-optimized, production-ready solutions.
          </p>
        </div>
        <div className="w-full mx-auto flex flex-col md:flex-row md:justify-center items-center mt-8 gap-4">
          {/* <Link href={"#contact"} className="inline-flex items-center gap-2 border cursor-pointer rounded-xl border-white/15 px-6 h-12">
           <span>👋</span>
            <span className="font-semibold">Let&apos;s Connect</span>
          </Link> */}
          <Link
            href={"https://drive.google.com/file/d/1T8EzdOg1KvaIY8MikGPJShD2e_Je3Wvf/view?usp=sharing"}
            // href={"https://drive.google.com/file/d/1q5etOT4i-bNuGU9Zrqh9OzJfFb8y3olr/view"}
            target="_blank"
            className="inline-flex relative z-[999] hover:bg-emerald-300/10 hover:text-emerald-300 items-center  gap-2 border !cursor-pointer max-md:min-w-[215px] md:px-10 rounded-xl border-white/15 px-6 h-12 hover:scale-105">
            <span className="font-semibold">View Resume</span>
            {/* <ArrowDown className="size-4" /> */}
          </Link>
          <Link href={"#contact"} className="group max-md:min-w-[215px] hover:scale-105 inline-flex px-6 h-12 relative z-[999] text-gray-900  items-center gap-2 border cursor-pointer rounded-xl border-white bg-white">
            <span className="group-hover:animate-ping hover:!text-gray-950">👋</span>
            <span className="font-semibold hover:text-gray-950">Let&apos;s Connect</span>
          </Link>
        </div>
      </div>
    </section>
  );
};
