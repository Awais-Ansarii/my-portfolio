import TechIcon from "@/components/TechIcon";
import { twMerge } from "tailwind-merge";

const ToolboxItems = ({
  technologies,
  classname,
  itemsWrapperClassname,
}: {
  technologies: {
    title: string;
    iconType: React.ElementType;
  }[];
  classname?: string;
  itemsWrapperClassname?: string;
}) => {
  return (
    <div
      className={twMerge("flex", classname)}
      style={{
        maskImage:
          "linear-gradient(to bottom, transparent, rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.7), transparent)",
        WebkitMaskImage:
          "linear-gradient(to bottom, transparent, rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.7), transparent)",
      }}
    >
      <div className={twMerge("flex flex-none py-0.5 gap-6 pr-6", itemsWrapperClassname)}>
        {technologies.map((data, index) => {
          return (
            <div
              className="inline-flex items-center gap-2 px-3 py-2 outline outline-2 outline-white/60 rounded-lg "
              key={index}
            >
              <TechIcon component={data.iconType} />
              <span className="font-semibold">{data.title}</span>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ToolboxItems;
