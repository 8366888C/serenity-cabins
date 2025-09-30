import Link from "next/link";

export default function Logo() {
  return (
    <Link href="/about">
      <h1 className="font-petit px-3 text-center text-lg font-extrabold tracking-tighter text-slate-100 select-none">
        <span className="transition-colors duration-100 ease-in-out hover:text-blue-400">
          S
        </span>
        <span className="transition-colors duration-100 ease-in-out hover:text-blue-400">
          e
        </span>
        <span className="transition-colors duration-100 ease-in-out hover:text-blue-400">
          r
        </span>
        <span className="transition-colors duration-100 ease-in-out hover:text-blue-400">
          e
        </span>
        <span className="transition-colors duration-100 ease-in-out hover:text-blue-400">
          n
        </span>
        <span className="transition-colors duration-100 ease-in-out hover:text-blue-400">
          i
        </span>
        <span className="transition-colors duration-100 ease-in-out hover:text-blue-400">
          t
        </span>
        <span className="transition-colors duration-100 ease-in-out hover:text-blue-400">
          y
        </span>
      </h1>
    </Link>
  );
}
