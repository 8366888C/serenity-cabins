import Image from "next/image";
import Tilt from "./Tilt";
import Link from "next/link";

interface Cabin {
  id: number;
  name: string;
  max_capacity: number;
  regular_price: number;
  discount: number;
  description: string;
  image_url: string;
}

export default function Cabin({ cabin }: { cabin: Cabin }) {
  return (
    <div className="space-y-2 rounded-2xl bg-slate-800/20 p-2 shadow-slate-800 transition-all duration-100 ease-in-out">
      <Tilt className="relative aspect-video rounded-2xl bg-slate-800">
        <Link href={`/cabins/${cabin.name}`} className="group">
          <Image
            src={cabin.image_url[0]}
            fill
            alt={`${cabin.name} photo`}
            className="rounded-2xl object-cover transition duration-100 ease-in-out group-hover:opacity-50"
          />
          <h3 className="absolute inset-0 flex items-center justify-center text-6xl font-bold text-blue-200 opacity-0 transition duration-100 ease-in-out group-hover:opacity-100">
            {cabin.name}
          </h3>
        </Link>
      </Tilt>
      <div className="space-y-0 p-4">
        <div className="flex items-center justify-between">
          <p className="cursor-default text-slate-300 select-none selection:text-blue-100 hover:text-blue-300">
            {`Capacity: ${cabin.max_capacity}`}
          </p>
          <p className="cursor-default text-slate-300 select-none selection:text-blue-100 hover:text-blue-300">
            {`Price: $${cabin.regular_price}`}
          </p>
        </div>
      </div>
    </div>
  );
}
