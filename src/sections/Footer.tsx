


export const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="relative overflow-x-clip">
      <div
        className="absolute h-[400px]  w-[1600px] bottom-0 left-1/2 -translate-x-1/2 bg-emerald-300/30 
        [mask-image:radial-gradient(50%_50%_at_bottom_center,black,transparent)] -z-10"
      ></div>
      <div className="container">
        <div className="border-t border-white/15 py-6 text-sm flex flex-col md:flex-row md:justify-between items-center gap-8">
          <p className="text-white/75 !text-center w-full" >&copy; {currentYear}. All rights reserved.</p>
          
        </div>
      </div>
    </footer>
  );
};
