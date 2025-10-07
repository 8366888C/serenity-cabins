"use client";

import Image from "next/image";
import Tilt from "./Tilt";
import { useState } from "react";

interface ImagesProps {
  cabin: {
    name: string;
    image_url: Array<string>;
  };
}

export default function Images({ cabin }: ImagesProps) {
  const [image, setImage] = useState(cabin.image_url[0]);

  return (
    <div className="select-none">
      <div className="mx-4 mt-10">
        <Tilt className="relative aspect-video rounded-2xl">
          <Image
            src={image}
            fill
            alt={image}
            className="rounded-2xl object-cover"
          />
        </Tilt>
      </div>
      <div className="mt-4 flex items-center justify-center space-x-3">
        {cabin.image_url.map((url: string) => (
          <button
            key={url}
            onClick={() => setImage(url)}
            className={`group relative aspect-square size-10 rounded-lg transition-all duration-100 ease-in-out outline-none hover:bg-none hover:ring-0 ${image === url ? "bg-none ring-2 ring-blue-300" : "bg-slate-800 ring-4 ring-slate-600"} active:size-[2.35rem]`}
          >
            <Image
              src={url}
              fill
              alt={`Cabin ${cabin.name}`}
              className={`rounded-lg object-cover opacity-30 group-hover:opacity-80 ${image === url ? "opacity-80" : ""} group-active:opacity-60`}
            />
          </button>
        ))}
      </div>
    </div>
  );
}
