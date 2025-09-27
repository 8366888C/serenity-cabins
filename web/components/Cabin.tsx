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
    <div className="space-y-4 rounded-xl bg-slate-800/30 p-6 shadow-slate-800 transition-all duration-100 ease-in-out">
      <Tilt className="relative overflow-hidden rounded-2xl bg-slate-800">
        <Link href={`/cabins/${cabin.name}`} className="group relative">
          <Image
            src={cabin.image_url}
            height={1000}
            width={1000}
            alt={`${cabin.name} photo`}
            className="rounded-2xl transition duration-100 ease-in-out group-hover:opacity-50"
          />
          <h3 className="absolute inset-0 flex items-center justify-center text-6xl font-bold text-blue-200 opacity-0 transition duration-100 ease-in-out group-hover:opacity-100">
            {cabin.name}
          </h3>
        </Link>
      </Tilt>
      <div>
        <p className="text-slate-400 selection:text-blue-100">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sunt culpa
          porro natus? Similique aspernatur deserunt consequatur sit iure. Et
          vel optio praesentium ad a omnis reprehenderit iste ipsam numquam
          maiores.
        </p>
      </div>
    </div>
  );
}
