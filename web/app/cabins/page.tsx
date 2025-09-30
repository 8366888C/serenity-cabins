import { Metadata } from "next";
import Cabins from "@/components/Cabins";
import { Suspense } from "react";
import { Loader } from "lucide-react";

export const metadata: Metadata = {
  title: "Cabins",
};

export default function Page() {
  return (
    <div className="pb-12">
      <h1 className="my-10 cursor-default text-center text-8xl font-extrabold text-slate-600 select-none">
        Cabins
      </h1>
      <Suspense
        fallback={
          <Loader className="mx-auto size-20 animate-spin stroke-blue-300"></Loader>
        }
      >
        <Cabins />
      </Suspense>
    </div>
  );
}
