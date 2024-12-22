import StarIcon from "@/assets/icons/star.svg";
const words = [
  "Performant",
  "User Friendly",
  "Scalable",
  "Secure",
  "Reliable",
  "Performant",
  "User Friendly",
  "Scalable",
  "Secure",
  "Reliable",
  "Secure",
  "Reliable",
];

export const TapeSection = () => {
  return (
    <div className="py-16 lg:py-24 overflow-x-clip">
      <div className="bg-gradient-to-r from-emerald-300 to-sky-400 -rotate-3 -mx-1 ">
        <div
          className="flex "
          // style={{
          //   maskImage:
          //     "linear-gradient(to right, transparent, rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.9), transparent)",
          //   WebkitMaskImage:
          //     "linear-gradient(to right, transparent, rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.9), transparent)",
          // }}
        >
          <div className="flex flex-none gap-4 py-3">
            {words.map((word, index) => {
              return (
                <div key={index} className="inline-flex gap-4 items-center">
                  <span className="text-gray-900 uppercase font-extrabold text-sm">
                    {word}
                  </span>
                  <StarIcon className="size-6 text-gray-900 -rotate-12" />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};
