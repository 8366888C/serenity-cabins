import Link from "next/link";
import { LogIn } from "lucide-react";

export default function Navigation() {
  return (
    <ul className="flex items-center justify-center gap-4">
      <li className="rounded-full">
        <Link href="/cabins">
          <span className="text-header-pages/80 hover:text-header-pages/100 rounded-xl px-2 py-1 text-2xl font-light select-none">
            cabins
          </span>
        </Link>
      </li>
      <li>
        <Link href="/account">
          <LogIn className="stroke-header-pages-hover hover:bg-header-pages-hover hover:stroke-background size-10 rounded-xl px-1.5 py-1.5 transition-all duration-100 ease-in-out active:size-9.5"></LogIn>
        </Link>
      </li>
    </ul>
  );
}
