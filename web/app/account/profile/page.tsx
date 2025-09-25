import { Metadata } from "next";

export const metadata: Metadata = {
  title: "profile",
};

export default function Page() {
  return (
    <div>
      <h1 className="my-10 cursor-default text-center text-8xl font-extrabold text-slate-600 select-none">
        Profile
      </h1>
      <div className="relative z-48 px-12">
        <h3 className="mb-8 text-center text-3xl font-bold text-blue-300 selection:text-blue-200">
          Welcome, Joe
        </h3>
      </div>
    </div>
  );
}
