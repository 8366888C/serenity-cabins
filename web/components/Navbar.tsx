import Link from "next/link";
import { LogIn } from "lucide-react";

export default function Navigation() {
  return (
    <ul className="flex items-center justify-center gap-2">
      <li className="rounded-full">
        <Link href="/cabins">
          <span className="rounded-xl px-2 py-1 text-lg font-light text-slate-300 select-none hover:text-slate-100">
            cabins
          </span>
        </Link>
      </li>
      <li>
        <Link href="/account">
          <LogIn className="size-8 rounded-xl stroke-blue-400 px-1.5 py-1.5 transition-colors duration-100 ease-in-out hover:bg-blue-400 hover:stroke-slate-800 active:stroke-slate-200"></LogIn>
        </Link>
      </li>
    </ul>
  );
}
