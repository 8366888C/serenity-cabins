import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "reservations",
};

export default function Page() {
  return (
    <div>
      <h1 className="my-10 cursor-default text-center text-8xl font-extrabold text-slate-600 select-none">
        Reserve
      </h1>
      <div className="relative z-48 px-12">
        <h3 className="mb-8 text-center text-3xl font-bold text-blue-300 selection:text-blue-200">
          Your reservations
        </h3>
      </div>
      <div className="space-y-6 px-12 text-slate-400 selection:text-blue-200">
        <p>
          You have no reservation yet. Check out our{" "}
          <Link
            href="/cabins"
            className="dur ation-100 text-blue-200 transition-all ease-in-out hover:underline active:text-blue-100"
          >
            cabins →
          </Link>
        </p>
      </div>
    </div>
  );
}
