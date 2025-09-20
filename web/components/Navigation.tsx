import Link from "next/link";
import { LogIn } from "lucide-react";

export default function Navigation() {
  return (
    <ul className="flex items-center justify-end gap-15">
      <li>
        <Link href="/cabins">
          <span className="outline-ring rounded-2xl bg-green-300 px-4 py-2 text-lg text-slate-800 outline-green-400 hover:text-slate-800">
            cabins
          </span>
        </Link>
      </li>
      <li>
        <Link href="/account"></Link>
        <LogIn className="size-6 bg-green-300"></LogIn>
      </li>
    </ul>
  );
}
