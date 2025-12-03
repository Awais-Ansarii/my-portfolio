const SectionHeader = ({
  title,
  eyebrow,
  description,
}: {
  title: string;
  eyebrow: string;
  description: string;
}) => {
  return (
    <>
      <div className="flex  flex-col items-center gap-4 justify-center  w-full  mx-auto">
        <p className="uppercase  font-semibold tracking-widest bg-gradient-to-r from-emerald-300 to-sky-400 text-transparent bg-clip-text text-center">
          {title}
        </p>
      </div>
      <h2 className="text-center text-3xl md:text-5xl font-serif mt-6">
        {eyebrow}
      </h2>
      <p className="text-center text-white/60 mt-4 md:text-lg lg:text-xl md:max-w-md md:mx-auto">
        {description}
      </p>
    </>
  );
};

export default SectionHeader;
