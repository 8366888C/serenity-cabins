import Image from "next/image";

export default function Logo() {
  return (
    <div className="flex gap-4">
      <Image
        src="/logo.png"
        alt="serenity-cabins logo"
        width={444}
        height={444}
        className="h-24 w-24 md:h-14 md:w-14"
      />
      <h1 className="font-petit cursor-default text-center text-[3rem] font-extrabold tracking-tighter text-slate-800 select-none sm:text-[4rem] md:text-[5rem] lg:text-[7rem] xl:text-[9rem] 2xl:text-[11rem]">
        <span className="transition-colors duration-100 ease-in-out hover:text-green-400">
          S
        </span>
        <span className="transition-colors duration-100 ease-in-out hover:text-green-400">
          e
        </span>
        <span className="transition-colors duration-100 ease-in-out hover:text-green-400">
          r
        </span>
        <span className="transition-colors duration-100 ease-in-out hover:text-green-400">
          e
        </span>
        <span className="transition-colors duration-100 ease-in-out hover:text-green-400">
          n
        </span>
        <span className="transition-colors duration-100 ease-in-out hover:text-green-400">
          i
        </span>
        <span className="transition-colors duration-100 ease-in-out hover:text-green-400">
          t
        </span>
        <span className="transition-colors duration-100 ease-in-out hover:text-green-400">
          y
        </span>
      </h1>
    </div>
  );
}
