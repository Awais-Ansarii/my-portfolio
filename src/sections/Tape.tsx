import StarIcon from "@/assets/icons/star.svg";
const words = [
  "DSA",
  "Data Structures and Algorithms",
  "System Design",
  "Low-Level-Design (LLD)",
  "Frontend",
  "Backend",
  "Full Stack",
  "API Integration",
  "Payment Gateways Integration",
  "CMS & CRM Integration",
  "Performant Scalable Apps",
  "Web Sockets",
  "REST APIs",
  "GraphQL",
  "DBMS",
  "CI/CD",
  "AWS (EC2, S3, Lambda)",
  "Git",
  "Github",
  "Docker",
  "Kubernetes",
  "Jenkins",
  "Ngnix",
  "Reverse Proxy",
  "SSH",
  "PM2",
  "Linux"
  
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
          <div className="flex flex-none gap-4 py-3 pr-4 animate-move-left [animation-duration:30s]">
            {[...new Array(2)].fill(0).map((_, index) => {
              return words.map((word, index) => {
                return (
                  <div key={index} className="inline-flex gap-4 items-center">
                    <span className="text-gray-900 uppercase font-extrabold text-sm">
                      {word}
                    </span>
                    <StarIcon className="size-6 text-gray-900 -rotate-12" />
                  </div>
                );
              });
            })}
          </div>
        </div>
      </div>
    </div>
  );
};
