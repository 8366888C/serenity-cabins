import { Metadata } from "next";
import Cabins from "@/components/Cabins";

export const metadata: Metadata = {
  title: "Cabins",
};

export default function Page() {
  return (
    <div className="pb-12">
      <h1 className="my-10 cursor-default text-center text-8xl font-extrabold text-slate-600 select-none">
        Cabins
      </h1>
      <Cabins />
    </div>
  );
}
