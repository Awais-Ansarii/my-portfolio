
import SectionHeader from "@/components/SectionHeader";
import Image from "next/image";

import Card from "@/components/Card";
import { Fragment } from "react";
import Link from "next/link";
import { MoveUpRight } from "lucide-react";
const testimonials = [
 {
  name: "Namaste React Live Course by Akshay Saini",
  platform: "Namaste Dev",
  certificateUrl:"https://s3-ap-southeast-1.amazonaws.com/learnyst/schools/148878/certificates/142240/8046034_142240.pdf?1683865560",
  platformUrl:"https://namastedev.com/",
  description: "A hands-on advanced React training focused on deep internals like Fiber architecture, custom hooks, and performance optimization."
},
 {
  name: "Low-Level Design (LLD) by Keerti Purswani",
  platform: "Educosys",
  certificateUrl:"https://generateinvoice.teachx.in/generatecertificate/certificate/keertipurswani_db/16027/25318/8",
  platformUrl:"https://www.educosys.com",
  description: "Learnt to design clean, modular, object-oriented systems using UML, design principles, and essential design patterns"
},
{
  name: "Full Stack Development with React.js & Node.js Live",
  platform: "GeeksforGeeks",
  certificateUrl:"https://media.geeksforgeeks.org/courses/certificates/99f99c85c701ebaf3c4ef119ad49de14.pdf",
  platformUrl:"https://www.geeksforgeeks.org/",
  description: "Practical full-stack training covering REST APIs, authentication, deployment workflows, and building scalable web applications."
},
{
  name: "Advance React",
  platform: "Coding Ninjas",
  certificateUrl:"https://certificate.codingninjas.com/view/38657912a8ab7f14",
  platformUrl:"https://www.codingninjas.com/",
  description: "Advanced concepts in React including routing, context API, component patterns, and performance-driven UI development."
},
{
  name: "Back End — Full Stack Web Development in Node.js",
  platform: "Coding Ninjas",
  certificateUrl:"https://certificate.codingninjas.com/view/ae894c7e869bf212",
  platformUrl:"https://www.codingninjas.com/",
  description: "Backend specialization in Node.js with Express.js, MongoDB, authentication workflows, and API development using MVC architecture."
}

];

export const TestimonialsSection = () => {
  return (
    <div id={"certification"} className="py-16 lg:py-24">
      <div className="container">
        <SectionHeader
          title={"Certifications"}
          eyebrow={"Industry-Recognized Certifications"}
          description={`I believe in continuous learning. Here are some certifications I’ve earned to strengthen my skills in full-stack web development and modern engineering practices.`}
        />

        <div
          className="mt-12 lg:mt-20 flex overflow-x-clip py-4 -my-4"
          style={{
            maskImage:
              "linear-gradient(to right, transparent, rgba(0, 0, 0, 0.9), rgba(0, 0, 0, 0.9), transparent)",
          }}
          
        >
          <div className="flex flex-none gap-8 pr-8 animate-move-left [animation-duration:40s] hover:[animation-play-state:paused] ">
            {[...new Array(2)].fill(0).map((_, index) => { 
              return (
                <Fragment key={index}>
                  {testimonials.map((testimonial, index) => {
                    return (
                      <Card
                        key={index}
                        className=" max-w-xs md:max-w-[460px] p-6 md:p-8 hover:rotate-3 transition duraation-300 "
                      >
                        <div className="flex  items-center gap-4">
                         

                          <div className="flex flex-col items-start gap-y-2">
                            <Link href={testimonial.certificateUrl}
                              target="_blank"
                              className="font-semibold flex flex-row items-start gap-x-1 hover:text-emerald-300 text-sky-400">
                              <span>{testimonial.name}</span>
                              <MoveUpRight size={19} className="pt-1 cursor-pointer hover:text-emerald-300 text-sky-400"  />
                              
                            </Link>

                            <Link href={testimonial.platformUrl}
                              target="_blank" className="flex flex-row items-start gap-x-1  text-white/40 hover:text-white/80 text-sm ">
                              <span>
                               {" Plateform: "}
                              {testimonial.platform}

                              </span>

                              <MoveUpRight size={19} className="pt-1 cursor-pointer text-white/40 hover:text-white/80"  />
                            </Link>
                            



                          </div>
                        </div>

                        <p className="mt-4 md:mt-6 text-sm md:text-base ">
                          {testimonial.description}
                        </p>

                         <Link href={testimonial.certificateUrl}
                              target="_blank"
                              className="mt-4 md:mt-6 text-sm md:text-base  font-semibold flex flex-row items-start gap-x-1 hover:text-emerald-300 text-white/60 border border-white rounded-[24px] px-4 py-2 w-fit hover:border-emerald-300">
                              View Certificate
                              
                            </Link>
                      </Card>
                    );
                  })}
                </Fragment>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};
