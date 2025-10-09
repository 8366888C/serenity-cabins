import Link from "next/link";

export default function NotFound() {
  return (
    <main className="mt-20 flex flex-col items-center justify-center gap-6">
      <h1 className="text-3xl font-semibold text-slate-300">
        Page could not be found :(
      </h1>
      <Link
        href="/"
        className="text-blue-200 transition-all duration-100 ease-in-out hover:underline active:text-blue-100"
      >
        Go back home →
      </Link>
    </main>
  );
}
