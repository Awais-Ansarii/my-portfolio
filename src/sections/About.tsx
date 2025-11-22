"use client";
import SectionHeader from "@/components/SectionHeader";
import Card from "@/components/Card";
import StarIcon from "@/assets/icons/star.svg";
import BookImage from "@/assets/images/book-cover.png";
import { motion } from "framer-motion";
import Image from "next/image";
import JavascriptIcon from "@/assets/icons/square-js.svg";
import ReactIcon from "@/assets/icons/react.svg";
import TechIcon from "@/components/TechIcon";
import MapImage from "@/assets/images/map.png";
import MemojiSmile from "@/assets/images/memoji-smile.png";
import CardHeader from "@/components/CardHeader";
import ToolboxItems from "@/components/ToolboxItems";
import { useRef } from "react";
const technologies = [
  {
    title: "React",
    iconType: ReactIcon,
  },
  {
    title: "Javascript",
    iconType: JavascriptIcon,
  },
  {
    title: "Node.Js",
    iconType: ReactIcon,
  },
  {
    title: "Next.Js",
    iconType: JavascriptIcon,
  },
  {
    title: "React",
    iconType: ReactIcon,
  },
  {
    title: "Javascript",
    iconType: JavascriptIcon,
  },
  {
    title: "Node.Js",
    iconType: ReactIcon,
  },
  {
    title: "Next.Js",
    iconType: JavascriptIcon,
  },
];

const hobbies = [
  {
    title: "Paiting",
    emoji: "🎨",
    left: "5%",
    top: "5%",
  },
  {
    title: "Music",
    emoji: "🎷",
    left: "50%",
    top: "5%",
  },
  {
    title: "Paiting",
    emoji: "🎨",
    left: "35%",
    top: "40%",
  },
  {
    title: "Music",
    emoji: "🎷",
    left: "10%",
    top: "35%",
  },
  {
    title: "Paiting",
    emoji: "🎨",
    left: "70%",
    top: "45%",
  },
  {
    title: "Music",
    emoji: "🎷",
    left: "5%",
    top: "65%",
  },
  {
    title: "Paiting",
    emoji: "🎨",
    left: "45%",
    top: "70%",
  },
];
export const AboutSection = () => {
  const constraintRef = useRef(null);
  return (
    <div className="py-20 lg:py-28">
      <div className="container">
        <SectionHeader
          title={"About Me"}
          eyebrow={"A Glimpse into my world"}
          description={"Learn more about me and my journey."}
        />
        <div className="mt-20 flex flex-col gap-6">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-5 lg:grid-cols-3">
            {/* <Card className="h-[320px] md:col-span-2 lg:col-span-1">
              <CardHeader
                title="My Reads"
                description="Explore the books shaping my perspective"
              />
              <div className="w-40 mx-auto mt-2 md:mt-0">
                <Image src={BookImage} alt="Book Cover" className="" />
              </div>
            </Card> */}
            <Card className="h-[320px]  md:col-span-3 lg:col-span-3">
              <CardHeader
                title="My Tech-Stack"
                description="Explore the technologies and tools I am proficient in"
                classname=""
              />
              <ToolboxItems
                technologies={technologies}
                classname=""
                itemsWrapperClassname="animate-move-left [animation-duration:30s]  "
              />
              <ToolboxItems
                technologies={technologies}
                classname="mt-6"
                itemsWrapperClassname=" animate-move-right [animation-duration:30s]"
              />
            </Card>
          </div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-5 lg:grid-cols-3">
            <Card className="h-[320px] p-0 flex flex-col md:col-span-3 lg:col-span-2">
  <CardHeader
    title="Beyond the Code"
    description="Explore my interests and hobbies"
    classname="px-6 py-6"
  />

  <div className="relative flex-1" ref={constraintRef}>
    {hobbies.map((data, index) => (
      <motion.div
        key={index}
        className="inline-flex items-center gap-2 px-6 bg-gradient-to-r from-emerald-300 to-sky-400 rounded-full py-1.5 absolute cursor-pointer"
        style={{
          left: data.left,
          top: data.top,
        }}
        drag
        dragMomentum={false}
        dragConstraints={constraintRef}
      >
        <span className="font-medium text-gray-950">{data.title}</span>
        <span>{data.emoji}</span>
      </motion.div>
    ))}
  </div>
</Card>

            <Card className="h-[320px] p-0 relative md:col-span-2 lg:col-span-1">
              <Image
                src={MapImage}
                alt="Map"
                className="w-full h-full object-cover"
                priority
              />
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 size-20 rounded-full  after:contents-[''] after:absolute after:inset-0 after:outline after:outline-2 after:-outline-offset-2 after:rounded-full after:outline-gray-950/30">
                <div className="absolute inset-0 rounded-full bg-gradient-to-r from-emerald-300 to-sky-400 -z-20 animate-ping [animation-duration:2s] "></div>
                <div className="absolute inset-0 rounded-full bg-gradient-to-r from-emerald-300 to-sky-400 -z-10"></div>
                <Image
                  src={MemojiSmile}
                  alt="MemojiSmile"
                  className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 size-20"
                  priority
                />
              </div>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};
