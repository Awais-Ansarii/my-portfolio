import SectionHeader from "@/components/SectionHeader";
import Card from "@/components/Card";
import StarIcon from "@/assets/icons/star.svg";
import BookImage from "@/assets/images/book-cover.png";
import Image from "next/image";
import JavascriptIcon from "@/assets/icons/square-js.svg";
import ReactIcon from "@/assets/icons/react.svg";
import TechIcon from "@/components/TechIcon";
import MapImage from "@/assets/images/map.png";
import MemojiSmile from "@/assets/images/memoji-smile.png";
import CardHeader from "@/components/CardHeader";
import ToolboxItems from "@/components/ToolboxItems";
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
  },
  {
    title: "Music",
    emoji: "🎷",
  },
  {
    title: "Paiting",
    emoji: "🎨",
  },
  {
    title: "Music",
    emoji: "🎷",
  },
  {
    title: "Paiting",
    emoji: "🎨",
  },
  {
    title: "Music",
    emoji: "🎷",
  },
];
export const AboutSection = () => {
  return (
    <div className="py-20 ">
      <div className="container">
        <SectionHeader
          title={"About Me"}
          eyebrow={"A Glimpse into my world"}
          description={"Learn more about me and my journey."}
        />
        <div className="mt-20 flex flex-col gap-8">
          <Card className="h-[320px]">
            <CardHeader
              title="My Reads"
              description="Explore the books shaping my perspective"
            />
            <div className="w-40 mx-auto mt-8">
              <Image src={BookImage} alt="Book Cover" className="" />
            </div>
          </Card>
          <Card className="h-[320px] p-0">
            <CardHeader
              title="My Tech-Stack"
              description="Explore the technologies and tools I am proficient in"
              classname="px-6 pt-6"
            />
            <ToolboxItems technologies={technologies} classname="mt-6" />
            <ToolboxItems
              technologies={technologies}
              classname="mt-6"
              itemsWrapperClassname="-translate-x-1/2"
            />
          </Card>
          <Card>
            <CardHeader
              title="Beyond the Code"
              description="Explore my interests and hobbies"
            />
            <div>
              {hobbies.map((data, index) => {
                return (
                  <div className="" key={index}>
                    <span>{data.title}</span>
                    <span>{data.emoji}</span>
                  </div>
                );
              })}
            </div>
          </Card>
          <Card>
            <Image src={MapImage} alt="Map" className="" priority />
            <Image src={MemojiSmile} alt="MemojiSmile" className="" priority />
          </Card>
        </div>
      </div>
    </div>
  );
};
