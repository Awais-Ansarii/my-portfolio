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

import MapImage2 from "@/assets/images/map2.jpg";
import MemojiSmile from "@/assets/images/memoji-smile.png";
import CardHeader from "@/components/CardHeader";
import ToolboxItems from "@/components/ToolboxItems";
import { useRef } from "react";

const technologies = [
  { title: "React", iconType: ReactIcon },
  { title: "Javascript", iconType: JavascriptIcon },
  { title: "Node.Js", iconType: ReactIcon },
  { title: "Next.Js", iconType: JavascriptIcon },
];

const hobbies = [
  { title: "Reading", emoji: "📚", left: "5%", top: "5%" },
  { title: "Workout", emoji: "🏋", left: "50%", top: "5%" },
  { title: "Dance", emoji: "💃🏻", left: "35%", top: "40%" },
  { title: "Music", emoji: "🎷", left: "10%", top: "35%" },
  { title: "Paiting", emoji: "🎨", left: "70%", top: "45%" },
  { title: "Hangout", emoji: "🥳", left: "45%", top: "70%" },
];

export const AboutSection = () => {
  const constraintRef = useRef<HTMLDivElement | null>(null);
  const hobbyRefs = useRef<(HTMLDivElement | null)[]>([]);

  const handleDragEnd = (index: number) => {
    const dragged = hobbyRefs.current[index];
    if (!dragged) return;

    const draggedRect = dragged.getBoundingClientRect();

    hobbyRefs.current.forEach((other, i) => {
      if (i === index || !other) return;

      const otherRect = other.getBoundingClientRect();

      const overlap =
        !(
          draggedRect.right < otherRect.left ||
          draggedRect.left > otherRect.right ||
          draggedRect.bottom < otherRect.top ||
          draggedRect.top > otherRect.bottom
        );

      if (overlap) {
        // Slide 40px to the right
        const newLeft = dragged.offsetLeft + 40;
        dragged.style.left = `${newLeft}px`;
      }
    });
  };

  return (
    <div id={"about"} className="py-20 lg:py-28">
      <div id={"skill"} className="container">
        <SectionHeader
          title={"About Me"}
          eyebrow={"A Glimpse into my world"}
          description={"Learn more about me and my journey."}
        />

        <div className="mt-20 flex flex-col gap-6">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-5 lg:grid-cols-3">
            <Card className="h-[320px] md:col-span-3 lg:col-span-3">
              <CardHeader
                title="Skills & Tech-Stack"
                description="Explore the skills, technologies and tools I am proficient in"
              />
              <ToolboxItems
                technologies={technologies}
                itemsWrapperClassname="animate-move-left [animation-duration:30s]"
              />
              <ToolboxItems
                technologies={technologies}
                classname="mt-6"
                itemsWrapperClassname="animate-move-right [animation-duration:30s]"
              />
            </Card>
          </div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-5 lg:grid-cols-3">
            {/* ---- 🎨 Hobbies Card (Updated Fully) ---- */}
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
  ref={(el) => {
    hobbyRefs.current[index] = el;
  }}
  className="inline-flex items-center gap-2 px-6 bg-gradient-to-r from-emerald-300 to-sky-400 rounded-full py-1.5 absolute 
             cursor-grab active:cursor-grabbing"
  style={{
    left: data.left,
    top: data.top,
  }}
  drag
  dragMomentum={false}
  dragConstraints={constraintRef}
  onDragEnd={() => handleDragEnd(index)}
>
                    <span className="font-medium text-gray-950">
                      {data.title}
                    </span>
                    <span>{data.emoji}</span>
                  </motion.div>
                ))}
              </div>
            </Card>

            {/* ---- Map Card ---- */}
            <Card className="h-[320px] p-0 relative md:col-span-2 lg:col-span-1">
              <Image
                src={MapImage2  }
                alt="Map"
                className="w-full h-full object-cover"
                priority
              />
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 size-20 rounded-full">
                <div className="absolute inset-0 rounded-full bg-gradient-to-r from-emerald-300 to-sky-400 -z-20 animate-ping [animation-duration:2s]" />
                <div className="absolute inset-0 rounded-full bg-gradient-to-r from-emerald-300 to-sky-400 -z-10" />
                <Image
                  src={MemojiSmile}
                  alt="Memoji"
                  className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 size-20"
                />
              </div>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};
