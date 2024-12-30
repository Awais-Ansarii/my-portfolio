import StarIcon from "@/assets/icons/star.svg";
import { twMerge } from "tailwind-merge";

const CardHeader = ({title, description, classname}: {
  title: string;
  description: string;
  classname?: string;
}) => {
  return (
    <div className={twMerge("flex flex-col", classname)}>
      <div className="inline-flex items-center gap-2">
        <StarIcon className="size-9 text-emerald-300" />
        <h2 className="font-serif text-3xl">{title}</h2>
      </div>
      <p className="text-sm text-white/60 mt-2">
        {description}
      </p>
    </div>
  );
};

export default CardHeader;