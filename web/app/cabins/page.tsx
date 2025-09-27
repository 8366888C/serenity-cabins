import { Metadata } from "next";
import Cabin from "@/components/Cabin";
import { getCabins } from "@/services/supabase-api";

export const metadata: Metadata = {
  title: "Cabins",
};

export default async function Page() {
  const cabins = await getCabins();
  return (
    <div>
      <h1 className="my-10 cursor-default text-center text-8xl font-extrabold text-slate-600 select-none">
        Cabins
      </h1>
      {cabins.length > 0 && (
        <div className="grid gap-20 px-12 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 lg:gap-12 2xl:grid-cols-4 2xl:gap-14">
          {cabins.map((cabin) => (
            <Cabin cabin={cabin} key={cabin.name} />
          ))}
        </div>
      )}
    </div>
  );
}
