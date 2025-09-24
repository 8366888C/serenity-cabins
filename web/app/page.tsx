import Image from "next/image";
import Link from "next/link";
import bg from "@/public/bg.png";

export default function Page() {
  return (
    <div>
      <Image
        src={bg}
        placeholder="blur"
        fill
        quality={100}
        className="object-cover object-top select-none"
        alt="Lakeside cabin in a forest surrounded by mountains"
      />
      <div className="relative top-78 z-1 flex flex-col items-center gap-92">
        <h1 className="text-4xl font-bold tracking-wide text-slate-300">
          Welcome to paradise.
        </h1>
        <Link
          href="/cabins"
          className="px-6 py-3 text-lg font-light text-slate-200 outline-2 outline-blue-400 transition-all duration-100 ease-in-out hover:bg-blue-400 hover:shadow-2xl hover:shadow-blue-400 hover:outline-none active:text-[1.05rem]"
        >
          Explore luxury cabins
        </Link>
      </div>
    </div>
  );
}
