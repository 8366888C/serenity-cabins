import { ReactNode } from "react";
import TiltImage from "./TiltImage";
import { StaticImageData } from "next/image";

interface AboutProps {
  heading: string;
  content: ReactNode;
  image: StaticImageData;
}

export default function About1({ heading, content, image }: AboutProps) {
  return (
    <div className="pb-20">
      <div className="px-12">
        <h1 className="mb-8 text-center text-3xl font-bold text-blue-300 selection:text-blue-200">
          {heading}
        </h1>
        <div className="flex flex-wrap md:flex-nowrap">
          <div className="space-y-6 pb-10 text-slate-400 selection:text-blue-100">
            {content}
          </div>
          <TiltImage
            src={image}
            alt="Family sitting around a fire pit in front of cabin"
            className="rounded-4xl shadow-2xl shadow-slate-800 select-none"
          />
        </div>
      </div>
    </div>
  );
}
